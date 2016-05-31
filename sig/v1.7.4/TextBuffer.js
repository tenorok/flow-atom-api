// @flow

declare class TextBuffer$TextBuffer {
  constructor(params: string | {
    load?: boolean,
    text?: string,
  }): this;
  addMarkerLayer(options?: {
    maintainHistory?: boolean,
  }): TextBuffer$MarkerLayer;
  append(text: string, options?: {
    normalizeLineEndings?: boolean,
    undo?: "skip" | string,
  }): TextBuffer$Range;
  backwardsScan(
    regex: RegExp,
    iterator: (event: {
      match: number, // FIXME
      matchText: string,
      range: TextBuffer$Range, // FIXME
      stop(): void,
      replace(newText: string): void,
    }) => void, // FIXME
  ): void;
  backwardsScanInRange(
    regex: RegExp,
    range: TextBuffer$RangeLike, // FIXME
    iterator: (event: {
      match: number, // FIXME
      matchText: string,
      range: TextBuffer$Range, // FIXME
      stop(): void,
      replace(newText: string): void,
    }) => void, // FIXME
  ): void;
  characterIndexForPosition(position: TextBuffer$PointLike): number;
  clearUndoStack(): void;
  clipPosition(position: TextBuffer$PointLike): TextBuffer$Point;
  clipRange(range: TextBuffer$RangeLike): TextBuffer$Range;
  createCheckpoint(): number;
  delete(range: TextBuffer$RangeLike): TextBuffer$Range;
  deleteRow(row: number): TextBuffer$Range;
  deleteRows(startRow: number, endRow: number): TextBuffer$Range;
  findMarkers(params: TextBuffer$FindMarkersOptions): TextEditorMarker[];
  getChangesSinceCheckpoint(checkpoint: number): Array<{
    start: TextBuffer$Point,
    oldExtent: TextBuffer$Point,
    newExtent: TextBuffer$Point,
    newText: string,
  }>;
  getDefaultMarkerLayer(): TextBuffer$MarkerLayer;
  getEncoding(): Pathwatcher$FileEncoding;
  getEndPosition(): TextBuffer$Point;
  getFirstPosition(): TextBuffer$Point & { column: 0, row: 0 };
  getLastLine(): string;
  getLastRow(): number;
  getLineCount(): number;
  getLines(): string[];
  getMarker(id: number): TextEditorMarker;
  getMarkerCount(): number;
  getMarkerLayer(id: number): TextBuffer$MarkerLayer;
  getMarkers(): TextEditorMarker[];
  getMaxCharacterIndex(): number;
  getPath(): string;
  getRange(): TextBuffer$Range;
  getStoppedChangingDelay(): number;
  getText(): string;
  getTextInRange(range: TextBuffer$RangeLike): string;
  getUri(): string;
  groupChangesSinceCheckpoint(checkpoint: number): boolean;
  insert(
    position: TextBuffer$PointLike,
    text: string,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: "skip" | string,
    },
  ): TextBuffer$Range;
  isEmpty(): boolean;
  isInConflict(): boolean;
  isModified(): boolean;
  isRowBlank(row: number): boolean;
  lineEndingForRow(row: number): string;
  lineForRow(row: number): string;
  lineLengthForRow(row: number): number;
  markPosition(
    position: TextBuffer$PointLike,
    properties: TextBuffer$MarkerOptions,
  ): TextEditorMarker;
  markRange(
    range: TextBuffer$RangeLike,
    properties: TextBuffer$MarkerOptions,
  ): TextEditorMarker;
  nextNonBlankRow(startRow: number): null | number;
  onDidChange(callback: (event: {
    newRange: TextBuffer$Range,
    newText: string,
    oldRange: TextBuffer$Range,
    oldText: string,
  }) => void): EventKit$Disposable;
  onDidChangeEncoding(callback: (encoding: Pathwatcher$FileEncoding) => void): EventKit$Disposable;
  onDidChangeModified(callback: (modified: boolean) => void): EventKit$Disposable;
  onDidChangePath(callback: (path: string) => void): EventKit$Disposable;
  onDidConflict(callback: () => void): EventKit$Disposable;
  onDidCreateMarker(callback: (marker: TextEditorMarker) => void): EventKit$Disposable;
  onDidDelete(callback: () => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  onDidReload(callback: () => void): EventKit$Disposable;
  onDidSave(callback: (event: {
    path: string,
  }) => void): EventKit$Disposable;
  onDidStopChanging(callback: () => void): EventKit$Disposable;
  onDidUpdateMarkers(callback: () => void): EventKit$Disposable;
  onWillChange(callback: (event : {
    newRange: TextBuffer$Range,
    newText: string,
    oldRange: TextBuffer$Range,
    oldText: string,
  }) => void): EventKit$Disposable;
  onWillReload(callback: () => void): EventKit$Disposable;
  onWillSave(callback: () => void): EventKit$Disposable;
  onWillThrowWatchError(callback: (errorObject: {
    error: Error, // FIXME: should refine this
    handle(): void,
  }) => void): EventKit$Disposable;
  positionForCharacterIndex(offset: number): TextBuffer$Point;
  previousNonBlankRow(startRow: number): null | number;
  rangeForRow(row: number, includeNewLine: boolean): TextBuffer$Range;
  redo(): boolean;
  reload(): void;
  replace(regex: RegExp, replacementText: string): number;
  revertToCheckpoint(): boolean;
  save(): void;
  saveAs(filePath: string): void;
  scan(
    regex: RegExp,
    iterator: (event: {
      match: number, // FIXME
      matchText: string,
      range: TextBuffer$Range, // FIXME
      stop(): void,
      replace(newText: string): void,
    }) => void,
  ): void;
  scanInRange(
    regex: RegExp,
    range: TextBuffer$Range, // FIXME
    iterator: (event: {
      match: number, // FIXME
      matchText: string,
      range: TextBuffer$Range, // FIXME
      stop(): void,
      replace(newText: string): void,
    }) => void,
  ): void;
  setEncoding(encoding: Pathwatcher$FileEncoding): void;
  setPath(filePath: string): void;
  setText(text: string): TextBuffer$Range;
  setTextInRange(
    range: TextBuffer$RangeLike,
    text: string,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: "skip" | string,
    },
  ): TextBuffer$Range;
  setTextViaDiff(text: string): void;
  transact<T>(groupingInterval?: number, fn: () => T): void | T;
  undo(): boolean;
}
