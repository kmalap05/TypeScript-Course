// Interface with Object
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computer1: Computer = {
  name: "Lenovo Ideapad",
  ram: 8,
  hdd: 256,
};

console.log(computer1.name);
console.log(computer1.ram);
console.log(computer1.hdd);

// Interface with Object (with read-only property)
interface WebSeries {
  readonly name: string;
  rating: number;
  genre?: string;
}

const webSeries1: WebSeries = {
  name: "Money Heist",
  rating: 10,
};

// webSeries1.name = "Farzi"; // Error
console.log(webSeries1);
