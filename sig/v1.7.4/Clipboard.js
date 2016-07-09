// @flow

declare class Clipboard {
  read(): string;
  readWithMetadata(): {
    metadata: mixed;
    text: string;
  };
  write(text: string, metadata?: mixed): void;
}
