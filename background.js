chrome.runtime.onInstalled.addListener(() => {
    // Create a context menu item
    chrome.contextMenus.create({
      id: "searchYouTube",
      title: "Search YouTube for '%s'",
      contexts: ["selection"]
    });
  });
  
  // Add a listener for the context menu item click
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchYouTube" && info.selectionText) {
      // Open a new tab to search YouTube
      chrome.tabs.create({
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(info.selectionText)}`
      });
    }
  });
  