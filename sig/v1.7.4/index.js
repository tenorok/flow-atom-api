// @flow

declare var atom: AtomEnvironment;

declare module "atom" {
  declare module.exports: {
    CompositeDisposable: Class<EventKit$CompositeDisposable>;
    Directory: Class<Pathwatcher$Directory>;
    Disposable: Class<EventKit$Disposable>;
    Emitter: Class<EventKit$Emitter>;
    File: Class<Pathwatcher$File>;
    Point: Class<TextBuffer$Point>;
    Range: Class<TextBuffer$Range>;
    TextBuffer: Class<TextBuffer$TextBuffer>;
  };
}
