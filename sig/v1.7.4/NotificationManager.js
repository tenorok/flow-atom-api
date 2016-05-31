// @flow

declare interface NotificationOptions {
  detail?: string;
  dismissable?: boolean;
  icon?: OctoiconName;
}

declare class NotificationManager {
  addError(message: string, options?: NotificationOptions): Notification;
  addFatalError(message: string, options?: NotificationOptions): Notification;
  addInfo(message: string, options?: NotificationOptions): Notification;
  addSuccess(message: string, options?: NotificationOptions): Notification;
  addWarning(message: string, options?: NotificationOptions): Notification;
  getNotifications(): Notification[];
  onDidAddNotification(callback: () => void): EventKit$Disposable;
}
