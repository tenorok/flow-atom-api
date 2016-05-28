// @flow

declare class ViewRegistry {
  addViewProvider<T: ViewableItem>(
    modelConstructor?: Class<T>,
    createView: (model: T, atom: AtomEnvironment) => HTMLElement,
  ): Disposable; // FIXME
  getView(item: ViewableItem): HTMLElement;
}
