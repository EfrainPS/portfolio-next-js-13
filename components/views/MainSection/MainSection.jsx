import parse from 'html-react-parser'

import styles from './MainSection.module.css'

import Button from '@/components/common/Button/Button'
import StyledImage from '@/components/common/StyledImage/StyledImage'

export default function MainSection({ content }) {
    const initialData = content

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
                    {parse(initialData.presentation)}              
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
