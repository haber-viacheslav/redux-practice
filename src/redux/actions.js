// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });

// export const deleteTask = createAction('tasks/deleteTask');

// export const toggleCompleted = createAction('tasks/toggleCompleted');

// export const setStatusFilter = createAction('filters/setStatusFilter');
