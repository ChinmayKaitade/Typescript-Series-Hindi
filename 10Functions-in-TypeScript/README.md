# 📘 Functions in TypeScript (Chai Examples ☕)

This code demonstrates how **functions work in TypeScript**, including **parameter types, return types, optional/default parameters, and object parameters**.

---

## 🔹 1. Function with Typed Parameters

```ts
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} Cups of ${type}`);
}

makeChai("Masala", 2);
```

### 🧠 Explanation:

- `type` must be a **string**
- `cups` must be a **number**
- TypeScript ensures correct arguments at **compile time**

❌ Invalid call:

```ts
makeChai(2, "Masala"); // Error
```

✅ Helps prevent wrong parameter order and type bugs.

---

## 🔹 2. Function with Explicit Return Type

```ts
function getChaiPrice(): number {
  return 25;
}
```

### 🧠 Explanation:

- `: number` explicitly tells TypeScript that the function **must return a number**
- If you return anything else → TypeScript error

👉 Best practice for clarity and safety.

---

## 🔹 3. Function Returning `string | null`

```ts
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}
```

### 🧠 Explanation:

- If `order` is empty → returns `null`
- Otherwise → returns `string`

📌 TypeScript **infers** return type as:

```ts
string | null;
```

👉 Useful when data may or may not exist (API responses, user input).

---

## 🔹 4. `void` Return Type

```ts
function logChai(): void {
  console.log("Chai is Ready!");
}
```

### 🧠 Explanation:

- `void` means the function **does not return anything**
- Used for logging, side effects, UI actions

---

## 🔹 5. Optional vs Default Parameters

### ❌ Optional parameter (commented)

```ts
// function orderChai(type?: string) {
//   console.log("Sample Text");
// }
```

- `type?: string` means `string | undefined`

---

### ✅ Default Parameter (Recommended)

```ts
function orderChai(type: string = "Masala") {
  console.log("Sample Text2");
}
```

### 🧠 Explanation:

- If no argument is passed → `"Masala"` is used
- Cleaner and safer than optional parameters

---

## 🔹 6. Function with Object Parameter & Literal Types

```ts
function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
```

### 🧠 Explanation:

- Function accepts a **structured object**
- `size` is a **literal union type**

  - Only `"small"` or `"large"` allowed

- Return type is explicitly `number`

❌ Invalid size:

```ts
size: "medium"; // Error
```

👉 Great for:

- Orders
- Forms
- API payloads

---

## 🔥 Key Takeaways

- Always **type function parameters**
- Use **explicit return types** when possible
- Prefer **default parameters** over optional ones
- Use **object types** for complex inputs
- Literal types help prevent invalid values

---

## 🧠 Interview Tip

> “TypeScript functions give compile-time safety, better readability, and fewer runtime bugs.”
