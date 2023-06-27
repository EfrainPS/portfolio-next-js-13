
import styles from "./Projects.module.css"
import ProjectCard from "../../common/ProjectCard/ProjectCard"

const projectsList = [
    {
        title_page: "Proyectos",
        desc_page: "En esta sección vamos a hablar de los proyectos realizados... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        projects: [
            {
                title_project: "Proyecto 1",
                short_desc_project: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                url_image_project: "/projects/project_1.png",
                alt_image_project: "Image of project 1",
                type_project: "frontend",
                url_code_project: "https://github.com/EfrainPS/portfolio-next-js-13",
                url_online_site_project: "http://localhost:3000/",
                used_technologies:[
                    {
                        label: "React JS",
                        name_image: "react.png"
                    },
                    {
                        label: "Next JS",
                        name_image: "nextjs.png"
                    },
                    {
                        label: "Firebase",
                        name_image: "firebase.png"
                    }
                ]

            },
            {
                title_project: "Proyecto 2",
                short_desc_project: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                url_image_project: "/projects/project_2.png",
                alt_image_project: "Image of project 2",
                type_project: "data_science",
                url_code_project: "https://github.com/EfrainPS/portfolio-next-js-13",
                used_technologies:[
                    {
                        label: "React JS",
                        name_image: "react.png"
                    }
                ]
            },
            {
                title_project: "Proyecto 3",
                short_desc_project: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                url_image_project: "/projects/project_3.png",
                alt_image_project: "Image of project 3",
                type_project: "backend",
                url_code_project: "https://github.com/EfrainPS/portfolio-next-js-13",
                used_technologies:[
                    {
                        label: "Firebase",
                        name_image: "firebase.png"
                    }
                ]
            },
            {
                title_project: "Proyecto 4",
                short_desc_project: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                url_image_project: "/projects/project_4.png",
                alt_image_project: "Image of project 4",
                type_project: "dataviz",
                url_code_project: "https://github.com/EfrainPS/portfolio-next-js-13",
                url_online_site_project: "http://localhost:3000/",
                used_technologies:[
                    {
                        label: "Next JS",
                        name_image: "nextjs.png"
                    },
                    {
                        label: "Firebase",
                        name_image: "firebase.png"
                    }
                ]
            },
        ]
    },
]

export default function Projects() {
    const initialData = projectsList[0]

    return (
        <section id='projects' className={styles.container}>
            <h3 className={styles.title}>
                {initialData.title_page}
            </h3>
            <p className={styles.paragraph}>
                {initialData.desc_page}
            </p>
            {
                initialData.projects.map(
                    (project) => (
                        <ProjectCard
                            title={project.title_project}
                            short_desc={project.short_desc_project}
                            url_image={project.url_image_project}
                            alt_image={project.alt_image_project}
                            type={project.type_project}
                            url_code={project.url_code_project}
                            url_online_site={project.url_online_site_project}
                            used_technologies={project.used_technologies}
                        />
                    )
                )
            }
        </section>
    )
}
