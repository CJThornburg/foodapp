import Image from 'next/image';
import {notFound} from 'next/navigation'
import classes from './page.module.css'
import { getMeal } from '@/dataFetch/meals';

export default function SpecialMeal({params}) {
  const meal = getMeal(params.mealId)

  // stops rest for rendering and loads closest error or not found page
  // if error and not-found same level, not found has priority
  if (!meal){
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
      <Image ssrc={`https://chris-t-next-food-app-bucket.s3.amazonaws.com/${meal.image}`} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: meal.instructions,
      }}></p>
    </main>

    </>
  );
  }
