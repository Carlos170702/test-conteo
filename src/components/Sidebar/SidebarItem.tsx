'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    icon: React.ReactNode
    text: string
    href: string
}

const SidebarItem = ({ icon, text, href }: Props) => {
    const path = usePathname()
    const isActive = path === href

    return (
        <a href={href} className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}>
            {icon}
            <span>{text}</span>
        </a>
    )
}

export default SidebarItem
