'use client'

import style from "./Navbar.module.css"
import { useState, useEffect } from 'react';
import Image from "next/image";

const navBarList = [
    {
        title: "Inicio",
        href: "#home"
    },
    {
        title: "Proyectos",
        href: "#projects"
    },
    {
        title: "Habilidades",
        href: "#skills"
    },
    {
        title: "Educación",
        href: "#education"
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
                <div className={active ? style.navbar__list : style.navbar__list_hide}>
                    {navBarList.map(
                        (item) =>
                        (
                            <a href={item.href} className={style.navbar__object_list} onClick={() => activeNavbar()}>
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