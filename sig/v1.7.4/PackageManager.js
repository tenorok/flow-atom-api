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
  onDidActivateInitialPackages(callback: () => void): Disposable;
  onDidActivatePackage(callback: () => void): Disposable;
  onDidDeactivatePackage(callback: () => void): Disposable;
  onDidLoadInitialPackages(callback: () => void): Disposable;
  onDidLoadPackage(callback: () => void): Disposable;
  onDidUnloadPackage(callback: () => void): Disposable;
  resolvePackagePath(name: string): void | string;
}
