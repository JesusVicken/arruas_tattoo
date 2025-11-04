'use client'

import Image from "next/image"
import { Check, Images, ExternalLink } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- IMAGEM --- */}
                    <div className="relative flex justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/arruas-about.jpg"
                                alt="Estúdio Arruas Tattoo - Ambiente profissional"
                                width={600}
                                height={800}
                                quality={100}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                        </div>

                        {/* --- LOGO FLOTANTE --- */}
                        <div className="absolute bottom-[-24px] lg:bottom-[-32px] left-1/2 lg:left-12 transform -translate-x-1/2 lg:translate-x-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-xl animate-float bg-white">
                            <Image
                                src="/3.png"
                                alt="Logo Arruas Tattoo"
                                width={128}
                                height={128}
                                quality={100}
                                className="object-contain p-2"
                                priority
                                sizes="(max-width: 1024px) 80px, 128px"
                            />
                        </div>
                    </div>

                    {/* --- CONTEÚDO --- */}
                    <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
                        {/* Título e subtítulo */}
                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Sobre o Artista e Tatuador Ricardo Arruas
                            </h2>
                            <div className="flex justify-center lg:justify-start items-center gap-3 text-gray-700">
                                <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Especialista em Realismo, Blackwork, Hachura & Fine Line
                                </span>
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                            <p className="text-justify">
                                A arte sempre esteve presente na minha vida através do desenho e da expressão visual. Com o tempo, transformei essa paixão em tatuagens únicas, com foco em <strong className="text-gray-900 font-semibold">realismo</strong>, <strong className="text-gray-900 font-semibold">blackwork</strong>, <strong className="text-gray-900 font-semibold">hachura</strong> e <strong className="text-gray-900 font-semibold">fine line</strong>.
                            </p>
                            <p className="text-justify">
                                Cada projeto é uma experiência personalizada da criação à execução onde busco traduzir a essência de cada cliente em um traço exclusivo, mantendo sempre o <strong className="text-gray-900 font-semibold">rigor técnico e o cuidado artístico</strong> que cada pele merece.
                            </p>
                        </div>

                        {/* Lista de diferenciais */}
                        <ul className="space-y-4">
                            {[
                                "Especialista em Realismo, Blackwork, Hachura e Fine Line",
                                "Designs autorais com foco em identidade e significado",
                                "Atendimento direto e personalizado com o artista",
                                "Rigoroso padrão de biossegurança (ANVISA)",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors">
                                        <Check className="text-green-600 w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 text-base sm:text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/556195668686?text=Olá, vim pelo site e gostaria de fazer um orçamento."
                                className="group bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold text-lg"
                            >
                                <WhatsappLogoIcon className="w-6 h-6" />
                                Fazer Orçamento
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>

                            <Link
                                href="/domiciliar"
                                className="group border-2 border-gray-300 hover:border-gray-400 text-gray-800 flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold text-lg"
                            >
                                <Images className="w-6 h-6 text-gray-700" />
                                Ver Portfólio
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </div>

                        {/* Info adicional */}
                        <div className="pt-4 text-center lg:text-left">
                            <p className="text-gray-500 text-sm sm:text-base">
                                ⚡ Resposta rápida • 🎨 Design autoral • 🖤 Arte com propósito
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ANIMAÇÃO FLOAT --- */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}
