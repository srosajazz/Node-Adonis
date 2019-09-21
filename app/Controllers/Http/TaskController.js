"use strict";

class TaskController {
  index({ view }) {
    const tasks = [
      { title: "Task one", body: "Test one" },
      { title: "Task two", body: "Test two" }
    ];
    return view.render("task", {
      title: "Your tasks",
      tasks: tasks
    });
  }
}

module.exports = TaskController;
