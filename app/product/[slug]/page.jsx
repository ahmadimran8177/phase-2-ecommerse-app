import React from 'react'
import "@/app/styles.css";
import { getOneProduct } from '@/app/dataRepository/queryFunc'
import Image from 'next/image'

const page = async ({ params }) => {
    const product = await getOneProduct(params?.slug);
    return (
        <main id="product-container" className='product-detail-section'>
            <div className="product-detail-image-container">
                <Image src={product?.imageUrl} alt="Tom" width={500} height={500}/>
            </div> <div className="product-detail-text">
                <h1 className="product-detail-name">{product?.name}</h1>
                <p className="product-detail-description">{product?.description}</p><p className="product-detail-price">{product?.stock}</p></div></main>
    )
}

export default page