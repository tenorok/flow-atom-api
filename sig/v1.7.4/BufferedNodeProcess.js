// @flow

declare class BufferedNodeProcess {
  constructor(options: {
    args?: string[],
    command: string,
    exit?: (code: number) => void,
    options?: Object,
    stderr?: (data: string) => void,
    stdout?: (data: string) => void,
  }): void
}
