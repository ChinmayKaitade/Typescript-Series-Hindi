# 📘 Union Types & Any in TypeScript

### 🔹 1. Union Types (`|`)

Union ka matlab hota hai **ek variable multiple data types accept kar sakta hai**, but **limited & controlled** way me.

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

- `subs` **number bhi ho sakta hai** ya **string bhi**
- `"1M"` valid hai
- `1000000` bhi valid hota

👉 Use case:
Subscribers count, IDs, API responses jaha format change ho sakta hai.

---

### 🧠 Example 2: Union with Literal Types (Fixed Values)

```ts
let apiRequestStatus: "pending" | "success" | "error" = "pending";
```

📌 Explanation:

- Variable **sirf 3 values** le sakta hai:

  - `"pending"`
  - `"success"`
  - `"error"`

- Koi aur value assign karoge toh **TypeScript error dega**

❌ Invalid:

```ts
apiRequestStatus = "done"; // Error
```

✅ Valid:

```ts
apiRequestStatus = "success";
```

👉 Real-world use:

- API status
- Payment status
- Form state handling

---

### 🧠 Example 3: Union for Fixed Options

```ts
let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "aisle";
```

📌 Explanation:

- Seat sirf **limited options** me se hi ho sakti hai
- Wrong input prevent ho jata hai

👉 Real-world use:

- Dropdown values
- User roles
- Feature flags

---

## 🔹 2. `undefined` ke saath Union

```ts
let currentOrder: string | undefined;
```

📌 Explanation:

- `currentOrder`:

  - `string` ho sakta hai
  - ya phir `undefined`

- Useful jab value **baad me assign hone wali ho**

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

- Pehle `currentOrder` undefined hota hai
- Jab `"28"` milta hai, value assign ho jati hai
- TypeScript safely handle karta hai

---

## 🔹 3. `any` Type (❌ Avoid Using It)

```ts
let currentOrder; // TypeScript treats this as : any
```

📌 Problem with `any`:

- TypeScript **type checking bandh kar deta hai**
- Galat value bhi assign ho jati hai
- Bugs runtime pe aate hain

❌ Dangerous:

```ts
currentOrder = 42; // Allowed if type is any
```

---

### ✅ Better Alternative (Use Union)

```ts
let currentOrder: string | undefined;
```

📌 Benefit:

- Safe code
- Better IntelliSense
- Compile-time error detection

---

## 🔥 Any vs Union (Quick Comparison)

| Feature         | `any`      | `union`         |
| --------------- | ---------- | --------------- |
| Type Safety     | ❌ No      | ✅ Yes          |
| Error Detection | ❌ Runtime | ✅ Compile time |
| IntelliSense    | ❌ Poor    | ✅ Strong       |
| Recommended     | ❌ No      | ✅ Yes          |

---

## 🧠 Interview Tip

💡 **Rule of Thumb**:

> “Avoid `any` as much as possible.
> Use **Union Types** to keep code flexible but safe.”
