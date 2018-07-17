var fruitsList = ['mango','apple','banana','papaya'];
var vegetables = ['brinjal','beens','potato','tomoto'];

    var fruitIndexValue;
    var vegetablesIndexvalue;
function addFruitsItem(){
	var newFruit = document.getElementById('textInput1').value;
	if (newFruit.length > 0){
		fruitsList.push(newFruit);
		refreshFruits();
		document.getElementById('textInput1').value = '';
	}
}

function refreshFruits(){
	document.getElementById('FruitList').innerHTML = '';
	for(i=0;i<fruitsList.length;i++){
		document.getElementById('FruitList').innerHTML +='<li onclick="selectFruitItem('+i+')">'+fruitsList[i]+'</li>';
	}
}

function selectFruitItem(index1){
	fruitIndexValue = index1;
	document.getElementById('textInput1').value = fruitsList[index1];
}

function deleteFruitItem() {
	fruitsList.splice(fruitIndexValue, 1);
	refreshFruits();
	document.getElementById('textInput1').value = '';

}

refreshFruits();
 

	
function addVegetablesItem(){
	var newvegetable = document.getElementById('textInput2').value;
	if(newvegetable != ''){
		vegetables.push(newvegetable);
		refreshvegetables();
		document.getElementById('textInput2').value="";
	}
}

function refreshvegetables(){
 	document.getElementById('VegetablesList').innerHTML='';
	for (var i=0;i<vegetables.length;i++){
		document.getElementById('VegetablesList').innerHTML +='<li onclick="selectVegetablesItem('+i+')">'+ vegetables[i]+'</li>';
	}
}
function selectVegetablesItem (index2){
	vegetablesIndexvalue=index2;
	document.getElementById('textInput2').value= vegetables[index2];
}
function deleteVegetableItem(){
	vegetables.splice(vegetablesIndexvalue,1);
	refreshvegetables();
	document.getElementById('textInput2').value="";
}

 refreshvegetables();




var carsData = [
	{
		make: 'mercedes',
		model: 's class',
		year: '2016',
		image_url: 'images/benz.jfif'
	},
	{
		make: 'suzuki',
		model: 'suv',
		year: '2018',
		image_url: 'images/suzuki.jfif'
	},
	{
		make: 'BMW',
		model: '330i',
		year: '2015',
		image_url: 'images/bmw.jfif'
	}
];

for(var i =0; i<carsData.length; i++){
	document.getElementById('displayCars').innerHTML += '<div style="width:200px;float:left; height:300px; border: 2px solid green">'+
		    '<img height="150px" width="100%" src="'+carsData[i].image_url+'">'+
			'<h5>Make:'+carsData[i].make+' </h5>'+
			'<h5>Model:'+carsData[i].model+' </h5>'+
			'<h5>Year:'+carsData[i].year+'</h5>'+
		'</div>'
}


var str = 'hello guys';
//output: ['h', 'e', 'l', 'l', 'o', '', 'g', 'u', 'y', 's'];

alert(str.length);
