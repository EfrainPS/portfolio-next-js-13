"use client"
import style from "./Reviews.module.css"
import EmblaCarousel from "../../common/EmblaCarousel/emblaCarousel"

import ReviewCard from "@/components/common/ReviewCard/ReviewCard"

const OPTIONS = { loop: true }

export default function reviews ({ content }) {
    return(
        <section id='reviews' className={style.container}>
            <h1>
                {content.title_page}
            </h1>
            <EmblaCarousel slides={content.reviews} options={OPTIONS}/>
        </section>
    )
}