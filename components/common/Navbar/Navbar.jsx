'use client'

import style from "./Navbar.module.css"
import { useState, useEffect } from 'react';

const navBarList = [
    {
        title: "Inicio",
        href: "#home",
        active: true
    },
    {
        title: "Proyectos",
        href: "#projects",
        active: true
    },
    {
        title: "Habilidades",
        href: "#skills",
        active: true
    },
    {
        title: "Educación",
        href: "#education",
        active: false
    },
]

export default function Navbar() {
    const [active, setActive] = useState(false)

    const activeNavbar = () => {
        setActive(!active)
    }

    return (
        <header className={style.navbar}>
            <nav>
                <div className={`${style.navbar__list} ${active ? null : style.hidden}`}>
                    {navBarList.map(
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
                    <div className="logo">
                        Mi Logo
                    </div>
                </div>
            </nav>
        </header>
    )
}