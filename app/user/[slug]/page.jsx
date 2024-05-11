import React from 'react'
import { getOneUser } from '@/app/dataRepository/queryFunc'
import Userdetails from '@/app/ui/userdetails'

const page = async ({ params }) => {
  const user = await getOneUser(params?.slug);
  return (
    <div>
      <Userdetails slug={params?.slug} user={user} />
    </div>
  )
}

export default page