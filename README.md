# Lazy Book

Lazy Book is a project that is meant to update the digital reading experience. The primary focus is bringing reading material generally relegated to appendices into view in a more interactive and accessible way.

## Projected Features

- **Encyclopedia**
  - **accessible:** encyclopedia pages that are interlinked with terms in the novel (similar interlinking to ObsidianMD and LogSeq)
  - **dynamic:** new material is added to the encyclopedia as the reader moves through the novel
- **Series Organization**
  - **nestable collections:** groups of books can be nested (e.g. series grouped with other series in the universe)
  - **related books:** prequels and sequels can be linked before and after the book
  - **shared encyclopedia:** the same encyclopedia can be used for multiple books
- **Federation with Activity Pub**
- **Support for Multiple Formats**

## Development

### Application Stack

Reproducibility using [Nix](https://nixos.org/)

#### Front End

- [SvelteKit](https://kit.svelte.dev/) Framework
- [Ionic](https://ionicframework.com/docs/) UI
- [Capacitor](https://capacitorjs.com/) for PWA

#### Back End (tentative)

- [Go](https://go.dev/) with [Caddy](https://caddyserver.com/)

### Dev Environment

#### Nix

This project uses [Nix](https://nixos.org/) to ensure reproducibility. If you do not have Nix installed, it is preferable that you do so. If you do not want to, you can probably rebuild the dev environment on your own. However, how to do so will not be covered here.

Currently, the only officially supported versions by Lazy Book are AArch64 (for use on Raspberry Pi) and x86_64 Darwin (for use on MacOS, Intel chip).

The Nix flake provides build packages and dev shells for both the client and the server. Below are the commands to use these flake outputs.

##### Build Packages

**Client (default):** `nix build`

**Server:** `nix build .#server`

##### Dev Shells

**Client with prefetch-npm-deps (default):** `nix develop`

> Note that this will cd into `client`.

**Client without prefetch-npm-deps:** `nix develop .#client`

> Note that this will cd into `client`.

**Server:** `nix develop .#server`

> Note that this will cd into `server`.

#### Client

0. If using Nix, enter the dev shell. If not, `cd client`.
1. Install dependencies with `npm i`.
2. Start application with `npm run dev`.
3. Press `o` to open the app in a browser.

#### Server

TODO