"use client"
import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '@/app/redux/cartSlice';
import { redirect } from 'next/navigation';

const Header = () => {
    const dispatch = useDispatch();
    const { cartItem } = useSelector((state) => state.cart);
    function handleLogOut() {
        dispatch(emptyCart());
        redirect("/");
    }
    return (
        <header className="header">
            <div>
                <Link href="/" className="nav-brand">
                    Trend
                </Link>
                <span id="user-type"></span>
            </div>
            <nav className="nav">
                <ul className="nav-items" id="nav-items">
                    <li className="nav-item active" id="home">
                        <Link href={"/"}>Home</Link>
                    </li>
                    {cartItem[1] === "customer" && <li className="nav-item" id="orders">
                        <Link href={`/orders/${cartItem[0]}`}>Orders</Link>
                    </li>}
                    {cartItem[1] === "seller" && <li className="nav-item" id="products">
                        <Link href={`/products/${cartItem[0]}`}>My Products</Link>
                    </li>}
                    {cartItem.length < 1 && <li className="nav-item" id="login">
                        <Link href="/login">Login</Link>
                    </li>}
                    {cartItem.length > 1 && <li className="nav-item" id="profile">
                        <Link href={`/user/${cartItem[0]}`}>Profile</Link>
                    </li>}
                    {cartItem.length > 1 && <li className="nav-item" id="logout">
                        <Link href={"/"} onClick={handleLogOut}>Logout</Link>
                    </li>}

                </ul>
            </nav>
            <div className="hamburger">
                <span id="openHam">&#9776;</span>
                <span id="closeHam">&#x2716;</span>
            </div>
        </header>
    )
}

export default Header