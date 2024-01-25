'use server'
import {redirect} from 'next/navigation'

import { saveMeal } from "./meals"
import { revalidatePath } from 'next/cache';

function isInvalidText(text){
  return  !text || text.trim() === '';
}

export async function shareMeal(prevState,formData) {


    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal)
    // next step would be to save this object to a db

    // SOME simple validation
    if (isInvalidText(meal.title)|| isInvalidText(meal.summary)|| isInvalidText(meal.instructions)|| isInvalidText(meal.creator)|| isInvalidText(meal.creator)||
    !meal.creator_email.includes('@')||
    !meal.image || meal.image.size === 0
    ) {
       return {message: 'invalid input.'};
    }

   await saveMeal(meal);
   revalidatePath('/meals');
   redirect('/meals');
}