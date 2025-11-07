'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type TattooWork = {
    title: string
    desc: string
    image: string
    style: string
}

const tattooWorks: TattooWork[] = [
    {
        title: 'Fine Line',
        desc: 'Tatuagem realista com profundidade e texturas impressionantes, demonstrando maestria técnica e atenção aos detalhes.',
        image: '/tatoo1.jpeg',
        style: 'Fine Line'
    },
    {
        title: 'Tattoo Realista',
        desc: 'Técnica única de realismo.',
        image: '/tatoo2.jpeg',
        style: 'Blackwork'
    },
    {
        title: 'Realismo com Sombras',
        desc: 'Jogo de realismo com sombreamento.',
        image: '/tatoo4.jpeg',
        style: 'Realismo'
    },
    {
        title: 'Realismo com cores',
        desc: 'Composição estrutural de cores e realismo com formas abstratas e pontilhismo.',
        image: '/tatoo5.jpeg',
        style: 'Realismo'
    },
    {
        title: 'Detalhe Realista',
        desc: 'Close-up demonstrando a precisão e qualidade do trabalho realista.',
        image: '/tatoo6.jpeg',
        style: 'Realismo'
    },
    {
        title: 'Realismo Artístico',
        desc: 'Técnica avançada de realismo criando texturas e padrões únicos.',
        image: '/tatoo7.jpeg',
        style: 'Realismo'
    },
]

export default function PortfolioTattoos() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center',
        dragFree: true
    })
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 50
        })
    }, [])

    const openModal = (image: string, index: number) => {
        setSelectedImage(image)
        setSelectedIndex(index)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'unset'
    }

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedImage) return

        let newIndex
        if (direction === 'next') {
            newIndex = (selectedIndex + 1) % tattooWorks.length
        } else {
            newIndex = (selectedIndex - 1 + tattooWorks.length) % tattooWorks.length
        }

        setSelectedImage(tattooWorks[newIndex].image)
        setSelectedIndex(newIndex)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return

            if (e.key === 'Escape') closeModal()
            if (e.key === 'ArrowRight') navigateImage('next')
            if (e.key === 'ArrowLeft') navigateImage('prev')
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage, selectedIndex])

    return (
        <>
            <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
                {/* Background Video */}
                <div className="absolute inset-0 -z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/bg.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay para melhor contraste */}
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Portfólio de Tatuagens
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            Explore a <span className="text-white font-semibold">excelência técnica</span> e
                            <span className="text-white font-semibold"> arte única</span> de Ricardo Arruas.
                            Cada tatuagem conta uma história de precisão, criatividade e dedicação.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative" data-aos="fade-up" data-aos-delay="200">
                        {/* Navigation Buttons */}
                        <button
                            onClick={scrollPrev}
                            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20 p-3 bg-white/10 backdrop-blur-sm shadow-lg rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:shadow-xl"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="h-5 w-5 text-white" />
                        </button>

                        <button
                            onClick={scrollNext}
                            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20 p-3 bg-white/10 backdrop-blur-sm shadow-lg rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:shadow-xl"
                            aria-label="Próximo"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button>

                        {/* Carousel Container */}
                        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                            <div className="flex gap-6 md:gap-8 px-4">
                                {tattooWorks.map((work, index) => (
                                    <div
                                        key={index}
                                        className="flex-[0_0_85%] md:flex-[0_0_380px] lg:flex-[0_0_420px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 hover:border-white/30 overflow-hidden group"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        {/* Image Container */}
                                        <div
                                            className="relative h-80 md:h-96 bg-gray-900/50 overflow-hidden cursor-pointer"
                                            onClick={() => openModal(work.image, index)}
                                        >
                                            <Image
                                                src={work.image}
                                                alt={work.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/30">
                                                        <ZoomIn className="h-6 w-6 text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Style Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                                                    {work.style}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                                {work.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                                {work.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                        <p className="text-gray-300 mb-6 text-lg">
                            Pronto para transformar sua ideia em arte?
                        </p>
                        <a
                            href="https://wa.me/5561993263535"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Agendar Consulta
                            <ChevronRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                    <div className="relative max-w-6xl max-h-[90vh] w-full">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-[80vh] bg-black rounded-2xl overflow-hidden">
                            <Image
                                src={selectedImage}
                                alt={tattooWorks[selectedIndex].title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <h3 className="text-white font-bold text-lg mb-1">
                                {tattooWorks[selectedIndex].title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                                {tattooWorks[selectedIndex].desc}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                                    {tattooWorks[selectedIndex].style}
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {selectedIndex + 1} / {tattooWorks.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}