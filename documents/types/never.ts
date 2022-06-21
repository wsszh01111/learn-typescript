/**
 * The never type represents the type of values that never occur. 
 * The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#never
 */
function returnNever(): never {
  while (true) { }
}
