




	function vidplay(){
		var video = document.getElementById("Video1");
		var button = document.getElementById("play");
		var replay = document.getElementById("replay");

		if(video.paused){
			video.play();
			button.style.display="none";
			
		}
	}




	function showReplay(){
		  
		var replay = document.getElementById("replay");
		replay.style.display="block";

	}

	function replay(){
		var replay = document.getElementById("replay");
		var video = document.getElementById("Video1");
		if(video.paused){
			video.play();
			replay.style.display="none";
			
		}
	}