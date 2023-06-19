'use client'

import Link from "next/link"
import style from "./Navbar.module.css"
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={show ? style.navbar: style.navbar__hide}>
            <div>
                <a href="#home" className={style.navbar__list}>Home</a>
                <a href="#projects" className={style.navbar__list}>Proyectos</a>
                <a href="#skills" className={style.navbar__list}>Habilidades</a>
                <a href="#education" className={style.navbar__list}>Educación</a>
            </div>
            <div>
                🧠
            </div>
        </header>
    )
}