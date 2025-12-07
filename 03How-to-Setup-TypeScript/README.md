# How to Setup TypeScript in Project 🚀❤️

![TypeScript Setup](./TypeScript%20Setup.png)

## 🛠️ Setting Up TypeScript in Your Project

This diagram illustrates the primary ways to install and manage TypeScript and how to integrate third-party libraries like Node.js and React using type declarations.

---

### 📦 Installation Methods

TypeScript can be installed for use in two main ways, as shown in the flow:

1.  **Globally:** Installing TypeScript globally allows you to run the TypeScript compiler (`tsc`) from any terminal location on your machine. This is useful for simple scripts or quick compilation tasks.
2.  **Project:** Installing TypeScript locally within a specific project is the **recommended practice**. This ensures that everyone working on the project uses the same exact version of TypeScript, preventing conflicts.

### 🧩 Integrating Libraries

When working within a **Project** that uses existing JavaScript libraries (like Node or React), TypeScript needs to know the type definitions for those libraries. Since these libraries were originally written in JavaScript, they don't natively have TypeScript type files.

This is solved by using **Type Declarations** (often from the Definitely Typed repository, accessed via NPM):

- Libraries like **node** and **react** are linked to their corresponding type packages, such as **`@types/node`**.
- These packages provide the necessary type information (interface definitions, function signatures, etc.) so that the TypeScript compiler can correctly perform type checking on your code when you use those libraries.

---

### ✅ Quick Setup Steps

1.  **Install TypeScript locally:**
    ```bash
    npm install typescript --save-dev
    ```
2.  **Initialize the configuration file:**
    ```bash
    npx tsc --init
    ```
3.  **Install types for external libraries (if needed):**
    ```bash
    npm install @types/node @types/react --save-dev
    ```
