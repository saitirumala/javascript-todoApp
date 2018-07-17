


function addItem() {
	var newText = document.getElementById('textInput').value;
	document.getElementById('FruitList').innerHTML += '<li>'+newText+'</li>';
	document.getElementById('textInput').value = "";
}


function displayFruits() {
	var fruitList = ['apple', 'banana', 'manago', 'pineapple'];

	for(var i =0; i < fruitList.length; i++){
		if( i !=3){
			document.getElementById('FruitList').innerHTML += '<li>'+fruitList[i]+'</li>';
		}

	}
}

displayFruits();
