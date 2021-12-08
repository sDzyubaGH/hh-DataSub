class AClass {
  constructor(n) {
    if (this.constructor == AClass) {
      throw new Error("Abstract classes can't be instantiated.")
    }

    if (n < 1) {
      throw new Error("Array length must be a natural number.")
    }

    this.#fill(n)
  }

  Numbers = []

  #fill(n) {
    for (let i = 0; i < n; i++) {
      this.Numbers.push(Math.floor(Math.random() * 20))
    }
  }

  _factorial() {
    const factArr = []

    for (let i = 0; i < this.Numbers.length; i++) {
      if (this.Numbers[i] === 0) {
        factArr.push(1)
        continue
      }

      let fact = 1

      for (let j = 2; j <= this.Numbers[i]; j++) {
        fact *= j
      }
      factArr.push(fact)
    }

    return factArr
  }

  // Abstract method
  sort() { }
}

class Class1 extends AClass {
  constructor(n) {
    super(n)
  }

  // select sort
  sort() {
    let min;
    for (let i = 0; i < this.Numbers.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < this.Numbers.length; j++) {
        if (this.Numbers[j] < this.Numbers[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [this.Numbers[i], this.Numbers[min]] = [this.Numbers[min], this.Numbers[i]];
      }
    }

    return this._factorial()
  }
}

class Class2 extends AClass {
  constructor(n) {
    super(n)
  }

  // insert sort
  sort() {
    for (let i = 1; i < this.Numbers.length; i++) {
      let get = this.Numbers[i];
      let j = i - 1;
      while (j >= 0 && this.Numbers[j] > get) {
        this.Numbers[j + 1] = this.Numbers[j];
        j--;
      }
      this.Numbers[j + 1] = get;
    }

    return this._factorial()
  }
}