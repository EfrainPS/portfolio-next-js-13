import style from "./SkillsCard.module.css"
import StyledImage from "../StyledImage/StyledImage"

const typeSkillsGroup = {
    frontend: {
        label: "Front- \n end",
        styleApplied: style.isFrontend
    },
    data_science: {
        label: "Data \n Science",
        styleApplied: style.isDataScience
    },
    backend: {
        label: "Back- \n end",
        styleApplied: style.isBackend
    },
    dataviz: {
        label: "Data- \n Viz",
        styleApplied: style.isDataViz
    }
}

export default function SkillsCard({ skillsGroup }) {
    const selectedSkillsGroup = typeSkillsGroup[skillsGroup.type_skill]

    return (
        <div className={style.card__container}>
            <div className={`${style.card__image} ${selectedSkillsGroup.styleApplied}`}>
                {selectedSkillsGroup.label}
            </div>
            <div className={style.card__content}>
                <div className={style.card__group_icons_container}>
                    {skillsGroup.collection_skills.map(
                        (skill) => (
                            <div className={style.card__icons_container} key={skill.label}>
                                <div className={`${style.card__icon} ${selectedSkillsGroup.styleApplied}`}>
                                    <StyledImage
                                        srcValue={`/images/tools_icons/${skill.name_image}`}
                                        altValue={skill.label}
                                        objectFitValue={"contain"}
                                    />
                                </div>
                                <span className={style.card__icon_label}>
                                    {skill.label}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}