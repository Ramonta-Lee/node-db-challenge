exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").then(function() {
    // Inserts seed entries
    return knex("resources").insert([
      {
        id: 1,
        name: "Computer",
        description: "15 inch laptop",
        notes: "In good condition"
      },
      {
        id: 2,
        name: "Leash",
        description: "30 leashes of all sizes",
        notes: "Wash after every use"
      },
      {
        id: 3,
        name: "Paint",
        description: "10 cans of cyan paint"
      },
      {
        id: 4,
        name: "Concrete",
        description: "20lbs of concrete mix",
        notes: "may need more"
      }
    ]);
  });
};
