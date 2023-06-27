import style from "./ProjectCard.module.css"

import Button from "../Button/Button"
import StyledImage from "../StyledImage/StyledImage"

const typeLabel = {
    frontend: {
        label: "Frontend",
        styleApplied: style.isFrontend
    },
    data_science: {
        label: "Data Science",
        styleApplied: style.isDataScience
    },
    backend: {
        label: "Backend",
        styleApplied: style.isBackend
    },
    dataviz: {
        label: "Data Visualization",
        styleApplied: style.isDataViz
    }
}


export default function ProjectCard({ title, short_desc, url_image, alt_image, type, url_code, url_online_site, used_technologies }) {
    const selectedLabel = typeLabel[type]

    return (
        <div className={style.card__container}>
            <div className={style.card__image}>
                <StyledImage
                    objectFitValue="cover"
                    srcValue={url_image}
                    altValue={alt_image}
                />
            </div>
            <div className={style.card__content}>
                <span className={selectedLabel.styleApplied}>{selectedLabel.label}</span>
                <h3>
                    {title}
                </h3>
                <p className={style.card__paragraph}>
                    {short_desc}
                </p>
                <section className={style.card__technologies}>
                    {
                        used_technologies.map(
                            (technology) => (
                                <div className={style.card__technologies_object}>
                                    <StyledImage
                                        objectFitValue="contain"
                                        srcValue={`/tools_icons/${technology.name_image}`}
                                        altValue={technology.label}
                                    />
                                </div>
                            )
                        )
                    }
                </section>
                <Button content={"Ver código"} isHighlighted={true} url={url_code} />
                {
                    url_online_site ?
                        <Button content={"Ver sitio"} url={url_online_site} /> :
                        null
                }

            </div>
        </div>
    )
}