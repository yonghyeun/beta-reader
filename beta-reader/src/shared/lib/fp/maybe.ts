import { getValue } from "./getValue";

export type Some<T> = { readonly _tag: "Some"; readonly value: T };
export type None = { readonly _tag: "None" };
export type Maybe<T> = Some<T> | None;

export const some = <T>(value: T): Maybe<T> => ({
  _tag: "Some",
  value
});

export const none: None = { _tag: "None" };

export const isSome = <T>(maybe: Maybe<T>): maybe is Some<T> =>
  maybe._tag === "Some";
export const isNone = <T>(maybe: Maybe<T>): maybe is None =>
  maybe._tag === "None";

export const map =
  <T, U>(mapper: (item: T) => U) =>
  (maybe: Maybe<T>): Maybe<U> =>
    isNone(maybe) ? none : some(mapper(maybe.value));

export const flatMap =
  <T, U>(mapper: (item: T) => Maybe<U>) =>
  (maybe: Maybe<T>): Maybe<U> =>
    isNone(maybe) ? none : mapper(maybe.value);

export const getOrElse =
  <T, U>(value: T | (() => T)) =>
  (maybe: Maybe<U>) =>
    isSome(maybe) ? maybe.value : getValue(value);

export const fromNullable = <T>(value: undefined | null | T): Maybe<T> =>
  value === null || value === undefined ? none : some(value);
