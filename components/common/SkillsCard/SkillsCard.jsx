import style from "./SkillsCard.module.css"
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon"

const typeSkillsGroup = {
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
        label: "Data-Viz",
        styleApplied: style.isDataViz
    }
}

export default function SkillsCard({ skillsGroup }) {
    const selectedSkillsGroup = typeSkillsGroup[skillsGroup.type_skill]

    return (
        <div className={style.card__container}>
            <h3 className={`${style.card__image} ${selectedSkillsGroup.styleApplied}`}>
                {selectedSkillsGroup.label}
            </h3>
            <div className={style.card__content}>
                <div className={style.card__group_icons_container}>
                    {skillsGroup.collection_skills.map(
                        (skill) => (
                            <div className={style.card__container_each_icon}>
                                <AnimatedIcon
                                    key={skill.label}
                                    style={selectedSkillsGroup.styleApplied}
                                    icon={skill.name_image}
                                    label={skill.label}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}