// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["content.js"],
//   });
// });

// Set up the variables
let clickIntervalId;

// Define the clickDiv function
function clickDiv() {
  const divs = document.querySelector('.ytp-play-button ytp-button');
  divs.click();
  // if (divs.length > 0) {
  //   divs[0].click();
  // }
}

// Define the checkAndClickDiv function
function checkAndClickDiv() {
  const divs = document.querySelector('.yt-spec-touch-feedback-shape__fill');
  if (divs.length > 0) {
    divs[0].addEventListener('dblclick', clickDiv);
    clearInterval(clickIntervalId);
  }
}

// Start checking for the target div and set up the click interval
function startExtension() {
  clickIntervalId = setInterval(clickDiv, 1000);
  checkAndClickDiv();
}

// Listen for the onInstalled event
chrome.runtime.onInstalled.addListener(() => {
  startExtension();
});
