// @flow

declare type NotificationType =
  | ("error" | "fatal" | "info" | "success" | "warning")
  | string

declare class Notification {
  dismiss(): void;
  getMessage(): string;
  getType(): NotificationType;
  onDidDismiss(callback: () => void): Disposable;
  onDidDisplay(callback: () => void): Disposable;
}
