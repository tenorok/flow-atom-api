// @flow

declare type ContextMenuItem = {
  label?: string;
  command?: string;
  enabled?: boolean;
  submenu?: ContextMenuItem[];
  visible?: boolean;
  created: EventHandler;
  shouldDisplay: EventHandler;
} | { type: "separator" }

declare class ContextMenuManager {
  add(itemsBySelector: {
    [cssSelectors: string]: ContextMenuItem[],
  }): EventKit$Disposable;
}
