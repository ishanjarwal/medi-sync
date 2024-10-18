"use client"
import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import Logo from './Logo'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {

    const { status } = useSession();

    return (
        <div className="flex justify-between items-center">
            <Logo />
            <div className='flex justify-end items-center gap-4'>
                <ThemeToggleButton />
                {status == "authenticated" && (
                    <Button
                        onClick={() => {
                            signOut();
                        }}
                        className="" variant="secondary">
                        Sign Out
                    </Button>
                )}

            </div>
        </div>
    )
}

export default Header
