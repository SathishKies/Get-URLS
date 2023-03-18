chrome.tabs.query({ currentWindow: true }, tabs => {
  // Map tabs to URLs
  let urls = tabs.map((tab) => tab.url);

  // Get number of URLs
  let numUrls = urls.length;

  // Display URLs in textarea
  let tabUrls = document.querySelector(".tabUrls");

  // Auto resize the text area based on the content
  (() => {
    tabUrls.value = urls.join("\n");
    tabUrls.rows = numUrls;
    tabUrls.cols = Math.max(...urls.map((url) => url.length)) + 2;
  })();

  // Copy to clipboard
  let copyBtn = document.querySelector(".copyBtn");
  // copyBtn.textContent = "Copy " + numUrls + " URLs";
  copyBtn.textContent = `Copy ${numUrls} URLs`;
  copyBtn.addEventListener("click", () => navigator.clipboard.writeText(tabUrls.value));
});
//const element = document.getElementsByClassName("player-ctrl__player-button")[0];