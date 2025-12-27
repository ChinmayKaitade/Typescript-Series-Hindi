## 🔹 1️⃣ Generic `useFetch<T>` Custom Hook (COMPLETE)

### Tumhara base code bilkul sahi tha, bas `useEffect` missing tha.

### ✅ Final Correct `useFetch` Hook

```ts
import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }

        const data: T = await response.json();

        if (isMounted) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error:
              error instanceof Error ? error.message : "Something went wrong",
          });
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}
```

---

### 🧠 Important Concepts (Interview Gold)

- `useFetch<T>` → **Generic hook**
- `T` → API response ka type dynamically define hota hai
- `FetchState<T>` → reusable state structure
- `isMounted` → **memory leak prevent** karta hai
- `response.json()` → manually typed as `T`

---

### 🔥 Usage Example

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const { data, loading, error } = useFetch<Todo>(
  "https://jsonplaceholder.typicode.com/todos/1"
);
```

---

## 🔹 2️⃣ `App.tsx` – TypeScript + Component Composition

### Menu Data (Strong Typing)

```ts
import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 60 },
];
```

✔ Ensures **array items strictly follow `Chai` type**

---

## 🔹 3️⃣ `Card` Component – `PropsWithChildren`

```ts
interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}
```

### 🧠 Why `PropsWithChildren`?

- Automatically adds `children` prop
- Cleaner & scalable approach

```tsx
<Card title="Chai Aur TypeScript" footer={<button>Chinmay CK</button>} />
```

---

## 🔹 4️⃣ `ChaiCard` – Optional Props + Default Value

```ts
interface ChaiCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}
```

```ts
export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProp);
```

✔ Optional prop
✔ Default value
✔ Clean conditional rendering

---

## 🔹 5️⃣ `ChaiList` – Props Typing + Map

```ts
interface ChaiListProps {
  items: Chai[];
}
```

```tsx
{
  items.map((chai) => (
    <ChaiCard
      key={chai.id}
      name={chai.name}
      price={chai.price}
      isSpecial={chai.price > 30}
    />
  ));
}
```

🧠 Business logic parent me, UI child me — **BEST PRACTICE**

---

## 🔹 6️⃣ `Counter` – Typed State

```ts
const [count, setCount] = useState<number>(0);
```

✔ Explicit typing
✔ Functional update pattern

---

## 🔹 7️⃣ `OrderForm` – Typed Events & Callback Props

```ts
interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}
```

```ts
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
```

✔ `React.FormEvent<HTMLFormElement>`
✔ Fully type-safe form handling

---

## 🔥 Common Interview Questions (From This Code)

1. Why use generics in custom hooks?
2. Difference between `PropsWithChildren` and `ReactNode`?
3. How do you prevent memory leaks in `useEffect`?
4. Why type events in React?
5. When to use optional props with default values?
