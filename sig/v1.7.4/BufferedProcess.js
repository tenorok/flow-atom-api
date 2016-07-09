// @flow

declare class BufferedProcess {
  constructor(options: {
    args?: string[];
    command: string;
    exit?: (code: number) => void;
    options?: Object;
    stderr?: (data: string) => void;
    stdout?: (data: string) => void;
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
