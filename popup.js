chrome.tabs.query({ currentWindow: true, url: 'https://www.youtube.com/*' }, (tabs) => {
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
    tabUrls.cols = Math.max(...urls.map((url) => url.length) - 4);
  })();

  // Copy to clipboard
  let button = document.querySelector(".button");
  let text = document.querySelector(".text");
  text.textContent = numUrls;
  button.addEventListener("click", () => navigator.clipboard.writeText(tabUrls.value));
});