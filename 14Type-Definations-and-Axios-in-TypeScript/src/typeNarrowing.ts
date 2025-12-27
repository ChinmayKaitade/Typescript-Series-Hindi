function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai Order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving Default Masala Chai🍵`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small Cutting Chai...`;
  }
  if (size === "medium" || size === "large") {
    return `Make Extra Chai`;
  }
  return `Chai Order ${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai...`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai...`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} Chai with ${item.sugar} Sugar`;
  }
  return `Serving Custom Chai: ${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;
    case "ginger":
      return `Ginger Chai`;
      break;
    case "elaichi":
      return `Elaichi Chai`;
      break;
  }
}

function brew(order:MasalaChai | GingerChai){
  if("spiceLevel" in order){
    // 
  }
}

function isStringArray(arr:unknown): arr is string[]{
  //
}