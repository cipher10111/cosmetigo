# cosmetigo

## Setup

### For postgresql setup
> 1. download and install postgresql
> 2. for linux **sudo -u postres psql** and for windows login with credentials
> 3. CREATE DATABASE <DB_NAME>;
> 4. CREATE USER <username> WITH PASSWORD '<password>';
> 5. ALTER ROLE <username> SET client_encoding TO 'utf8';
> 6. ALTER ROLE <username> SET default_transaction_isolation TO 'read committed';
> 7. ALTER ROLE <username> SET timezone TO 'UTC';
> 8. GRANT ALL PRIVILEGES ON DATABASE <DB_NAME> TO <username>;
### Make sure you have already installed **python3** and **pip3**
> 1. install virtualenv using **pip install virtualenv** 
> 2. git clone https://github.com/cipher10111/cosmetigo.git
> 3. cd cosmetigo
> 4. for linux or bash shell **python3 -m venv ./venv** and for windows **virtualenv venv**
> 5. for linux **source venv/bin/activate** and for windows **venv\Scripts\activate.bat**
> 6. pip install -r requirements.txt 
> 7. python manage.py runserver
> 8. cd frontend
> 9. npm i
>10. npm run dev

### Replace fields in settings.py
<pre>
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '&lt;DB_NAME&gt;',
        'USER': '&lt;username&gt;',
        'PASSWORD': '&lt;password&gt;',
        'HOST': 'localhost',
        'PORT': ''
    }
}
</pre>