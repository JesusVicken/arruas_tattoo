'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const media = [
    { src: '/tatoo1.jpeg', type: 'image', alt: 'Foto 1' },
    { src: '/arruas1.mp4', type: 'video', alt: 'Vídeo 1' },
    { src: '/tatoo2.jpeg', type: 'image', alt: 'Foto 2' },
    { src: '/tatoo4.jpeg', type: 'image', alt: 'Foto 3' },
    { src: '/arruas2.mp4', type: 'video', alt: 'Vídeo 2' },
    { src: '/tatoo5.jpeg', type: 'image', alt: 'Foto 4' },
    { src: '/bg2.mp4', type: 'video', alt: 'Vídeo 3' },
    { src: '/arruas4.mp4', type: 'video', alt: 'Video 5' },
    { src: '/arruas3.mp4', type: 'video', alt: 'Vídeo 4' },
]

export default function ConsultaDomiciliarPage() {
    const sliderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sliderRef.current || !wrapperRef.current) return

        const slider = sliderRef.current
        const slides = Array.from(slider.children) as HTMLDivElement[]

        // Espera todas as imagens e vídeos carregarem
        const waitForMedia = new Promise<void>((resolve) => {
            let loadedCount = 0
            const total = slides.length

            slides.forEach((slide) => {
                const mediaEl = slide.querySelector('img, video') as
                    | HTMLImageElement
                    | HTMLVideoElement
                    | null
                if (!mediaEl) return

                if (mediaEl.tagName === 'IMG') {
                    const img = mediaEl as HTMLImageElement
                    if (!img.complete) {
                        img.onload = img.onerror = () => {
                            loadedCount++
                            if (loadedCount === total) resolve()
                        }
                    } else {
                        loadedCount++
                        if (loadedCount === total) resolve()
                    }
                } else if (mediaEl.tagName === 'VIDEO') {
                    const video = mediaEl as HTMLVideoElement
                    video.onloadedmetadata = () => {
                        loadedCount++
                        if (loadedCount === total) resolve()
                    }
                }
            })
        })

        waitForMedia.then(() => {
            const totalWidth =
                slides.reduce((acc, slide) => acc + slide.offsetWidth + 10, 0) +
                window.innerWidth * 0.6

            const panData = slides.map((slide) => {
                const img = slide.querySelector('img') as HTMLImageElement | null
                if (!img) return { overflowX: 0 }

                const scaledImgWidth =
                    img.naturalWidth * (slide.clientHeight / img.naturalHeight)
                const overflowX = scaledImgWidth - slide.clientWidth
                return { img, overflowX: overflowX > 0 ? overflowX : 0 }
            })

            // Animação principal com GSAP
            gsap.to(slider, {
                x: -(totalWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    pin: true,
                    scrub: true,
                    end:
                        '+=' +
                        ((totalWidth - window.innerWidth) * 3 + window.innerWidth * 0.3),
                    onUpdate: (self) => {
                        panData.forEach((data) => {
                            if (data.img && data.overflowX > 0) {
                                data.img.style.transform = `translateX(${-data.overflowX * self.progress
                                    }px)`
                            }
                        })
                    },
                },
            })

            window.addEventListener('resize', () => {
                ScrollTrigger.refresh()
            })
        })
    }, [])

    return (
        <div
            ref={wrapperRef}
            className="wrapper h-screen overflow-hidden bg-black flex justify-start items-center relative"
        >
            <div
                ref={sliderRef}
                className="slider flex items-center will-change-transform px-[30vw]"
            >
                {media.map((item, i) => (
                    <div
                        key={i}
                        className="slide relative flex-shrink-0 mx-[5px] overflow-hidden rounded-xl w-[300px] h-[45vh] md:w-[250px] md:h-[40vh] lg:w-[300px] lg:h-[45vh]"
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="block w-auto min-w-[130%] h-full object-cover select-none pointer-events-none will-change-transform"
                                draggable={false}
                            />
                        ) : (
                            <video
                                src={item.src}
                                className="block w-auto min-w-[130%] h-full object-cover rounded-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
