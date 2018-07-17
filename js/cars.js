var carsData =[
{
      make:'volkswagen',
      model: 'polo',
      mileage : '18.78 kmpl',
      engine_Displ : '999 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '280-liters',
      power_Windows : 'Front',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'Rear',
      origin:'India',
      img_url:'images/volkswagen_polo.jpg'  
  },
  {
      make:'volkswagen',
      model: 'ameo',
      Mileage : '21.66 kmpl',
      Engine_Displ : '1498 cc',
      Transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '330-liters',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'Rear',
      origin:'India',
      img_url:'images/volkswagen_ameo.jpg'  
   
  },
  {
      make:'volkswagen',
      model: 'vento',
      mileage : '20.64 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '494-liters',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs: 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/volkswagen_vento.jpg'  
  },
  { make:'suzuki',
    model:'Baleno',
   	Mileage : '21.4 kmpl',
    engine_Displ : '1197 cc',
    transmission : 'Manual',
    fuel_Type : 'Petrol', 
    boot_Space : '339-litres',
    power_Windows : 'Front and Rear',
    airbags : 'Driver and Passenger',
    abs : 'Y',  
    central_Locking : 'Y',
    fog_Lamps :'Front',
	origin:'India',
	img_url:'images/suzuki_baleno.jpg'   
  },
  {
    make:'suzuki',
    model:'Brezza',
	mileage :'24.4 kmpl',
	engine_Displ : '1297 cc',
	fransmission : 'Manual',
	fuel_Type : 'diesel', 
	boot_Space : '328-litres',
	power_Windows : 'Front',
	airbags : 'Driver and Passenger',
	abs : 'Y',  
	central_Locking : 'Y',
	fog_Lamps :'N',
    origin:'India',
    img_url:'images/suzuki_brezza.jpg'  
  },
  {
      make:'suzuki',
      model: 'swift',
      mileage : '22 kmpl',
      engine_Displ : '1197 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      poot_Space : 'NA',
      power_Windows : 'N',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'N',
      fog_Lamps : 'N',  
      origin:'India',
      img_url:'images/suzuki_swift.jpg'  
  },
  {
      make:'ford',
      model: 'eco sport',
      mileage : '17 kmpl',
      engine_Displ : '1497 cc',
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '352-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : "Y",
      central_Locking : "Y",
      fog_Lamps : "N",
      origin:'India',
      img_url:'images/ford_ecosport.jpg'   
  },
  {
      make:'ford',
      model: 'figo',
      mileage : '25.83 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '257-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/ford_figo.jpg'
  },
  {
      make:'ford',
      model:'aspire',
      mileage : '25.83 kmpl',
      engine_Displ : '1498 cc',
      transmission : 'Manual',
      fuel_Type : 'diesel',
      boot_Space : '359-litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger', 
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'both',
      origin:'India',
      img_url:'images/ford_aspire.jpg'
  },
  {
      make:'honda',
      model: 'WRV',
      mileage : '17.5 kmpl',
      engine_Displ: '1199 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '363 Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'N',
      origin:'India',
      img_url:'images/honda_wrv.jpg'  
  },
  {
      make:'honda',
      model: 'city',
      mileage : '17.4 kmpl',
      engine_Displ : '1497 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      boot_Space : '510-Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'front',
      origin:'India',
      img_url:'images/honda_city.jpg'  
  },
    {
      make:'honda',
      model: 'accord',
      mileage : '17.4 kmpl',
      engine_Displ : '1997 cc', 
      transmission : 'Manual',
      fuel_Type : 'Petrol',
      poot_Space : '510-Litres',
      power_Windows : 'Front and Rear',
      airbags : 'Driver and Passenger',
      abs : 'Y',
      central_Locking : 'Y',
      fog_Lamps : 'N',
      origin:'India',
      img_url:'images/honda_accord.jpg'   
  },
      ];

    function  displayCars(data) {
      for(var i=0;i<data.length;i++){
      	document.getElementById("DisplayCars").innerHTML+='<div style="width:350px;margin:30px 5px 10px 5px;float:left; height:690px; border:1px solid silver;">'+
        '<img style="height:200px; width:100%;alt:Developer;border:1px solid silver;margin-bottom:20px; " src="'+data[i].img_url+'">' +
        '<h5 style="margin:15px 10px 15px 10px;">Make:'+data[i].make+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Model:'+data[i].model+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Mileage:'+data[i].mileage+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Engine Displ:'+data[i].engine_Displ+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Transmission:'+data[i].transmission+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Fuel Type:'+data[i].fuel_Type+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Poot Space'+data[i].poot_Space+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Power Windows:'+data[i].power_Windows+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Airbags:'+data[i].airbags+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">ABS:'+data[i].abs+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Central Locking:'+data[i].central_Locking+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Fog Lamps:'+data[i].fog_Lamps+'</h5>'+
        '<h5 style="margin:15px 10px 15px 10px;">Origin:'+data[i].origin+'</h5>'+
       
       	'</div>'
      }

  }

  displayCars(carsData);

      function searchCars(){
      	var input= document.getElementById('textInput').value;
      	var filteredCars=[];
      	for(var i=0; i<carsData.length; i++){
      		if(input == carsData[i].make || input == carsData[i].model){
      			filteredCars.push(carsData[i]);
      		}
      	}
      	console.log('hi');
      	document.getElementById('DisplayCars').innerHTML = '';
      	if(filteredCars.length == 0){
      		document.getElementById('DisplayCars').innerHTML = '<h1>No items to Display</h1>';
      	}else{
      		displayCars(filteredCars);
      	}
      	


      	
     }
      