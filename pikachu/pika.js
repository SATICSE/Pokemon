function openPage() {
 document.body.style.border = "5px solid blue";  
}

browser.browserAction.onClicked.addListener(openPage);
