# 📘 Union Types & Any in TypeScript

### 🔹 1. Union Types (`|`)

A **union type** allows a variable to accept **multiple data types**, but in a **controlled and safe** way.

### ✅ Syntax

```ts
let value: number | string;
```

---

### 🧠 Example 1: Union with Primitive Types

```ts
let subs: number | string = "1M";
```

📌 Explanation:

- `subs` can be **either a number or a string**
- `"1M"` is valid
- `1000000` would also be valid

👉 Use cases:
Subscriber counts, IDs, API responses where the format may vary.

---

### 🧠 Example 2: Union with Literal Types (Fixed Values)

```ts
let apiRequestStatus: "pending" | "success" | "error" = "pending";
```

📌 Explanation:

- The variable can accept **only these 3 values**:

  - `"pending"`
  - `"success"`
  - `"error"`

- Assigning any other value will cause a **TypeScript error**

❌ Invalid:

```ts
apiRequestStatus = "done"; // Error
```

✅ Valid:

```ts
apiRequestStatus = "success";
```

👉 Real-world use cases:

- API request status
- Payment status
- Form state management

---

### 🧠 Example 3: Union for Fixed Options

```ts
let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "aisle";
```

📌 Explanation:

- The seat can be selected only from **predefined options**
- Prevents invalid or wrong input

👉 Real-world use cases:

- Dropdown values
- User roles
- Feature flags

---

## 🔹 2. Union with `undefined`

```ts
let currentOrder: string | undefined;
```

📌 Explanation:

- `currentOrder` can be:

  - a `string`
  - or `undefined`

- Useful when the value is **assigned later**

---

### 🧠 Loop Example

```ts
const orders = ["12", "20", "28", "32", "42"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}
```

📌 Explanation:

- Initially, `currentOrder` is `undefined`
- When `"28"` is found, the value gets assigned
- TypeScript safely handles both possibilities

---

## 🔹 3. `any` Type (❌ Avoid Using It)

```ts
let currentOrder; // TypeScript treats this as `any`
```

📌 Problems with `any`:

- TypeScript **disables type checking**
- Invalid values can be assigned
- Errors appear at runtime instead of compile time

❌ Dangerous example:

```ts
currentOrder = 42; // Allowed if the type is `any`
```

---

### ✅ Better Alternative (Use Union Types)

```ts
let currentOrder: string | undefined;
```

📌 Benefits:

- Safer code
- Better IntelliSense support
- Compile-time error detection

---

## 🔥 `any` vs Union (Quick Comparison)

| Feature         | `any`      | `union`         |
| --------------- | ---------- | --------------- |
| Type Safety     | ❌ No      | ✅ Yes          |
| Error Detection | ❌ Runtime | ✅ Compile time |
| IntelliSense    | ❌ Poor    | ✅ Strong       |
| Recommended     | ❌ No      | ✅ Yes          |

---

## 🧠 Interview Tip

💡 **Rule of Thumb**:

> “Avoid using `any` as much as possible.
> Use **Union Types** to keep your code flexible yet type-safe.”
