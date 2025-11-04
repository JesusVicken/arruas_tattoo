'use client'

import { useEffect } from 'react'
import {
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone
} from '@phosphor-icons/react/dist/ssr'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Contact() {
    // 🔧 Atualize esses dados
    const whatsappNumber = '556195668686'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    }, [])

    return (
        <section className="bg-white text-black">
            <div className="container mx-auto px-6 py-16">
                {/* Cabeçalho */}
                <div className="text-center mb-14" data-aos="fade-down">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Contatos & Redes Sociais
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-base md:text-lg">
                        Entre em contato com o Arruas Tattoo para orçamentos, dúvidas ou para agendar sua sessão.
                    </p>
                </div>

                {/* Seções principais */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* LOGO */}
                    <div
                        data-aos="fade-up"
                        className="flex justify-center md:justify-center lg:justify-start items-center"
                    >
                        <Image
                            src="/arruaslogo.png"
                            alt="Arruas Tattoo Logo"
                            width={400}
                            height={200}
                            priority
                            className="w-56 sm:w-72 md:w-80 lg:w-96 object-contain drop-shadow-md"
                        />
                    </div>

                    {/* CONTATOS */}
                    <div data-aos="fade-up" data-aos-delay="100" className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-5 text-black">
                            Informações de Contato e Orçamentos
                        </h3>
                        <div className="space-y-4 text-gray-800">
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <Envelope className="text-gray-700 w-5 h-5" />
                                contato@arruastattoo.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <Phone className="text-gray-700 w-5 h-5" />
                                (61) 9566-8686
                            </p>
                            <p className="flex items-start justify-center md:justify-start gap-2">
                                <MapPin className="text-gray-700 w-5 h-5 flex-shrink-0" />
                                <span>
                                    Avenida Boulevard Sul, Sul (Aguas Claras), Brasília DF, 71926-250, Brasil <br />
                                    <span className="text-sm text-gray-600">
                                        Atendimento em estúdio privado com hora marcada.
                                    </span>
                                </span>
                            </p>
                        </div>

                        {/* BOTÃO WHATSAPP */}
                        <div className="flex justify-center md:justify-start">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <WhatsappLogo className="w-6 h-6" weight="fill" />
                                Orçamento via WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* REDES SOCIAIS */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <h3 className="text-2xl font-semibold mb-5 text-black">
                            Redes Sociais
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Siga e acompanhe os trabalhos e ilustrações:
                        </p>
                        <div className="flex gap-6 items-center justify-center md:justify-start">
                            <a
                                href="https://www.instagram.com/arruas_tattoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:scale-110 transition-transform"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                    alt="Instagram"
                                    className="w-8 h-8"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/arruastattoo?locale=pt_BR"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:scale-110 transition-transform"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                                    alt="Facebook"
                                    className="w-8 h-8"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@arruastattoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="hover:scale-110 transition-transform"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                                    alt="YouTube"
                                    className="w-8 h-8"
                                />
                            </a>
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
        </section>
    )
}
