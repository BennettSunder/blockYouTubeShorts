# Block YouTube Shorts Shelves (Chrome / Brave)

A lightweight Chrome/Brave extension that hides YouTube "Shorts" shelves
and related Shorts sections across youtube.com.

This version includes a toolbar popup toggle (enabled by default).

------------------------------------------------------------------------

## Features

-   Hides Shorts shelves on homepage
-   Hides Shorts sections in search results
-   Hides Shorts sidebar tab
-   Works with YouTube's single-page navigation (no refresh required)
-   Popup toggle to enable/disable instantly
-   Uses Manifest V3

------------------------------------------------------------------------

## Project Structure

Your extension folder should look like this:

    block-youtube-shorts/
      manifest.json
      content.js
      popup.html
      popup.js
      icons/
        icon16.png
        icon32.png
        icon48.png
        icon128.png

------------------------------------------------------------------------

## Installation (Chrome)

1.  Open Chrome
2.  Go to: chrome://extensions/
3.  Enable **Developer Mode** (top-right)
4.  Click **Load unpacked**
5.  Select your `block-youtube-shorts` folder
6.  (Optional) Pin the extension using the puzzle icon

------------------------------------------------------------------------

## Installation (Brave)

1.  Open Brave
2.  Go to: brave://extensions/
3.  Enable **Developer Mode**
4.  Click **Load unpacked**
5.  Select your extension folder

------------------------------------------------------------------------

## Using the Extension

-   Click the extension icon in your browser toolbar
-   Use the checkbox toggle to enable or disable
-   The setting is saved automatically
-   Default state: **Enabled**

No page reload required. Changes apply immediately.

------------------------------------------------------------------------

## Troubleshooting

### Shorts still appear?

-   Hard refresh YouTube:
    -   Windows/Linux: Ctrl + Shift + R
    -   Mac: Cmd + Shift + R

### Testing changes?

After editing files: 1. Go to chrome://extensions/ 2. Click **Reload**
on the extension 3. Refresh YouTube

### YouTube layout changes

YouTube updates its DOM frequently. If Shorts shelves return, the CSS
selectors in `content.js` may need updating.

------------------------------------------------------------------------

## Uninstall

1.  Go to chrome://extensions/ (or brave://extensions/)
2.  Click **Remove** on the extension

------------------------------------------------------------------------

## Version

1.0.0 --- Manifest V3
