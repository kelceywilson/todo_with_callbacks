const fs = require('fs');

// bds: need to make the change to the new env var name here too
const taskFile = process.env.NODE_ENV || './taskList.json';

// bds: it looks like you started/anticipated consolidating the code for complete
// bds: and delete, but didn't actually consolidate it. I agree that it's a great
// bds: idea. Make another file called "utilities.js" and make the function there.
const complete = (taskNumber, pushTo) => {
  fs.readFile(taskFile, (err, data) => {
    if (err) throw err;
    const taskList = JSON.parse(data);
    let taskId;
    const task = taskList.tasks.find((x, index) => {
      taskId = index;
      return x.id === parseInt(taskNumber, 10);
    });
    if (task === undefined) {
      console.log('  No task by that number exists');
    } else {
      taskList[pushTo].push(task);
      taskList.tasks.splice(taskId, 1);
      fs.writeFile('./taskList.json', JSON.stringify(taskList), (err2) => {
        if (err2) throw err2;
        console.log(`${pushTo} task ${taskNumber}: '${task.task}'`);
      });
    }
  });
};

module.exports = complete;
