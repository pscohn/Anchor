var rightClick = function(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "hideElem"}, function(response) {
        });
    });
};

var title = "Anchor floating bar";
var id = chrome.contextMenus.create({"title": title, "contexts": ["all"], "onclick": rightClick});
