exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task").then(function() {
    // Inserts seed entries
    return knex("task").insert([
      {
        project_id: 1,
        description: "bring tools",
        notes: "stick to the budget",
        completed: true
      },
      {
        project_id: 1,
        description: "pick up helpers",
        notes: "call jon in advance",
        completed: false
      },
      {
        project_id: 2,
        description: "buy paint brushes",
        notes: "stick to the budget",
        completed: true
      },
      {
        project_id: 2,
        description: "put down tarp",
        notes: "don't spill on carpet",
        completed: false
      },
      {
        project_id: 2,
        description: "Preview job site",
        completed: true
      },
      {
        project_id: 3,
        description: "Practice music",
        completed: true
      },
      {
        project_id: 3,
        description: "Get suit cleaned",
        notes: "remove buttons",
        completed: false
      },
      {
        project_id: 4,
        description: "wash dog",
        notes: "buy treats",
        completed: false
      },
      {
        project_id: 4,
        description: "Get shot record",
        completed: true
      }
    ]);
  });
};
