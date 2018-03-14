
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title : 'Dragon ball', author : 'toi ra', publisher_id : 1, price : 8.6},
        {title : 'Ninja', author : 'toi ra', publisher_id : 2, price : 8.6},
        {title : 'Yai', author : 'toi ra', publisher_id : 3, price : 8.6},
        {title : 'Dr.slump', author : 'toi ra', publisher_id : 2, price : 8.6},
        {title : 'One Punch Man', author : 'toi ra', publisher_id : 1, price : 8.6},
      ]);
    });
};
