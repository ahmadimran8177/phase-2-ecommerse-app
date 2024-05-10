"use client"
import React from 'react'
import Image from 'next/image'
import loginImage from '@/app/images/login.png'
import { loginFunc } from '@/app/lib/loginFunc'
import { redirect } from 'next/dist/server/api-utils'

const page = () => {
    return (
        <main className="login-page">
            <div className="login-form-card">
                <h1 className="login-header">Login</h1>
                <div className="login-header-img">
                    <Image src={loginImage} alt="" width={600} height={300} />
                </div>

                <form className="login-form" action={loginFunc} method='post'>
                    <div className="input-container">
                        <label for="username"  >Username:</label>
                        <div className="input-with-icon">
                            <i className="fa fa-user icon"></i>
                            <input type="text" name="username" id="username" required />
                        </div>
                    </div>
                    <div className="input-container">

                        <label for="password">Enter Password:</label>
                        <div className="input-with-icon">
                            <i className="fa fa-lock icon"></i>
                            <input type="password" name="password" id="password" required />
                        </div>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </main>
    )
}

export default page