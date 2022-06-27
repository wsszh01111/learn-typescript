/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
 */
type MyReturnType<F> = F extends (...args: any[]) => infer A ? A : never
