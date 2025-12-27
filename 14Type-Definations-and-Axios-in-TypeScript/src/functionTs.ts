function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} Cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is Ready!");
}

// function orderChai(type?: string) {
//   console.log("Sample Text");
// }

function orderChai(type: string = "Masala") {
  console.log("Sample Text2");
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
