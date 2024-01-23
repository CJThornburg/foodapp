import sql from 'better-sqlite3'

// establish connection
const db = sql('meals.db')
// can now tap into db to preform actions on db

export  function getMeals() {
    return db.prepare('SELECT * FROM meals').all();
    // multiple rows = .all()
    // single row = .get()
    // writing(?) .run()
}
