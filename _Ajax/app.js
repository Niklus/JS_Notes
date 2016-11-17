
// The XMLHttpRequest object

/* 	
    var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {  
		if (this.readyState == 4 && this.status == 200) {
			console.log(JSON.parse(this.response));
		}
	};

	xhttp.open("GET", 'https://httpbin.org/get', true);
	xhttp.send();
*/

const KEY = 'fjEvHyESwSoUh8164uQy1nJfEnBK2OOIEK4JQtJY';


// Wrapped in a function with a callback 'jQuery style'

function getJSon(url,fn){

	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {  
	    if (this.readyState == 4 && this.status == 200) {
	        fn(JSON.parse(this.response), this.status, this);
	    }
	};

	xhttp.open("GET", url, true);
	xhttp.send();
}


// Astronomy Picture of the Day
var apodUrl = "https://api.nasa.gov/planetary/apod?api_key="+KEY;

getJSon(apodUrl, function(res,status,xhttp){
	
	// data
	/*console.log(res);
	console.log(status);
	console.log(xhttp);*/
    
    // render to html
	document.getElementById('title').innerHTML = res.title;
	document.getElementById('image').src = res.url;
	document.getElementById('hdImage').href = res.hdurl;
	document.getElementById('explanation').innerHTML = res.explanation;
});



// Mars Rover Photos
var mars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="+KEY;

//getJSon(mars, function(res){	
	
	//console.log(res);
//});

var fhazCam = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key='+KEY;

getJSon(fhazCam, function(res){	

	console.log(res);
});



// Epic Api
var availDates = 'https://api.nasa.gov/EPIC/api/v1.0/images.php?available_dates&api_key='+KEY;

getJSon(availDates, function(res){

	var date = res[res.length-1]; // Get the most resent date
	var epicUrl = "https://api.nasa.gov/EPIC/api/v1.0/images.php?date="+date+"&api_key="+KEY;

	getJSon(epicUrl, function(res){
		//console.log(res);
        
        res.forEach(function(obj){
        	
        	// Data
        	var img = 'http://epic.gsfc.nasa.gov/epic-archive/jpg/'+obj.image+'.jpg';
        	var imgOriginal = 'http://epic.gsfc.nasa.gov/epic-archive/png/'+obj.image+'.png';
        	var imgDate = obj.date;
        	
            // Create Dom Elements
        	var list = document.createElement("li");

        	var link = document.createElement("a");
        	link.href =	imgOriginal; //link to original png link
        	
        	var imgElement = document.createElement("img")
        	imgElement.src = img;

            var date = document.createElement("p");
        	var text = document.createTextNode(imgDate);
        	date.appendChild(text);

        	link.appendChild(imgElement)
        	list.appendChild(link);
        	list.appendChild(date);

            // Render
            document.getElementById('epic').appendChild(list);

        });	
    });
});


// Earth Api Landsat 8
navigator.geolocation.getCurrentPosition(function(position) {

    //var assetsUrl ='https://api.nasa.gov/planetary/earth/assets?'
    //+'lon='+position.coords.longitude+'&lat='+position.coords.latitude+'&begin='+2016-01-01+'&api_key='+KEY;

    //getJSon(assetsUrl, function(res){

		var earthUrl = 'https://api.nasa.gov/planetary/earth/imagery?'+
		'lon='+position.coords.longitude+'&lat='+position.coords.latitude+
		'&cloud_score=True&api_key='+KEY;

		getJSon(earthUrl, function(res){
			
			console.log(res);
			document.getElementById('landsat8').src = res.url;
		});
	//});
});