// @flow

// eslint-disable-next-line no-undef
declare interface Deserializer {
  name: string;
  deserialize(state: Object, atom: AtomEnvironment): mixed;
}
