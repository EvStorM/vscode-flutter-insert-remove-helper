// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Insert } from "./insert";

export async function activate(context: vscode.ExtensionContext) {
  // item is selected
  const insert = new Insert(context);
}
