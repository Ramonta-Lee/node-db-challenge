exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").then(function() {
    // Inserts seed entries
    return knex("resources").insert([
      {
        name: "Computer",
        description: "15 inch laptop",
        notes: "In good condition"
      },
      {
        name: "Leash",
        description: "30 leashes of all sizes",
        notes: "Wash after every use"
      },
      {
        name: "Paint",
        description: "10 cans of cyan paint"
      },
      {
        name: "Concrete",
        description: "20lbs of concrete mix",
        notes: "may need more"
      }
    ]);
  });
};
