chrome.browserAction.onClicked.addListener(function(e){chrome.tabs.create({url:"index.html"})});
chrome.runtime.onConnect.addListener(function(port) {
    var tab = port.sender.tab;
    port.onMessage.addListener(function(psgnInfo) {
        chrome.storage.sync.set({
            "psgnInfo": psgnInfo
        }, function() {
            if (chrome.runtime.error) {
                console.log("Runtime error.");
            }
        });
    });
});