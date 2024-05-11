"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createProductFunc } from '@/app/lib/createProductFunc'

const ProductForm = () => {
    const dispatch = useDispatch();
    const { cartItem } = useSelector((state) => state.cart);
    return (
        <form id="addProductForm" className="login-form" onSubmit={(e) => {
            e.preventDefault();
            createProductFunc(e.target[0].value,
                e.target[2].value,
                e.target[5].value,
                e.target[1].value,
                e.target[3].value,
                e.target[4].value,
                cartItem[0])
        }}>
            <div className="input-container">
                <label for="name">Product Name</label>
                <input type="text" name="name" id="name" required="" />
            </div>
            <div className="input-container">
                <label for="image">Product  Image</label>
                <input type="url" name="image" id="image" required="" />
            </div>
            <div className="input-container">
                <label for="price">Product  Price</label>
                <input type="number" min="0" name="price" id="price" required="" />
            </div>
            <div className="input-container">
                <label for="category">Category</label>
                <input type="text" name="category" id="category" required="" />
            </div>
            <div className="input-container">
                <label for="stock">Product  Stock</label>
                <input type="number" min="0" name="stock" id="stock" required="" />
            </div>
            <div className="input-container">
                <label for="description">Product  Description</label>
                <textarea name="description" id="description" row="5" cols="97" required="" spellcheck="false"> </textarea>
            </div>
            <button className="login-button product-button" type='submit'>Add Product</button>
        </form>
    )
}

export default ProductForm