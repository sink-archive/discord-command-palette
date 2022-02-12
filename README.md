<div align="center"><img height="200" src="https://yellowsink.github.io/discord-command-palette/assets/icon.png" /></div>

<h1 align="center">Command Palette for Discord</h1>

![Lines of code](https://img.shields.io/tokei/lines/github/yellowsink/discord-command-palette)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/yellowsink/discord-command-palette/Build%20and%20deploy?label=deploy)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/yellowsink/discord-command-palette?label=codefactor)
![GitHub](https://img.shields.io/badge/license-BSD--3-informational)

Power up your Discord with vscode's wonderful command palette for your client.

[Docs](https://yellowsink.github.io/discord-command-palette/docs)

Discord command palette is a faithful recreation of the command palette from VSCode,
where it makes finding features around the editor much more efficient.

Discord also has grown to be a complex app with many features,
never mind once you add plugins on top with all their own functionalities.

Hence this plugin exists to make finding your way around Discord more easy and simple.

## How does it look?

![example screenshot](https://yellowsink.github.io/discord-command-palette/assets/promo_1.png)

## Where do I get it?

NOTE THIS PLUGIN IS IN ALPHA STATE CURRENTLY

 1. Install [Cumcord](https://cumcord.com/#install)
 2. Click this button:

<!-- <a target="_blank" href="https://send.cumcord.com/#https://cumcordplugins.github.io/Condom/yellowsink.github.io/discord-command-palette"><img height="50" src="https://raw.githubusercontent.com/Cumcord/assets/main/buttons/condom_button.png" /></a>

<details><summary>Install from source</summary> -->
<a target="_blank" href="https://send.cumcord.com/#https://yellowsink.github.io/discord-command-palette"><img height="50" src="https://raw.githubusercontent.com/Cumcord/assets/main/buttons/cumdump_button.png" /></a>
<!-- </details> -->

### Powercord installation
```
cd powercord/src/Powercord/plugins
git clone https://github.com/yellowsink/discord-command-palette -b src-pc
```

### Vizality installation
```
cd powercord/src/Powercord/plugins
git clone https://github.com/yellowsink/discord-command-palette -b src-vz
```

## TODOs

This plugin is in early development, and while it should release soon:tm:, the following is planned. If you think something else would be cool to have in the palette, open an issue!

I do not plan to replicate quick switcher functionality right now, but if its a common feature request then I am open to adding it.

- [x] show server settings
  - [x] jump to relevant part
- [ ] block user
  - [ ] list in server
  - [ ] by id
- [ ] change server identity
- [ ] change channel desc
- [ ] mute
- [ ] deafen
- [ ] mute & deafen all in current vc
  - [ ] for you
  - [ ] serverwide
- [ ] join vc
  - [ ] list
  - [ ] last
- [ ] leave vc
- [ ] logout (confirm)
- [ ] create server
- [ ] join server
  - [x] by invite code
  - [ ] by id
- [ ] look at server without joining
  - [ ] by invite
  - [ ] by id
- [ ] add friend
  - [ ] list in current server
  - [ ] by id
  - [ ] by name/discriminator

open an issue to suggest (preferably) or DM me @ Yellowsink#8156 (if we share a server, no unsolicited friend reqs please) if you think of anything else :)
