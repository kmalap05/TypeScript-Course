class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent() {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());
stringBox.setContent("New content added");
console.log(stringBox.getContent());

const numberBox = new Box<number>(1);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
