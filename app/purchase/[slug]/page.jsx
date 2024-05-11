import React from 'react'
import { getOneProduct } from '@/app/dataRepository/queryFunc'

const page = async ({ params }) => {
    const product = await getOneProduct(params?.slug);
    console.log(product);
    return (
        <div className='checkout-page'>
            <div className='login-form-card'>
                <h1 className="login-header">Checkout</h1>
                <div className="checkout-card" id="product-container">
                    <div className="product">
                        <img className="product-image" src={product?.imageUrl} alt="Basic" /></div> <div className="checkout-text"><h1 className="margin-tb">{product?.name}</h1><form id="checkoutform"><div className="input-container"><label for="address">House No/Lane No</label><input className="checkout-input" type="text" id="address" required="" /> </div>
                            <div className="input-container"><label for="city">City</label><input className="checkout-input" type="text" id="city" required="" /> </div>
                            <div className="input-container"><label for="state">Product ID</label><input className="checkout-input" type="text" id="state" required="" value={product?.id} disabled /> </div>
                            {/* <div className="input-container"><label for="pincode">Pincode</label><input className="checkout-input" type="text" id="pincode" required="" /> </div> */}
                            <div className="input-container"><label for="quantity">Quantity</label><input className="checkout-input" type="number" name="quantity" min="1" max="99" id="quantity" /></div>

                            <p className="margin-tb fw-bold">Price: ${product?.price}</p><hr className="margin-tb" /> <p className="margin-tb fw-bold" id="total">Total: ${product?.price}</p><button className="login-button w-full" id="checkout-button">Checkout</button></form></div></div>
            </div></div>
    )
}

export default page