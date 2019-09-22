'use strict';

const Task = use('App/Models/Task');
class TaskController {
  async index({ view }) {

    const tasks = await Task.all();

    return view.render('tasks', {
      title: 'Latest tasks',
      tasks: tasks.toJSON(),
    })
  }

  //FORM
  async store({ request, response, session }) {
    const task = new Task();

    task.title = request.input('title')
    task.body = request.input('body')

    await task.save()

    session.flash({ notification: 'Task added.' })

    return response.redirect('/tasks')
  }
}

module.exports = TaskController;
