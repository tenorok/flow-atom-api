// @flow

declare class Workspace {
  activateNextPane(): boolean;
  activatePreviousPane(): boolean;
  addBottomPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addFooterPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addHeaderPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addLeftPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addModalPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addOpener(opener: () => void): EventKit$Disposable;
  addRightPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: boolean;
  }): Panel;
  addTopPanel(options: {
    item: ViewableItem;
    priority?: number;
    visible?: number;
  }): Panel;
  buildTextEditor(): TextEditor;
  getActivePane(): Pane;
  getActivePaneItem(): ViewableItem;
  getActiveTextEditor(): TextEditor;
  getBottomPanels(): Panel[];
  getFooterPanels(): Panel[];
  getHeaderPanels(): Panel[];
  getLeftPanels(): Panel[];
  getModalPanels(): Panel[];
  getPaneItems(): ViewableItem[];
  getPanes(): Pane[];
  getRightPanels(): Panel[];
  getTextEditors(): TextEditor[];
  getTopPanels(): Panel[];
  isTextEditor(object: Object): boolean;
  observeActivePane(callback: (pane: Pane) => void): EventKit$Disposable;
  observePanes(callback: (pane: Pane) => void): EventKit$Disposable;
  observePaneItems(callback: (item: ViewableItem) => void): EventKit$Disposable;
  observeTextEditors(callback: (editor: TextEditor) => void): EventKit$Disposable;
  onDidAddPane(callback: (event: {
    pane: Pane;
  }) => void): EventKit$Disposable;
  onDidAddPaneItem(callback: (event: {
    index: number;
    item: ViewableItem;
    pane: Pane;
  }) => void): EventKit$Disposable;
  onDidAddTextEditor(callback: (event: {
    index: number;
    pane: Pane;
    textEditor: TextEditor;
  }) => void): EventKit$Disposable;
  onDidChangeActivePane(callback: (pane: Pane) => void): EventKit$Disposable;
  onDidChangeActivePaneItem(callback: (item: ViewableItem) => void): EventKit$Disposable;
  onDidDestroyPane(callback: (event: {
    pane: Pane;
  }) => void): EventKit$Disposable;
  onDidDestroyPaneItem(callback: (event: {
    index: number;
    item: ViewableItem;
    pane: Pane;
  }) => void): EventKit$Disposable;
  onDidOpen(callback: (event: {
    index: number;
    item: ViewableItem;
    pane: Pane;
    uri: void | string;
  }) => void): EventKit$Disposable;
  onDidStopChangingActivePaneItem(callback: (item: ViewableItem) => void): EventKit$Disposable;
  onWillDestroyPane(callback: (event: {
    pane: Pane;
  }) => void): EventKit$Disposable;
  onWillDestroyPaneItem(callback: (event: {
    index: number;
    item: ViewableItem;
    pane: Pane;
  }) => void): EventKit$Disposable;
  open(uri?: string, options?: {
    activateItem?: boolean;
    activatePane?: boolean;
    initialColumn?: number;
    initialLine?: number;
    pending?: boolean;
    searchAllPanes?: boolean;
    split?: "down" | "left" | "right" | "up";
  }): Promise<TextEditor>;
  paneForItem(item: ViewableItem): void | Pane;
  paneForURI(uri: string): void | Pane;
  panelForItem(item: ViewableItem): null | Panel;
  reopenItem(): Promise<void>; // FIXME
  replace(
    regex: RegExp,
    replacementText: string,
    filePaths: string[],
    iterator: (options: {
      filePath: string;
      replacements: number;
    }) => void,
  ): Promise<void>;
  scan(
    regex: RegExp,
    options?: {
      paths: string[]; // FIXME
      onPathsSearched(count: number): void;
    },
    iterator: { // FIXME: arguments undocumented
      filePath: string;
      matches: Array<{
        lineText: string;
        lineTextOffset: number;
        matchText: string;
        range: TextBuffer$RangeLike;
      }>;
    },
  ): Promise<{
    cancel(): void;
  }>;
}
