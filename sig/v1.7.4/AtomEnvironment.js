// @flow

declare class AtomEnvironment {
  clipboard: Clipboard;
  commands: CommandRegistry;
  config: Config;
  contextMenu: ContextMenuManager;
  deserializers: DeserializerManager;
  grammars: FirstMate$GrammarRegistry;
  keymaps: Keymap$KeymapManager;
  menu: MenuManager;
  notifications: NotificationManager;
  packages: PackageManager;
  project: Project;
  styles: StyleManager;
  textEditors: TextEditorRegistry;
  themes: ThemeManager;
  tooltips: TooltipManager;
  views: ViewRegistry;
  workspace: Workspace;
  beep(): void;
  center(): void;
  close(): void;
  confirm(options: {
    message: string,
    detailedMessage?: string,
  }) : void;
  confirm(options: {
    message: string,
    detailedMessage?: string,
    buttons: string[],
  }) : number;
  confirm<T>(options: {
    message: string,
    detailedMessage?: string,
    buttons: { [buttonName: string]: () => T },
  }) : T;
  focus(): void;
  executeJavaScriptInDevTools(code: string): void; // FIXME
  getCurrentWindow(): Electron$BrowserWindow;
  getLoadSettings(): {
    [keys: string]: JSON$Value,
  };
  getPosition(): {
    x: number,
    y: number,
  };
  getSize(): {
    width: number,
    height: number,
  };
  getVersion(): string;
  getWindowLoadTime(): number;
  hide(): void;
  inDevMode(): boolean;
  inSafeMode(): boolean;
  inSpecMode(): boolean;
  isFullScreen(): boolean;
  isMaximized(): boolean;
  isReleasedVersion(): boolean;
  onDidBeep(callback: () => void): EventKit$Disposable;
  onDidThrowError(callback: (event: {
    originalError: Object,
    message: string,
    url: string,
    line: number,
    column: number,
  }) => void): EventKit$Disposable;
  onWillThrowError(callback: (event: {
    originalError: Object,
    message: string,
    url: string,
    line: number,
    column: number,
    preventDefault(): void,
  }) => void): EventKit$Disposable;
  open(params: {
    pathsToOpen: string[],
    newWindow: boolean,
    devMode: boolean,
    safeMode: boolean,
  }): void;
  openDevTools(): Promise<void>;
  pickFolder(callback: (paths: ?(string[])) => void): void;
  reload(): void;
  setFullScreen(): void;
  setPosition(x: number, y: number): void;
  setSize(width: number, height: number): void;
  show(): void;
  toggleFullScreen(): void;
  toggleDevTools(): Promise<void>;
}
