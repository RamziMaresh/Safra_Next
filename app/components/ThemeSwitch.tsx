// app/components/ThemeSwitch.tsx
'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <Image
            src=""
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    if (resolvedTheme === 'dark') {
        return <FiSun className="ml-2 text-gray-100 w-6 h-5 cursor-pointer" onClick={() => setTheme('light')} />
    }

    if (resolvedTheme === 'light') {
        return <FiMoon className="ml-2 text-teal-800 w-6 h-5 " onClick={() => setTheme('dark')} />
    }

}