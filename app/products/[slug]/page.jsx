import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUserProducts } from '@/app/dataRepository/queryFunc'

const page = async ({ params }) => {
    const products = await getUserProducts(Number(params.slug));
    return (<>
    <h1 className='login-header'>My Products</h1>
        <Link className="add-button" href={"/createproduct"}>Add new Products</Link>
        <section className="product-container" id="product-container">
            {products?.map((product, i) => (
                <Link className="product" href={`/product/${product?.id}`} key={i}>
                    <Image
                        width={400}
                        height={400}
                        className="product-image"
                        src={product?.imageUrl}
                        alt="Tom &amp; Jarry T-Shirt"
                    />
                    <h1 class="product-name">{product?.name}</h1>
                    <p class="product-price">{product?.stock}</p>
                </Link>
            ))}
        </section>
    </>)
}

export default page