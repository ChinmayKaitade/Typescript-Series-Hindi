# Type Annotations and Inference in TypeScript 🚀❤️

The variable declaration `let chaiOrder: boolean` in **TypeScript** (which the preceding syntax, especially the explicit type annotations like `: string`, indicates) is a simple **type annotation**.

It declares a variable named `chaiOrder` and explicitly sets its type to **`boolean`**.

This means that **`chaiOrder` can only store the values `true` or `false`**.

Since no initial value is assigned, `chaiOrder` is currently **uninitialized** and its value is **`undefined`**.

---

## 🛠️ Variable Status Summary

- **Variable Name:** `chaiOrder`
- **Declared Type:** `boolean`
- **Current Value:** `undefined` (because no value was assigned)
- **What it can store:** Only `true` or `false`.

> **Example:** If you were to add a line after the declaration, it would look like this:
>
> `let chaiOrder: boolean; // Current value is undefined`
>
> `chaiOrder = true; // Now the value is true`
>
> `// chaiOrder = 1; // This would cause a TypeScript error because 1 is not a boolean`

---

## 🧐 TypeScript Context

Your code snippet demonstrates key features of TypeScript:

- **Explicit Typing:** `: string`, `: boolean` are used to tell the compiler exactly what kind of data the variable should hold.
- **Type Safety:** The commented-out lines show how TypeScript prevents assigning a different type to an explicitly typed variable:
  - `// channelName = 121212;` (Assuming `channelName` was implicitly typed as a `string` by its initial value `"ChaiAurCode"`, assigning a number would be an error).
  - `// chaiFlavour = 2;` (This would be an error because `chaiFlavour` was explicitly typed as a `string`).
