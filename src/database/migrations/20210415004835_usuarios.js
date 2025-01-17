
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table){
        table.increments('id').primary().notNullable();
        table.string('nome', 50).notNullable();
        table.string('telefone', 15).notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.integer('cargo_id').unsigned().notNullable();
        table.foreign('cargo_id').references('cargos.id');
        table.integer('ativo').defaultTo(1);
        table.timestamps();

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
