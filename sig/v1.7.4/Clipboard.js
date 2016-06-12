// @flow

declare class Clipboard {
  read(): string;
  readWithMetadata(): {
    text: string;
    metadata: mixed;
  };
  write(text: string, metadata?: mixed): void;
}
