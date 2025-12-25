# 📘 TypeScript Notes: Object Types, Structural Typing & Utility Types

---

## 🔹 1. Type Inference with Objects

```ts
const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
```

### Explanation:

* TypeScript **automatically infers** the object type
* Inferred type:

```ts
{
  name: string;
  price: number;
  isHot: boolean;
}
```

📌 This is called **type inference**

---

## 🔹 2. Explicit Object Type Annotation

```ts
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
```

### Explanation:

* Object structure is explicitly defined
* Assignment must match exactly

```ts
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};
```

📌 Helps when defining objects step-by-step

---

## 🔹 3. Using `type` for Reusability

```ts
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
```

### Explanation:

* Avoids repeating object structures
* Makes code clean and reusable

```ts
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};
```

---

## 🔹 4. Structural Typing (Important Concept 🔥)

```ts
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = {
  size: "500ml",
  material: "steel",
};

smallCup = bigCup;
```

### Explanation:

* TypeScript follows **structural typing**
* If required properties exist, extra properties are allowed
* `bigCup` has `size`, so assignment is valid

📌 Also called **Duck Typing**

---

## 🔹 5. Structural Typing with Different Objects

```ts
type Brew = {
  brewTime: number;
};

const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;
```

### Explanation:

* `coffee` has required `brewTime`
* Extra properties don’t matter
* Assignment is valid

---

## 🔹 6. Basic User Type

```ts
type User = {
  username: string;
  password: string;
};
```

```ts
const u: User = {
  username: "chinmaydotcom",
  password: "123",
};
```

📌 Useful for:

* Login forms
* Auth payloads

---

## 🔹 7. Nested Object Types

```ts
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};
```

### Explanation:

* Shows how to define **complex nested structures**
* Common in APIs and e-commerce apps

---

## 🔹 8. `Partial<T>` Utility Type

```ts
// const updatedChai = (updates: Partial<Chai>) => {
//   console.log("Updating Chai with", updates);
// };
```

### Explanation:

* `Partial<T>` makes **all properties optional**
* Useful for update APIs (PATCH)

```ts
updatedChai({ price: 25 });
updatedChai({ isHot: false });
updatedChai({});
```

📌 Very common in real-world projects

---

## 🔹 9. `Required<T>` Utility Type

```ts
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
```

```ts
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
```

### Explanation:

* `Required<T>` makes **all optional properties mandatory**

```ts
placeOrder({
  name: "Masala Chai",
  quantity: 2,
});
```

📌 Ensures full data before processing

---

## 🔹 10. `Pick<T, K>` Utility Type

```ts
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
```

```ts
type BasicChaiInfo = Pick<Chai, "name" | "price">;
```

### Explanation:

* Picks only selected properties from a type
* Useful for public views or listings

```ts
const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};
```

---

## 🔹 11. `Omit<T, K>` Utility Type

```ts
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};
```

```ts
type PublicChai = Omit<Chai, "secretIngredients">;
```

### Explanation:

* Removes sensitive fields
* Ideal for public APIs

📌 Opposite of `Pick`

---

## 🔥 Utility Types Summary Table

| Utility Type  | Purpose                        |
| ------------- | ------------------------------ |
| `Partial<T>`  | Makes all properties optional  |
| `Required<T>` | Makes all properties mandatory |
| `Pick<T, K>`  | Select specific properties     |
| `Omit<T, K>`  | Remove specific properties     |

---

## 🧠 Interview Key Takeaways

* TypeScript uses **structural typing**
* Extra properties are allowed if required ones exist
* `type` improves reusability
* Utility types are heavily used in real-world apps
* `Partial` → updates
* `Required` → validations
* `Pick / Omit` → API security & optimization


