import { getValue } from "./getValue";

export type Left<L> = { readonly _tag: "Left"; readonly value: L };
export type Right<R> = { readonly _tag: "Right"; readonly value: R };
export type Either<L, R> = Left<L> | Right<R>;

// 생성 함수
export const left = <L, R>(value: L): Either<L, R> => ({ _tag: "Left", value });
export const right = <L, R>(value: R): Either<L, R> => ({
  _tag: "Right",
  value
});

// 타입 가드 함수
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> =>
  either._tag === "Left";
export const isRight = <L, R>(either: Either<L, R>): either is Right<R> =>
  either._tag === "Right";

export const map =
  <L, R, U>(mapper: (item: R) => U) =>
  (either: Either<L, R>): Either<L, U> =>
    isLeft(either) ? either : right(mapper(either.value));

export const flatMap =
  <L, R, U>(mapper: (item: R) => Either<L, U>) =>
  (either: Either<L, R>) =>
    isLeft(either) ? either : mapper(either.value);

export const fromPredicate =
  <L, R, L2>(predicate: (item: R) => boolean, leftValue: L2) =>
  (either: Either<L, R>): Either<L | L2, R> =>
    isLeft(either) || predicate(either.value) ? either : left(leftValue);

export const tabBoth =
  <L, R>(onLeft: (value: L) => void, onRight: (value: R) => void) =>
  (either: Either<L, R>): Either<L, R> => {
    if (isLeft(either)) {
      onLeft(either.value);
    } else {
      onRight(either.value);
    }

    return either;
  };

export const getOrElse =
  <L, R, T>(defaultValue: T | (() => T)) =>
  (either: Either<L, R>): R | T =>
    isLeft(either) ? getValue(defaultValue) : either.value;

// fold,  getOrElse, mapLeft, tryCatch 등등은 추후 필요할 때 생성하도록 하자
