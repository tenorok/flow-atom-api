// @flow
/* eslint-disable max-len */

// FIXME: check optional fields

declare class TextEditor {
  abortTransaction(): void;
  addCursorAtBufferPosition(bufferPosition: TextBuffer$PointLike): Cursor;
  addCursorAtScreenPosition(screenPosition: TextBuffer$PointLike): Cursor;
  addGutter(options: {
    name: string,
    priority?: number,
    visible?: boolean
  }): Gutter;
  addMarkerLayer(options: {
    maintainHistory?: boolean,
    persistent?: boolean,
  }): TextEditorMarkerLayer;
  addSelectionForBufferRange(
    bufferRange: TextBuffer$RangeLike,
    options?: {
      reversed: boolean,
    }
  ): Selection;
  addSelectionForScreenRange(
    screenRange: TextBuffer$RangeLike,
    options?: {
      reversed: boolean,
    }
  ): Selection;
  autoIndentSelectedRows(): void;
  backspace(): void;
  backwardsScanInBufferRange(
    regex: RegExp,
    range: TextBuffer$RangeLike,
    iterator: (event: {
      match: RegExp,
      matchText: string,
      range: TextBuffer$Range,
      stop(): void,
      replace(newText: string): void,
    }) => void, // FIXME
  ): void;
  bufferPositionForScreenPosition(
    bufferPosition: TextBuffer$PointLike, // FIXME
    options?: {
      screenLine: boolean,
      skipSoftWrapIndentation: boolean, // FIXME: not in docs
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): TextBuffer$Point;
  bufferRangeForScopeAtCursor(scopeSelector: string): TextBuffer$Range;
  bufferRangeForScreenRange(screenRange: TextBuffer$RangeLike): TextBuffer$Range;
  clipBufferPosition(bufferPosition: TextBuffer$PointLike): TextBuffer$Point;
  clipBufferRange(range: TextBuffer$RangeLike): TextBuffer$Range;
  clipScreenPosition(
    screenPosition: TextBuffer$PointLike,
    options?: {
      screenLine: boolean,
      skipSoftWrapIndentation: boolean, // FIXME: not in docs
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): TextBuffer$Point;
  clipScreenRange(
    range: TextBuffer$RangeLike,
    options?: {
      screenLine: boolean,
      skipSoftWrapIndentation: boolean, // FIXME: not in docs
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): TextBuffer$Range;
  copySelectedText(): void;
  createCheckpoint(): number;
  cutSelectedText(): void;
  cutToEndOfBufferLine(): void;
  cutToEndOfLine(): void;
  decorateMarker(
    marker: TextEditorMarker,
    decorationParams: DecorationProperties,
  ): Decoration;
  decorateMarkerLayer(
    markerLayer: TextEditorMarkerLayer,
    decorationParams: DecorationProperties,
  ): LayerDecoration;
  delete(): void;
  deleteLine(): void;
  deleteToBeginningOfLine(): void;
  deleteToBeginningOfSubword(): void;
  deleteToBeginningOfWord(): void;
  deleteToEndOfLine(): void;
  deleteToEndOfSubword(): void;
  deleteToEndOfWord(): void;
  deleteToNextWordBoundary(): void;
  deleteToPreviousWordBoundary(): void;
  findMarkers(properties: {
    startBufferRow: number,
    endBufferRow: number,
    containsBufferRange: TextBuffer$RangeLike,
    containsBufferPosition: TextBuffer$PointLike,
  }): TextEditorMarker[];
  foldAll(): void;
  foldAllAtIndentLevel(level: number): void;
  foldBufferRow(bufferRow: number): void;
  foldCurrentRow(): void;
  foldSelectedLines(): void;
  getBuffer(): TextBuffer$TextBuffer;
  getCurrentParagraphBufferRange(): TextBuffer$Range;
  getCursorAtScreenPosition(position: TextBuffer$PointLike): void | Cursor;
  getCursorBufferPosition(): TextBuffer$Point;
  getCursorBufferPositions(): TextBuffer$Point[];
  getCursors(): Cursor[]; // FIXME
  getCursorScreenPosition(): TextBuffer$Point;
  getCursorScreenPositions(): TextBuffer$Point[];
  getCursorsOrderedByBufferPosition(): Cursor[];
  getDecorations<T: $Shape<DecorationProperties>>(propertyFilter?: T): Array<Decoration & {
    getProperties(): DecorationProperties & T,
  }>;
  getDefaultMarkerLayer(): TextEditorMarkerLayer;
  getEncoding(): Pathwatcher$FileEncoding;
  getGrammar(): FirstMate$Grammar;
  getGutters(): Gutter[];
  getHighlightDecorations(
    propertyFilter?: $Shape<HighlightDecorationProperties>,
  ): HighlightDecoration[];
  getLastBufferRow(): number;
  getLastCursor(): Cursor;
  getLastScreenRow(): number;
  getLastSelection(): Selection;
  getLineCount(): number;
  getLineDecorations(
    propertyFilter?: $Shape<LineDecorationProperties>,
  ): LineDecorationProperties[];
  getLineNumberDecorations(
    propertyFilter?: $Shape<LineNumberDecorationProperties>,
  ): LineNumberDecorationProperties[];
  getLongTitle(): string;
  getMarker(id: number): TextEditorMarker;
  getMarkerCount(): number;
  getMarkerLayer(id: number): TextBuffer$MarkerLayer;
  getMarkers(): TextEditorMarker[];
  getOverlayDecorations(
    propertyFilter?: $Shape<OverlayDecorationProperties>,
  ): OverlayDecorationProperties[];
  getPath(): string;
  getPlaceholderText(): string;
  getRootScopeDescriptor(): ScopeDescriptor;
  getScreenLineCount(): number;
  getSelectedBufferRange(): TextBuffer$Range;
  getSelectedBufferRanges(): TextBuffer$Range[];
  getSelectedScreenRange(): TextBuffer$Range;
  getSelectedScreenRanges(): TextBuffer$Range[];
  getSelectedText(): string;
  getSelections(): Selection[];
  getSelectionsOrderedByBufferPosition(): Selection[];
  getSoftTabs(): boolean;
  getSoftWrapColumn(): number;
  getTabLength(): number;
  getTabText(): string;
  getText(): string;
  getTextInBufferRange(range: TextBuffer$RangeLike): string;
  getTitle(): string;
  getWordUnderCursor(options?: { // FIXME
    allowPrevious: boolean,
    includeNonWordCharacters: boolean,
    wordRegex: RegExp,
  }): string;
  groupChangesSinceCheckpoint(checkpoint: number): boolean;
  gutterWithName(name: string): null | Gutter;
  hasMultipleCursors(): boolean;
  indentationForBufferRow(row: number): number;
  indentLevelForLine(line: string): number;
  indentSelectedRows(): void[];
  insertNewline(): false | TextBuffer$Range;
  insertNewlineAbove(): void | TextBuffer$Range;
  insertNewlineBelow(): false | TextBuffer$Range;
  insertText(
    text: string,
    options?: {
      select?: boolean,
      autoIndent?: boolean,
      autoIndentNewline?: boolean,
      autoDecreaseIndent?: boolean,
      normalizeEndings?: boolean,
      undo?: "skip" | string,
    },
  ): false | TextBuffer$Range[];
  isBufferRowCommented(): boolean;
  isEmpty(): boolean;
  isFoldableAtBufferRow(row: number): boolean;
  isFoldableAtScreenRow(row: number): boolean;
  isFoldedAtBufferRow(row: number): boolean;
  isFoldedAtCursorRow(): boolean;
  isFoldedAtScreenRow(row: number): boolean;
  isModified(): boolean;
  isSoftWrapped(): boolean;
  lineTextForBufferRow(row: number): string;
  lineTextForScreenRow(row: number): string;
  lowerCase(): mixed[]; // FIXME: docs are wrong; also, seems to return false[]
  markBufferPosition(position: TextBuffer$PointLike, options?: TextBuffer$MarkerOptions): TextEditorMarker;
  markBufferRange(range: TextBuffer$RangeLike, properties: MarkerOptionsWithHistory): TextEditorMarker;
  markScreenPosition(position: TextBuffer$PointLike, options?: TextBuffer$MarkerOptions): TextEditorMarker;
  markScreenRange(range: TextBuffer$RangeLike, properties: MarkerOptionsWithHistory): TextEditorMarker;
  moveToBeginningOfPreviousParagraph(): void;
  moveDown(lines?: number): void;
  moveLeft(columns?: number): void;
  moveRight(columns?: number): void;
  moveToBeginningOfLine(): void;
  moveToBeginningOfNextParagraph(): void;
  moveToBeginningOfNextWord(): void;
  moveToBeginningOfScreenLine(): void;
  moveToBeginningOfWord(): void;
  moveToBottom(): void;
  moveToEndOfLine(): void;
  moveToEndOfScreenLine(): void;
  moveToEndOfWord(): void;
  moveToFirstCharacterOfLine(): void;
  moveToNextSubwordBoundary(): void;
  moveToNextWordBoundary(): void;
  moveToPreviousSubwordBoundary(): void;
  movetoPreviousWordBoundary(): void;
  moveToTop(): void;
  moveUp(lines?: number): void;
  mutateSelectedText<T>(
    fn: (selection: Selection, index: number) => T,
    groupingInterval?: number,
  ): T[];
  observeCursors(callback: (cursor: Cursor) => void): EventKit$Disposable;
  observeDecorations(callback: (decoration: Decoration) => void): EventKit$Disposable;
  observeGrammar(callback: (grammar: FirstMate$Grammar) => void): EventKit$Disposable;
  observeGutters(callback: (gutter: Gutter) => void): EventKit$Disposable;
  observeSelections(callback: (selection: Selection) => void): EventKit$Disposable;
  onDidAddCursor(callback: (cursor: Cursor) => void): EventKit$Disposable;
  onDidAddDecoration(callback: (decoration: Decoration) => void): EventKit$Disposable;
  onDidAddGutter(callback: (gutter: Gutter) => void): EventKit$Disposable;
  onDidAddSelection(callback: (selection: Selection) => void): EventKit$Disposable;
  onDidChange(callback: () => void): EventKit$Disposable;
  onDidChangeCursorPosition(callback: (event: {
    cursor: Cursor,
    newBufferPosition: TextBuffer$Point,
    newScreenPosition: TextBuffer$Point,
    oldBufferPosition: TextBuffer$Point,
    oldScreenPosition: TextBuffer$Point,
    textChanged: boolean,
  }) => void): EventKit$Disposable;
  // FIXME: docs don't mention callback args
  onDidChangeEncoding(callback: (encoding: Pathwatcher$FileEncoding) => void): EventKit$Disposable;
  onDidChangeGrammar(callback: (grammar: FirstMate$Grammar) => void): EventKit$Disposable;
  onDidChangeModified(callback: () => void): EventKit$Disposable; // FIXME: callback args
  onDidChangePath(callback: () => void): EventKit$Disposable; // FIXME: callback args
  onDidChangePlaceholderText(callback: (text: string) => void): EventKit$Disposable;
  onDidChangeSelectionRange(callback: (event: {
    newBufferRange: TextBuffer$Range,
    newScreenRange: TextBuffer$Range,
    oldBufferRange: TextBuffer$Range,
    oldScreenRange: TextBuffer$Range,
    selection: Selection,
  }) => void): EventKit$Disposable;
  onDidChangeSoftWrapped(callback: () => void): EventKit$Disposable; // FIXME: callback args
  onDidChangeTitle(callback: () => void): EventKit$Disposable; // FIXME: callback args
  onDidConflict(callback: () => void): EventKit$Disposable; // FIXME: callback args
  onDidDestroy(callback: () => void): EventKit$Disposable;
  onDidInsertText(callback: (event: {
    text: string,
  }) => void): EventKit$Disposable;
  onDidRemoveCursor(callback: (cursor: Cursor) => void): EventKit$Disposable;
  onDidRemoveDecoration(callback: (decoration: Decoration) => void): EventKit$Disposable;
  onDidRemoveGutter(callback: (gutterName: string) => void): EventKit$Disposable;
  onDidRemoveSelection(callback: (selection: Selection) => void): EventKit$Disposable;
  onDidSave(callback: (event: {
    path: string,
  }) => void): EventKit$Disposable;
  onDidStopChanging(callback: () => void): EventKit$Disposable;
  onWillInsertText(callback: (event: {
    cancel(): void,
    text: string,
  }) => void): EventKit$Disposable;
  outdentSelectedRows(): void[];
  pasteText(options?: { // FIXME: optional fields
    select?: boolean,
    autoIndent?: boolean,
    autoIndentNewline?: boolean,
    autoDecreaseIndent?: boolean,
    normalizeEndings?: boolean,
    undo?: "skip" | string,
  }): false | void[]; // FIXME
  redo(): void;
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
  scanInBufferRange(
    regex: RegExp,
    range: TextBuffer$Range,
    iterator: (event: {
      match: number, // FIXME
      matchText: string,
      range: TextBuffer$Range, // FIXME
      stop(): void,
      replace(newText: string): void,
    }) => void,
  ): void;
  scopeDescriptorForBufferPosition(position: TextBuffer$PointLike): ScopeDescriptor;
  screenPositionForBufferPosition(
    position: TextBuffer$PointLike,
    options?: {
      screenLine: boolean,
      skipSoftWrapIndentation: boolean, // FIXME: not in docs
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): TextBuffer$Point;
  screenRangeForBufferRange(range: TextBuffer$Range): TextBuffer$Range;
  scrollToBufferPosition(
    position: TextBuffer$PointLike,
    options?: {
      center: boolean,
    },
  ): void;
  scrollToCursorPosition(options?: {
    center: boolean,
  }): void;
  scrollToScreenPosition(
    position: TextBuffer$PointLike,
    options?: {
      center: boolean,
    },
  ): void;
  selectAll(): void;
  selectDown(rows?: number): void;
  selectionIntersectsBufferRange(bufferRange: TextBuffer$RangeLike): boolean;
  selectLeft(columns?: number): void;
  selectLinesContainingCursors(): void;
  selectMarker(marker: TextEditorMarker): void | TextBuffer$Range;
  selectRight(columns?: number): void;
  selectToBeginningOfLine(): void;
  selectToBeginningOfNextParagraph(): void;
  selectToBeginningOfNextWord(): void;
  selectToBeginningOfPreviousParagraph(): void;
  selectToBeginningOfWord(): void;
  selectToBottom(): void;
  selectToBufferPosition(position: TextBuffer$PointLike): void;
  selectToEndOfLine(): void;
  selectToEndOfWord(): void;
  selectToFirstCharacterOfLine(): void;
  selectToNextSubwordBoundary(): void;
  selectToNextWordBoundary(): void;
  selectToPreviousSubwordBoundary(): void;
  selectToPreviousWordBoundary(): void;
  selectToScreenPosition(position: TextBuffer$PointLike): void;
  selectToTop(): void;
  selectUp(rows?: number): void;
  selectWordsContainingCursors(): void;
  setCursorBufferPosition(
    position: TextBuffer$PointLike,
    options?: {
      autoscroll: boolean,
      screenLine: boolean,
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): void;
  setCursorScreenPosition(
    position: TextBuffer$PointLike,
    options?: {
      autoscroll: boolean,
      screenLine: boolean,
      skipSoftWrapIndentation: boolean, // FIXME: not in docs
      wrapAtSoftNewlines: boolean,
      wrapBeyondNewlines: boolean,
    },
  ): void;
  setEncoding(encoding: Pathwatcher$FileEncoding): void;
  setGrammar(grammar: FirstMate$Grammar): void;
  setIndentationForBufferRow(
    bufferRow: number,
    newLevel: number,
    options?: {
      preserveLeadingWhitespace?: boolean,
    },
  ): void;
  setPlaceholderText(placeholderText: string): void;
  setSelectedBufferRange(
    bufferRange: TextBuffer$RangeLike,
    options?: {
      reversed?: boolean,
      preserveFolds?: boolean,
    },
  ): void;
  setSelectedBufferRanges(
    bufferRanges: TextBuffer$RangeLike[],
    options?: { // FIXME: are these optional?
      reversed?: boolean,
      preserveFolds?: boolean,
    },
  ): void;
  setSelectedScreenRange(
    screenRange: TextBuffer$RangeLike,
    options?: {
      reversed?: boolean,
    },
  ): void;
  setSelectedScreenRanges(
    screenRanges: TextBuffer$RangeLike[],
    options?: {
      reversed?: boolean,
    },
  ): void;
  setSoftTabs(softTabs: boolean): void;
  setSoftWrapped(softWrapped: boolean): boolean;
  setTabLength(tabLength: null | number): void;
  setText(text: string): void;
  setTextInBufferRange(
    range: TextBuffer$RangeLike,
    text: String,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: string,
    },
  ): TextBuffer$Range;
  toggleFoldAtBufferRow(): void;
  toggleLineCommentsInSelection(): void;
  toggleSoftTabs(): void;
  toggleSoftWrapped(): boolean;
  transact<T>(groupingInterval?: number, fn: () => T): void | T;
  transpose(): void;
  undo(): void;
  unfoldAll(): void;
  unfoldBufferRow(bufferRow: number): void;
  unfoldCurrentRow(): void;
  upperCase(): void;
  usesSoftTabs(): boolean;
}
