// @flow

declare type GitConfigValue =
  | null
  | boolean
  | number
  | string

declare class GitRepository {
  static open(path: string, options?: {
    refreshOnWindowFocus: boolean;
  }): this;
  checkoutHead(path: string): boolean;
  checkoutReference(reference: string, create: boolean): boolean;
  destroy(): void;
  getAheadBehindCount(reference: string, path: string): number;
  getCachedPathStatus(path: string): number;
  getCachedUpstreamAheadBehindCount(path: string): {
    ahead: number;
    behind: number;
  };
  getConfigValue(path?: string): GitConfigValue;
  getDiffStats(path: string): {
    added: number;
    deleted: number;
  };
  getDirectoryStatus(path: string): number;
  getLineDiffs(path: string, text: string): Array<{
    newLines: number;
    newStart: number;
    oldLines: number;
    oldStart: number;
  }>;
  getOriginURL(path?: string): string;
  getPath(): string;
  getPathStatus(path: string): number; // FIXME
  getReferences(path?: string): {
    heads: string[];
    remotes: string[];
    tags: string[];
  };
  getReferenceTarget(reference: string, path?: string): string;
  getShortHead(path?: string): string;
  getType(): "git";
  getUpstreamBranch(path?: string): null | string;
  getWorkingDirectory(): string;
  hasBranch(branch: string): boolean; // FIXME
  isPathIgnored(path: string): boolean;
  isPathModified(path: string): boolean; // FIXME
  isPathNew(path: string): boolean;
  isProjectAtRoot(): boolean;
  isStatusModified(status: number): boolean;
  isStatusNew(status: number): boolean;
  isSubmodule(path: string): boolean;
  onDidChangeStatus(callback: (event: {
    path: string;
    pathStatus: number;
  }) => void): EventKit$Disposable;
  onDidChangeStatuses(callback: () => void): EventKit$Disposable; // FIXME
  onDidDestroy(callback: () => void): EventKit$Disposable;
  relativize(): string; // FIXME
}
