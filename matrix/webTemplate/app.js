document.addEventListener('DOMContentLoaded', function () {
    const backgroundVideo = document.getElementById('backgroundVideo');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
  
    learnMoreBtn.addEventListener('click', function () {
      if (backgroundVideo.paused) {
        backgroundVideo.play();
        learnMoreBtn.style.display = 'none'; // Hide the button when the video starts playing
      }
    });
  });
  