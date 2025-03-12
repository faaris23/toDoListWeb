var dbcon =  require('./database');

var Task = function(todo) {
    this.name = todo.name;
    this.time = todo.time;
    this.status = todo.status ? todo.status : 0;
};

// Create new task
Task.create = function(newTask, result) {
    dbcon.query("INSERT INTO tasks set ?", newTask, function(err, res) {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

// Show all tasks
Task.getAll = function(result) {
    dbcon.query("SELECT * FROM tasks", function(err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log('tasks: ', res);
            result(null, res);
        }
    });
}

//find task by id
Task.findById = function(id, result) {
    dbcon.query("SELECT * FROM tasks where id = ?", id, function(err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

// Update task 
Task.update = function(id, task, result) {
    dbcon.query("UPDATE tasks SET name = ?, time = ?, status = ? WHERE id = ?", [task.name, task.time, task.status, id], function(err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
//delete task
Task.delete = function(id, result) {
    dbcon.query("DELETE FROM tasks WHERE id = ?", [id], function(err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Task;