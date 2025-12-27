# 📘 Arrays, Tuples & Enums in TypeScript (Chai Edition ☕)

This lesson covers how **TypeScript handles collections and fixed data structures**, including **arrays, readonly arrays, tuples, enums, and const enums**.

---

## 🔹 1. Typed Arrays

### Basic Array Syntax

```ts
const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];
```

### Alternative Generic Syntax

```ts
const rating: Array<number> = [4.5, 5.0];
```

### 🧠 Explanation:

- Arrays contain **only one specific type**
- Mixed types are not allowed
- Both syntaxes are valid

👉 Preferred: `type[]` for simplicity

---

## 🔹 2. Arrays of Objects

```ts
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];
```

### 🧠 Explanation:

- Each item in `menu` must follow the `Chai` structure
- Missing or extra properties cause errors

👉 Common in:

- Menus
- Product lists
- API responses

---

## 🔹 3. Readonly Arrays (Immutable)

```ts
const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune"); ❌ Error
```

### 🧠 Explanation:

- Prevents modification of the array
- Ensures immutability

👉 Useful for:

- Constants
- Config values
- Fixed data

---

## 🔹 4. Multi-Dimensional Arrays

```ts
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```

### 🧠 Explanation:

- `number[][]` = array of arrays of numbers
- Used for grids, matrices, tables

---

## 🔹 5. Tuples (Fixed Length & Order)

```ts
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]; ❌ Error
```

### 🧠 Explanation:

- Tuples enforce **order + type**
- Useful for fixed structured data

---

## 🔹 6. Optional Elements in Tuples

```ts
let userInfo: [string, number, boolean?];
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
```

### 🧠 Explanation:

- Last element is optional
- Tuple length is controlled

---

## 🔹 7. Readonly Tuples

```ts
const location: readonly [number, number] = [28.66, 32.22];
```

### 🧠 Explanation:

- Coordinates cannot be changed
- Ensures data safety

---

## 🔹 8. Named Tuples (Better Readability)

```ts
const chaiItems: [name: string, price: number] = ["Masala", 25];
```

### 🧠 Explanation:

- Labels improve code readability
- Types still enforced

---

## 🔹 9. Enums (Numeric)

```ts
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;
```

### 🧠 Explanation:

- Auto-assigned numeric values (0, 1, 2)
- Improves readability over magic numbers

---

## 🔹 10. Enums with Custom Values

```ts
enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}
```

### 🧠 Explanation:

- Start value is manually set
- Useful for status codes

---

## 🔹 11. String Enums (Recommended)

```ts
enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
```

```ts
function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala"); ❌ Error
```

### 🧠 Explanation:

- Prevents invalid string values
- Very safe for APIs & forms

---

## 🔹 12. Mixed Enums (⚠️ Avoid)

```ts
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}
```

### 🧠 Explanation:

- Mixing string & number enums is allowed
- But **not recommended** due to confusion

---

## 🔹 13. `const enum` (Performance Optimization)

```ts
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.HIGH;
```

### 🧠 Explanation:

- Removed during compilation
- Direct value is inlined
- Smaller & faster JS output

👉 Best for constants

---

## 🔹 14. Tuple Limitation (Important ⚠️)

```ts
let t: [string, number] = ["chai", 10];
t.push("extra"); // Allowed 😲
```

### 🧠 Explanation:

- TypeScript allows `push` on tuples
- This is a known limitation
- Avoid mutating tuples

---

## 🔥 Key Takeaways

- Use **arrays** for flexible lists
- Use **tuples** for fixed-structure data
- Use **readonly** to prevent mutation
- Prefer **string enums** over numeric
- Use **const enum** for performance

---

## 🧠 Interview One-Liners

- Arrays enforce **same type elements**
- Tuples enforce **order + type**
- Enums replace magic values
- `const enum` improves performance
- Tuples are not fully immutable
