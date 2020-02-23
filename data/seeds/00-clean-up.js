exports.seed = async function(knex) {
  // ordered by level of most dependent
  await knex("project_resources").truncate();
  await knex("task").truncate();
  await knex("resources").truncate();
  await knex("projects").truncate();
};
