exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 256).notNullable();
      tbl.string("description", 255);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {};
