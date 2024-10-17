browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(tabId, changeInfo);

  if (changeInfo.status == "complete") {

    browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ["addinMagic.js"],
    });

  }
});


