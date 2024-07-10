
function openNav() {
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById("mainContent").classList.add("shifted");
}

function closeNav() {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("mainContent").classList.remove("shifted");
}


function addTask() {
    var input = document.getElementById('todo-input');
    var taskText = input.value.trim();
    if (taskText !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            var li = this.parentElement;
            li.parentElement.removeChild(li);
        };

        li.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}


