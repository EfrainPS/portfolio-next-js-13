import styles from './MainSection.module.css'

import Button from '@/components/common/Button/Button'
import StyledImage from '@/components/common/StyledImage/StyledImage'

const mainData = [
    {
        principal_title: "Efrain Pizarro",
        secundary_title: "Ingeniero Multimedia",
        presentation: "¡Hola! Soy un apasionado de los datos, el desarrollo web y el diseño gráfico. Actualmente, me encuentro en un emocionante camino que combina habilidades de desarrollador de BI, ingeniero de datos y científico de datos."
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
                <Button content={"Contáctame"} />
            </div>
            <div className={styles.right_pane}>
                <StyledImage
                    objectFitValue="contain"
                    srcValue={`/main_page/main_image_${numberRandom()}.webp`}
                    altValue="main_image"
                />
            </div>
        </section>
    )
}
