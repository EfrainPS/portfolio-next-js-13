import Image from 'next/image'
import styles from './MainSection.module.css'

export default function MainSection() {
    return (
        <section className={styles.main_presentation} id='home'>
            <div className={styles.left_pane}>
                <h1 className={styles.title__principal}>
                    Efrain Pizarro
                </h1>
                <h3 className={styles.title__secundary}>
                    Ingeniero Multimedia
                </h3>
                <p className={styles.paragraph__main}>
                    ¡Hola! Soy un apasionado de los datos, el desarrollo web y el diseño gráfico. Actualmente, me encuentro en un emocionante camino que combina habilidades de desarrollador de BI, ingeniero de datos y científico de datos.
                </p>
            </div>
            <div className={styles.right_pane}>
                <Image
                    src="/main_page/main_image_3.webp"
                    alt='main_image'
                    width={400}
                    height={300}
                    layout='responsive'
                />
            </div>
        </section>
    )
}
