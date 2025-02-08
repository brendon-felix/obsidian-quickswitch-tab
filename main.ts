import {Plugin} from 'obsidian';

export default class MyPlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'new-tab-quick-switch',
			name: 'Open new tab with quick switcher',
			callback: () => {
				(this.app as any).commands.executeCommandById("workspace:new-tab");
				(this.app as any).commands.executeCommandById("switcher:open");
				const commands = (this.app as any).commands.listCommands();
				console.log(commands);
			}
		});
	}

	onunload() {

	}
}
