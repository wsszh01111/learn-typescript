/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
 */
type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T