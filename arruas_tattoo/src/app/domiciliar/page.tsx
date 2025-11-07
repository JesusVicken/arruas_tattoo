'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { Play, SpeakerSimpleX, SpeakerSimpleHigh, InstagramLogo, WhatsappLogo, X } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const portfolioMedia = [
    // Fotos
    { src: '/arruas-about.jpg', type: 'image', alt: 'Ricardo Arruas - Tatuador Profissional', category: 'Artista' },
    { src: '/tatoo1.jpeg', type: 'image', alt: 'Tatuagem Realista - Detalhe impressionante', category: 'Realismo' },
    { src: '/tatoo3.jpeg', type: 'image', alt: 'Tatuagem Realista - Traços precisos', category: 'Realismo' },
    { src: '/tatoo4.jpeg', type: 'image', alt: 'Realismo com sombras bem trabalhadas', category: 'Realismo' },
    { src: '/tatoo5.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },
    { src: '/tatoo6.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },
    { src: '/tatoo7.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },

    // Vídeos
    { src: '/arruas1.mp4', type: 'video', alt: 'Processo de desenhos', category: 'Processo' },
    { src: '/arruas2.mp4', type: 'video', alt: 'Processo de tatuagem com cliente', category: 'Processo' },
    { src: '/arruas3.mp4', type: 'video', alt: 'Detalhe da técnica de hachura', category: 'Processo' },
    { src: '/arruas4.mp4', type: 'video', alt: 'Finalização de tatuagem', category: 'Processo' },
    { src: '/arruas5.mp4', type: 'video', alt: 'Realismo em tempo real', category: 'Processo' },
    { src: '/arruas6.mp4', type: 'video', alt: 'Ambiente do estúdio', category: 'Estúdio' },
    { src: '/arruas7.mp4', type: 'video', alt: 'Técnica avançada de Realismo', category: 'Processo' },
    { src: '/arruas8.mp4', type: 'video', alt: 'Processo criativo', category: 'Processo' },
    { src: '/arruas9.mp4', type: 'video', alt: 'Tatuagem realista detalhe', category: 'Processo' },
    { src: '/arruas10.mp4', type: 'video', alt: 'Workflow profissional', category: 'Processo' },
    { src: '/arruas11.mp4', type: 'video', alt: 'Detalhes de acabamento', category: 'Processo' },
    { src: '/arruas12.mp4', type: 'video', alt: 'Técnica de sombreamento', category: 'Processo' },
    { src: '/arruas13.mp4', type: 'video', alt: 'Processo de cicatrização', category: 'Processo' },
    { src: '/arruas14.mp4', type: 'video', alt: 'Demonstração de habilidade', category: 'Processo' },
    { src: '/arruas15.mp4', type: 'video', alt: 'Trabalho finalizado', category: 'Processo' },
]

export default function PortfolioModerno() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedMedia, setSelectedMedia] = useState<any>(null)
    const [isMuted, setIsMuted] = useState(true)
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
    const [visibleVideos, setVisibleVideos] = useState<Set<string>>(new Set())

    // Observer para vídeos visíveis
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const videoId = entry.target.getAttribute('data-video-id')
                    if (!videoId) return

                    if (entry.isIntersecting) {
                        setVisibleVideos(prev => new Set(prev).add(videoId))
                    } else {
                        setVisibleVideos(prev => {
                            const newSet = new Set(prev)
                            newSet.delete(videoId)
                            return newSet
                        })
                    }
                })
            },
            { threshold: 0.5 }
        )

        // Observar todos os vídeos
        Object.values(videoRefs.current).forEach(video => {
            if (video) observer.observe(video)
        })

        return () => observer.disconnect()
    }, [])

    // Controlar play/pause dos vídeos baseado na visibilidade
    useEffect(() => {
        Object.entries(videoRefs.current).forEach(([id, video]) => {
            if (video) {
                if (visibleVideos.has(id)) {
                    video.play().catch(() => { })
                } else {
                    video.pause()
                }
            }
        })
    }, [visibleVideos])

    useEffect(() => {
        if (!containerRef.current) return

        // Animação de entrada dos cards
        const cards = containerRef.current.querySelectorAll('.media-card')

        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 60,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

    }, [])

    const openModal = (media: any) => {
        setSelectedMedia(media)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedMedia(null)
        document.body.style.overflow = 'unset'
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            {/* Conteúdo Principal */}
            <div ref={containerRef} className="container mx-auto px-4 py-8">
                {/* Estatísticas */}
                <div className="text-center mb-12 pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        {[
                            { number: '8+', label: 'Anos Exp' },
                            { number: '500+', label: 'Tatuagens' },
                            { number: '100%', label: 'Satisfação' },
                            { number: portfolioMedia.length, label: 'No Portfólio' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
                                <div className="text-2xl font-bold text-white">{stat.number}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid de Mídia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {portfolioMedia.map((media, index) => (
                        <div
                            key={`${media.src}-${index}`}
                            className="media-card group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer"
                            onClick={() => openModal(media)}
                        >
                            {/* Overlay de informações */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-2 py-1 bg-white text-black text-xs font-bold rounded-full mb-2">
                                        {media.category}
                                    </span>
                                    <p className="text-white text-sm line-clamp-2">{media.alt}</p>
                                </div>
                            </div>

                            {/* Indicador de tipo */}
                            <div className="absolute top-3 right-3 z-20">
                                <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                                    <span className="text-xs font-medium">
                                        {media.type === 'video' ? '🎥 Vídeo' : '🖼 Foto'}
                                    </span>
                                </div>
                            </div>

                            {/* Play button para vídeos */}
                            {media.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <Play size={24} weight="fill" className="text-white ml-1" />
                                    </div>
                                </div>
                            )}

                            {/* Conteúdo de mídia */}
                            {media.type === 'image' ? (
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={media.src}
                                        alt={media.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ) : (
                                <video
                                    ref={el => {
                                        if (el) videoRefs.current[media.src] = el
                                    }}
                                    data-video-id={media.src}
                                    src={media.src}
                                    className="w-full aspect-square object-cover"
                                    muted={isMuted}
                                    loop
                                    playsInline
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedMedia && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        {/* Botão fechar */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 z-50 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Controles de vídeo */}
                        {selectedMedia.type === 'video' && (
                            <div className="absolute top-4 left-4 z-50 flex gap-2">
                                <button
                                    onClick={toggleMute}
                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    {isMuted ? <SpeakerSimpleX size={20} /> : <SpeakerSimpleHigh size={20} />}

                                </button>
                            </div>
                        )}

                        {/* Conteúdo do modal */}
                        <div className="bg-gray-800 rounded-2xl overflow-hidden">
                            {selectedMedia.type === 'image' ? (
                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={selectedMedia.src}
                                        alt={selectedMedia.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <video
                                    src={selectedMedia.src}
                                    className="w-full h-[70vh] object-contain"
                                    autoPlay
                                    muted={isMuted}
                                    controls
                                    loop
                                />
                            )}

                            {/* Informações no modal */}
                            <div className="p-6 border-t border-gray-700">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-white text-black text-sm font-bold rounded-full">
                                        {selectedMedia.category}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {selectedMedia.type === 'video' ? 'Vídeo' : 'Foto'}
                                    </span>
                                </div>
                                <p className="text-white text-lg">{selectedMedia.alt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/4.png"
                                alt="Arruas Tattoo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Ricardo Arruas</h3>
                            <p className="text-gray-400 mb-4">Tatuador Profissional • Especialista em Realismo e Blackwork</p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://www.instagram.com/arruas_tattoo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform"
                                >
                                    <InstagramLogo size={20} />
                                    Seguir no Instagram
                                </a>
                                <a
                                    href="https://wa.me/5561995668686"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <WhatsappLogo size={20} />
                                    Agendar Consulta
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}