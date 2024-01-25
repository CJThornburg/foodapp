import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
// establish connection with s3 and db
const s3 = new S3({
    region: 'us-east-1'
  });
const db = sql('meals.db')
// can now tap into db to preform actions on db

export async function getMeals() {
    await new Promise ((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM meals').all();
    // multiple rows = .all()
    // single row = .get()
    // writing(?) .run()
}


export function getMeal(slug) {
 return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'chris-t-next-food-app-bucket',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });


  meal.image = fileName;

    db.prepare(`
    INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES
        (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )
    `).run(meal)
}
