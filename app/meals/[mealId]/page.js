import Link from "next/link";

export default function SpecialMeal({params}) {
  return (
    <>
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <h2>
        {params.mealId}
      </h2>


    <ul>
    <li>

<Link href="/" style={{ color: 'white', textAlign: 'center' }}>Home</Link>

</li>
    <li>
    <Link href="/meals" style={{ color: 'white', textAlign: 'center' }}>Meals</Link>
    </li>
    <li>
    <Link href="/meals/share" style={{ color: 'white', textAlign: 'center' }}>Share</Link>
    </li>
    <li>
    <Link href="/community"style={{ color: 'white', textAlign: 'center' }}> Community</Link>
    </li>


    </ul>
    </main>

    </>
  );
  }
