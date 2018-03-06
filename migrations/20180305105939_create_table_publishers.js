exports.up = function (knex, Promise) {
    return knex.schema.createTable('publishers', function (table) {
        table.increments('id');
        table.string('name');
        table.string('address');
        table.string('phone_number');
        table.string('deleted_at');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('publishers');
};
