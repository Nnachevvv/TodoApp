class Projects {
        constructor() {
            this.branches = new Map();
        }


        addProject(title,branch) {
            this.branches.set(title,branch);
        }

        addTaskToBranch(nameBranch, title , comment)
        {
            //TODO errors
            this.branches.get(nameBranch).addTask(title,comment);
        }

        showBranchesInfo()
        {
            for(let branch of this.branches.values())
            {
               console.log(branch.showBranchInfo());
            }
        }

        showCurrentBranchTasks(name)
        {
            this.branches.get(name).showTasks();
        }


    deleteTasksInHtml() {
        const myNode = document.getElementById("projects");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

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

        showBranchInfo()
        {
            let paragraph = document.createElement("p");
            let parent = document.getElementById("branches");
            paragraph.id = this.title;
            paragraph.innerText = this.title;
            paragraph.addEventListener("click",function (e) {
                changeBranch(e.target.id)
            },false);

            parent.appendChild(paragraph);


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
     let defaultBranch = new Branch("Default Branch");
    let currentBranchName = "Default Branch";
    projects.addProject(currentBranchName,defaultBranch);
    projects.addProject("pesho", new Branch("pesho"));

    projects.showBranchesInfo();


    function addTask(e) {

        e.preventDefault();
        let  name = document.getElementById("title").value;
        let comment = "null";
        projects.addTaskToBranch(currentBranchName,name,comment);
    }


    function changeBranch(name)
    {
        currentBranchName = name;
        projects.deleteTasksInHtml();
        projects.showCurrentBranchTasks(currentBranchName);

    }







