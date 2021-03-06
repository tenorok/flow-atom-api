// @flow

declare class Config {
  get(
    keyPath: string,
    options?: {
      excludeSources?: string[];
      scope?: ScopeDescriptor;
      sources?: string[];
    },
  ): JSON$Value;
  getAll(
    keyPath: string,
    options: {
      excludeSources?: string[];
      scope?: ScopeDescriptor;
      sources?: string[];
    },
  ): Array<{
    scopeDescriptor: ScopeDescriptor;
    value: JSON$Value;
  }>;
  getSchema(keyPath: string): JSON$Schema;
  getSources(): string[];
  getUserConfigPath(): string;
  observe(
    keyPath: string,
    options?: {
      scope?: ScopeDescriptor;
    },
    callback: (value: JSON$Value) => void,
  ): EventKit$Disposable;
  onDidChange(
    keyPath?: string,
    options?: {
      scope?: ScopeDescriptor;
    },
    callback: (event: {
      newValue: JSON$Value;
      oldValue: JSON$Value;
    }) => void,
  ): EventKit$Disposable;
  set(
    keyPath: string,
    value: JSON$Value,
    options?: {
      scopeSelector?: string;
      source?: string;
    },
  ): boolean;
  transact(callback: () => void): void;
  unset(
    keyPath: string,
    options?: {
      scopeSelector?: string;
      source?: string;
    },
  ): void;
}
