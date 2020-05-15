exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Travelling", description: "Let's plan it =)", completed: false },
    {
      name: "stay home",
      description: "stay healthy",
      completed: false
    },
    {
      name: "coding",
      description: "Practice , Practice , Practice",
      completed: true
    }
  ]);
};
