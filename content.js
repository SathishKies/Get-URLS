function clickDiv() {
  const div = document.querySelector('.ytp-play-button ytp-button');
  if (div) {
    div.click();
  }
}

function checkAndClickDiv() {
  const div = document.querySelector('.ytp-mute-button ytp-button');
  if (div) {
    div.addEventListener('dblclick', clickDiv);
  } else {
    setTimeout(checkAndClickDiv, 1000);
  }
}

checkAndClickDiv();