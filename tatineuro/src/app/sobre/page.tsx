'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
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
    ShieldCheck,
    Star,
    Calendar,
} from '@phosphor-icons/react'

export default function SobrePage() {
    const whatsappNumber = '556195668686'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Biossegurança Total",
            description: "Ambiente esterilizado seguindo normas ANVISA"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Design Exclusivo",
            description: "Arte personalizada para cada cliente"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Atendimento Flexível",
            description: "Horários que se adaptam à sua rotina"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Agendamento Online",
            description: "Marque sua sessão pelo WhatsApp"
        }
    ]

    return (
        <main className="bg-white">
            {/* Hero Section Modernizada */}
            <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Imagem/Vídeo Principal */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
                                <video
                                    src="/arruas2.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Overlay gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Logo flutuante */}
                            <div className="hidden lg:block absolute -right-4 -bottom-4 w-32 h-32 rounded-2xl overflow-hidden shadow-xl bg-white p-3 animate-float">
                                <Image
                                    src="/arruaslogo.png"
                                    alt="Logo Arruas Tattoo"
                                    fill
                                    quality={100}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Conteúdo Textual */}
                        <div className="space-y-6 lg:space-y-8" data-aos="fade-left">
                            {/* Logo Header */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[320px] lg:max-w-[380px]">
                                    <Image
                                        src="/arruas-about.jpg"
                                        alt="Arruas Tattoo"
                                        width={380}
                                        height={120}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Tagline Destaque */}
                            <div className="text-center lg:text-left">
                                <p className="text-lg lg:text-xl font-semibold text-green-600 bg-green-50 px-4 py-3 rounded-2xl inline-block">
                                    🎨 Tatuagens exclusivas e personalizadas em Brasília
                                </p>
                            </div>

                            {/* Descrições */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-justify lg:text-left text-base lg:text-lg">
                                    Oferecemos <strong className="text-gray-900">tatuagens personalizadas</strong> com foco em 
                                    <span className="font-semibold text-gray-900"> Fine Line, Realismo e Old School</span>, sempre 
                                    priorizando <strong className="text-gray-900">higiene e biossegurança</strong>.
                                </p>
                                <p className="text-justify lg:text-left text-base lg:text-lg">
                                    Nossa equipe de <strong className="text-gray-900">artistas especializados</strong> garante um 
                                    atendimento exclusivo e de qualidade para cada cliente.
                                </p>
                                <p className="text-justify lg:text-left text-base lg:text-lg">
                                    Atendemos em <strong className="text-gray-900">estúdio privado</strong>, proporcionando 
                                    conforto e privacidade durante todo o processo de criação.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                                            <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="400">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    <WhatsappLogo className="w-6 h-6" weight="fill" />
                                    Fazer Orçamento
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                
                                <Link
                                    href="/galeria"
                                    className="group border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    Ver Portfólio
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contatos e Redes Sociais - Modernizada */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20" data-aos="fade-up">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Vamos Conversar?
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Entre em contato e vamos criar sua tatuagem dos sonhos juntos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        
                        {/* Logo e Apresentação */}
                        <div className="flex flex-col items-center lg:items-start space-y-6" data-aos="fade-right">
                            <div className="w-48 lg:w-56">
                                <Image
                                    src="/3.png"
                                    alt="Arruas Tattoo"
                                    width={224}
                                    height={112}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                            <p className="text-gray-600 text-center lg:text-left text-lg">
                                Criando arte na pele com excelência e segurança em Brasília
                            </p>
                        </div>

                        {/* Informações de Contato */}
                        <div className="space-y-6" data-aos="fade-up">
                            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                                Informações de Contato
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                                        <Envelope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-semibold text-gray-900">contato@arruastattoo.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Telefone/WhatsApp</p>
                                        <p className="font-semibold text-gray-900">+55 61 9566-8686</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors mt-1">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Localização</p>
                                        <p className="font-semibold text-gray-900">
                                            Avenida Boulevard Sul, Águas Claras<br />
                                            Brasília - DF, 71926-250
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                                Nossas Redes
                            </h3>
                            
                            <p className="text-gray-600 text-center lg:text-left">
                                Acompanhe nosso trabalho e inspire-se
                            </p>
                            
                            <div className="flex justify-center lg:justify-start gap-6">
                                {[
                                    { 
                                        icon: <InstagramLogo className="w-6 h-6" />, 
                                        href: "https://www.instagram.com/arruas_tattoo",
                                        color: "bg-gradient-to-br from-purple-500 to-pink-500",
                                        label: "Instagram"
                                    },
                                    { 
                                        icon: <FacebookLogo className="w-6 h-6" />, 
                                        href: "https://www.facebook.com/arruastattoo",
                                        color: "bg-blue-600",
                                        label: "Facebook"
                                    },
                                    { 
                                        icon: <YoutubeLogo className="w-6 h-6" />, 
                                        href: "https://www.youtube.com/@arruastattoo",
                                        color: "bg-red-600",
                                        label: "YouTube"
                                    }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`w-14 h-14 ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Botão WhatsApp Destaque */}
                            <div className="pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 text-sm lg:text-base"
                                >
                                    <WhatsappLogo className="w-5 h-5" weight="fill" />
                                    Conversar no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa Modernizado */}
            <div className="relative bg-white" data-aos="fade-up">
                <div className="container px-4 mx-auto py-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                            Nosso Estúdio
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Venha nos visitar em Águas Claras, Brasília
                        </p>
                    </div>
                </div>
                
                <div className="w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-6xl">
                    <iframe
                        title="Localização Arruas Tattoo - Águas Claras, Brasília"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245842.0198082934!2d-48.05315964892468!3d-15.72154228495493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae279%3A0x79188d5b54443465!2sAvenida%20Boulevard%20Sul%2C%20Águas%20Claras%2C%20Brasília%20DF%2C%2071926-250!5e0!3m2!1spt-BR!2sbr!4v1720546377670!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    />
                    {/* Overlay para melhor contraste */}
                    <div className="absolute inset-0 pointer-events-none" />
                </div>
            </div>

            {/* Estilos CSS para animação flutuante */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-8px) rotate(1deg); }
                    66% { transform: translateY(-4px) rotate(-1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </main>
    )
}