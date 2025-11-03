'use client'

import Image from 'next/image'

export default function ConsultaDomiciliarPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-zinc-50 px-6 py-20 text-center">
            <div className="max-w-xl">
                <Image
                    src="/tatilogo.png"
                    alt="Logo Dra. Tatiana Miranda"
                    width={220}
                    height={220}
                    className="mx-auto mb-8 w-40 md:w-52 object-contain"
                    priority
                />

                <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
                    Página em Manutenção
                </h1>
                <p className="text-zinc-600 text-lg md:text-xl mb-8 leading-relaxed">
                    Estamos realizando atualizações para oferecer uma experiência ainda
                    melhor. Em breve esta página estará disponível novamente.
                </p>

                <div className="flex justify-center">
                    <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s] mx-1" />
                    <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s] mx-1" />
                    <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce mx-1" />
                </div>

                <p className="text-zinc-500 text-sm mt-10">
                    © {new Date().getFullYear()} Dra. Tatiana Miranda — Neurologista
                </p>
            </div>
        </section>
    )
}
