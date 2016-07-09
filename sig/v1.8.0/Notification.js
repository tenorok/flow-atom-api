// @flow

declare type NotificationType =
  | ("error" | "fatal" | "info" | "success" | "warning")
  | string

declare class Notification {
  dismiss(): void;
  getMessage(): string;
  getType(): NotificationType;
  onDidDismiss(callback: () => void): EventKit$Disposable;
  onDidDisplay(callback: () => void): EventKit$Disposable;
}
