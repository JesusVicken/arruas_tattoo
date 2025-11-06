'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Início', href: '/' },
        { label: 'Sobre Mim', href: '/sobre' },
        { label: 'Estúdio', href: '/tratamentos' },
        { label: 'Portfólio', href: '/domiciliar' },
        { label: 'Contato', href: '/contatos' },
    ]

    const socialLinks = [
        {
            icon: Instagram,
            href: 'https://www.instagram.com/arruas_tattoo',
            label: 'Instagram'
        },
        {
            icon: Facebook,
            href: 'https://www.facebook.com/arruastattoo',
            label: 'Facebook'
        }
    ]

    return (
        <>
            {/* Header Principal */}
            <header className={`
                w-full bg-white sticky top-0 z-50 transition-all duration-300 ease-in-out
                ${scrolled
                    ? 'h-16 shadow-lg backdrop-blur-md bg-white/95'
                    : 'h-20 shadow-sm'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center h-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <Image
                            src="/arruaslogo.png"
                            alt="Ricardo Arruas Tattoo - Especialista em Realismo e Blackwork"
                            width={500}
                            height={222}
                            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'
                                }`}
                            priority
                        />
                    </Link>

                    {/* Navegação Desktop */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map(({ label, href }) => (
                            <Link key={href} href={href}>
                                <Button
                                    variant="ghost"
                                    className={`
                                        text-base font-medium transition-all duration-300
                                        ${scrolled ? 'px-4 py-2' : 'px-5 py-3'}
                                        text-gray-700 hover:text-black hover:bg-gray-50
                                        relative group overflow-hidden
                                    `}
                                >
                                    {label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    {/* Redes Sociais e Contato - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Redes Sociais */}
                        <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Botão WhatsApp */}
                        <a
                            href="https://wa.me/5561995668686"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className={`
                                bg-green-600 hover:bg-green-700 text-white font-semibold
                                transition-all duration-300 flex items-center gap-2
                                ${scrolled ? 'px-4 py-2 text-sm' : 'px-5 py-2.5'}
                            `}>
                                <Phone size={16} />
                                Agendar
                            </Button>
                        </a>
                    </div>

                    {/* Botão menu mobile */}
                    <div className="lg:hidden flex items-center gap-3">
                        {/* WhatsApp Mobile */}
                        <a
                            href="https://wa.me/5561995668686"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden"
                        >
                            <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                            >
                                <Phone size={16} />
                            </Button>
                        </a>

                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-black hover:bg-gray-100"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Menu Mobile */}
            <div className={`
                lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
                transition-all duration-300 ease-in-out
                ${mobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }
            `}>
                <div
                    className={`
                        absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl
                        transform transition-transform duration-300 ease-in-out
                        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    {/* Cabeçalho do Menu Mobile */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <Image
                            src="/arruaslogo.png"
                            alt="Ricardo Arruas Tattoo"
                            width={200}
                            height={89}
                            className="h-10 w-auto object-contain"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-black"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Navegação Mobile */}
                    <nav className="p-6">
                        <div className="flex flex-col gap-2">
                            {links.map(({ label, href }) => (
                                <Link key={href} href={href}>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 py-4 px-4"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {label}
                                    </Button>
                                </Link>
                            ))}
                        </div>

                        {/* Redes Sociais Mobile */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-600 mb-4">Siga nas redes</p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-300"
                                        aria-label={label}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Botão WhatsApp Mobile */}
                        <div className="mt-6">
                            <a
                                href="https://wa.me/5561995668686"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                                    <Phone size={18} className="mr-2" />
                                    Agendar pelo WhatsApp
                                </Button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}