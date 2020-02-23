exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").then(function() {
    // Inserts seed entries
    return knex("projects").insert([
      {
        id: 1,
        name: "Build Railing",
        description: "Build railing for steps in the park",
        completed: false
      },
      {
        id: 2,
        name: "Paint",
        description: "Paint the house",
        completed: false
      },
      {
        id: 3,
        name: "Perform",
        description: "Performance for senior home",
        completed: true
      },
      {
        id: 4,
        name: "Dog Training",
        description: "Leash train dogs",
        completed: false
      }
    ]);
  });
};
