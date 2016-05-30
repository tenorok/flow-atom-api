// @flow

declare class Panel {
  destroy(): void;
  getItem(): ViewableItem;
  getPriority(): number;
  hide(): void;
  isVisible(): boolean;
  onDidChangeVisible(callback: (visible: boolean) => void): Disposable;
  onDidDestroy(callback: (panel: Panel) => void): Disposable;
  show(): void;
}
