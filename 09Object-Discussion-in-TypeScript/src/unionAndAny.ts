let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";
// console.log(apiRequestStatus); // pending

// apiRequestStatus = "done"; // throws error: Type '"done"' is not assignable to type '"pending" | "success" | "error"'
apiRequestStatus = "success";

let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "aisle";

const orders = ["12", "20", "28", "32", "42"];
// let currentOrder; // shows ": any"

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}

// currentOrder = 42; --> Don't do while using ":any"

console.log(currentOrder); // shows ": string | undefined: string | undefined"
