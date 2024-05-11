import React from 'react'
import { getOneProduct } from '@/app/dataRepository/queryFunc'
import OrderForm from '@/app/ui/orderForm'

const page = async ({ params }) => {
    const product = await getOneProduct(params?.slug);
    console.log(product);
    return (
        <div className='checkout-page'>
            <div className='login-form-card'>
                <h1 className="login-header">Checkout</h1>
                <div className="checkout-card" id="product-container">
                    <div className="product">
                        <img className="product-image" src={product?.imageUrl} alt="Basic" /></div> <div className="checkout-text"><h1 className="margin-tb">{product?.name}</h1>
                        <OrderForm product={product} /></div></div>
            </div></div>
    )
}

export default page