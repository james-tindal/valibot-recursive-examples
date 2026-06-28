import { array, pipe, recursive, transform } from 'valibot'

// TS says:
//
// Exported variable 'a' has or is using name 'RecursiveSelfSchema' from external module
// "/Users/user/code/valibot-recursive-examples/node_modules/valibot/dist/index" but cannot be named.
export const a = recursive(self => array(self))

// TS says:
//
// The inferred type of 'b' references an inaccessible 'unique symbol' type. A type annotation is necessary.ts(2527)
//
// Exported variable 'b' has or is using name 'RecursiveArray' from external module
// "/Users/user/code/valibot-recursive-examples/node_modules/valibot/dist/index" but cannot be named.ts(4023)
//
// Exported variable 'b' has or is using name 'RecursiveSelfSchema' from external module
// "/Users/user/code/valibot-recursive-examples/node_modules/valibot/dist/index" but cannot be named.ts(4023)
export const b = pipe(a, transform(x => x))
