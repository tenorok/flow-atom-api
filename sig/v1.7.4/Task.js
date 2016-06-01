// @flow

declare class Task {
  static once(taskPath: string, ...args: mixed[]): this; // FIXME: variadic
  constructor(taskPath: string): this;
  start(args: mixed[], callback?: () => void): void; // FIXME: variadic
  send(message: JSON$Value): void; // FIXME: use object instead?
  on(eventName: string, callback: () => void): EventKit$Disposable;
  terminate(): boolean;
}
