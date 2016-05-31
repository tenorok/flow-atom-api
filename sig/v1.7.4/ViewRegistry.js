// @flow

declare class ViewRegistry {
  addViewProvider<T: ViewableItem>(
    modelConstructor?: Class<T>,
    createView: (model: T, atom: AtomEnvironment) => HTMLElement,
  ): EventKit$Disposable; // FIXME
  getView(item: ViewableItem): HTMLElement;
}
