function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function copy(text) {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text} to clipboard!`)
}