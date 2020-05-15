var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

//It creates a task
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

	
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut); // Onclick it calls crossOut
	


	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("DEL"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);



	function deleteListItem(){
		li.classList.add("delete")
	}
	
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) //Checks whether user has inputted something 
	{ 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

