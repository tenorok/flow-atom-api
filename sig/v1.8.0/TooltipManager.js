// @flow
/* eslint-disable no-undef */

declare type BootstrapTooltipDelay = {
  hide: number;
  show: number;
} | number

declare type BootstrapTooltipPlacementStyle =
  | "auto"
  | "bottom"
  | "left"
  | "right"
  | "top"

// FIXME: 'this' is set to the tooltip instance in the function.
// Revisit once flow supports typing 'this' as a parameter.
declare interface BootstrapTooltipPlacementFunction {
  (tooltip: Node, trigger: Node): BootstrapTooltipPlacementStyle
}

declare type BootstrapTooltipPlacement =
  | BootstrapTooltipPlacementStyle
  | BootstrapTooltipPlacementFunction

declare type BootstrapTooltipTitle =
  | string
  // FIXME: 'this' is set to the tooltip instance in the function.
  // Revisit once flow supports typing 'this' as a parameter.
  | (() => string)

declare type BootstrapTooltipTriggerStyle =
  | "click"
  | "focus"
  | "hover"
  | "manual"

// eslint-disable-next-line no-undef
declare interface BootstrapTooltipOptions {
  animation?: boolean;
  container?: string | false;
  delay?: BootstrapTooltipDelay;
  html?: boolean;
  placement?: BootstrapTooltipPlacement;
  selector?: string | boolean;
  template?: string;
  title?: BootstrapTooltipTitle;
  trigger?: BootstrapTooltipTriggerStyle;
}

declare interface TooltipOptions extends BootstrapTooltipOptions {
  keyBindingCommand?: string;
  keyBindingTarget?: HTMLElement;
}

declare class TooltipManager {
  add(target: HTMLElement, options: TooltipOptions): EventKit$Disposable;
}
