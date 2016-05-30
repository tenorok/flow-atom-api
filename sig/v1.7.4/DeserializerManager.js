// @flow

declare interface Deserializer {
  name: string,
  deserialize(state: Object, atom: AtomEnvironment): mixed,
}

declare class DeserializerManager {
  add(...deserializers: Deserializer[]): void; // FIXME
  deserialize(state: Object): mixed;
}
