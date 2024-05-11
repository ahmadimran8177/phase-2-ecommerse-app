"use client"
import React from 'react'
import { createOrderFunc } from '@/app/lib/createOrder'
const OrderForm = ({ product, userId }) => {
    return (
        <form id="checkoutform" onSubmit={(e) => {
            const productId = product?.id;
            const quantity = e.target[3].value;
            e.preventDefault()
            createOrderFunc(productId, userId, quantity, product?.price);
        }}>
            <div className="input-container"><label for="address">House No/Lane No</label><input className="checkout-input" type="text" id="address" required /> </div>
            <div className="input-container"><label for="city">City</label><input className="checkout-input" type="text" id="city" required /> </div>
            <div className="input-container"><label for="state">Product ID</label><input className="checkout-input" type="text" id="state" required value={product?.id} disabled /> </div>
            {/* <div className="input-container"><label for="pincode">Pincode</label><input className="checkout-input" type="text" id="pincode" required="" /> </div> */}
            <div className="input-container"><label for="quantity">Quantity</label><input className="checkout-input" type="number" name="quantity" min="1" max="99" id="quantity" required /></div>

            <p className="margin-tb fw-bold">Price: ${product?.price}</p><hr className="margin-tb" /> <p className="margin-tb fw-bold" id="total">Total: ${product?.price}</p><button className="login-button w-full" id="checkout-button" type='submit'>Checkout</button></form>
    )
}

export default OrderForm