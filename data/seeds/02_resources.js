exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "Monitor", description: "Need 3 of them" },
    { name: "Google", description: "Thank you google ;)" },
    { name: "Lambda", description: "Yes, but you have to do your part, too" }
  ]);
};
