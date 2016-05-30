// @flow

declare type MenuItem =
  | { label: string
    , submenu?: MenuItem[]
    , command?: string
    }

// FIXME:
declare class MenuManager {
  add(items: MenuItem[]): Disposable;
  update(): void;
}
