// @flow

declare class Package {
  getBuildFailureOutput(): null | string;
  isCompatible(): boolean;
  onDidDeactivate(callback: () => void): EventKit$Disposable;
  rebuild(): Promise<{
    code: number, // FIXME
    stdout: string,
    stderr: string,
  }>;
}
