"use client"
import React from 'react'

const OrderForm = ({ product }) => {
    return (
        <form id="checkoutform" onSubmit={(e) => {
            e.preventDefault()
            // loginFunc(e.target[0].value, e.target[1].value)
            console.log(e);
        }}>
            <div className="input-container"><label for="address">House No/Lane No</label><input className="checkout-input" type="text" id="address" required="" /> </div>
            <div className="input-container"><label for="city">City</label><input className="checkout-input" type="text" id="city" required="" /> </div>
            <div className="input-container"><label for="state">Product ID</label><input className="checkout-input" type="text" id="state" required="" value={product?.id} disabled /> </div>
            {/* <div className="input-container"><label for="pincode">Pincode</label><input className="checkout-input" type="text" id="pincode" required="" /> </div> */}
            <div className="input-container"><label for="quantity">Quantity</label><input className="checkout-input" type="number" name="quantity" min="1" max="99" id="quantity" /></div>

            <p className="margin-tb fw-bold">Price: ${product?.price}</p><hr className="margin-tb" /> <p className="margin-tb fw-bold" id="total">Total: ${product?.price}</p><button className="login-button w-full" id="checkout-button" type='submit'>Checkout</button></form>
    )
}

export default OrderForm