exports.up = async function(knex) {
  await knex.schema.createTable("projects", project => {
    project.increments("id");
    project.string("name", 225).notNullable();
    project.string("description");
    project
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable("resources", resource => {
    resource.increments("id");
    resource.string("name", 225).notNullable();
    resource.string("description");
  });

  await knex.schema.createTable("tasks", task => {
    task.increments("id");
    task.string("description").notNullable();
    task.string("notes");
    task
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
    task
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("projects_resources", projectResource => {
    projectResource
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    projectResource
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    projectResource.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
