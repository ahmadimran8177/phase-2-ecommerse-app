"use client"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";

const Userdetails = ({ user }) => {
    const dispatch = useDispatch();
    function nestedLoginFunc(id) {
        dispatch(addToCart({ id }));
    }
    useEffect(() => { nestedLoginFunc(user.userType) }, [])
    return (
        <div><h1>User Profile</h1>
            <div class="profile-info">
                <p><b>Name:</b>{user?.name}</p>
                <p><b>Email:</b>{user?.email}</p>
                <p><b>Shipping Address:</b>{user?.shippingAddress}</p>
                <p><b>User Type:</b>{user?.userType}</p>
                <p><b>Admin:</b>{user?.admin ? "True" : "False"}</p>
            </div>
        </div>
    )
}

export default Userdetails