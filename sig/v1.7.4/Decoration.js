// @flow

// eslint-disable-next-line no-undef
declare type DecorationType =
  | "block"
  | "gutter"
  | "highlight"
  | "line-number"
  | "line"
  | "overlay"

declare interface BlockDecorationProperties {
  class: string;
  item: ViewableItem;
  position: "before" | "after";
  type: "block";
}

declare interface GutterDecorationProperties {
  class: string;
  item: ViewableItem;
  onlyEmpty?: boolean;
  onlyNonEmpty?: boolean;
  type: "gutter";
}

declare interface HighlightDecorationProperties {
  class: string;
  item: ViewableItem;
  type: "highlight";
}

declare interface LineDecorationProperties {
  class: string;
  item: ViewableItem;
  onlyEmpty?: boolean;
  onlyHead?: boolean;
  onlyNonEmpty?: boolean;
  type: "line";
}

declare interface LineNumberDecorationProperties {
  class: string;
  item: ViewableItem;
  onlyEmpty?: boolean;
  onlyHead?: boolean;
  onlyNonEmpty?: boolean;
  type: "line-number";
}

declare interface OverlayDecorationProperties {
  class: string;
  item: ViewableItem;
  position?: "head" | "tail";
  type: "overlay";
}

declare type DecorationProperties =
  | BlockDecorationProperties
  | GutterDecorationProperties
  | HighlightDecorationProperties
  | LineDecorationProperties
  | LineNumberDecorationProperties
  | OverlayDecorationProperties

declare class Decoration {
  destroy(): void;
  getId(): number; // FIXME
  getMarker(): TextEditorMarker;
  getProperties(): DecorationProperties; // FIXME
  onDidChangeProperties(callback: (event: {
    newProperties: DecorationProperties;
    oldProperties: DecorationProperties;
  }) => void): EventKit$Disposable; // FIXME
  onDidDestroy(callback: () => void): EventKit$Disposable;
  setProperties(newProperties: DecorationProperties): void; // FIXME
}

declare type RefinedDecoration<T> = Decoration & {
  getProperties(): DecorationProperties & T;
}

/* eslint-disable no-undef */
declare type BlockDecoration = RefinedDecoration<{ type: "block" }>
declare type GutterDecoration = RefinedDecoration<{ type: "gutter" }>
declare type HighlightDecoration = RefinedDecoration<{ type: "highlight" }>
declare type LineDecoration = RefinedDecoration<{ type: "line" }>
declare type LineNumberDecoration = RefinedDecoration<{ type: "line-number" }>
declare type OverlayDecoration = RefinedDecoration<{ type: "overlay" }>
/* eslint-enable no-undef */
