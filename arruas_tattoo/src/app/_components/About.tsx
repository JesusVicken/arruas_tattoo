'use client'

import Image from "next/image"
import { Check, Images, ExternalLink } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Imagens - Container flexível para tamanho real */}
                    <div className="relative" data-aos="fade-up" data-aos-delay="200">
                        {/* Container flexível que se adapta ao tamanho da imagem */}
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/arruas-about.jpg"
                                alt="Estúdio Arruas Tattoo - Ambiente profissional para tatuagens fine line"
                                width={600}
                                height={800}
                                quality={100}
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay sutil no hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                        </div>

                        {/* Logo com animação flutuante */}
                        <div className="absolute lg:left-12 lg:-bottom-6 -bottom-4 left-1/2 transform -translate-x-1/2 lg:translate-x-0 w-20 h-20 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-xl animate-float">
                            <Image
                                src="/3.png"
                                alt="Arruas Tattoo Logo - Representação da marca"
                                width={128}
                                height={128}
                                quality={100}
                                className="object-contain bg-white p-2"
                                priority
                                sizes="(max-width: 1024px) 80px, 128px"
                            />
                        </div>
                    </div>

                    {/* Conteúdo textual - Melhor hierarquia e espaçamento */}
                    <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
                        {/* Cabeçalho */}
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Sobre o Artista e Tatuador Ricardo Arruas
                            </h2>

                            <div className="flex items-center gap-3 text-gray-700">
                                <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Artista Ilustrador & Tatuador Fine Line
                                </span>
                                <span className="text-2xl animate-pulse">🌿</span>
                            </div>
                        </div>

                        {/* Textos com melhor legibilidade */}
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-justify lg:text-left text-lg">
                                Através da internet, compartilho minhas ilustrações produzidas à mão e, aos poucos, fui conquistando meu espaço como <strong className="font-semibold text-gray-900">artista ilustrador fine line</strong>. Meus desenhos são sempre ligados à <strong className="font-semibold text-gray-900">natureza e à vida ao ar livre</strong>.
                            </p>
                            <p className="text-justify lg:text-left text-lg">
                                Por aqui, <strong className="font-semibold text-gray-900">cada detalhe é feito por mim</strong>: desde a produção de conteúdo para redes sociais até o atendimento. Isso me proporciona um <strong className="font-semibold text-gray-900">contato próximo e direto</strong> com cada pessoa que confia no meu trabalho.
                            </p>
                        </div>

                        {/* Lista com ícones mais destacados */}
                        <ul className="space-y-4">
                            {[
                                "Especialista em Fine Line e ilustrações autorais",
                                "Designs exclusivos com tema de natureza e vida ao ar livre",
                                "Atendimento direto e personalizado com o artista",
                                "Rigoroso padrão de biossegurança (ANVISA)"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors">
                                        <Check className="text-green-600 w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Botões com melhor hierarquia visual */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
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

                        {/* Informação adicional sutil */}
                        <div className="pt-4">
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                ⚡ Resposta rápida • ✨ Design exclusivo • 🎨 Arte personalizada
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Estilos CSS para animação flutuante */}
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