import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import classes from './mainHeader.module.css'
import MainHeaderBackground from './MainHeaderBackground'
import NavLink from './nav-link'

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />           <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image priority src={logoImg} alt='A plate with good looking food on it' />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href="/meals" >Browse Meals</NavLink></li>
                        <li><NavLink href="/community">Foodies Community</NavLink></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
