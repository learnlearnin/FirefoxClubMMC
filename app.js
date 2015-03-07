window.addEventListener("load", function() {
  console.log("Hello World!");
});

if (navigator.mozApps) {
	console.log("mozilla");
	var request = navigator.mozApps.checkInstalled("http://learnlearn.in/FirefoxClubMMC/manifest.webapp");
	//var request = navigator.mozApps.checkInstalled("http://localhost:8000/manifest.webapp");
	request.onsuccess = function() {
	  if (request.result) {
	    console.log('installed');
	  } else {
	  	console.log('not installed');
	    var installbutton=document.getElementById('installbutton');
	    installbutton.style.display="block";
	    installbutton.addEventListener('click', function(){
	    	var installrequest = navigator.mozApps.install("http://learnlearn.in/FirefoxClubMMC/manifest.webapp");
			installrequest.onsuccess = function() {
			  alert("Congrats, you can use the app directly from your device now");
			};
			installrequest.onerror = function() {
			  alert("Whoops! Error: " + this.error.name)
			};

	    });
	  }
	};
	request.onerror = function(e) {
	  alert('Error checking installation status: ' + request.error.name);
	};


		
}
else {
	console.log("not mozilla");
}