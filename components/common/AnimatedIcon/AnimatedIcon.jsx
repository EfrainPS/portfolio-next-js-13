import styles from "./AnimatedIcon.module.css"
import StyledImage from "../StyledImage/StyledImage"

export default function AnimatedIcon(props) {
    return (
        <div className={styles.card__icons_container}>
            <div className={`${styles.card__icon} ${props.style}`}>
                <StyledImage
                    srcValue={`/images/tools_icons/${props.icon}`}
                    altValue={props.label}
                    objectFitValue={"contain"}
                />
            </div>
            <span className={styles.card__icon_label}>
                {props.label}
            </span>
        </div>
    )
}