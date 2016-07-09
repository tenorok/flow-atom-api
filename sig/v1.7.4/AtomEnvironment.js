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
    detailedMessage?: string;
    message: string;
  }) : void;
  confirm(options: {
    buttons: string[];
    detailedMessage?: string;
    message: string;
  }) : number;
  confirm<T>(options: {
    buttons: { [buttonName: string]: () => T };
    detailedMessage?: string;
    message: string;
  }) : T;
  focus(): void;
  executeJavaScriptInDevTools(code: string): void; // FIXME
  getCurrentWindow(): Electron$BrowserWindow;
  getLoadSettings(): {
    [keys: string]: JSON$Value,
  };
  getPosition(): {
    x: number;
    y: number;
  };
  getSize(): {
    height: number;
    width: number;
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
    column: number;
    line: number;
    message: string;
    originalError: Object;
    url: string;
  }) => void): EventKit$Disposable;
  onWillThrowError(callback: (event: {
    column: number;
    line: number;
    message: string;
    originalError: Object;
    url: string;
    preventDefault(): void;
  }) => void): EventKit$Disposable;
  open(params: {
    devMode: boolean;
    newWindow: boolean;
    pathsToOpen: string[];
    safeMode: boolean;
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
