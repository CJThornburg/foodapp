import Link from 'next/link';
import classes from './page.module.css';



export default function Meals() {
    return <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created {''} <span className={classes.highlight}>
          by you
        </span>
        <p>
          Choose your fav recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
        <Link href="/meals/share">
          Share Your Fav Recipe
        </Link>
        </p>
      </h1>
    </header>
      <main className={classes.main}>
      </main>
    </>
  }


  // (
  //   <main>
  //     <h1 style={{ color: 'white', textAlign: 'center' }}>
  //     Meals
  //     </h1>
  //     <ul>
  // <li>

  // <Link href="/" style={{ color: 'white', textAlign: 'center' }}>Home</Link>

  // </li>
  // <li>
  //    <Link href="/meals" style={{ color: 'white', textAlign: 'center' }}>Meals</Link>
  // </li>
  // <li>
  // <Link href="/meals/share" style={{ color: 'white', textAlign: 'center' }}>Share</Link>
  // </li>
  // <li>
  // <Link href="/community"style={{ color: 'white', textAlign: 'center' }}> Community</Link>
  // </li>


  // </ul>
  //   </main>
  // );
