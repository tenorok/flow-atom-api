// @flow

/* eslint-disable import/no-unresolved, no-duplicate-imports, no-unused-vars */
import type {
  KeyBinding,
  KeymapManager,
} from "atom-keymap";

import type {
  Disposable,
} from "event-kit";

import type {
  Grammar,
  GrammarRegistry,
} from "first-mate";

import type {
  Directory,
  File,
  FileEncoding,
} from "pathwatcher";

import type {
  Comparison,
  FindMarkersOptions,
  MarkerInvalidationStrategy,
  MarkerLayer,
  MarkerOptions,
  Point,
  PointCompatible,
  PointLike,
  Range,
  RangeCompatible,
  RangeLike,
} from "text-buffer";
/* eslint-enable import/no-unresolved, no-duplicate-imports, no-unused-vars */

declare var atom: AtomEnvironment;
