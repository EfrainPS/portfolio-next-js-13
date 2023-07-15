import parse from 'html-react-parser'

import styles from './MainSection.module.css'

import Button from '@/components/common/Button/Button'
import StyledImage from '@/components/common/StyledImage/StyledImage'

export default function MainSection({ content }) {
    const initialData = content

    return (
        <section className={styles.main_presentation} id='home'>
            <div className={styles.left_pane}>
                <h1>
                    {initialData.principal_title}
                </h1>
                <h2>
                    {initialData.secundary_title}
                </h2>
                <p>
                    {parse(initialData.presentation)}
                </p>
                {
                    initialData.buttons.map(
                        (button) => (
                            <Button content={button.label} isHighlighted={button.isHighlighted} url={button.url} />
                        )
                    )
                }
            </div>
            <div className={styles.right_pane}>
                <StyledImage
                    objectFitValue="contain"
                    srcValue={`/images/main_page/main_image.svg`}
                    altValue="main_image"
                />
            </div>
        </section>
    )
}
