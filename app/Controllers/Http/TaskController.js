'use strict';

const Task = use('App/Models/Task');
const { validateAll } = use('Validator');
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
    //customize error messages
    const message = {
      'title.required': 'Required',
      'title.min': 'min 3'
    }

    const validation = await validateAll(request.all(), {
      title: 'required|min:5|max:140',
      body: 'required|min:10'
    }, message)


    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }


    const task = new Task();

    task.title = request.input('title')
    task.body = request.input('body')

    await task.save()

    session.flash({ notification: 'Task added.' })

    return response.redirect('/tasks')
  }
}

module.exports = TaskController;
