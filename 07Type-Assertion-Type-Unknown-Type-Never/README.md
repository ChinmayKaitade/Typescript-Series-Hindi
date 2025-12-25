# 📘 Type Assertions, `any`, `unknown`, `never` in TypeScript

---

## 🔹 1. Type Assertion (`as` keyword)

Type Assertion means:

> “TypeScript, I know the actual type of this data — trust me.”

### Example

```ts
let response: any = "42";
let numericLength: number = (response as string).length;
```

📌 Explanation:

- `response` has the type `any`
- TypeScript does not know it is a string
- `(response as string)` manually tells TypeScript the correct type

⚠️ Note:

- Type assertion **does not perform runtime conversion**
- It only informs the TypeScript compiler

---

## 🔹 2. Type Assertion with `JSON.parse`

```ts
type Book = {
  name: string;
};

let bookString = '{"name":"Who Moved My Cheese"}';
let bookObject = JSON.parse(bookString) as Book;
```

📌 Explanation:

- `JSON.parse()` returns `any`
- `as Book` defines the expected structure
- Commonly used for API responses

⚠️ Risk:

- Invalid JSON can cause runtime errors
- Best practice: validation or custom type guards

---

## 🔹 3. DOM Type Assertion

```ts
const inputElement = document.getElementById("username") as HTMLInputElement;
```

📌 Explanation:

- `getElementById()` returns `HTMLElement | null`
- TypeScript cannot know the exact element type
- `as HTMLInputElement` provides the correct type

👉 Real-world usage:

- Forms
- Login pages
- React refs (similar concept)

---

## 🔹 4. `any` Type (❌ Unsafe)

```ts
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
```

📌 Problems with `any`:

- Disables type checking
- Allows invalid operations
- Errors appear at runtime

👉 Avoid using `any` in production

---

## 🔹 5. `unknown` Type (✅ Safe Alternative)

```ts
let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
```

📌 Difference:

- You **cannot use `unknown` directly**
- Type checking is required first

```ts
if (typeof newValue === "string") {
  newValue.toUpperCase();
}
```

👉 Always **check the type before using the value**

📌 Official documentation:
[https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0/#the-unknown-type)

---

## 🔹 6. Error Handling with `unknown`

```ts
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}
```

📌 Explanation:

- The `catch` variable has the type `unknown`
- Use `instanceof Error` to safely access error properties

👉 Best practice in modern TypeScript

---

## 🔹 7. `unknown` + Type Assertion

```ts
const data: unknown = "Chai Aur Code";
const strData: string = data as string;
```

📌 Explanation:

- Use type assertion only when you are **100% sure** of the data type
- Responsibility lies with the developer

---

## 🔹 8. Literal Union Types

```ts
type Role = "admin" | "user" | "superadmin";
```

📌 Benefits:

- Fixed and controlled values
- Prevents invalid roles

---

## 🔹 9. Control Flow with Literal Types

```ts
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to Admin Dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to User Dashboard");
    return;
  }

  role;
}
```

📌 Explanation:

- TypeScript knows only three roles are possible
- The final `role;` helps with exhaustive type checking

---

## 🔹 10. `never` Type (🔥 Advanced)

```ts
function neverReturn(): never {
  while (true) {}
}
```

📌 `never` means:

- The function **never returns**
- Used for infinite loops or functions that always throw errors

👉 Use cases:

- Exhaustive checks
- Critical error handling

---

## 🔥 `any` vs `unknown` vs `never`

| Feature        | `any` | `unknown`               | `never`          |
| -------------- | ----- | ----------------------- | ---------------- |
| Type safety    | ❌    | ✅                      | ✅               |
| Direct usage   | ✅    | ❌                      | ❌               |
| Runtime safety | ❌    | ✅                      | ✅               |
| Use case       | Avoid | Handling external input | Unreachable code |

---

## 🧠 Interview One-Liners

- **Type assertions do not change runtime values**
- **`unknown` is safer than `any`**
- **`never` means the function never completes**
- Use **`instanceof Error`** inside `catch` blocks
