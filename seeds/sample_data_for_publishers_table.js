
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        { name : 'China', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'JaV', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'US', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'UK', address : 'phuc thang', phone_number : '0988735492'},
        { name : 'Eu', address : 'phuc thakneng', phone_number : '0988735492'}
      ]);
    });
};
