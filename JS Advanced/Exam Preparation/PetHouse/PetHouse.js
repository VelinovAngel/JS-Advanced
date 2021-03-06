function solution() {
    class Pet {
      constructor(owner, name) {
        this.owner = owner;
        this.name = name;
        this.comments = [];
      }
  
      addComment(comment) {
        if (this.comments.includes(comment)) {
          throw new Error(`This comment is already added!`);
        } else {
          this.comments.push(comment);
          return `Comment is added.`;
        }
      }
  
      feed() {
        return `${this.name} is fed`;
      }
  
      toString() {
        let result = [`Here is ${this.owner}'s pet ${this.name}.`];
        if (this.comments.length > 0) {
          result.push(`Special requirements: ${this.comments.join(", ")}`);
        }
        return result.join("\n");
      }
    }
  
    class Cat extends Pet {
      constructor(owner, name, insideHabits, scratching) {
        super(owner, name);
        this.insideHabits = insideHabits;
        this.scratching = scratching;
      }
  
      feed() {
        return super.feed() + ", happy and purring.";
      }
  
      toString() {
        let result = [super.toString()];
        result.push(`Main information:`);
        let str = `${this.name} is a cat with ${this.insideHabits}`;
        if (this.scratching === true) {
          str += `, but beware of scratches.`;
          result.push(str);
        } else {
          result.push(str);
        }
        return result.join("\n");
      }
    }
  
    class Dog extends Pet {
      constructor(owner, name, runningNeeds, trainability) {
        super(owner, name);
        this.runningNeeds = runningNeeds;
        this.trainability = trainability;
      }
  
      feed() {
        return super.feed() + ", happy and wagging tail.";
      }
  
      toString() {
        let result = [super.toString()];
        result.push(`Main information:`);
        result.push(
          `${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`
        );
        return result.join("\n");
      }
    }
    return { Pet, Cat, Dog };
  }