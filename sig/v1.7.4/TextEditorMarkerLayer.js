// @flow

declare class TextEditorMarkerLayer {
  destroy(): void;
  findMarkers(params: {
    startBufferRow: number,
    endBufferRow: number,
    containsBufferRange: RangeLike,
    containsBufferPosition: PointLike,
  }): TextEditorMarker[];
  getMarker(id: number): TextEditorMarker; // FIXME
  getMarkerCount(): number;
  getMarkers(): TextEditorMarker[];
  markBufferPosition(bufferPosition: PointLike, options: MarkerOptions): TextEditorMarker;
  markBufferRange(bufferRange: RangeLike, options: MarkerOptionsWithHistory): TextEditorMarker;
  markScreenPosition(screenPosition: PointLike, options: MarkerOptions): TextEditorMarker;
  markScreenRange(screenRange: RangeLike, options: MarkerOptionsWithHistory): TextEditorMarker;
  onDidCreateMarker(callback: (marker: TextEditorMarker) => void): Disposable;
  onDidDestroy(callback: () => void): Disposable; // FIXME
  onDidUpdate(callback: () => void): Disposable;
}
