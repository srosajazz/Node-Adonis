'use strict';

class TaskController {
  index({ view }) {
    const tasks = [
      { title: 'Task one', body: 'Test one' },
      { title: 'Task two', body: 'Test two' },
    ];
    return view.render('tasks', {
      title: 'Latest tasks',
      tasks: tasks,
    });
  }
}

module.exports = TaskController;
