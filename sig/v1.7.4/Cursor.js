// @flow

declare type Position =
  | [number, number]

declare class Cursor {
  clearAutoscroll(): void;
  clearSelection(): void;
  compare(otherCursor: Cursor): TextBuffer$Comparison; // FIXME
  getBeginningOfCurrentWordBufferPosition(options?: {
    allowPrevious: boolean,
    includeNonWordCharacters: boolean,
    wordRegex: RegExp,
  }): TextBuffer$Range; // FIXME
  getBeginningOfNextWordBufferPosition(options:? {
    wordRegex: RegExp,
  }): TextBuffer$Range; // FIXME
  getBufferColumn(): number;
  getBufferPosition(): Position;
  getBufferRow(): number;
  getCurrentBufferLine(): string; // FIXME
  getCurrentLineBufferRange(options?: {
    includeNewline: boolean,
  }): TextBuffer$Range; // FIXME
  getCurrentParagraphBufferRange(): TextBuffer$Range;
  getCurrentWordBufferRange(options?: {
    wordRegex: RegExp,
  }): TextBuffer$Range; // FIXME
  getCurrentWordPrefix(): string; // FIXME
  getEndOfCurrentWordBufferPosition(options?: {
    wordRegex: RegExp,
    includeNonWordCharacters: boolean,
  }): TextBuffer$Range; // FIXME
  getIndentLevel(): number; // FIXME
  getMarker(): TextEditorMarker;
  getNextWordBoundaryBufferPosition(options?: {
    wordRegex: RegExp,
  }): Position; // FIXME
  getPreviousWordBoundaryBufferPosition(options?: {
    wordRegex: RegExp,
  }): Position; // FIXME
  getScopeDescriptor(): ScopeDescriptor;
  getScreenColumn(): number;
  getScreenPosition(): TextBuffer$Point;
  getScreenRow(): number;
  hasPrecedingCharactersOnLine(): boolean; // FIXME
  isAtBeginningOfLine(): boolean; // FIXME
  isAtEndOfLine(): boolean;
  isBetweenWordAndNonWord(): boolean;
  isInsideWord(options?: { wordRegex: RegExp }): boolean;
  isLastCursor(): boolean;
  isSurroundedByWhitespace(): boolean;
  isVisible(): boolean; // FIXME
  onDidChangePosition(callback: (event: {
    oldBufferPosition: TextBuffer$Point,
    oldScreenPosition: TextBuffer$Point,
    newBufferPosition: TextBuffer$Point,
    newScreenPosition: TextBuffer$Point,
    textChanged: boolean,
    cursor: Cursor,
  }) => void): EventKit$Disposable; // FIXME
  onDidChangeVisibility(callback: (visibility: boolean) => void): EventKit$Disposable;
  onDidDestroy(callback: () => void): EventKit$Disposable;
  moveDown(
    rowCount?: number,
    options?: {
      moveToEndOfSelection: boolean,
    }
  ): void;
  moveLeft(
    columnCount?: number,
    options?: {
      moveToEndOfSelection: boolean,
    }
  ): void;
  moveRight(
    columnCount?: number,
    options?: {
      moveToEndOfSelection: boolean,
    }
  ): void;
  moveToBeginningOfScreenLine(): void;
  moveToBeginningOfLine(): void;
  moveToBottom(): void;
  moveToTop(): void;
  moveUp(
    rowCount?: number,
    options?: {
      moveToEndOfSelection: boolean,
    }
  ): void;
  moveToBeginningOfNextParagraph(): void;
  moveToBeginningOfNextWord(): void;
  moveToBeginningOfPreviousParagraph(): void;
  moveToBeginningOfWord(): void;
  moveToEndOfLine(): void;
  moveToEndOfScreenLine(): void;
  moveToEndOfWord(): void;
  moveToFirstCharacterOfLine(): void;
  moveToNextWordBoundary(): void;
  moveToNextSubwordBoundary(): void;
  moveToPreviousWordBoundary(): void;
  moveToPreviousSubwordBoundary(): void;
  skipLeadingWhitespace(): void;
  setBufferPosition(
    bufferPosition: Position,
    options?: {
      autoscroll: boolean,
    }
  ): void;
  setScreenPosition(
    screenPosition: Position,
    options?: {
      autoscroll: boolean,
    }
  ): void;
  setVisible(): void;
  subwordRegExp(options?: {
    backwards: boolean,
  }): RegExp;
  wordRegExp(options?: {
    includeNonWordCharacters: boolean,
  }): RegExp;
}
