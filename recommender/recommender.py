import os
import numpy as np
import pickle as pk
import tensorflow as tf
# from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from sklearn.neighbors import NearestNeighbors
from numpy.linalg import norm
from PIL import Image
from urllib import request
from io import BytesIO

features_list = pk.load(open(os.path.join(os.path.dirname(__file__), 'pkl/features.pkl'), 'rb'))
id = pk.load(open(os.path.join(os.path.dirname(__file__), 'pkl/id.pkl'), 'rb'))
links = pk.load(open(os.path.join(os.path.dirname(__file__), 'pkl/links.pkl'), 'rb'))


def loadImage(url):
    res = request.urlopen(url).read()
    img = Image.open(BytesIO(res)).resize((224, 224))
    return img


def getModel():
    model = ResNet50(weights='imagenet', include_top=False,
                 input_shape=(224, 224, 3))
    model.trainable = False
    model = tf.keras.Sequential([
        model,
        GlobalMaxPooling2D()
    ])
    return model


def feature_extraction(img_array, model):
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expanded_img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)

    return normalized_result


def recommend(number, feature, features_list):
    neighbors = NearestNeighbors(
        n_neighbors=number+1, algorithm='brute', metric='euclidean')
    neighbors.fit(features_list)
    distances, indices = neighbors.kneighbors([feature])

    recommendations = []
    for i in range(1, len(indices[0])):
        recommendations.append({
            'id': id[indices[0][i]],
            'links': links[indices[0][i]]
        })

    return indices, distances, recommendations


def getRecommendations(link, product_count):
    a = os.path.join(os.path.dirname(__file__))
    print(a)
    img = loadImage(link)
    model = getModel()
    extracted_features = feature_extraction(img, model)
    return recommend(product_count, extracted_features, features_list)

