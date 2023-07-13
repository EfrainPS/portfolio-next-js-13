import parse from 'html-react-parser'

import styles from "./Skills.module.css"
import SkillsCard from "@/components/common/SkillsCard/SkillsCard"

export default function Skills({ content }) {
    const initialData = content
    return (
        <section id='skills' className={styles.container}>
            <h3 className={styles.title}>
                {initialData.title_page}
            </h3>
            <p className={styles.paragraph}>
                {parse(initialData.desc_page)}
            </p>
            {initialData.skills.map(
                (skillsGroup) => (
                    <SkillsCard key={skillsGroup.type_skill} skillsGroup={skillsGroup}/>
                )
            )}
        </section>
    )
}