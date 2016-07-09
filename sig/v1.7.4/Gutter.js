// @flow

declare class Gutter {
  decorateMarker(marker: TextEditorMarker, decorationProperties: DecorationProperties & {
    type: "gutter" | "line-number"
  }): Decoration;
  destroy(): void;
  hide(): void;
  onDidChangeVisible(callback: (gutter: Gutter) => void): EventKit$Disposable; // FIXME
  onDidDestroy(callback: () => void): EventKit$Disposable;
  isVisible(): boolean;
  show(): void;
}
