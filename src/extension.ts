import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    disposables.push(vscode.commands.registerCommand('enablement-test.enable', async () => {
        await setEnablement(true);
    }));

    disposables.push(vscode.commands.registerCommand('enablement-test.disable', async () => {
        await setEnablement(false);
    }));

    context.subscriptions.push(...disposables);
}

export function deactivate() { }

async function setEnablement(enablement: boolean): Promise<void> {
    try {
        await vscode.commands.executeCommand('setContext', 'enablement:enable', enablement);
        vscode.window.showInformationMessage(`Enablement: ${enablement}`);
    } catch (e) {
        console.error(e);
    }
}