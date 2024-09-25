"use client"
import { AuthContext } from '@/contexts/authContext'
import Link from 'next/link'
import { useContext } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaRegMehBlank } from 'react-icons/fa'

const UserWidget = () => {
    const {user, logout} = useContext(AuthContext)
    if (user?.login) {
      return (
        <>
          <Link href="/dashboard" className="mx-2 hover:text-tertiary">
            <FaRegUser />
          </Link>
          <button onClick={logout} className="mx-2 hover:text-tertiary">
            <FaSignOutAlt />
          </button>
        </>
      );
    } return <Link href="/login"><FaRegMehBlank /></Link>
};

export default UserWidget