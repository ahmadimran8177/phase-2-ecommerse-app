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
                        <Link href="/">Home</Link>
                    </li>
                    {cartItem === "customer" && <li className="nav-item" id="orders">
                        <a href="/orders">Orders</a>
                    </li>}
                    {cartItem === "seller" && <li className="nav-item" id="products">
                        <a href="/products">Products</a>
                    </li>}
                    {cartItem === "" && <li className="nav-item" id="login">
                        <Link href="/login">Login</Link>
                    </li>}
                    {cartItem === "" || <li className="nav-item" id="logout">
                        <Link href={"/"} onClick={handleLogOut}>Logout</Link>
                    </li>}
                    {/* <li className="nav-item" id="profile">
              <a href="/profile">Profile</a>
            </li> */}
                    {/* <li className="nav-item" id="logout" onclick="logout()">
              <a href="#">Logout</a>
            </li> */}
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