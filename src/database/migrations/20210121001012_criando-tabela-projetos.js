
exports.up = knex => knex.schema.createTable('projetos', table => {
    table.increments('id')
    table.text('titulo')

    //relacionamento
    // 1 p N
    table.integer('id_usuario').references('usuarios.id').notNullable().onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('projetos')