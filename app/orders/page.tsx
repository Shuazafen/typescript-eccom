// import { redirect } from 'next/dist/server/api-utils'
import {requiredUser} from "@/hooks/requireduser"
import React from 'react'
 import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Orderspage = async () => {
   const user = await requiredUser()
  return (
    <div>page</div>
  )
}

export default Orderspage