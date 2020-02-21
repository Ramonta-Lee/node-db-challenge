exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").then(function() {
    // Inserts seed entries
    return knex("projects").insert([
      {
        name: "Build Railing",
        description: "Build railing for steps in the park",
        completed: false
      },
      {
        name: "Paint",
        description: "Paint the house",
        completed: false
      },
      {
        name: "Perform",
        description: "Performance for senior home",
        completed: true
      },
      {
        name: "Dog Training",
        description: "Leash train dogs",
        completed: false
      }
    ]);
  });
};
