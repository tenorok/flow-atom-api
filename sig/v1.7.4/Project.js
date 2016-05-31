// @flow

declare class Project {
  addPath(projectPath: string): void;
  contains(pathToCheck: string): boolean;
  getDirectories(): Pathwatcher$Directory[];
  getPaths(): string[];
  getRepositories(): GitRepository[];
  onDidChangePaths(callback: (projectPaths: string[]) => void): EventKit$Disposable;
  relativizePath(fullPath: string): [null | string, string];
  removePath(projectPath: string): boolean; // FIXME
  repositoryForDirectory(directory: Pathwatcher$Directory): Promise<null | GitRepository>;
  setPaths(projectPaths: string[]): void;
}
