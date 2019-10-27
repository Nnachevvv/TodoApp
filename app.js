

function Projects() {

}




function Task(_name, _comment, _addedData) {
    this.name = _name;
    this.comment = _comment;
    this.addedData = _addedData;
}


function Branch(_title) {
     this.title = _title;
     this.createDate = null;
     this.setDate();
     this.tasks = new Set();
}

Branch.prototype.setDate = function()
{
    let today = new Date();
    this.createDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
};

Branch.prototype.addTask = function addTask(task)
{
    this.tasks.add(task);
};
Branch.prototype.removeTask = function removeTask (task) {
    this.tasks.delete(task);
};




