// @flow

declare class TextEditorMarkerLayer {
  destroy(): void;
  findMarkers(params: {
    startBufferRow: number;
    endBufferRow: number;
    containsBufferRange: TextBuffer$RangeLike;
    containsBufferPosition: TextBuffer$PointLike;
  }): TextEditorMarker[];
  getMarker(id: number): TextEditorMarker; // FIXME
  getMarkerCount(): number;
  getMarkers(): TextEditorMarker[];
  markBufferPosition(
    bufferPosition: TextBuffer$PointLike,
    options: TextBuffer$MarkerOptions,
  ): TextEditorMarker;
  markBufferRange(
    bufferRange: TextBuffer$RangeLike,
    options: MarkerOptionsWithHistory,
  ): TextEditorMarker;
  markScreenPosition(
    screenPosition: TextBuffer$PointLike,
    options: TextBuffer$MarkerOptions,
  ): TextEditorMarker;
  markScreenRange(
    screenRange: TextBuffer$RangeLike,
    options: MarkerOptionsWithHistory,
  ): TextEditorMarker;
  onDidCreateMarker(callback: (marker: TextEditorMarker) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable; // FIXME
  onDidUpdate(callback: () => void): EventKit$Disposable;
}
