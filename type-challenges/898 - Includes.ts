/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
type Includes<T extends readonly any[], V> = T extends [infer F, ...infer R] ? (Equal<F, V> extends true ? true : Includes<R, V>) : false