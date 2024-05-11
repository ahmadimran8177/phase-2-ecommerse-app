"use client"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";

const Userdetails = ({ user }) => {
    const dispatch = useDispatch();
    function nestedLoginFunc(id, userType) {
        dispatch(addToCart({ id, userType }));
    }
    useEffect(() => { nestedLoginFunc(user.id, user.userType) }, [])
    return (
        <div className='login-page'>
            <div class="login-form-card">
                <h1 class="login-header">User Profile</h1>
                <table id="profile-table"><tbody><tr><th>Name</th><td>{user?.name}</td></tr><tr><th>User Email</th><td>{user?.email}</td></tr><tr><th>Address</th><td>{user?.shippingAddress}</td></tr><tr><th>User Type</th><td>{user?.userType}</td></tr><tr><th>Money</th><td>{user?.money}</td></tr></tbody></table>
            </div>

        </div>
    )
}

export default Userdetails