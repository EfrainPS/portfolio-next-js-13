import parse from 'html-react-parser'

import commonStyles from "../styles/CommoStyles.module.css"
import style from "./ProjectCard.module.css"

import Button from "../Button/Button"
import StyledImage from "../StyledImage/StyledImage"

import AnimatedIcon from '../AnimatedIcon/AnimatedIcon'

const typeLabel = {
    frontend: {
        label: "Frontend",
        styleApplied: commonStyles.isFrontend
    },
    data_science: {
        label: "Data Science",
        styleApplied: commonStyles.isDataScience
    },
    backend: {
        label: "Backend",
        styleApplied: commonStyles.isBackend
    },
    dataviz: {
        label: "Data Visualization",
        styleApplied: commonStyles.isDataViz
    }
}


export default function ProjectCard({ title, short_desc, name_image, alt_image, type, used_technologies, buttons }) {
    const selectedLabel = typeLabel[type]

    return (
        <div className={style.card__container}>
            <div className={style.card__image}>
                <StyledImage
                    objectFitValue="cover"
                    srcValue={`/images/projects/${name_image}`}
                    altValue={alt_image}
                />
            </div>
            <div className={style.card__content}>
                <span className={selectedLabel.styleApplied}>{selectedLabel.label}</span>
                <h3>
                    {title}
                </h3>
                <p>
                    {parse(short_desc)}
                </p>
                <section className={style.card__technologies}>
                    {
                        used_technologies.map(
                            (technology) => (
                                <div className={style.card__container_each_icon}>
                                    <AnimatedIcon
                                        icon={technology.name_image}
                                        label={technology.label}
                                        style={selectedLabel.styleApplied}
                                    />
                                </div>
                            )
                        )
                    }
                </section>
                {
                    buttons.map(
                        (button) => (
                            button.url ? <Button content={button.label} url={button.url} isHighlighted={button.isHighlighted} /> : null
                        )
                    )
                }
                {

                }

            </div>
        </div>
    )
}