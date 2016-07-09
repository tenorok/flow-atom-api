// @flow

declare class StyleManager {
  getStyleElements(): HTMLStyleElement[]; // FIXME
  getUserStyleSheetPath(): string;
  observeStyleElements(callback: (styleElement: HTMLStyleElement & {
    context: string;
    sheet: null;
    sourcePath: string;
  }) => void): EventKit$Disposable; // FIXME
  onDidAddStyleElement(callback: (styleElement: HTMLStyleElement & {
    context: string;
    sheet: null;
    sourcePath: string;
  }) => void): EventKit$Disposable; // FIXME
  onDidRemoveStyleElement(
    callback: (styleElement: HTMLStyleElement) => void
  ): EventKit$Disposable; // FIXME
  onDidUpdateStyleElement(callback: (styleElement: HTMLStyleElement & {
    context: string;
    sheet: null;
    sourcePath: string;
  }) => void): EventKit$Disposable; // FIXME
}
