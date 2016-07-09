// @flow

declare type JSON$Value =
  | boolean
  | JSON$Array  // eslint-disable-line no-use-before-define
  | JSON$Object // eslint-disable-line no-use-before-define
  | null
  | number
  | string

declare type JSON$Array = JSON$Value[]

declare type JSON$Object = {
  [key: string]: JSON$Value;
}
