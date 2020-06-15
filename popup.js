'use strict';

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0];
    let markdown = `[${tab.title}](${tab.url})`;
    let textArea = document.getElementById('text');
    textArea.innerText = markdown;
    textArea.select();
    document.execCommand('copy');
    document.getElementById('result').innerText = 'コピーしました!';
});
