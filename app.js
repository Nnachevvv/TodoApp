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
            let paragraph = document.createElement("p");
            let node = document.createTextNode(this.name);
            paragraph.appendChild(node);
            document.getElementById("name").appendChild(paragraph);
            let el = document.createElement("INPUT");
            el.setAttribute("type" , "checkbox");
            document.body.appendChild(el)
        }
    }

    class Branch {

        constructor(_title) {
            this.title = _title;
            this.createDate = null;
            this.setDate();
            this.tasks = [];
            let task = new Task("FirstTask","asdasd", " ");
            this.tasks.push(task);
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
            this.tasks[0].showTask();
        }

        removeTask(task) {
            this.tasks.delete(task);
        }


    }

    let defaultBranch = new Branch("Default Branch");
    let projects = new Projects();

    defaultBranch.showTasks();

