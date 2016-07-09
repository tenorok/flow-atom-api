// @flow

declare class PackageManager {
  disablePackage(name: string): ?Package;
  enablePackage(name: string): ?Package;
  getActivePackage(name: string): ?Package;
  getActivePackages(): Package[];
  getApmPath(): string;
  getAvailablePackageMetadata(): string[];
  getAvailablePackageNames(): string[];
  getAvailablePackagePaths(): string[];
  getLoadedPackage(name: string): ?Package;
  getLoadedPackages(): Package[];
  getPackageDirPaths(): string[];
  isBundledPackage(name: string): boolean;
  isPackageActive(name: string): boolean;
  isPackageDisabled(name: string): boolean;
  isPackageLoaded(name: string): boolean;
  onDidActivateInitialPackages(callback: () => void): EventKit$Disposable;
  onDidActivatePackage(callback: (pkg: Package) => void): EventKit$Disposable;
  onDidDeactivatePackage(callback: (pkg: Package) => void): EventKit$Disposable;
  onDidLoadInitialPackages(callback: () => void): EventKit$Disposable;
  onDidLoadPackage(callback: (pkg: Package) => void): EventKit$Disposable;
  onDidUnloadPackage(callback: (pkg: Package) => void): EventKit$Disposable;
  resolvePackagePath(name: string): ?string;
}
