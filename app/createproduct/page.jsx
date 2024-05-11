import React from 'react'
import ProductForm from '@/app/ui/ProductForm'

const page = () => {
    return (
        <div classNameName='login-page'>
            <div className="login-form-card">
                <h1 className="login-header">Add products</h1>
                <ProductForm />
            </div>
        </div>
    )
}

export default page