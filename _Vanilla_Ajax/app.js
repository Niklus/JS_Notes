

var url = "https://httpbin.org/get";

// The XMLHttpRequest object
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {  
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.response));
    }
};
xhttp.open("GET", url, true);
xhttp.send();


//jQuery style
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

getJSon(url, function(response,status,xhttp){
	
	console.log(status);
	console.log(response);
	console.log(xhttp);

	document.getElementById('demo').innerHTML = 
	'Status: '+status +' '+ xhttp.statusText+' at: '+response.url;
});