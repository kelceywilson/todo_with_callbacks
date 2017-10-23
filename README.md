# todo_with_callbacks

bds: readme should include instructions for how to set up app
bds: for example: "make a file at top level of project called tasklist.json with these contents..."
bds: So that I don't get errors like this:

```
🐙 todo_with_callbacks git:(bonnie_comments) ./tasks add task1
/Users/bonnie/src/code_reviews/kelcey/todo_with_callbacks/commands/add.js:5
    if (err) throw err;
             ^

Error: ENOENT: no such file or directory, open './taskList.json'
```

bds: Okay, I tried three times to guess what your app needed. Here are the two others:

```
🐙 todo_with_callbacks git:(bonnie_comments) ✗ touch ./tasklist.json
🐙 todo_with_callbacks git:(bonnie_comments) ✗ ./tasks add task1    
undefined:1



SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at fs.readFile (/Users/bonnie/src/code_reviews/kelcey/todo_with_callbacks/commands/add.js:6:27)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:504:3)
🐙 todo_with_callbacks git:(bonnie_comments) ✗ echo "[]" > tasklist.json
🐙 todo_with_callbacks git:(bonnie_comments) ✗ ./tasks add task1        
/Users/bonnie/src/code_reviews/kelcey/todo_with_callbacks/commands/add.js:8
    taskList.tasks.push({ id: newTaskId, task: newTask });
                  ^

TypeError: Cannot read property 'push' of undefined
    at fs.readFile (/Users/bonnie/src/code_reviews/kelcey/todo_with_callbacks/commands/add.js:8:19)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:504:3)
🐙 todo_with_callbacks git:(bonnie_comments)
```

Please submit for a code review after there are good instructions for how to set up the app for me to test for functionality.
