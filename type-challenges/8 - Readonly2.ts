/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k]
} & Omit<T, K>

type MyReadonly22<T, K extends keyof T = keyof T> = T & {
  readonly [k in K]: T[k]
}
