import style from "./CallToAction.module.css"
import parse from 'html-react-parser'

import Button from "@/components/common/Button/Button"

export default function CallToAction({ content }) {
    return (
        <div id="contact" className={style.container}>
            <h3>
                {parse(content.message)}
            </h3>
            <h2>
                {parse(content.call_to_action_message)}
            </h2>
            <br></br>
            <Button content={content.button.label} isHighlighted={content.button.isHighlighted} url={content.button.url}/>
        </div>
    )
}