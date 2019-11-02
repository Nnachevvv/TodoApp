class Projects {
        constructor() {
            this.branches = {};
        }


        addProject(branch) {
            this.branches.push(branch);
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
            let parent = document.getElementById("projects");
            paragraph.innerText = this.name;
            paragraph.id = this.count + " text";
            paragraph.className = "textProject";
            parent.appendChild(paragraph);
            let el = document.createElement("INPUT");
            el.setAttribute("type" , "checkbox");
            el.className = "checkBoxProject";
            el.id = this.count;
            el.addEventListener("click",function (e) {
                defaultBranch.removeTask(e.target.id)
            },false);

            parent.appendChild(el);

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

        addTask(name , comment) {
            let task = new Task(name,comment, new Date(),this.tasks.length);
            this.tasks.push(task);
            this.showLast();

        }

        showLast(){
            this.tasks[this.tasks.length-1].showTask();
        }

        showTasks() {
            document.getElementById("name").innerText = this.title;
            for (let task of this.tasks) {
                task.showTask();
            }
        }

        removeTask(task) {
            document.getElementById(task).remove();
            document.getElementById(task + " text").remove();
            this.tasks.delete(task);
        }


    }
    let projects = new Projects();

    function addTask(e) {
        let defaultBranch = new Branch("Default Branch");
        e.preventDefault();
        let  name = document.getElementById("title").value;
        let comment = "null";
        defaultBranch.addTask(name,comment);
        projects.addProject(defaultBranch);

    }

