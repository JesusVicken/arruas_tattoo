'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { InstagramLogo, FacebookLogo, Phone, MapPin, Clock, WhatsappLogo } from '@phosphor-icons/react'

export default function AboutStudio() {
    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const whatsappRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })

        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
            )

            // Animação do botão do WhatsApp
            if (whatsappRef.current) {
                gsap.fromTo(
                    whatsappRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.2 }
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="about-studio"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Vídeo de fundo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                src="/bg2.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay escura */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Conteúdo */}
            <div
                ref={textRef}
                data-aos="fade-up"
                className="relative z-20 max-w-4xl px-6 text-center text-white"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Sobre o Estúdio
                </h2>

                <p className="text-lg md:text-xl leading-relaxed mb-8">
                    No <strong>Arruas Tattoo</strong>, acreditamos que tatuar é eternizar sentimentos.
                    Cada traço conta uma história feita com arte, técnica e respeito.
                    Nosso espaço foi criado para proporcionar conforto, segurança e inspiração.
                </p>

                <div className="space-y-3 text-base md:text-lg">
                    <p className="flex items-center justify-center gap-2">
                        <MapPin size={22} weight="fill" className="text-rose-500" />
                        Ed. Lê Quartier - Av. Pau Brasil, 10 - Sala 1708 - Águas Claras, Brasília - DF, 71926-000
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Phone size={22} weight="fill" className="text-rose-500" />
                        (61) 99326-3535
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Clock size={22} weight="fill" className="text-rose-500" />
                        Aberto 24 horas
                    </p>
                </div>

                {/* Redes sociais */}
                <div className="flex justify-center gap-6 mt-8">
                    <a
                        href="https://www.instagram.com/arruas_tattoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <InstagramLogo size={40} weight="fill" className="text-rose-500 hover:text-rose-400" />
                    </a>

                    <a
                        href="https://www.facebook.com/arruastattoo?locale=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <FacebookLogo size={40} weight="fill" className="text-rose-500 hover:text-rose-400" />
                    </a>
                </div>
            </div>

            {/* Botão do WhatsApp */}
            <a
                ref={whatsappRef}
                href="https://wa.me/556195668686"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-12 right-12 z-30 flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-5 py-3 rounded-full shadow-lg transition-all duration-300"
            >
                <WhatsappLogo size={28} weight="fill" />
                Agende pelo WhatsApp
            </a>
        </section>
    )
}
