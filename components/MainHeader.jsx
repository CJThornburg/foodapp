import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import classes from './mainHeader.module.css'

export default function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image priority src={logoImg} alt='A plate with good looking food on it' />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals">Browse Meals</Link></li>
                        <li><Link href="/community">Foddies Community</Link></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
