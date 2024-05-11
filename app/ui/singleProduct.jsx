"use client"
import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();
    const { cartItem } = useSelector((state) => state.cart);
    return (
        <main id="product-container" className='product-detail-section'>
            <div className="product-detail-image-container">
                <Image src={product?.imageUrl} alt="Tom" width={500} height={500} />
            </div>
            <div className="product-detail-text">
                <h1 className="product-detail-name">{product?.name}</h1>
                <p className="product-detail-description">{product?.description}</p>
                <p className="product-detail-price">{product?.stock}</p>
                {cartItem[1] === "customer" && <Link href={`/purchase/${product?.id}/${cartItem[0]}`}>Buy Now</Link>}
            </div>
        </main>
    )
}

export default SingleProduct