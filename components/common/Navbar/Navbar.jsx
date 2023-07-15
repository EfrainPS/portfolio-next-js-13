'use client'

import style from "./Navbar.module.css"
import { useState } from 'react';

import StyledImage from "../StyledImage/StyledImage";

export default function Navbar({ content }) {
    const initialData = content
    
    const [active, setActive] = useState(false)

    const activeNavbar = () => {
        setActive(!active)
    }

    return (
        <header className={style.navbar}>
            <nav>
                <div className={`${style.navbar__list} ${active ? null : style.hidden}`}>
                    {initialData["options"].map(
                        (item) =>
                        (
                            <a key={item.href} href={item.href} className={`${style.navbar__object_list} ${item.active ? null : style.disabled}`} onClick={() => activeNavbar()}>
                                {item.title}
                            </a>
                        )
                    )}
                </div>
                <div className={style.navbar__main_buttons}>
                    <a className={style.navbar__burguer_button} onClick={() => activeNavbar()}>
                        ...
                    </a>
                    <div className={style.navbar__logo}>
                        <StyledImage 
                            srcValue = {`/images/${initialData["logo"]}`}
                            altValue = {"logo"}
                            objectFitValue = {"contain"}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}