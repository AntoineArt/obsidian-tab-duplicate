"use strict";

const { Plugin, Notice } = require("obsidian");

class TabDuplicatePlugin extends Plugin {
  onload() {
    const addDuplicateItem = (menu, file) => {
      if (!file || file.extension !== "md") return;

      menu.addItem((item) => {
        item
          .setTitle("Duplicate file")
          .setIcon("copy")
          .setSection("action")
          .onClick(() => {
            void this.duplicateFile(file);
          });
      });
    };

    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        addDuplicateItem(menu, file);
      })
    );

    this.registerEvent(
      this.app.workspace.on("tab-header-menu", (menu, tab) => {
        const file = tab?.view?.file;
        addDuplicateItem(menu, file);
      })
    );
  }

  async duplicateFile(file) {
    const vault = this.app.vault;
    const dir = file.parent ? file.parent.path : "";
    const baseName = file.basename;
    const ext = file.extension;

    let copyPath = dir
      ? `${dir}/${baseName}-copy.${ext}`
      : `${baseName}-copy.${ext}`;

    let counter = 2;
    while (vault.getAbstractFileByPath(copyPath)) {
      copyPath = dir
        ? `${dir}/${baseName}-copy${counter}.${ext}`
        : `${baseName}-copy${counter}.${ext}`;
      counter++;
    }

    const content = await vault.read(file);
    const newFile = await vault.create(copyPath, content);
    new Notice(`Duplicated as ${copyPath.split("/").pop()}`);
    await this.app.workspace.getLeaf(false).openFile(newFile);
  }
}

module.exports = TabDuplicatePlugin;
