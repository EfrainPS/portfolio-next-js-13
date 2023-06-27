import Image from 'next/image'
import style from "./StyledImage.module.css"

export default function StyledImage(props) {
    return (
        <div className={style.card__image}>
            <Image
                src={props.srcValue}
                alt={props.altValue}
                sizes="100vw"
                fill={true}
                style={{ objectFit: props.objectFitValue }}
            />
        </div>
    )
}