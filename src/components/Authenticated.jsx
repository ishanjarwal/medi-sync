"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Authenticated = ({ children }) => {

    const router = useRouter()
    const { status, data } = useSession();
    useEffect(() => {
        if (status == "unauthenticated") {
            router.push("/login");
        }
    }, [status]);

    return (
        <div>
            {children}
        </div>
    )
}

export default Authenticated
