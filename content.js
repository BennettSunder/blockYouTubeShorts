const api = globalThis.browser ?? globalThis.chrome;

const STYLE_ID = "block-youtube-shorts-style";
const DEFAULT_ENABLED = true;

function injectCSS() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `
    /* Hide Shorts shelves on homepage */
    ytd-rich-section-renderer:has(a[href^="/shorts"]),
    ytd-rich-shelf-renderer:has(a[href^="/shorts"]),
    ytd-shelf-renderer:has(a[href^="/shorts"]),
    ytd-reel-shelf-renderer,

    /* Hide Shorts tab in sidebar */
    a[title="Shorts"],

    /* Hide Shorts in search results */
    ytd-video-renderer:has(a[href^="/shorts"])
    {
        display: none !important;
    }
    `;

    document.documentElement.appendChild(style);
}

function removeCSS() {
    const style = document.getElementById(STYLE_ID);
    if (style) style.remove();
}

function apply(enabled) {
    if (enabled) injectCSS();
    else removeCSS();
}

// Listen for popup toggle
api.runtime.onMessage.addListener((msg) => {
    if (msg?.type === "SET_ENABLED") {
        apply(msg.enabled);
    }
});

// Handle YouTube SPA navigation
window.addEventListener("yt-navigate-finish", async () => {
    const { enabled = DEFAULT_ENABLED } = await api.storage.sync.get("enabled");
    apply(enabled);
});

// Initial load
(async function init() {
    const { enabled = DEFAULT_ENABLED } = await api.storage.sync.get("enabled");
    apply(enabled);
})();
