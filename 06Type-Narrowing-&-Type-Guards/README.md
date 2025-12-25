# 📘 Type Guards & Union Narrowing in TypeScript (Chai Edition ☕)

🔗 **Official TS Reference:** _Unknown type in TypeScript_
[https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type)

---

## 🔹 1. Union Types with `typeof` Type Guard

### Example:

```ts
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai Order: ${kind}`;
}
```

### 🧠 Explanation:

- `kind` can be **string or number**
- `typeof` check TypeScript ko batata hai:

  - Agar `"string"` → string logic
  - Else → number logic

📌 This is called **Type Narrowing using `typeof`**

👉 Real-world use:

- API params
- User input
- IDs vs. names

---

## 🔹 2. Optional Parameters (`?`) & Truthy Check

```ts
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving Default Masala Chai🍵`;
}
```

### 🧠 Explanation:

- `msg?: string` means:

  - Parameter **optional hai**
  - Type = `string | undefined`

- `if (msg)` ensures undefined handle ho jaye

👉 Best practice for default responses

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

📌 Literal values TypeScript ko exact control dete hain
📌 `number` allow karta hai custom quantity

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

### 🧠 Explanation:

- `instanceof` runtime pe class check karta hai
- Sirf **class-based objects** ke liye kaam karta hai

👉 Used in:

- OOP
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

### 🧠 Why needed?

- `any` / unknown data (API / user input)
- Runtime pe validate karna zaroori

📌 `obj is ChaiOrder` tells TS:

> “Agar true return hua → obj is ChaiOrder”

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

👉 Clean & safe branching
👉 Avoids runtime crashes

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

📌 `type` is called **Discriminant Property**

👉 Used heavily in:

- Redux
- APIs
- State management
- Backend responses

---

## 🔹 8. `in` Operator Type Guard

```ts
function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    // MasalaChai confirmed
  }
}
```

### 🧠 Explanation:

- `"property" in object`
- Object shape se type narrow hota hai

👉 Best when:

- Same `type` field nahi ho
- Property unique ho

---

## 🔹 9. `unknown` Type + Type Predicate

```ts
function isStringArray(arr: unknown): arr is string[] {
  //
}
```

### 🧠 Explanation:

- Use **`unknown`** when input is unpredictable
- **Safer than `any`** — TypeScript force karta hai checks
- Official doc for `unknown`:
  🔗 [https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type)

### Example Implementation

```ts
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
```

👉 Interview favorite topic 🔥

---

## 🔥 Type Guard Techniques Summary

| Technique                    | Use Case                    |
| ---------------------------- | --------------------------- |
| `typeof`                     | primitives (string, number) |
| `instanceof`                 | classes                     |
| `in`                         | object properties           |
| custom guard (`obj is Type`) | APIs, unknown data          |
| discriminated union          | complex states              |

---

## 🧠 Interview Tip (Must Remember)

> **“Type Guards help TypeScript understand runtime behavior and give compile-time safety.”**
