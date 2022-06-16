/**
 * one of in operator usage is to iterate through keys to create a mapped type
 * 
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
type MappedType<T> = {
  [k in keyof T]: T[k]
}

/**
 * the second way is to act as a type guard
 * 
 * https://stackoverflow.com/questions/50214731/what-does-the-in-keyword-do-in-typescript
 */
interface AA {
  x: number
}
interface BB {
  y: string
}

const a: AA | BB = Math.random() > 0.5 ? {x:1} : {y:'2'}
if('x' in a) {
  console.log(a.x)
} else {
  console.log(a.y)
}