/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 */
type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}