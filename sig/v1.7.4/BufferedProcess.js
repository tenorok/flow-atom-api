// @flow

declare class BufferedProcess {
  constructor(options: {
    command: string;
    args?: string[];
    options?: Object;
    stdout?: (data: string) => void;
    stderr?: (data: string) => void;
    exit?: (code: number) => void;
  }): void;
  kill(): void;
  onWillThrowError(callback: (errorObject: {
    error:
      (Error & {
        name: "BufferedProcessError"
      }) |
      (Error & {
        code: string;
        errno: string;
        syscall: string;
      });
    handle(): void;
  }) => void): EventKit$Disposable;
}
