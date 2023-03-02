function promptUser() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'content.js'});
    });
  
    // Get the current window and update the height to half of the screen
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.windows.update(currentWindow.id, {height: screen.availHeight / 2}, function() {
        // Get the position of the current window and update the position to the top of the screen
        chrome.windows.getCurrent(function (currentWindow) {
          chrome.windows.update(currentWindow.id, {top: 0}, function() {
            // Open a new window with the YouTube video and set the size and position to the bottom half of the screen
            chrome.windows.create({
              url: 'https://www.youtube.com/watch?v=PtyvtyIs1So',
              type: 'popup',
              height: screen.availHeight / 2,
              width: screen.availWidth,
              left: 0,
              top: screen.availHeight / 2
            });
          });
        });
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log("Popup window loaded");
    document.getElementById('detect-video-btn').addEventListener('click', promptUser);
  });
  
function createPiP() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].requestPictureInPicture();'});
    });
  }