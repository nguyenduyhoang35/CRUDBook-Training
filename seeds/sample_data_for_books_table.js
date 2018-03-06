
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title : 'dragon ball', author : 'toi ra', publisher_id : 1, price : 8.6},
        {title : 'dragon ball', author : 'toi ra', publisher_id : 2, price : 8.6},
        {title : 'dragon ball', author : 'toi ra', publisher_id : 3, price : 8.6},
        {title : 'dragon ball', author : 'toi ra', publisher_id : 2, price : 8.6},
        {title : 'dragon ball', author : 'toi ra', publisher_id : 1, price : 8.6},
      ]);
    });
};
