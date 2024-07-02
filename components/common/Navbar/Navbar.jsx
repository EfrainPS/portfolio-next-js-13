'use client'

import style from "./Navbar.module.css"
import { useState, useEffect } from 'react';

import StyledImage from "../StyledImage/StyledImage";

export default function Navbar({ content }) {
    const initialData = content;

    const [active, setActive] = useState(false)

    const activeNavbar = () => {
        setActive(!active)
    }

    const [isHomeVisible, setIsHomeVisible] = useState(false)
    const [isProjectVisible, setIsProjectVisible] = useState(false)
    const [isReviewVisible, setIsReviewVisible] = useState(false)
    const [isSkillsVisible, setIsSkillsVisible] = useState(false)
    const [isContactVisible, setIsContactVisible] = useState(false)

    const arrayStates = [
        {
            section: "home",
            stateName: isHomeVisible,
            setStateFuntion: setIsHomeVisible
        },
        {
            section: "projects",
            stateName: isProjectVisible,
            setStateFuntion: setIsProjectVisible
        },
        {
            section: "reviews",
            stateName: isReviewVisible,
            setStateFuntion: setIsReviewVisible
        },
        {
            section: "skills",
            stateName: isSkillsVisible,
            setStateFuntion: setIsSkillsVisible
        },
        {
            section: "contact",
            stateName: isContactVisible,
            setStateFuntion: setIsContactVisible
        },
    ]


    useEffect(() => {

        arrayStates.map(
            (element) => {
                let configSection = initialData.options.filter((option) => option.href === element.section)

                if (configSection.active) {
                    const checkSectionVisibility = (entries) => {
                        if (entries[0].isIntersecting) {

                            setIsHomeVisible(false)
                            setIsProjectVisible(false)
                            setIsReviewVisible(false)
                            setIsContactVisible(false)
                            setIsSkillsVisible(false)

                            element.setStateFuntion(true)
                        }
                    }

                    let observer = new IntersectionObserver(checkSectionVisibility, { threshold: 0.3 }); //threshold is the percent of this element showed.
                    let section = document.getElementById(element.section)

                    observer.observe(section);
                }
            }
        )
    })

    return (
        <header className={style.navbar}>
            <nav>
                <div className={`${style.navbar__list} ${active ? null : style.hidden}`}>
                    {initialData["options"].map(
                        (item) => {
                            const selectedSection = arrayStates.filter((element) => (element.section === item.href))

                            return item.active ?
                                <a key={item.href} href={`#${item.href}`} className={`${style.navbar__object_list} ${selectedSection[0].stateName ? style.highlighted : null}`} onClick={() => activeNavbar()}>
                                    {item.title}
                                </a> : null
                        }
                    )}
                </div>
                <div className={style.navbar__main_buttons}>
                    <a className={`${style.navbar__burguer_button} ${isReviewVisible ? style.highlighted : null}`} onClick={() => activeNavbar()}>
                        ...
                    </a>
                    <div className={style.navbar__logo}>
                        <StyledImage
                            srcValue={`/images/${initialData["logo"]}`}
                            altValue={"logo"}
                            objectFitValue={"contain"}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}