interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "ChaiCode Cafe" };
// s.id = 2;

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Chinmay",
  age: 42,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
