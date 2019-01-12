// @flow
import { app, Menu, shell, BrowserWindow, dialog } from 'electron';
import os from 'os';
import fs from 'fs';
import path from 'path';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  filePath: string;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment() {
    this.mainWindow.openDevTools();
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.inspectElement(x, y);
          }
        }
      ]).popup(this.mainWindow);
    });
  }

  openFile() {
    dialog.showOpenDialog(
      {
        title: 'Open Sprint',
        filters: [{ name: 'json', extensions: ['json'] }],
        properties: ['openFile']
      },
      fileNames => {
        // fileNames is an array that contains all the selected
        if (fileNames === undefined) {
          return;
        }
        const filepath = fileNames[0];

        fs.readFile(filepath, 'utf-8', (err, data) => {
          if (err) {
            return;
          }
          this.mainWindow.webContents.send('open-file', data);
        });
      }
    );
  }

  saveAs() {
    dialog.showSaveDialog(
      {
        title: 'Save Sprint',
        filters: [{ name: 'json', extensions: ['json'] }],
        defaultPath: '*/Sprint-new'
      },
      fileName => {
        if (fileName === undefined) {
          return;
        }
        this.filePath = fileName;
        this.mainWindow.webContents.send('save-file', this.filePath);
      }
    );
  }

  save() {
    if (this.filePath) {
      this.mainWindow.webContents.send('save-file', [this.filePath]);
    }
    this.saveAs();
  }

  newSprint() {
    this.mainWindow.webContents.send('new-sprint');
  }

  print() {
    const pdfPath = path.join(os.tmpdir(), 'sprint.pdf');
    this.mainWindow.webContents.printToPDF({}, (error, data) => {
      if (error) return;

      fs.writeFile(pdfPath, data, err => {
        if (err) return;
        shell.openExternal(`file://${pdfPath}`);
      });
    });
  }

  buildDarwinTemplate() {
    const subMenuAbout = {
      label: 'Retroboard',
      submenu: [
        {
          label: 'About Electron',
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        { label: 'Services', submenu: [] },
        { type: 'separator' },
        {
          label: 'Hide Electron',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        { label: 'Show All', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    };

    const subMenuFile = {
      label: 'File',
      submenu: [
        {
          label: 'New Sprint',
          accelerator: 'Command+N',
          click: () => this.newSprint()
        },
        { type: 'separator' },
        {
          label: 'Open...',
          accelerator: 'Command+O',
          click: () => this.openFile()
        },
        {
          label: 'Open Recent',
          submenu: []
        },
        { type: 'separator' },
        {
          label: 'Save',
          accelerator: 'Command+S',
          click: () => this.openFile()
        },
        {
          label: 'Save As...',
          accelerator: 'Shift+Command+S',
          click: () => this.saveAs()
        },
        { type: 'separator' },
        {
          label: 'Print...',
          accelerator: 'Command+P',
          click: () => this.print()
        }
      ]
    };

    const subMenuEdit = {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    };

    const subMenuViewDev = {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: () => {
            this.mainWindow.webContents.reload();
          }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: () => {
            this.mainWindow.toggleDevTools();
          }
        }
      ]
    };

    const subMenuViewProd = {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          }
        }
      ]
    };

    const subMenuWindow = {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' }
      ]
    };

    const subMenuHelp = {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click() {
            shell.openExternal(
              'https://github.com/stefanDeveloper/scrum-retroboard'
            );
          }
        },
        {
          label: 'Documentation',
          click() {
            shell.openExternal(
              'https://github.com/stefanDeveloper/scrum-retroboard/blob/master/README.md'
            );
          }
        },
        {
          label: 'Search Issues',
          click() {
            shell.openExternal(
              'https://github.com/stefanDeveloper/scrum-retroboard/issues'
            );
          }
        }
      ]
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [
      subMenuAbout,
      subMenuFile,
      subMenuEdit,
      subMenuView,
      subMenuWindow,
      subMenuHelp
    ];
  }

  buildDefaultTemplate() {
    const templateDefault = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O'
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: () => {
              this.mainWindow.close();
            }
          },
          {
            label: '&Print',
            accelerator: 'Ctrl+P',
            click: () => this.print()
          }
        ]
      },
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development'
            ? [
                {
                  label: '&Reload',
                  accelerator: 'Ctrl+R',
                  click: () => {
                    this.mainWindow.webContents.reload();
                  }
                },
                {
                  label: 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  }
                },
                {
                  label: 'Toggle &Developer Tools',
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    this.mainWindow.toggleDevTools();
                  }
                }
              ]
            : [
                {
                  label: 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  }
                }
              ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click() {
              shell.openExternal('http://electron.atom.io');
            }
          },
          {
            label: 'Documentation',
            click() {
              shell.openExternal(
                'https://github.com/atom/electron/tree/master/docs#readme'
              );
            }
          },
          {
            label: 'Community Discussions',
            click() {
              shell.openExternal('https://discuss.atom.io/c/electron');
            }
          },
          {
            label: 'Search Issues',
            click() {
              shell.openExternal('https://github.com/atom/electron/issues');
            }
          }
        ]
      }
    ];

    return templateDefault;
  }
}
