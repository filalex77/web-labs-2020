export default class Player {
  name: string;
  sex: string;
  country: string;
  wishes: { town: string; profession: string };

  constructor(name: string, sex: string, country: string) {
    this.name = name;
    this.sex = sex;
    this.country = country;
  }

  static prompt() {
    return new this(
      window.prompt("Enter your name"),
      window.prompt("Enter your sex"),
      window.prompt("Enter your country"),
    );
  }

  enterWishes() {
    this.wishes = {
      town: window.prompt("What town do you want to live in?"),
      profession: window.prompt("What profession do you like?"),
    };
  }

  showWishes() {
    for (let key in this.wishes) {
      switch (key) {
        case "town":
          window.alert(`You will live in ${this.wishes[key]}`);
          break;
        case "profession":
          window.alert(`You will work as ${this.wishes[key]}`);
          break;
      }
    }
  }
}
