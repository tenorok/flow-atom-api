// @flow

declare class Config {
  get(
    keyPath: string,
    options?: {
      sources?: string[],
      excludeSources?: string[],
      scope?: ScopeDescriptor,
    },
  ): JSONValue;
  getAll(
    keyPath: string,
    options: {
      sources?: string[],
      excludeSources?: string[],
      scope?: ScopeDescriptor,
    },
  ): Array<{
    scopeDescriptor: ScopeDescriptor,
    value: JSONValue,
  }>;
  getSchema(keyPath: string): JSONValue;
  getSources(): string[];
  getUserConfigPath(): string;
  observe(
    keyPath: string,
    options?: {
      scope?: ScopeDescriptor,
    },
    callback: (value: JSONValue) => void,
  ): EventKit$Disposable;
  onDidChange(
    keyPath?: string,
    options?: {
      scope?: ScopeDescriptor,
    },
    callback: (event: {
      newValue: JSONValue,
      oldValue: JSONValue,
    }) => void,
  ): EventKit$Disposable;
  set(
    keyPath: string,
    value: JSONValue,
    options?: {
      scopeSelector?: string,
      source?: string,
    },
  ): boolean;
  transact(callback: () => void): void;
  unset(
    keyPath: string,
    options?: {
      scopeSelector?: string,
      source?: string,
    },
  ): void;
}
