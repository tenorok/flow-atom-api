// @flow

declare type CommandRegistryNameOrMap =
  | string
  | { [commandName: string]: EventHandler }

declare class CommandRegistry {
  add(
    target: string,
    commandNameOrMap: CommandRegistryNameOrMap,
    callback?: EventHandler, // FIXME: "this" references the matching Node
  ): EventKit$Disposable;
  dispatch(target: Node, commandName: string): void;
  findCommands(params: {
    target: Node,
  }): Array<{
    name: string,
    displayName: string,
  }>;
  onDidDispatch(callback: EventHandler): void;
  onWillDispatch(callback: EventHandler): void;
}
