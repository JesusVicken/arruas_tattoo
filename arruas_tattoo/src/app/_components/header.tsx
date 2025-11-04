'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const links = [
        { label: 'Início', href: '/' },
        { label: 'Sobre Mim', href: '/sobre' },
        { label: 'Estúdio', href: '/tratamentos' },
        { label: 'Artes', href: '/domiciliar' },
        { label: 'Contato', href: '/contatos' },
    ]

    return (
        <header className="w-full h-[80px] bg-white shadow-md sticky top-0 z-50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full overflow-hidden">
                    <Image
                        src="/arruaslogo.png"
                        alt="Logo Ricardo Arruas Tattoo"
                        width={500}
                        height={222}
                        className="w-auto h-[60px] md:h-[75px] object-contain"
                        priority
                    />
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-8 items-center ml-6">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href}>
                            <Button
                                variant="ghost"
                                className="text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-100 transition-colors"
                            >
                                {label}
                            </Button>
                        </Link>
                    ))}
                </nav>

                {/* Botão menu mobile */}
                <div className="md:hidden flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-black" />
                        ) : (
                            <Menu className="h-6 w-6 text-black" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile */}
            <nav
                className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href}>
                            <Button
                                variant="ghost"
                                className="w-full text-left text-gray-800 text-base hover:bg-gray-100 hover:text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </Button>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
