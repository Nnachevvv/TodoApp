class Projects {
        constructor() {
            this.branches = new Set();
        }

        addProject(branch) {
            this.branches.add(branch);
        }


    }


    class Task {
        constructor(_name, _comment, _addedData,count) {
            this.name = _name;
            this.comment = _comment;
            this.addedData = _addedData;
            this.count = count;
        }

        showTask(){
            let paragraph = document.createElement("p");
            paragraph.innerText = this.name;
            paragraph.id = this.count + " text";
            document.body.appendChild(paragraph);
            let el = document.createElement("INPUT");
            el.setAttribute("type" , "checkbox");
            el.id = this.count;
            el.addEventListener("click",function (e) {
                defaultBranch.removeTask(e.target.id)
            },false);

            document.body.appendChild(el);
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

        addTask(name , comment ) {
            let task = new Task(name,comment, new Date(),this.tasks.length);
            this.tasks.push(task);


        }

        showTasks() {
            document.getElementById("name").innerText = this.title;
            this.tasks[0].showTask();
        }

        removeTask(task) {
            document.getElementById(task).remove();
            document.getElementById(task + " text").remove();
            this.tasks.delete(task);
        }


    }
    let defaultBranch = new Branch("Default Branch");
    let projects = new Projects();

    function addTask(e) {
        e.preventDefault();
        let  name = document.getElementById("title").value;
        let comment = "null";


        defaultBranch.addTask(name,comment);
        defaultBranch.showTasks();
    }

