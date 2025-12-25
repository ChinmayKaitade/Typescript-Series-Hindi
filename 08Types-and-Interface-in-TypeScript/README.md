# 📘 TypeScript Notes: Types, Interfaces, Classes & Advanced Types

---

## 🔹 1. Custom Object Types

```ts
type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};
```

### Explanation:

- `type` is used to define the structure of an object
- Any object passed as `ChaiOrder` must contain **all three properties**
- Helps in **type safety** and **better readability**

```ts
function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}
```

📌 Benefit:

- Prevents missing or extra properties
- Useful for function parameters (API requests, forms, configs)

---

## 🔹 2. Type vs Interface (Basics)

```ts
type TeaRecipe = {
  water: number;
  milk: number;
};
```

- `type` is flexible
- Can be used for unions, intersections, primitives

```ts
interface CupSize {
  size: "small" | "large";
}
```

- `interface` is mainly used for **object shapes**
- Preferred for **classes & OOP**

---

## 🔹 3. Class Implementing Interface

```ts
class Chai implements CupSize {
  size: "small" | "large" = "large";
}
```

### Explanation:

- `implements` ensures the class follows the interface contract
- If `size` is missing or wrong → TypeScript error
- Helps in **strong OOP design**

---

## 🔹 4. Literal Union Types

```ts
type TeaType = "masala" | "ginger" | "lemon";
```

### Explanation:

- Restricts values to fixed options
- Prevents invalid inputs

```ts
function orderChai(t: TeaType) {
  console.log(t);
}
```

📌 Use cases:

- Roles
- Status flags
- API parameters

---

## 🔹 5. Intersection Types (`&`)

```ts
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;
```

### Explanation:

- Combines multiple types into one
- Final type must include **all properties**

```ts
const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};
```

📌 Similar to inheritance but for types

---

## 🔹 6. Optional Properties (`?`)

```ts
type User = {
  username: string;
  bio?: string;
};
```

### Explanation:

- `bio` is optional
- Object can exist with or without it

```ts
const u1: User = { username: "Chinmay" };
const u2: User = { username: "Chinmay", bio: "MERN Stack Developer" };
```

📌 Useful for:

- User profiles
- Partial API responses

---

## 🔹 7. Readonly Properties

```ts
type Config = {
  readonly appName: string;
  version: number;
};
```

### Explanation:

- `readonly` property cannot be changed after initialization
- Protects important values

```ts
const cfg: Config = {
  appName: "MasterJi",
  version: 1,
};

cfg.appName = "ChaiCode"; // ❌ Error
```

📌 Use cases:

- App constants
- Environment configs
- IDs

---

## 🔹 8. Why TypeScript Prevents This?

```ts
import { Response } from "./../node_modules/typescript/lib/typescript.d";
```

⚠️ Avoid importing internal TypeScript types directly
👉 Instead, define your own types or use standard libraries

---

## 🧠 Interview Key Points

- `type` → flexible (union, intersection)
- `interface` → best for classes & OOP
- `implements` enforces structure
- Union types restrict values
- Intersection types combine structures
- Optional properties use `?`
- `readonly` prevents reassignment

---

## 🔥 Quick Summary Table

| Feature          | Keyword     | Use Case        |
| ---------------- | ----------- | --------------- |
| Object structure | `type`      | Functions, APIs |
| Class contract   | `interface` | OOP             |
| Fixed values     | Union types | Roles, status   |
| Combine types    | `&`         | Complex objects |
| Optional fields  | `?`         | Partial data    |
| Immutable        | `readonly`  | Configs         |
