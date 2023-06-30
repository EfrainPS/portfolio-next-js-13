import styles from './MainSection.module.css'

import Button from '@/components/common/Button/Button'
import StyledImage from '@/components/common/StyledImage/StyledImage'

const mainData = [
    {
        principal_title: "Efrain Pizarro",
        secundary_title: "Desarrollador Fullstack",
        presentation: "¡Hola! Soy un apasionado de los datos, el desarrollo web y el diseño gráfico. Actualmente, me encuentro en un emocionante camino que combina habilidades de desarrollador de BI, ingeniero de datos y científico de datos.",
        buttons: [
            {
                label: "Hablemos",
                isHighlighted: true,
                url: "https://www.linkedin.com/in/efrain-pizarro-soto/"
            },
            {
                label: "Mira mi CV",
                isHighlighted: false,
                url: "/documents/CV_EFRAIN_PIZARRO.pdf"
            }
        ]
    }
]

export default function MainSection() {
    const initialData = mainData[0]

    
    const numberRandom = () => {
        return Math.floor(Math.random() * 4) + 1;
    }
    
    return (
        <section className={styles.main_presentation} id='home'>
            <div className={styles.left_pane}>
                <h1 className={styles.title__principal}>
                    {initialData.principal_title}
                </h1>
                <h3 className={styles.title__secundary}>
                    {initialData.secundary_title}
                </h3>
                <p className={styles.paragraph__main}>
                    {initialData.presentation}
                </p>
                {
                    initialData.buttons.map(
                        (button) => (
                            <Button content={button.label} isHighlighted={button.isHighlighted} url={button.url}/>
                        )
                    )
                }
            </div>
            <div className={styles.right_pane}>
                <StyledImage
                    objectFitValue="contain"
                    srcValue={`/images/main_page/main_image_${numberRandom()}.webp`}
                    altValue="main_image"
                />
            </div>
        </section>
    )
}
