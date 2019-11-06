class Projects {
        constructor() {
            this.branches = new Map();
        }

    changeBranch(name)
    {
        currentBranchName = name;
        this.deleteTasksInHtml();
        this.showCurrentBranchTasks(currentBranchName);

    }

        addProject(title,branch) {
            if (!branch)
            {
                title = document.getElementById("branch").value;
                branch = new Branch(title);
            }
            this.branches.set(title,branch);
            this.branches.get(title).sendHTMLBranchInfo();
        }

        addTaskToBranch(e)
        {
            e.preventDefault();
            let  name = document.getElementById("title").value;
            let comment = "null";
            this.branches.get(currentBranchName).addTask(name,comment);
        }

        removeTaskBranch(nameBranch,id)
        {
            this.branches.get(nameBranch).removeTask(id);
        }




        showCurrentBranchTasks(name)
        {
            this.branches.get(name).showTasks();
        }


     deleteTasksInHtml() {
        const myNode = document.getElementById("appendProjects");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

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
            let parent = document.getElementById("appendProjects");
            paragraph.innerText = this.name;
            paragraph.id = this.addedData+"text";
            paragraph.className = "textProject";
            parent.appendChild(paragraph);
            let el = document.createElement("INPUT");
            el.setAttribute("type" , "checkbox");
            el.id = this.addedData;
            el.className = "checkBoxProject";
            el.addEventListener("click",function (e) {
                projects.removeTaskBranch(currentBranchName,e.target.id);
            },false);

            parent.appendChild(el);

        }
    }

    class Branch {

        constructor(_title) {
            this.title = _title;
            this.createDate = null;
            this.setDate();
            this.tasks = new Map();
        }

        setDate() {
            let today = new Date();
            this.createDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        }

        addTask(name , comment) {
            //let date = this.setDate();
            let symbol = Date.now();
            let task = new Task(name,comment, symbol);
            this.tasks.set(symbol,task);
            this.tasks.get(symbol).showTask();

        }


        sendHTMLBranchInfo()
        {
            let paragraph = document.createElement("p");
            let parent = document.getElementById("appendBranches");
            paragraph.id = this.title;
            paragraph.innerText = this.title;
            paragraph.addEventListener("click",function (e) {
                projects.changeBranch(e.target.id);
            },false);

            parent.appendChild(paragraph);
        }

        showTasks() {
            document.getElementById("name").innerText = this.title;
            for (let task of this.tasks.values()) {
                task.showTask();
            }
        }

        removeTask(task) {

            document.getElementById(task).remove();
            document.getElementById(task+"text").remove();
            console.log(this.tasks.get(task));
            this.tasks.delete(Number(task));
        }
    }


    let projects = new Projects();
     let defaultBranch = new Branch("Default Branch");
    let currentBranchName = "Default Branch";

    projects.addProject(currentBranchName,defaultBranch);
    projects.addProject("pesho", new Branch("pesho"));

(function modalBox() {
    // Get the modal
    const modal = document.getElementById("myModal");

// Get the button that opens the modal
    const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    const closeAlso = document.getElementById("close-btn");
    const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    closeAlso.onclick = function() {
        projects.addProject(event);
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}());







