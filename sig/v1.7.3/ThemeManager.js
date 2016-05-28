// @flow

declare class ThemeManager {
  getActiveThemeNames(): string[];
  getActiveThemes(): Package[];
  getEnabledThemeNames(): string[];
  getLoadedThemeNames(): string[];
  getLoadedThemes(): Package[];
  onDidChangeActiveThemes(callback: () => void): void;
}
