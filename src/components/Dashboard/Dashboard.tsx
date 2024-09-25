'use client'

import { AuthContext } from "@/contexts/authContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

const Dashboard = () => {
    const router = useRouter()

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        if(!user?.login) {
            router.push("/login")
        }
    }, []);
  return (
    <>
        <h1>Dashboard</h1>
        <p>{user?.user.name}</p>
        <p>{user?.user.email}</p>
        {user?.user.orders?.map((order, i)=>(<div key={i} className="flex gap-4">
          <p>Orden {order.id}</p>
          <p>{order.date}</p>
        </div>))}
    </>
  )
}

export default Dashboard