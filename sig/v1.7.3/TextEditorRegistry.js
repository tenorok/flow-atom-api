// @flow

// FIXME: not described in API docs
declare class TextEditorRegistry {
  constructor(): this;
  add(editor: TextEditor): Disposable;
  observe(callback: (editor: TextEditor) => void): void;
  remove(editor: TextEditor): boolean;
}
