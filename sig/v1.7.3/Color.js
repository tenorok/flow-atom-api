// @flow

declare type ColorValue =
  | string
  | { red: number
    , green: number
    , blue: number
    , alpha: number
    }

declare class Color {
  static parse(value: ColorValue): null | this;
  toHexString(): string;
  toRGBAString(): string;
}
