"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Admin = ({ children }) => {
    const router = useRouter()
    const { data } = useSession();
    useEffect(() => {
        if (data?.user?.role === "ADMIN") {
            router.push("/login");
        }
    }, [data]);

    return (
        <div>
            {children}
        </div>
    )
}

export default Admin
