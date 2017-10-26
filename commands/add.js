const fs = require('fs');

// jsdoc!
const add = (newTask) => {
  fs.readFile('./taskList.json', (err, data) => {
    if (err) throw err;
    const taskList = JSON.parse(data);
    const newTaskId = taskList.nextId;
    taskList.tasks.push({ id: newTaskId, task: newTask });
    taskList.nextId += 1;
    fs.writeFile('./taskList.json', JSON.stringify(taskList), (err2) => {
      if (err2) throw err2;
    });
    // bds: this console log should go in the callback for the fs.writeFile,
    // bds: as you only want it to display if the file is written without error
    console.log(`Created task ${newTaskId}`);
  });
};

module.exports = add;
