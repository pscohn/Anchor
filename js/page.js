var selected = null;
document.addEventListener("mousedown", function(e) {
    selected = e.target;
}, true);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "hideElem") {
            var el = selected;
            while (typeof el != "undefined" && typeof el.style != "undefined") {
                el.style.position = "relative";
                el = el.parentNode;
            }
            sendResponse({success: true});
        }
        sendResponse({success: false});
    }
);
