const uniqueDataTypesFunc = <T>(item: T, defaultValue: T): [T, T] => {
  return [item, defaultValue];
};

interface Dog {
  name: string;
  breed: string;
}

const res = uniqueDataTypesFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(res);
