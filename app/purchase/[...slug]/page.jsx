import React from 'react'
import { getOneProduct } from '@/app/dataRepository/queryFunc'
import OrderForm from '@/app/ui/orderForm'

const page = async ({ params }) => {
    const productID = Number(params?.slug[0]);
    const userID = Number(params?.slug[1]);
    const product = await getOneProduct(productID);

    return (
        <div className='checkout-page'>
            <div className='login-form-card'>
                <h1 className="login-header">Checkout</h1>
                <div className="checkout-card" id="product-container">
                    <div className="product">
                        <img className="product-image" src={product?.imageUrl} alt="Basic" /></div> <div className="checkout-text"><h1 className="margin-tb">{product?.name}</h1>
                        <OrderForm product={product} userId={userID} /></div></div>
            </div></div>
    )
}

export default page