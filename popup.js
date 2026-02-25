const toggle = document.getElementById("toggle");

async function getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
}

async function setEnabled(enabled) {
    await chrome.storage.sync.set({ enabled });

    const tab = await getActiveTab();
    if (tab?.id) {
        chrome.tabs.sendMessage(tab.id, { type: "SET_ENABLED", enabled });
    }
}

(async function init() {
    const { enabled = true } = await chrome.storage.sync.get("enabled");
    toggle.checked = enabled;

    toggle.addEventListener("change", () => {
        setEnabled(toggle.checked);
    });
})();
