# Cleanup

A simple VS Code extension that removes all `console.log` statements from a file. Just install and run the command `Ctrl+Alt+Z` to clean up your code effortlessly.

## Installation

1. Download the `.vsix` file for the Cleanup extension.
2. Open Visual Studio Code.
3. Go to the Extensions view by clicking the Extensions icon in the Sidebar or by pressing `Ctrl+Shift+X`.
4. Click the three dots (⋮) in the top-right corner and select "Install from VSIX...".
5. Choose the downloaded `.vsix` file and follow the prompts to install the extension.
6. Once installed, you can run the command by pressing `Ctrl+Shift+P` and typing "Cleanup: Remove console.log".

## Build from Source

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run vscode:prepublish`.

### TODOs

- [ ] Add a feature to remove only `console.log` statements committed by the user.
- [ ] Add a feature to remove any kind of log statements (printf, cout, print, etc)
