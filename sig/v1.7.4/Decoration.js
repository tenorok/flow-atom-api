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
  type: "block";
  class: string;
  item: ViewableItem;
  position: "before" | "after";
}

declare interface GutterDecorationProperties {
  type: "gutter";
  class: string;
  item: ViewableItem;
  onlyEmpty?: boolean;
  onlyNonEmpty?: boolean;
}

declare interface HighlightDecorationProperties {
  type: "highlight";
  class: string;
  item: ViewableItem;
}

declare interface LineDecorationProperties {
  type: "line";
  class: string;
  item: ViewableItem;
  onlyHead?: boolean;
  onlyEmpty?: boolean;
  onlyNonEmpty?: boolean;
}

declare interface LineNumberDecorationProperties {
  type: "line-number";
  class: string;
  item: ViewableItem;
  onlyHead?: boolean;
  onlyEmpty?: boolean;
  onlyNonEmpty?: boolean;
}

declare interface OverlayDecorationProperties {
  type: "overlay";
  class: string;
  item: ViewableItem;
  position?: "head" | "tail";
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
    oldProperties: DecorationProperties,
    newProperties: DecorationProperties,
  }) => void): EventKit$Disposable; // FIXME
  onDidDestroy(callback: () => void): EventKit$Disposable;
  setProperties(newProperties: DecorationProperties): void; // FIXME
}

declare type RefinedDecoration<T> = Decoration & {
  getProperties(): DecorationProperties & T,
}

/* eslint-disable no-undef */
declare type BlockDecoration = RefinedDecoration<{ type: "block" }>
declare type GutterDecoration = RefinedDecoration<{ type: "gutter" }>
declare type HighlightDecoration = RefinedDecoration<{ type: "highlight" }>
declare type LineDecoration = RefinedDecoration<{ type: "line" }>
declare type LineNumberDecoration = RefinedDecoration<{ type: "line-number" }>
declare type OverlayDecoration = RefinedDecoration<{ type: "overlay" }>
/* eslint-enable no-undef */