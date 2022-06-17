/**
 * typeof operator is used for referring to the type of variable or property in type context
 * 
 * https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 */

function f() {
  return { x: 1 }
}

type K = ReturnType<typeof f>