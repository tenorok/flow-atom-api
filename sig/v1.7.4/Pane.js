// @flow

declare class Pane {
  activate(): void;
  activateItem(options?: {
    pending?: boolean,
  }): void;
  activateItemAtIndex(index: number): ViewableItem; // FIXME
  activateItemForURI(uri: string): boolean;
  activateNextItem(): ViewableItem; // FIXME
  activatePreviousItem(): ViewableItem; // FIXME
  addItem(
    item: mixed,
    options?: {
      index?: number,
      pending?: boolean,
    },
  ): ViewableItem; // FIXME
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
  observeActive(callback: (active: boolean) => void): Disposable;
  observeActiveItem(callback: (activeItem: ViewableItem) => void): Disposable;
  observeFlexScale(callback: (flexScale: number) => void): Disposable;
  observeItems(callback: (item: ViewableItem) => void): Disposable;
  onDidActivate(callback: () => void): Disposable;
  onDidAddItem(callback: (event :{
    item: ViewableItem,
    index: number,
  }) => void): Disposable;
  onDidChangeActive(callback: (active: boolean) => void): Disposable;
  onDidChangeActiveItem(callback: (activeItem: ViewableItem) => void): Disposable;
  onDidChangeFlexScale(callback: (flexScale: number) => void): Disposable;
  onDidDestroy(callback: () => void): Disposable;
  onDidMoveItem(callback: (event: {
    item: ViewableItem,
    oldIndex: number,
    newIndex: number,
  }) => void): Disposable;
  onDidRemoveItem(callback: (event: {
    item: ViewableItem,
    index: number,
  }) => void): Disposable;
  onWillDestroy(callback: () => void): Disposable;
  onWillDestroyItem(callback: (event: {
    item: ViewableItem,
    index: number,
  }) => void): Disposable;
  onWillRemoveItem(callback: (event: {
    item: ViewableItem,
    index: number,
  }) => void): Disposable;
  saveActiveItem(nextAction?: () => void): void;
  saveActiveItemAs(nextAction?: () => void): void;
  saveItem(item: ViewableItem, nextAction?: () => void): void;
  saveItemAs(item: ViewableItem, nextAction?: () => void): void;
  saveItems(): void;
  splitDown(params?: {
    items?: ViewableItem[],
    copyActiveItem?: boolean,
  }): Pane;
  splitLeft(params?: {
    items?: ViewableItem[],
    copyActiveItem?: boolean,
  }): Pane;
  splitRight(params?: {
    items?: ViewableItem[],
    copyActiveItem?: boolean,
  }): Pane;
  splitUp(params?: {
    items?: ViewableItem[],
    copyActiveItem?: boolean,
  }): Pane;
}
