'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Palette } from 'lucide-react' // Importei um ícone de "arte"

// --- COMPONENTE PRINCIPAL ---

export default function TratamentosPage() {

    // Mantemos o AOS para as animações de fade
    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: 'ease-in-out', offset: 80 })
    }, [])

    return (
        <section className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Título Atualizado */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
                        Nosso Estúdio
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Veja o nosso estúdio.
                    </p>
                </div>

                {/* Seção "Em Construção" */}
                <div
                    className="flex flex-col items-center justify-center min-h-[40vh] bg-zinc-900 border border-zinc-700 rounded-xl p-10 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Palette className="w-16 h-16 text-zinc-500 mb-6" />
                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Página em Construção
                    </h2>
                    <p className="text-zinc-400 max-w-md">
                        Estamos preparando uma galeria incrível para exibir os melhores trabalhos. Volte em breve!
                    </p>
                </div>

            </div>

            {/* Logo Arruas Tattoo no final */}
            <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <Image
                    // ATENÇÃO: Pode ser melhor usar uma versão "branca" da logo aqui
                    src="/arruas-logo.png"
                    alt="Logo Arruas Tattoo"
                    width={120} // Ajustei o tamanho
                    height={75}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </section>
    )
}