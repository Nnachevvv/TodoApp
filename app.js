window.onload = function() {
    class Projects {
        constructor() {
            this.branches = new Set();
        }

        addProject(branch) {
            this.branches.add(branch);
        }


    }


    class Task {
        constructor(_name, _comment, _addedData) {
            this.name = _name;
            this.comment = _comment;
            this.addedData = _addedData;
        }

        showTask(){

        }
    }

    class Branch {

        constructor(_title) {
            this.title = _title;
            this.createDate = null;
            this.setDate();
            this.tasks = [];
        }

        setDate() {
            let today = new Date();
            this.createDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        }

        addTask(task) {
            this.tasks.push(task);
        }

        showTasks() {
            document.getElementById("name").innerText = this.title;
            for (let curr of this.tasks) {
                curr.showTasks();
            }
        }

        removeTask(task) {
            this.tasks.delete(task);
        }


    }

    let defaultBranch = new Branch("Default Branch");
    defaultBranch.addTask("click here");
    let projects = new Projects();

    defaultBranch.showTasks();
};



