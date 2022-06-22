/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 */
let tuple: readonly [number, string] = [1, '2']
console.log(tuple[0])
console.log(tuple[1])
// console.log(tuple[2]) // error

// a good practice is to make tuple readonly in case .push() changes tuple
let tuple2: readonly [number] = [1]

// Named Tuples can provide more information of what each index means
// pay attention that x only provide more information but can't be used like namedTuple.x
const namedTuple: [x: number, y: string] = [1, 'str']

// destructure tuples
const [x, y] = tuple