import React from 'react'
import "@/app/styles.css";
import { getOneProduct } from '@/app/dataRepository/queryFunc'
import SingleProduct from '@/app/ui/singleProduct'

const page = async ({ params }) => {
    const product = await getOneProduct(params?.slug);
    return (
        <SingleProduct product={product}/>
    )
}

export default page