const video = document.getElementById("video");

function startVideo() {
	navigator.mediaDevices
		.getUserMedia({
			video: {},
		})
		.then(
			(stream) => {
				video.srcObject = stream;
				video.play();
			},
			(err) => console.error(err)
		);
}

startVideo();
