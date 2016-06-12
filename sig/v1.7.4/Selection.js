// @flow

declare class Selection {
  addSelectionAbove(): void;
  addSelectionBelow(): void;
  autoIndentSelectedRows(): void;
  backspace(): void;
  clear(options?: {
    autoscroll?: boolean;
  }): void;
  compare(other: Selection): TextBuffer$Comparison;
  copy(maintainClipboard: boolean, fullLine: boolean): void;
  cut(maintainClipboard: boolean, fullLine: boolean): void;
  cutToEndOfBufferLine(maintainClipboard: boolean): void;
  cutToEndOfLine(maintainClipboard: boolean): void;
  delete(): void;
  deleteLine(): void;
  deleteSelectedText(): void;
  deleteToBeginningOfLine(): void;
  deleteToBeginningOfSubword(): void;
  deleteToBeginningOfWord(): void;
  deleteToEndOfLine(): void;
  deleteToEndOfSubword(): void;
  deleteToEndOfWord(): void;
  deleteToNextWordBoundary(): void;
  deleteToPreviousWordBoundary(): void;
  expandOverLine(options?: {
    autoscroll?: boolean;
  }): void; // FIXME
  expandOverWord(options?: {
    autoscroll?: boolean;
  }): void;
  fold(): void;
  getBufferRange(): TextBuffer$Range;
  getBufferRowRange(): TextBuffer$RangeCompatible;
  getScreenRange(): TextBuffer$Range;
  getText(): string;
  indentSelectedRows(): void;
  insertText(text: string, options?: { // FIXME: optional fields
    select?: boolean;
    autoIndent?: boolean;
    autoIndentNewline?: boolean;
    autoDecreaseIndent?: boolean;
    normalizeEndings?: boolean;
    undo?: "skip" | string;
  }): TextBuffer$Range;
  intersectsBufferRange(range: TextBuffer$RangeLike): boolean;
  intersectsWith(other: Selection): boolean;
  isEmpty(): boolean;
  isReversed(): boolean;
  isSingleScreenLine(): boolean;
  joinLines(): void;
  merge(other: Selection, options?: { // FIXME
    preserveFolds?: true;
    autoscroll?: true;
  }): void;
  onDidChangeRange(callback: (event: { // FIXME: should these just use TextBuffer$Range?
    oldBufferRange: TextBuffer$RangeLike;
    oldScreenRange: TextBuffer$RangeLike;
    newBufferRange: TextBuffer$RangeLike;
    newScreenRange: TextBuffer$RangeLike;
    selection: Selection;
  }) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  outdentSelectedRows(): void;
  selectDown(rows?: number): void;
  selectLeft(columns?: number): void;
  selectLine(row: number, options?: { // FIXME: options undocumented
    preserveFolds?: true;
    autoscroll?: true;
  }): void;
  selectRight(columns?: number): void;
  selectAll(): void;
  selectToBeginningOfLine(): void;
  selectToBeginningOfNextParagraph(): void;
  selectToBeginningOfNextWord(): void;
  selectToBeginningOfPreviousParagraph(): void;
  selectToBeginningOfWord(): void;
  selectToBottom(): void;
  selectToBufferPosition(position: TextBuffer$PointLike): void;
  selectToEndOfBufferLine(): void;
  selectToEndOfLine(): void;
  selectToEndOfWord(): void;
  selectToFirstCharacterOfLine(): void;
  selectToNextSubwordBoundary(): void;
  selectToNextWordBoundary(): void;
  selectToPreviousSubwordBoundary(): void;
  selectToPreviousWordBoundary(): void;
  selectToScreenPosition(
    position: TextBuffer$PointLike,
    options?: { // FIXME: options undocumented
      autoscroll?: boolean;
    }
  ): void;
  selectToTop(): void;
  selectUp(rowCount?: number): void;
  selectWord(): void;
  setBufferRange(range: TextBuffer$RangeLike, options?: { // FIXME
    preserveFolds?: boolean;
    autoscroll?: boolean;
  }): void;
  setScreenRange(range: TextBuffer$RangeLike, options?: {
    preserveFolds?: boolean;
    autoscroll?: boolean;
  }): void;
  toggleLineComments(): void;
}

// autoscroll?: boolean
