import React from 'react'
import { getAllOrders } from '@/app/dataRepository/queryFunc'

const page = async ({ params }) => {
    const orders = await getAllOrders(Number(params.slug))
    return (
        <div className='table-section'>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {orders?.map((order, i) => (
                        <tr key={i}>
                            <td>{order?.userId}</td>
                            <td>{order?.productId}</td>
                            <td>{order?.quantity}</td>
                            <td>{order?.price}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default page