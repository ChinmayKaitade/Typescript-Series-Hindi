# 📘 Type Guards & Union Narrowing in TypeScript (Chai Edition ☕)

🔗 **Official TypeScript Reference:** _The `unknown` Type_
[https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type)

---

## 🔹 1. Union Types with `typeof` Type Guard

### Example

```ts
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai Order: ${kind}`;
}
```

### 🧠 Explanation

- `kind` can be either a **string or a number**
- The `typeof` check tells TypeScript:

  - If it is `"string"` → apply string-specific logic
  - Otherwise → treat it as a number

📌 This is called **Type Narrowing using `typeof`**

👉 Real-world use cases:

- API parameters
- User input
- IDs vs. names

---

## 🔹 2. Optional Parameters (`?`) & Truthy Check

```ts
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving Default Masala Chai 🍵`;
}
```

### 🧠 Explanation

- `msg?: string` means:

  - The parameter is **optional**
  - Its type becomes `string | undefined`

- The `if (msg)` check safely handles the `undefined` case

👉 Best practice for default values

---

## 🔹 3. Literal Union + Primitive Union

```ts
function orderChai(size: "small" | "medium" | "large" | number) {
```

### 🧠 Narrowing with Conditions

```ts
if (size === "small") { ... }
if (size === "medium" || size === "large") { ... }
```

📌 Literal types provide strict control over allowed values
📌 `number` allows custom or dynamic quantities

👉 Used in:

- Orders
- Pricing tiers
- Feature levels

---

## 🔹 4. Class-based Type Guard using `instanceof`

```ts
class KulhadChai { ... }
class CuttingChai { ... }

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}
```

### 🧠 Explanation

- `instanceof` performs a runtime class check
- Works only with **class-based objects**

👉 Commonly used in:

- Object-Oriented Programming
- Framework internals
- Polymorphism

---

## 🔹 5. Custom Type Guard (`obj is Type`)

```ts
type ChaiOrder = {
  type: string;
  sugar: number;
};
```

### Custom Guard Function

```ts
function isChaiOrder(obj: any): obj is ChaiOrder { ... }
```

### 🧠 Why is this needed?

- To safely handle `any` or `unknown` data (API responses, user input)
- Runtime validation is required

📌 `obj is ChaiOrder` tells TypeScript:

> “If this function returns true, then `obj` is a `ChaiOrder`.”

---

## 🔹 6. Type Guard Usage

```ts
function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} Chai with ${item.sugar} Sugar`;
  }
  return `Serving Custom Chai: ${item}`;
}
```

👉 Clean and safe branching
👉 Prevents runtime crashes

---

## 🔹 7. Discriminated Unions (🔥 VERY IMPORTANT)

```ts
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };
```

```ts
type Chai = MasalaChai | GingerChai | ElaichiChai;
```

### Switch-based Narrowing

```ts
function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
    case "ginger":
      return `Ginger Chai`;
    case "elaichi":
      return `Elaichi Chai`;
  }
}
```

📌 The `type` property is called a **Discriminant Property**

👉 Heavily used in:

- Redux
- APIs
- State management
- Backend responses

---

## 🔹 8. `in` Operator Type Guard

```ts
function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    // Confirmed as MasalaChai
  }
}
```

### 🧠 Explanation

- `"property" in object` checks for property existence
- The object’s shape is used to narrow the type

👉 Best when:

- There is no common discriminant property
- A property is unique to a specific type

---

## 🔹 9. `unknown` Type + Type Predicate

```ts
function isStringArray(arr: unknown): arr is string[] {
  //
}
```

### 🧠 Explanation

- Use **`unknown`** when the input type is unpredictable
- **Safer than `any`** because TypeScript enforces checks
- Official documentation:
  🔗 [https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type)

### Example Implementation

```ts
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
```

👉 A very common **interview question**

---

## 🔥 Type Guard Techniques Summary

| Technique                    | Use Case                         |
| ---------------------------- | -------------------------------- |
| `typeof`                     | Primitive types (string, number) |
| `instanceof`                 | Class-based objects              |
| `in`                         | Object property checks           |
| Custom guard (`obj is Type`) | APIs, unknown data               |
| Discriminated union          | Complex state handling           |

---

## 🧠 Interview Tip (Must Remember)

> **“Type Guards allow TypeScript to understand runtime behavior and provide compile-time safety.”**
