// @flow

declare class Pane {
  activate(): void;
  activateItem(options?: {
    pending?: boolean;
  }): void;
  activateItemAtIndex(index: number): ViewableItem; // FIXME
  activateItemForURI(uri: string): boolean;
  activateNextItem(): ViewableItem; // FIXME
  activatePreviousItem(): ViewableItem; // FIXME
  addItem(item: mixed, options?: {
    index?: number;
    pending?: boolean;
  }): ViewableItem; // FIXME
  addItems(items: ViewableItem[], index?: number): ViewableItem[];
  destroy(): void; // FIXME: this might return something other than undefined
  destroyActiveItem(): false;
  destroyInactiveItems(): void;
  destroyItem(item: ViewableItem): boolean;
  getActiveItem(): ViewableItem;
  getActiveItemIndex(): number;
  getItems(): ViewableItem[];
  isActive(): boolean;
  itemAtIndex(index: number): null | ViewableItem;
  itemForURI(uri: string): void | ViewableItem;
  moveItem(item: ViewableItem, index: number): void;
  moveItemLeft(): void;
  moveItemRight(): void;
  moveItemToPane(item: ViewableItem, pane: Pane, index: number): ViewableItem;
  observeActive(callback: (active: boolean) => void): EventKit$Disposable;
  observeActiveItem(callback: (activeItem: ViewableItem) => void): EventKit$Disposable;
  observeFlexScale(callback: (flexScale: number) => void): EventKit$Disposable;
  observeItems(callback: (item: ViewableItem) => void): EventKit$Disposable;
  onDidActivate(callback: () => void): EventKit$Disposable;
  onDidAddItem(callback: (event :{
    index: number;
    item: ViewableItem;
  }) => void): EventKit$Disposable;
  onDidChangeActive(callback: (active: boolean) => void): EventKit$Disposable;
  onDidChangeActiveItem(callback: (activeItem: ViewableItem) => void): EventKit$Disposable;
  onDidChangeFlexScale(callback: (flexScale: number) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  onDidMoveItem(callback: (event: {
    item: ViewableItem;
    newIndex: number;
    oldIndex: number;
  }) => void): EventKit$Disposable;
  onDidRemoveItem(callback: (event: {
    item: ViewableItem;
    index: number;
  }) => void): EventKit$Disposable;
  onWillDestroy(callback: () => void): EventKit$Disposable;
  onWillDestroyItem(callback: (event: {
    item: ViewableItem;
    index: number;
  }) => void): EventKit$Disposable;
  onWillRemoveItem(callback: (event: {
    item: ViewableItem;
    index: number;
  }) => void): EventKit$Disposable;
  saveActiveItem(nextAction?: () => void): void;
  saveActiveItemAs(nextAction?: () => void): void;
  saveItem(item: ViewableItem, nextAction?: () => void): void;
  saveItemAs(item: ViewableItem, nextAction?: () => void): void;
  saveItems(): void;
  splitDown(params?: {
    copyActiveItem?: boolean;
    items?: ViewableItem[];
  }): Pane;
  splitLeft(params?: {
    copyActiveItem?: boolean;
    items?: ViewableItem[];
  }): Pane;
  splitRight(params?: {
    copyActiveItem?: boolean;
    items?: ViewableItem[];
  }): Pane;
  splitUp(params?: {
    copyActiveItem?: boolean;
    items?: ViewableItem[];
  }): Pane;
}
