var fruitList= ['papaya','apple','banana','mango'];

 var fruitIndexValue;

function addItem(){
	var newfruit= document.getElementById('textInput').value;
	if (newfruit.length>0){
		fruitList.push(newfruit);
		refreshFruits();
		document.getElementById('textInput').value="";
	}
}

function refreshFruits(){
	document.getElementById('FruitsList').innerHTML ='';
	for(var i=0;i<fruitList.length;i++){
		document.getElementById('FruitsList').innerHTML +='<li onclick="selectItem('+i+')">'+fruitList[i]+'</li>';
           
	}
}

function selectItem(index){
	fruitIndexValue=index;
	document.getElementById('textInput').value= fruitList[index];
}

function deleteItem() {
	fruitList.splice(fruitIndexValue, 1);
	refreshFruits();
	document.getElementById('textInput').value = '';

}

refreshFruits();