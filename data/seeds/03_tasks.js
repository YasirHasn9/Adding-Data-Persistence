exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      description: "Buy cheap tickets",
      notes: "after the covid_19 is done and go to hell",
      completed: true,
      project_id: 1
    },
    {
      description: "travel the world ",
      notes: "This is you dream ",
      completed: false,
      project_id: 1
    },
    {
      description: "work out at home",
      notes: "cook healthy food",
      completed: false,
      project_id: 2
    },
    {
      description: "Read",
      notes: "This is you chance to work in the self-development",
      completed: false,
      project_id: 2
    },
    {
      description: "Don't stope coding ",
      notes: "Remember, why are you coding for?",
      completed: true,
      project_id: 3
    },
    {
      description: "Practice",
      notes: "Practice , Practice and Practice",
      completed: true,
      project_id: 3
    }
  ]);
};
