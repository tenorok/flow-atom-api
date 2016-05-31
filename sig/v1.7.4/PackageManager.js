// @flow

declare class PackageManager {
  disablePackage(name: string): null | Package;
  enablePackage(name: string): null | Package;
  getActivePackage(name: string): void | Package;
  getActivePackages(): Package[];
  getApmPath(): string;
  getAvailablePackageMetadata(): string[];
  getAvailablePackageNames(): string[];
  getAvailablePackagePaths(): string[];
  getLoadedPackage(name: string): void | Package;
  getLoadedPackages(): Package[];
  getPackageDirPaths(): string[];
  isBundledPackage(name: string): boolean;
  isPackageActive(name: string): boolean;
  isPackageDisabled(name: string): boolean;
  isPackageLoaded(name: string): boolean;
  onDidActivateInitialPackages(callback: () => void): EventKit$Disposable;
  onDidActivatePackage(callback: () => void): EventKit$Disposable;
  onDidDeactivatePackage(callback: () => void): EventKit$Disposable;
  onDidLoadInitialPackages(callback: () => void): EventKit$Disposable;
  onDidLoadPackage(callback: () => void): EventKit$Disposable;
  onDidUnloadPackage(callback: () => void): EventKit$Disposable;
  resolvePackagePath(name: string): void | string;
}
