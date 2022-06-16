/**
 * the keyof operator get the keys of object type and return an union type
 * 
 * https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 */
type Point = {x: number, y: string}
type XY = keyof Point // XY = number | string

type Arrayish = {[x: number]: unknown}
type A = keyof Arrayish // A = number

type Objectish = {[x: string]: unknown}
type B = keyof Objectish // B = string | number
