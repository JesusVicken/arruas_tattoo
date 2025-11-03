'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
    {
        src: "https://img.freepik.com/fotos-gratis/doca-de-madeira-marrom_198523-110.jpg",
        alt: "Montanha e lago"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/campo-de-grama-marrom-sob-o-ceu-preto-durante-a-noite_198169-398.jpg?uid=R87926345&ga=GA1.1.407330938.1746885944&semt=ais_hybrid&w=740",
        alt: "Rio e floresta"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/paisagem-paisagem-pico-colina-famosa_1417-42.jpg",
        alt: "Floresta verde"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/estrada-ao-lado-da-arvore-durante-a-hora-dourada_395237-104.jpg",
        alt: "Estrada dourada"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/umido-vietnam-montanha-fluxo-fluxo-rural_1417-1357.jpg",
        alt: "Campo vietnamita"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/paisagem-de-outono-da-estrada-florestal_23-2151843640.jpg?uid=R87926345&ga=GA1.1.407330938.1746885944&semt=ais_hybrid&w=740",
        alt: "Outono na estrada"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/velho-conceito-de-cidade-ocidental_23-2150527846.jpg?uid=R87926345&ga=GA1.1.407330938.1746885944&semt=ais_hybrid&w=740",
        alt: "Cidade antiga"
    },
    {
        src: "https://img.freepik.com/fotos-gratis/ponte-de-madeira-em-um-campo-com-um-lago-durante-o-por-do-sol-em-portugal_181624-10560.jpg?uid=R87926345&ga=GA1.1.407330938.1746885944&semt=ais_hybrid&w=740",
        alt: "Pôr do sol na ponte"
    }
]

export default function ConsultaDomiciliarPage() {
    const sliderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sliderRef.current || !wrapperRef.current) return

        const slider = sliderRef.current
        const slides = Array.from(slider.children) as HTMLDivElement[]

        const waitForImages = new Promise<void>((resolve) => {
            let loadedCount = 0
            slides.forEach(slide => {
                const img = slide.querySelector("img")
                if (!img) return
                if (!img.complete) {
                    img.onload = img.onerror = () => {
                        loadedCount++
                        if (loadedCount === slides.length) resolve()
                    }
                } else {
                    loadedCount++
                    if (loadedCount === slides.length) resolve()
                }
            })
        })

        waitForImages.then(() => {
            const totalWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth + 10, 0) + window.innerWidth * 0.6

            const panData = slides.map(slide => {
                const img = slide.querySelector("img")!
                const scaledImgWidth = img.naturalWidth * (slide.clientHeight / img.naturalHeight)
                const overflowX = scaledImgWidth - slide.clientWidth
                return {
                    img,
                    overflowX: overflowX > 0 ? overflowX : 0,
                }
            })

            gsap.to(slider, {
                x: -(totalWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    pin: true,
                    scrub: true,
                    end: "+=" + ((totalWidth - window.innerWidth) * 3 + window.innerWidth * 0.3),
                    onUpdate: self => {
                        panData.forEach(data => {
                            if (data.overflowX > 0) {
                                data.img.style.transform = `translateX(${-data.overflowX * self.progress}px)`
                            }
                        })
                    }
                }
            })

            window.addEventListener("resize", () => {
                ScrollTrigger.refresh()
            })
        })
    }, [])

    return (
        <div ref={wrapperRef} className="wrapper h-screen overflow-hidden">
            <div ref={sliderRef} className="slider flex items-center will-change-transform px-[30vw]">
                {images.map((img, i) => (
                    <div key={i} className="slide relative flex-shrink-0 mx-1 overflow-hidden rounded-xl w-[300px] h-[45vh] md:w-[250px] md:h-[40vh] lg:w-[300px] lg:h-[45vh]">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-auto min-w-[130%] h-full object-cover select-none pointer-events-none will-change-transform"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
