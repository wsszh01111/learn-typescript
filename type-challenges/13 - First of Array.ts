/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 */
type First<A extends any[]> = A extends [infer F, ...infer L] ? A : never