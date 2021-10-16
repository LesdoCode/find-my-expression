const video = document.getElementById("video");

function startVideo() {
	navigator.mediaDevices.getUserMedia(
		{
			video: {},
		},
		(stream) => {
			console.log(stream);
			video.sourceObject = stream;
		},
		(err) => console.error(err)
	);
}

startVideo();
