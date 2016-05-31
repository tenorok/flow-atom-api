// @flow

declare class Panel {
  destroy(): void;
  getItem(): ViewableItem;
  getPriority(): number;
  hide(): void;
  isVisible(): boolean;
  onDidChangeVisible(callback: (visible: boolean) => void): EventKit$Disposable;
  onDidDestroy(callback: (panel: Panel) => void): EventKit$Disposable;
  show(): void;
}
