'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type TattooModel = {
    title: string
    desc: string
    image: string
}

const tattooModels: TattooModel[] = [
    {
        title: 'Realismo',
        desc: 'Modelos digitais com riqueza de detalhes, texturas e profundidade — perfeitos para tatuagens realistas e expressivas.',
        image: '/desenho1.jpeg',
    },
    {
        title: 'Minimalismo',
        desc: 'Desenhos simples, elegantes e com traços limpos. Ideais para quem busca leveza e significado em cada linha.',
        image: '/desenho2.jpeg',
    },
    {
        title: 'Black & Grey',
        desc: 'Com foco em contraste e sombreamento, esses modelos exploram o poder do preto e cinza em composições intensas e marcantes.',
        image: '/desenho3.jpeg',
    },
    {
        title: 'Temas Religiosos',
        desc: 'Arte digital inspirada em símbolos de fé e espiritualidade, com traços suaves e composição equilibrada.',
        image: '/desenho4.jpeg',
    },
    {
        title: 'Misticismo',
        desc: 'Criações autorais com elementos simbólicos e toque de surrealismo, trazendo mistério e energia às tatuagens.',
        image: '/desenho5.jpeg',
    },
    {
        title: 'Guerreiros e Mitologia',
        desc: 'Modelos que representam força, coragem e história, com traços marcantes e grande impacto visual.',
        image: '/desenho6.jpeg',
    },
]

export default function MateriaisDigitais() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    }, [])

    return (
        <section className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                {/* Cabeçalho */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4 text-white">Modelos Digitais de Tatuagem</h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto text-base">
                        Explore os <span className="text-white font-semibold">modelos digitais exclusivos</span> criados por <span className="text-white font-semibold">Ricardo Arruas</span>.
                        Cada arte foi desenvolvida com técnica e estilo próprio para inspirar e ajudar na escolha da sua próxima tatuagem.
                    </p>
                </div>

                {/* Carrossel */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    {/* Botões */}
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll left"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <ChevronLeft className="h-6 w-6 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll right"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <ChevronRight className="h-6 w-6 text-black" />
                    </button>

                    {/* Lista de cards */}
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-6 px-6">
                            {tattooModels.map((model, index) => (
                                <Card
                                    key={index}
                                    className="scroll-ml-6 scroll-snap-start min-w-[90%] sm:min-w-[320px] max-w-sm bg-zinc-900 border border-zinc-700 shadow-sm rounded-xl overflow-hidden transition-transform duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * (index % 3)}
                                >
                                    <div className="bg-black flex items-center justify-center p-2">
                                        <Image
                                            src={model.image}
                                            alt={model.title}
                                            width={400}
                                            height={400}
                                            className="w-full h-72 object-contain transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-white text-center">
                                            {model.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-zinc-300 text-sm text-center">{model.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
