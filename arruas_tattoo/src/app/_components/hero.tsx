'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { WhatsappLogoIcon, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const specialties = [
        "Fazendo arte e criando conexões",
        "Especializado em realismo e blackwork hachura",
        "Ambiente seguro com 100% de biossegurança",
        "Estúdio privado em Brasília - Águas Claras"
    ]

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">

            {/* Vídeo de Fundo */}
            <video
                src="/bg3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                data-aos="zoom-out"
                data-aos-delay="100"
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto h-full flex items-end pb-8 md:items-center md:pb-0 px-4 md:px-6 lg:px-8">
                <div
                    className="w-full max-w-2xl text-white space-y-2 md:space-y-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    {/* Logo + Lista */}
                    <div
                        className="flex flex-col items-center md:items-start gap-0 md:gap-2"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        {/* Logo - Ajustado para telas grandes */}
                        <div
                            className="flex justify-center md:justify-start w-full mb-2 md:mb-0"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <Image
                                src="/4.png"
                                alt="Arruas Tattoo - Estúdio de Tatuagem"
                                width={500}
                                height={500}
                                className="object-contain w-[180px] md:w-[320px] lg:w-[400px] transition-transform duration-700"
                                priority
                            />
                        </div>


                        <ul className="space-y-2 w-full mt-0 text-center md:text-left">
                            {specialties.map((item, index) => (
                                <li key={index} className="flex items-start md:items-center justify-center md:justify-start gap-2">
                                    <CheckCircle
                                        weight="fill"
                                        className="text-green-400 w-5 h-5 flex-shrink-0 mt-0.5"
                                    />
                                    <span className="opacity-90 text-sm md:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Botão Desktop */}
                    <div className="hidden md:block pt-2" data-aos="fade-up" data-aos-delay="800">
                        <WhatsAppButton />
                    </div>
                </div>
            </div>

            {/* Botão Flutuante Mobile */}
            <div
                className="md:hidden fixed bottom-6 right-6 z-20"
                data-aos="fade-up"
                data-aos-delay="700"
            >
                <WhatsAppButton isMobile />
            </div>
        </section>
    )
}

function WhatsAppButton({ isMobile = false }: { isMobile?: boolean }) {
    const whatsappNumber = "556195668686";
    const whatsappText = "Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.";

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                flex items-center justify-center
                ${isMobile
                    ? 'w-14 h-14 rounded-full'
                    : 'px-8 py-3 rounded-md gap-1.5 text-sm max-w-fit'
                }
                bg-green-600 hover:bg-green-700 text-white
                font-medium transition-colors shadow-md hover:shadow-green-700/30
            `}
            aria-label="Fazer orçamento via WhatsApp"
        >
            <WhatsappLogoIcon className={isMobile ? "w-7 h-7" : "w-4 h-4"} />
            {!isMobile && "Fazer Orçamento"}
        </a>
    )
}