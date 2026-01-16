"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const equipmentImages = [
    { src: "/equipments/irr.jpeg", alt: "IRR Equipment" },
    { src: "/equipments/ultrasound.jpeg", alt: "Ultrasound Equipment" },
    { src: "/equipments/various.jpeg", alt: "Various Physiotherapy Equipment" },
    { src: "/equipments/wax.jpeg", alt: "Wax Therapy Equipment" },
]

export function EquipmentCarousel() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {equipmentImages.map((image, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="overflow-hidden border-0 shadow-lg">
                                    <CardContent className="flex aspect-square items-center justify-center p-0 relative h-64 md:h-80 w-full">
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform hover:scale-105 duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-blue-900 text-white hover:bg-blue-800 border-none" />
                <CarouselNext className="hidden md:flex bg-blue-900 text-white hover:bg-blue-800 border-none" />
            </Carousel>
        </div>
    )
}
