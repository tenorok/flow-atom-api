// @flow

declare type LayerDecorationProperties =
  | DecorationProperties
  & { type: LayerDecorationType }

declare type LayerDecorationType =
  | "block"
  | "highlight"
  | "line-number"
  | "line"

declare class LayerDecoration {
  destroy(): void;
  getProperties(): LayerDecorationProperties; // FIXME
  isDestroyed(): boolean;
  setProperties(newProperties: LayerDecorationProperties): void;
  setPropertiesForMarker(marker: TextEditorMarker, properties: Object): void;
}
