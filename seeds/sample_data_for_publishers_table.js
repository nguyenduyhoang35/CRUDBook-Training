
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        { name : 'NXb', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'NXb', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'NXb', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'NXb', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'NXb', address : 'phuc thakneng', phone_number : '0988735492'}
      ]);
    });
};
