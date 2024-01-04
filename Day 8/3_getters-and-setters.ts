class MyClass {
  private _myProperty: number = 0;

  get MyProperty(): number {
    return this._myProperty;
  }

  set MyProperty(value: number) {
    this._myProperty = value;
  }
}

const MyInstance = new MyClass();
console.log(`Current Value: ${MyInstance.MyProperty}`);
MyInstance.MyProperty = 10;

console.log(`Current Value: ${MyInstance.MyProperty}`);
