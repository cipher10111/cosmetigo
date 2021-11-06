import React from 'react'
import ListOrderItem from '../components/CartPage/ListOrderItem'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function CartPage() {
  return (
    <div>
      <Navbar />
      <ListOrderItem />
      <Footer />
    </div>
  )
}
