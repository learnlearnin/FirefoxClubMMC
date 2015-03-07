window.addEventListener("load", function() {
  console.log("Hello World!");
});

if (navigator.mozApps) {
	console.log("mozilla");
	var request = navigator.mozApps.checkInstalled("http://learnlearn.in/FirefoxClubMMC/manifest.webapp");
	//var request = navigator.mozApps.checkInstalled("http://localhost:8000/FirefoxClubMMC/manifest.webapp");
	request.onsuccess = function() {
	  if (request.result) {
	    console.log('installed');
	  } else {
	  	console.log('not installed');
	    var installbutton=document.getElementById('installbutton');
	    installbutton.style.display="block";
	    installbutton.addEventListener('click', function(){
	    	installbutton.innerHTML="Downloading...";
	    	var installrequest = navigator.mozApps.install("http://learnlearn.in/FirefoxClubMMC/manifest.webapp");
			installrequest.onsuccess = function() {
			  installbutton.innerHTML="Installed!";
			};
			installrequest.onerror = function() {
			  installbutton.innerHTML="Whoops! Error: " + this.error.name;
			};

	    });
	  }
	};
	request.onerror = function(e) {
	  console.log('Error checking installation status: ' + request.error.name);
	};


		
}
else {
	console.log("not mozilla");
}