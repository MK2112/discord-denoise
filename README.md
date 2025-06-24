# Thincord

This userscript hides the **game-playing status** of Discord users - **but only if you've closed DMs with them**.<br>
It's a simple way to declutter the interface and reduce mental noise. If someone's game status matters to you, just open your DMs with them and it will be shown again, person by person, intentionally.
This script keeps things cleaner - **without blocking or muting friends.**

## How It Works

- If DMs are **closed** with someone: their gaming status is hidden
- If DMs are **open**: their game status shows normally
- You control who you care to see, one click at a time

```
thincord/
├── thincord.js  # Main userscript file
├── README.md    # This file
└── LICENSE      # MIT License
```

## Features

- Hides game/activity status (`"Playing XYZ"`) from user popouts and profile cards
- Always hides all profile animations for all users, all the time
- Respects your attention: shows status if DMs are open
- Works automatically in the background
- Lightweight and non-intrusive

## Installation

1. Install a userscript manager like [Tampermonkey](https://tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Create a new userscript.
3. Copy and paste the code from from the JavaScript file into the script editor.
4. Save and enable the script.

## License

MIT.

This software is provided "as is", without warranty of any kind.<br>
**Use at your own risk.** Intended for educational use.<br>
You assume full responsibility for compliance with Discord's Terms of Service and for any consequences arising from its use.
