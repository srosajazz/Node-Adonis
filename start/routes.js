'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('home');
Route.on('/tasks').render('tasks');
Route.on('/add').render('add');

// Route.get("/test", () => "Hello World");

// //id
// Route.get("/test/:id", function({ params }) {
//   return `this is the id ${params.id}`;
// });

// //Controller
// Route.get("/task", "TaskController.index");
