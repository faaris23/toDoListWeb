const Task = require("./model");

exports.findall = function(req, res) {
    Task.getAll(function(err, task) {
        console.log('controller');
        if(err) {
            res.send(err);
        }
        console.log('res', task);
        res.send(task);
    });
}

exports.create = function(req, res) {
    const new_task = new Task(req.body);
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Task.create(new_task, function(err, task) {
            if(err) {
                res.send(err);
            }
            res.json({
                error: false,
                message: 'Task added successfully!',
                data: task
            });
        });
    }
};

exports.findById = function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Task.update(req.params.id, new Task(req.body), function(err, task) {
            if(err) {
                res.send(err);
            }
            res.json({
                error: false,
                message: 'Task updated successfully'
            });
        });
    }
}

exports.delete = function(req, res) {
    Task.delete(req.params.id, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json({
            error: false,
            message: 'Task deleted successfully'
        });
    });
}