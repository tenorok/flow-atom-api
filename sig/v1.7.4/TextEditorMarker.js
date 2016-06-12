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
    oldHeadBufferPosition: TextBuffer$Point;
    newHeadBufferPosition: TextBuffer$Point;
    oldTailBufferPosition: TextBuffer$Point;
    newTailBufferPosition: TextBuffer$Point;
    oldHeadScreenPosition: TextBuffer$Point;
    newHeadScreenPosition: TextBuffer$Point;
    oldTailScreenPosition: TextBuffer$Point;
    newTailScreenPosition: TextBuffer$Point;
    wasValid: boolean;
    isValid: boolean;
    hadTail: boolean;
    hasTail: boolean;
    oldProperties: {
      [keys: string]: mixed, // FIXME
    };
    newProperties: {
      [keys: string]: mixed, // FIXME
    };
    textChanged: boolean;
  }) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  plantTail(properties?: { // FIXME: properties seems unused
    [keys: string]: mixed,
  }): void | boolean;
  setBufferRange(
    range: TextBuffer$Range,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean; // FIXME
  setHeadBufferPosition(
    position: TextBuffer$PointLike,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean;
  setHeadScreenPosition(
    position: TextBuffer$PointLike,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean;
  setProperties(properties: {
    [keys: string]: mixed,
  }): void | boolean;
  setScreenRange(
    screenRange: TextBuffer$RangeLike,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean;
  setTailBufferPosition(
    bufferPosition: TextBuffer$PointLike,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean;
  setTailScreenPosition(
    screenPosition: TextBuffer$PointLike,
    properties?: {
      [keys: string]: mixed,
    },
  ): void | boolean;
}
