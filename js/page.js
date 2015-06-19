var selected = null;
document.addEventListener("mousedown", function(e) {
    selected = e.target;
}, true);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "hideElem") {
            var el = selected;
            while (el.parentNode) {
                el = el.parentNode;
                if (el.style.position = "fixed") {
                    el.style.position = "relative";
                }
            }
            sendResponse({success: true});
        }
        sendResponse({success: false});
    }
);
