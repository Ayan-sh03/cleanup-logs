import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('console-log-remover.remove', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found');
            return;
        }

        const document = editor.document;
        const text = document.getText();
        const newText = removeConsoleLogsFromText(text);

        if (newText !== text) {
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );

            await editor.edit(editBuilder => {
                editBuilder.replace(fullRange, newText);
            });

            vscode.window.showInformationMessage('Console logs removed successfully!');
        } else {
            vscode.window.showInformationMessage('No console logs found in the current file.');
        }
    });

    context.subscriptions.push(disposable);
}

function removeConsoleLogsFromText(text: string): string {
    const lines = text.split('\n');
    const newLines = lines.filter(line => !line.trim().startsWith('console.log('));
    return newLines.join('\n');
}

export function deactivate() {}