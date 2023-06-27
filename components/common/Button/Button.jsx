import style from "./Button.module.css"

export default function Button({ content, isHighlighted, url }) {

    return (
        <a className={`${style.Button} 
            ${isHighlighted ? style.Button__main : style.Button__normal}`}
            href={url}
            target="_blank"
        >
            {content}
        </a>
    )
}