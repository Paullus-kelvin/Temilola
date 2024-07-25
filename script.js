"use strict";

document.addEventListener('DOMContentLoaded', function() {


  const videoBox = document.querySelector('.video-box');
  const video = videoBox.querySelector('.video');
  const playButton = videoBox.querySelector('.play-button');

  // Play or pause the video
  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.classList.add('video-playing'); // Show pause button
    } else {
      video.pause();
      playButton.classList.remove('video-playing'); // Show play button
    }
  });

  // Hide the pause button when the mouse leaves the video box and the video is playing
  videoBox.addEventListener('mouseleave', function() {
    if (!video.paused) {
      playButton.classList.add('hide-pause'); // Temporarily hide pause button
    }
  });

  // Show the pause button when the mouse enters the video box and the video is playing
  videoBox.addEventListener('mouseenter', function() {
    if (!video.paused) {
      playButton.classList.remove('hide-pause'); // Show pause button if video is playing
    }
  });

  // Additional listener for video ended event to reset to play button
  video.addEventListener('ended', function() {
    playButton.classList.remove('video-playing');
  });


















});

function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";  
  }
  var tablinks = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  initSlider(tabName); // Initialize the slider for the newly activated tab
}

function slide(tabId, direction) {
  var slider = document.getElementById(tabId).querySelector('.video-slider');
  var videos = slider.getElementsByTagName('video');
  var activeIndex = Array.from(videos).findIndex(video => video.style.display === 'block');

  // Hide currently displayed video
  videos[activeIndex].style.display = 'none';

  // Calculate the index of the next video to show
  var nextIndex = activeIndex + direction;
  if (nextIndex >= videos.length) {
      nextIndex = 0;  // Wrap around to the first video
  }
  if (nextIndex < 0) {
      nextIndex = videos.length - 1;  // Wrap around to the last video
  }

  // Show the next video
  videos[nextIndex].style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.video-slider');
  sliders.forEach(slider => {
      const videos = slider.querySelectorAll('video');
      const playButton = slider.querySelector('.play-button');

      // Initialize play/pause functionality
      playButton.addEventListener('click', function() {
          // Determine the currently displayed video
          const currentVideo = Array.from(videos).find(video => video.style.display === 'block');
          if (!currentVideo) return; // In case no video is found, exit

          // Toggle play/pause based on the current state of the video
          if (currentVideo.paused) {
              currentVideo.play();
              playButton.textContent = 'Pause'; // Change the button text to 'Pause'
          } else {
              currentVideo.pause();
              playButton.textContent = 'Play'; // Change the button text to 'Play'
          }
      });

      // Update button text when video ends
      videos.forEach(video => {
          video.addEventListener('ended', () => {
              playButton.textContent = 'Play';
          });
      });
  });

  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();  // Prevent the default anchor click behavior
          const targetId = this.getAttribute('href').substring(1);  // Remove the hash and get the ID
          const targetElement = document.getElementById(targetId);  // Get the target element

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',  // Smoothly scroll the target element into view
                  block: 'start'  // Aligns the target at the top of the viewport
              });
          }
      });
  });


  
});










