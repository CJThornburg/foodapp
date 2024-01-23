import classes from './meals-grid.module.css'

export default function MealsGrid({meals}) {
  return (
    <ul className={classes.meals}>
        {meals.map(male => <li key={meals.id}
        meal details
        ></li>)}
    </ul>
  )
}
