# 📘 API Calls in TypeScript using Axios & Fetch

This lesson demonstrates how to **fetch data safely in TypeScript** using **Axios** and the **Fetch API**, along with **proper typing and error handling**.

---

## 🔹 1. API Call Using Axios (Typed Response)

```ts
import axios from "axios";
import type { AxiosResponse } from "axios";
```

### 🧠 Why `import type`?
- Ensures the import is used **only for types**
- Helps with better tree-shaking and performance

---

### Todo Interface

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

- Defines the structure of the API response
- Ensures type safety while accessing data

---

### Axios Fetch Function

```ts
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);

      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};
```

### 🧠 Explanation:

- `AxiosResponse<Todo>` ensures:
  - `response.data` is strictly of type `Todo`
- `axios.isAxiosError()` safely narrows the error type
- `error.response` exists only for Axios errors

👉 Best practice for **Axios error handling**

---

## 🔹 2. API Call Using Fetch API

### Fetch Implementation

```ts
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data: Todo = await response.json();
  } catch (error: any) {}
};
```

### 🧠 Explanation:

- `fetch()` does **not throw errors** for 4xx/5xx
- Manual check with `response.ok` is required
- `response.json()` returns `any`
- Explicitly casting to `Todo` ensures type safety

---

## 🔥 Axios vs Fetch (TypeScript Comparison)

| Feature            | Axios                     | Fetch API               |
|-------------------|---------------------------|-------------------------|
| JSON parsing      | Automatic                 | Manual (`response.json`) |
| Error handling    | Built-in                  | Manual                  |
| Response typing   | Easy with generics        | Needs casting           |
| Interceptors      | ✅ Yes                    | ❌ No                   |
| Browser support   | Needs library             | Native                  |

---

## 🧠 Best Practices

- Always define **interfaces** for API responses
- Use **Axios generics** for clean typing
- Prefer `axios.isAxiosError()` for error checks
- Validate `response.ok` when using fetch
- Avoid using `any` in `catch` blocks when possible

---

## 🎯 Interview One-Liners

- Axios supports generics for response typing
- Fetch does not throw HTTP errors by default
- `import type` is used for type-only imports
- `response.json()` returns `any`
- Axios provides built-in error helpers

