import React from 'react'
import { getOneUser } from '@/app/dataRepository/queryFunc'

const page = async ({ params }) => {
  const user = await getOneUser(params?.slug);
  console.log(user);
  return (
    <div><h1>User Profile</h1>
      <div class="profile-info">
        <p><b>Name:</b>{user?.name}</p>
        <p><b>Email:</b>{user?.email}</p>
        <p><b>Shipping Address:</b>{user?.shippingAddress}</p>
        <p><b>User Type:</b>{user?.userType}</p>
        <p><b>Admin:</b>{user?.admin}</p>
      </div>
    </div>
  )
}

export default page