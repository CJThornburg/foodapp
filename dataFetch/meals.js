import sql from 'better-sqlite3'

// establish connection
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
