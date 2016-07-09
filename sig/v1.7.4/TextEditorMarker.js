// @flow

declare class TextEditorMarker {
  clearTail(properties?: {
    [keys: string]: mixed,
  }): void | boolean;
  compare(other: TextEditorMarker): TextBuffer$Comparison;
  copy(properties?: {
    [keys: string]: mixed,
  }): null | TextEditorMarker; // FIXME: see comments in docs
  destroy(): void;
  getBufferRange(): TextBuffer$Range;
  getEndBufferPosition(): TextBuffer$Point;
  getEndScreenPosition(): TextBuffer$Point;
  getHeadBufferPosition(): TextBuffer$Point;
  getHeadScreenPosition(): TextBuffer$Point;
  getInvalidationStrategy(): TextBuffer$MarkerInvalidationStrategy;
  getProperties(): {
    [keys: string]: mixed, // FIXME: can this be refined?
  };
  getScreenRange(): TextBuffer$Range;
  getStartBufferPosition(): TextBuffer$Point;
  getStartScreenPosition(): TextBuffer$Point;
  getTailBufferPosition(): TextBuffer$Point;
  getTailScreenPosition(): TextBuffer$Point;
  hasTail(): boolean;
  isDestroyed(): boolean;
  isEqual(other: TextEditorMarker): boolean;
  isReversed(): boolean;
  isValid(): boolean;
  onDidChange(callback: (event: {
    hadTail: boolean;
    hasTail: boolean;
    isValid: boolean;
    newHeadBufferPosition: TextBuffer$Point;
    newHeadScreenPosition: TextBuffer$Point;
    newProperties: { [keys: string]: mixed }; // FIXME
    newTailBufferPosition: TextBuffer$Point;
    newTailScreenPosition: TextBuffer$Point;
    oldHeadBufferPosition: TextBuffer$Point;
    oldHeadScreenPosition: TextBuffer$Point;
    oldProperties: { [keys: string]: mixed }; // FIXME
    oldTailBufferPosition: TextBuffer$Point;
    oldTailScreenPosition: TextBuffer$Point;
    textChanged: boolean;
    wasValid: boolean;
  }) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  plantTail(properties?: { // FIXME: properties seems unused
    [keys: string]: mixed,
  }): void | boolean;
  setBufferRange(
    properties?: { [keys: string]: mixed },
    range: TextBuffer$Range,
  ): void | boolean; // FIXME
  setHeadBufferPosition(position: TextBuffer$PointLike, properties?: {
    [keys: string]: mixed
  }): void | boolean;
  setHeadScreenPosition(position: TextBuffer$PointLike, properties?: {
    [keys: string]: mixed
  }): void | boolean;
  setProperties(properties: { [keys: string]: mixed }): void | boolean;
  setScreenRange(
    properties?: { [keys: string]: mixed },
    screenRange: TextBuffer$RangeLike,
  ): void | boolean;
  setTailBufferPosition(
    bufferPosition: TextBuffer$PointLike,
    properties?: { [keys: string]: mixed },
  ): void | boolean;
  setTailScreenPosition(
    properties?: { [keys: string]: mixed },
    screenPosition: TextBuffer$PointLike,
  ): void | boolean;
}
