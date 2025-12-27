# 📘 Classes & OOP in TypeScript (Chai Edition ☕)

This lesson covers **classes, access modifiers, inheritance, encapsulation, getters/setters, static members, abstract classes, and dependency injection** in TypeScript.

---

## 🔹 1. Basic Class Structure

```ts
class Chai {
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients;
  }
}
```

### 🧠 Explanation:

* `public` → accessible everywhere (default)
* `private` → accessible **only inside the class**
* Methods inside the class can access private members

👉 Ensures **data hiding & encapsulation**

---

## 🔹 2. Access Modifiers Overview

| Modifier    | Accessible In Class | Subclass | Outside |
| ----------- | ------------------- | -------- | ------- |
| `public`    | ✅                   | ✅        | ✅       |
| `protected` | ✅                   | ✅        | ❌       |
| `private`   | ✅                   | ❌        | ❌       |

---

## 🔹 3. `protected` Keyword (Inheritance)

```ts
class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}
```

### 🧠 Explanation:

* `protected` allows access in **child classes**
* Prevents access from outside instances

---

## 🔹 4. JavaScript Private Fields (`#`)

```ts
class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}
```

### 🧠 Explanation:

* `#balance` is **true runtime privacy**
* Enforced by JavaScript (not just TypeScript)

👉 Best for **secure data**

---

## 🔹 5. `readonly` Properties

```ts
class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
```

### 🧠 Explanation:

* Can be set **only once**
* Cannot be modified later

👉 Useful for constants like IDs, limits

---

## 🔹 6. Getters & Setters (Controlled Access)

```ts
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}
```

### 🧠 Explanation:

* Getter → read value
* Setter → validate before updating
* Business logic stays inside the class

👉 Used for validation, security, formatting

---

## 🔹 7. Static Members

```ts
class EkChai {
  static shopName = "ChaiCode Cafe";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);
```

### 🧠 Explanation:

* `static` belongs to the **class**, not instance
* Accessed using class name

👉 Used for:

* Constants
* Utility values
* Shared config

---

## 🔹 8. Abstract Classes

```ts
abstract class Drink {
  abstract make(): void;
}
```

```ts
class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}
```

### 🧠 Explanation:

* Abstract class **cannot be instantiated**
* Forces child classes to implement methods

👉 Used in:

* Frameworks
* Design patterns
* Blueprints

---

## 🔹 9. Dependency Injection (Loose Coupling)

```ts
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat();
  }
}
```

### 🧠 Explanation:

* Dependency passed via constructor
* Avoids tight coupling
* Easy testing & scalability

👉 Core concept in:

* Angular
* NestJS
* Clean architecture

---

## 🔥 Key Takeaways

* Use `private` for data hiding
* Use `protected` for inheritance
* Prefer `readonly` for constants
* Use getters/setters for validation
* `static` belongs to class, not instance
* Abstract classes define contracts
* Dependency Injection improves flexibility

---

## 🧠 Interview One-Liners

* `private` is compile-time protection
* `#private` is runtime protection
* `readonly` prevents reassignment
* Abstract classes cannot be instantiated
* Dependency Injection reduces coupling


