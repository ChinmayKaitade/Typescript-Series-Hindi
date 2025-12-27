# 📘 Interfaces & Generics in TypeScript (Chai Edition ☕)

This lesson explains how **interfaces define structure** and how **generics make code reusable and type-safe**.

---

## 🔹 1. Basic Interface

```ts
interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
```

```ts
const masala: Chai = {
  flavour: "masala",
  price: 30,
};
```

### 🧠 Explanation:

- Interfaces define the **shape of an object**
- `milk?` is optional
- Missing required properties cause TypeScript errors

👉 Commonly used for:

- Objects
- API responses
- Props in React

---

## 🔹 2. Readonly Properties in Interface

```ts
interface Shop {
  readonly id: number;
  name: string;
}
```

```ts
const s: Shop = { id: 1, name: "ChaiCode Cafe" };
// s.id = 2 ❌ Error
```

### 🧠 Explanation:

- `readonly` prevents reassignment
- Value can be set only once

👉 Useful for:

- IDs
- Tokens
- Configuration objects

---

## 🔹 3. Function Type Interface

```ts
interface DiscountCalculator {
  (price: number): number;
}
```

```ts
const apply50: DiscountCalculator = (p) => p * 0.5;
```

### 🧠 Explanation:

- Interfaces can describe **function signatures**
- Enforces parameter and return types

👉 Used in callbacks & utilities

---

## 🔹 4. Interface with Methods

```ts
interface TeaMachine {
  start(): void;
  stop(): void;
}
```

```ts
const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};
```

### 🧠 Explanation:

- Objects must implement **all methods**
- Method signatures must match exactly

---

## 🔹 5. Index Signature Interface

```ts
interface ChaiRatings {
  [flavour: string]: number;
}
```

```ts
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4,
};
```

### 🧠 Explanation:

- Keys are dynamic strings
- Values must be numbers

👉 Used when object keys are unknown beforehand

---

## 🔹 6. Interface Declaration Merging

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

```ts
const u: User = {
  name: "Chinmay",
  age: 42,
};
```

### 🧠 Explanation:

- Interfaces with same name **merge automatically**
- Types **do NOT support merging**

👉 Very important difference between `interface` and `type`

---

## 🔹 7. Interface Inheritance (`extends`)

```ts
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
```

### 🧠 Explanation:

- Interface `C` contains both `a` and `b`
- Multiple inheritance is allowed

---

# 📘 Generics in TypeScript

Generics allow you to write **reusable and type-safe code**.

---

## 🔹 8. Generic Function (Single Type)

```ts
function wrapInArray<T>(item: T): T[] {
  return [item];
}
```

```ts
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });
```

### 🧠 Explanation:

- `T` represents a **placeholder type**
- Type is inferred automatically
- Same function works for multiple types

---

## 🔹 9. Generic Function with Multiple Types

```ts
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
```

```ts
pair("masala", 20);
pair("masala", { flavour: "Ginger" });
```

### 🧠 Explanation:

- `A` and `B` can be different types
- Returns a tuple with preserved types

---

## 🔹 10. Generic Interface

```ts
interface Box<T> {
  content: T;
}
```

```ts
const numberBox: Box<number> = { content: 10 };
const stringBox: Box<string> = { content: "10" };
```

### 🧠 Explanation:

- Same interface works with different types
- Enforces strong typing

---

## 🔹 11. Generic API Response Interface

```ts
interface ApiPromise<T> {
  status: number;
  data: T;
}
```

```ts
const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
```

### 🧠 Explanation:

- Common real-world use case
- Ensures API response shape stays correct

👉 Widely used in:

- Fetch
- Axios
- Backend services

---

## 🔥 Key Takeaways

- Interfaces define object & function structure
- `readonly` prevents mutation
- Interfaces support **declaration merging**
- Interfaces can extend multiple interfaces
- Generics make code **reusable & type-safe**
- Generic APIs are interview favorites

---

## 🧠 Interview One-Liners

- Interfaces support declaration merging
- Types do not merge
- Generics preserve type information
- Index signatures handle dynamic keys
- Interfaces are preferred for object shapes
