// @flow

declare class ScopeDescriptor {
  constructor(object: {
    scopes: string[],
  }): this;
  getScopesArray(): string[];
}
