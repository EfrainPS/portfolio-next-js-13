import parse from 'html-react-parser'

import styles from "./Projects.module.css"
import ProjectCard from "../../common/ProjectCard/ProjectCard"


export default function Projects({ content }) {
    const initialData = content

    return (
        <section id='projects' className={styles.container}>
            <h2 className={styles.title}>
                {initialData.title_page}
            </h2>
            <p>
                {parse(initialData.desc_page)}
            </p>
            {
                initialData.projects.map(
                    (project) => (
                        <ProjectCard
                            key={project.title_project}
                            title={project.title_project}
                            short_desc={project.short_desc_project}
                            name_image={project.name_image_project}
                            alt_image={project.alt_image_project}
                            type={project.type_project}
                            url_code={project.url_code_project}
                            url_online_site={project.url_online_site_project}
                            used_technologies={project.used_technologies}
                            buttons={project.button}
                        />
                    )
                )
            }
        </section>
    )
}
