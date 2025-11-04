'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    WhatsappLogo,
    MapPin,
    Phone,
    Envelope,
    InstagramLogo,
    FacebookLogo,
    YoutubeLogo,
    ArrowRight,
    Clock,
    Calendar,
    ChatCircleText,
} from '@phosphor-icons/react/dist/ssr'

export default function ContactSectionArruas() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        })
        setIsVisible(true)
    }, [])

    const whatsappNumber = '556195668686'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const contactInfo = [
        {
            icon: <Envelope className="w-5 h-5" />,
            label: "Email",
            value: "contato@arruastattoo.com",
            href: "mailto:contato@arruastattoo.com",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Telefone/WhatsApp",
            value: "+55 61 9566-8686",
            href: whatsappLink,
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Localização",
            value: "Avenida Boulevard Sul, Águas Claras, Brasília - DF",
            href: "#map",
            color: "from-orange-500 to-red-500"
        }
    ]

    const socialLinks = [
        {
            icon: <InstagramLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.instagram.com/arruas_tattoo",
            label: "Instagram",
            color: "bg-gradient-to-br from-purple-600 to-pink-600",
            hover: "hover:from-purple-700 hover:to-pink-700"
        },
        {
            icon: <FacebookLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.facebook.com/arruastattoo",
            label: "Facebook",
            color: "bg-blue-600",
            hover: "hover:bg-blue-700"
        },
        {
            icon: <YoutubeLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.youtube.com/@arruastattoo",
            label: "YouTube",
            color: "bg-red-600",
            hover: "hover:bg-red-700"
        }
    ]

    return (
        <section className="relative w-full min-h-screen text-white overflow-hidden">
            {/* Background Video com Overlay Dinâmico */}
            <div className="absolute inset-0 -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="/arruas-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/90"></div>
            </div>

            {/* Conteúdo Principal */}
            <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20" data-aos="fade-down">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Arte Permanente, Memórias Eternas 
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Entre em contato e transforme sua ideia em uma tatuagem única e personalizada
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">

                    {/* Card de Informações de Contato */}
                    <div
                        className="lg:col-span-2 space-y-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                                    <ChatCircleText className="w-6 h-6" weight="fill" />
                                </div>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        Vamos Conversar?
                                    </h3>
                                    <p className="text-gray-300 text-lg">
                                        Escolha a melhor forma de contato
                                    </p>
                                </div>
                            </div>

                            {/* Informações de Contato */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target={item.href.includes('http') ? '_blank' : '_self'}
                                        rel={item.href.includes('http') ? 'noopener noreferrer' : ''}
                                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                                            <p className="text-white font-semibold text-lg truncate">{item.value}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                    </a>
                                ))}
                            </div>

                            {/* Botão WhatsApp Principal */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-4 text-lg"
                            >
                                <div className="relative">
                                    <WhatsappLogo className="w-7 h-7" weight="fill" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <span>Conversar no WhatsApp</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Cards de Benefícios */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-6 h-6 text-blue-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Atendimento Rápido</h4>
                                <p className="text-gray-300 text-sm">Resposta em até 15 minutos</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Calendar className="w-6 h-6 text-purple-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Agendamento Flexível</h4>
                                <p className="text-gray-300 text-sm">Horários que se adaptam à você</p>
                            </div>
                        </div>
                    </div>

                    {/* Card de Redes Sociais e Logo */}
                    <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                        {/* Logo */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl flex items-center justify-center group hover:bg-white/15 transition-all duration-300">
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                                <Image
                                    src="/4.png"
                                    alt="Arruas Tattoo - Estúdio de Tatuagem Profissional"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                Nossas Redes
                            </h3>
                            <p className="text-gray-300 text-center mb-6">
                                Acompanhe nosso trabalho e inspire-se
                            </p>

                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`w-14 h-14 ${social.color} ${social.hover} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 transform-gpu`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mapa Modernizado */}
            <div
                id="map"
                className="relative w-full h-[500px] lg:h-[600px] bg-gray-900"
                data-aos="fade-up"
                data-aos-delay="600"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
                <iframe
                    title="Estúdio Arruas Tattoo - Águas Claras, Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245842.0198082934!2d-48.05315964892468!3d-15.72154228495493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae279%3A0x79188d5b54443465!2sAvenida%20Boulevard%20Sul%2C%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20DF%2C%2071926-250!5e0!3m2!1spt-BR!2sbr!4v1720546377670!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                />
                {/* Overlay de informações do mapa */}
                <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-green-400" weight="fill" />
                        <div>
                            <p className="text-white font-semibold text-sm">Arruas Tattoo Studio</p>
                            <p className="text-gray-300 text-xs">Águas Claras, Brasília - DF</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Efeitos Visuais */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </section>
    )
}