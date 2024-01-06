class Dog {
  bark() {
    console.log("Woff Woff");
  }
}

class Cat {
  meow() {
    console.log("Meow Meow");
  }
}

const animalSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) animal.bark();
  else animal.meow();
};

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);
