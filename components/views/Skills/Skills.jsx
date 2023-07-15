import parse from 'html-react-parser'

import styles from "./Skills.module.css"
import SkillsCard from "@/components/common/SkillsCard/SkillsCard"

export default function Skills({ content }) {
    const initialData = content
    return (
        <section id='skills' className={styles.container}>
            <h2 className={styles.title}>
                {initialData.title_page}
            </h2>
            <p>
                {parse(initialData.desc_page)}
            </p>
            <div className={styles.skills__container}>
                {initialData.skills.map(
                    (skillsGroup) => (
                        <SkillsCard key={skillsGroup.type_skill} skillsGroup={skillsGroup} />
                    )
                )}
            </div>
        </section>
    )
}