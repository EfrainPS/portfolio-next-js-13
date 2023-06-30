import styles from "./Skills.module.css"
import SkillsCard from "@/components/common/SkillsCard/SkillsCard"

const skillsList = [
    {
        title_page: "Habilidades",
        desc_page: "En esta sección vamos a hablar de mis habilidades... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        skills: [
            {
                type_skill: "frontend",
                collection_skills: [
                    {
                        label: "Next JS",
                        name_image: "nextjs.png"
                    },
                    {
                        label: "React JS",
                        name_image: "reactjs.png"
                    }
                ]
            },
            {
                type_skill: "backend",
                collection_skills: [
                    {
                        label: "Firebase",
                        name_image: "firebase.png"
                    },
                    {
                        label: "Node js",
                        name_image: "nodejs.png"
                    },
                    {
                        label: "Fast API",
                        name_image: "fastapi.png"
                    }
                ]
            },
            {
                type_skill: "dataviz",
                collection_skills: [
                    {
                        label: "Power BI",
                        name_image: "powerbi.png"
                    },
                    {
                        label: "Looker",
                        name_image: "looker.png"
                    },
                    {
                        label: "Spotfire",
                        name_image: "spotfire.png"
                    }
                ]
            },
            {
                type_skill: "data_science",
                collection_skills: [
                    {
                        label: "Python",
                        name_image: "python.png"
                    },
                    {
                        label: "MySQL",
                        name_image: "mysql.png"
                    },
                    {
                        label: "Postgre- \n SQL",
                        name_image: "postgresql.png"
                    }
                ]
            }
        ]
    }
]

export default function Skills() {
    const initialData = skillsList[0]
    return (
        <section id='skills' className={styles.container}>
            <h3 className={styles.title}>
                {initialData.title_page}
            </h3>
            <p className={styles.paragraph}>
                {initialData.desc_page}
            </p>
            {initialData.skills.map(
                (skillsGroup) => (
                    <SkillsCard skillsGroup={skillsGroup}/>
                )
            )}
        </section>
    )
}