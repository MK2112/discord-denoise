// ==UserScript==
// @name            Thincord
// @description     Hides the gaming/music status of Discord users unless you have DMs open with them. Always hides avatar decorations.
// @version         1.0.1
// @author          MK2112
// @namespace       https://github.com/MK2112/thincord
// @supportURL      https://github.com/MK2112/thincord/issues
// @license         MIT
// @match           *://discord.com/*
// @run-at          document-start
// @grant           none
// @compatible      firefox
// @compatible      opera
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
    'use strict';

    // Utility to hide all matching elements
    function hideNowPlayingColumns() {
        const elements = document.querySelectorAll("div[class*='nowPlayingColumn']");
        elements.forEach(el => {
            if (el.style.display !== 'none') {
                el.style.display = 'none';
            }
        });
    }

    // Utility to replace subtext divs containing the SVG icon with "Online"
    function replaceSubtextWithOnline() {
        const subtextDivs = document.querySelectorAll("div[class*='subtext']");
        subtextDivs.forEach(div => {
            // Look for SVG with the exact class within this div
            const svg = div.querySelector('svg.icon_c9d15c');
            if (svg) {
                div.innerHTML = '<div class="text__19b6d">Online</div>';
            }
        });
    }

    function hideAvatarDecorations() {
        const avatarDecorations = document.querySelectorAll("svg[class^='avatarDecoration']");
        avatarDecorations.forEach(svg => {
            if (svg.style.display !== 'none') {
                svg.style.display = 'none';
            }
        });

        const chatDecorations = document.querySelectorAll("img[class^='avatarDecoration']");
        chatDecorations.forEach(img => {
            if (img.style.display !== 'none') {
                img.style.display = 'none';
            }
        });
    }

    // Initial hide on page load
    hideNowPlayingColumns();
    replaceSubtextWithOnline();
    hideAvatarDecorations();

    // Observe for dynamically added elements
    const observer = new MutationObserver(() => {
        hideNowPlayingColumns();
        replaceSubtextWithOnline();
        hideAvatarDecorations();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Optional: Clean up observer on page unload
    window.addEventListener('beforeunload', () => observer.disconnect());
})();
