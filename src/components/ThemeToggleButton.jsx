"use client"
import { useContext } from 'react'
import { Switch } from './ui/switch'
import { ThemeContext } from '@/contexts/ThemeContext'


const ThemeToggleButton = () => {

    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div className="flex justify-center items-center gap-x-1">
            <span className="text-xs dark:text-white">Dark Mode : </span>
            <Switch checked={theme == "dark"} onCheckedChange={() => { toggle() }} />
        </div>
    )
}

export default ThemeToggleButton
