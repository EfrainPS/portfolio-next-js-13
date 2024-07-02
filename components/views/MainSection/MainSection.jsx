import parse from 'html-react-parser'

import styles from './MainSection.module.css'

import Button from '../../common/Button/Button'
import StyledImage from '../../common/StyledImage/StyledImage'

export default function MainSection({ content }) {
    const initialData = content

    return (
        <section className={styles.main_presentation} id='home'>
            <div className={styles.image_container}>
                <StyledImage
                    objectFitValue="contain"
                    srcValue={`/images/main_page/yo-feliz.png`}
                    altValue="main_image"
                />
            </div>
            <div className={styles.container_label}>
                <span id={styles.icon_open}>
                    &#9679;
                </span>
                <span>
                    Open to work
                </span>
            </div>
            <h1>
                {initialData.principal_title}
            </h1>
            <h2>
                {initialData.secundary_title}
            </h2>
            <p>
                {parse(initialData.presentation)}
            </p>
            <div className={styles.button_container}>
                {
                    initialData.buttons.map(
                        (button) => (
                            <div className={styles.each_button}>
                                <Button content={button.label} isHighlighted={button.isHighlighted} url={button.url} />
                            </div>
                        )
                    )
                }
            </div>
        </section>
    )
}
