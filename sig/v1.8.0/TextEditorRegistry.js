// @flow

// FIXME: not described in API docs
declare class TextEditorRegistry {
  constructor(): this;
  add(editor: TextEditor): EventKit$Disposable;
  observe(callback: (editor: TextEditor) => void): void;
  remove(editor: TextEditor): boolean;
}
