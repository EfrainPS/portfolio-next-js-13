import style from "./ReviewCard.module.css"
import StyledImage from "../StyledImage/StyledImage"

export default function reviewCard({ content }) {

    let user_image = content.photo === null ? "no_user_image.webp": content.photo
    let desc_review = content.desc_review
    let user = content.user 
    let role = content.role

    return (
        <section className={style.container}>
            <div className={style.review_section}>
                <div className={style.profile_image_container}>
                    <StyledImage
                        objectFitValue="cover"
                        srcValue={`/images/undefined/${user_image}`}
                        // srcValue={`/images/projects/${name_image}`}
                        altValue={"test"}
                    />
                </div>
                <p>
                    {desc_review}
                </p>
            </div>
            <div className={style.reviewer_info_section}>
                <h3>{user}</h3>
                <h4>{role}</h4>
            </div>
        </section>
    )
}