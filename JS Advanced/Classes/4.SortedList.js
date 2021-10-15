class List {
    constructor() {
        this.size = 0;
        this.myList = [];
    }

    add(element) {
        this.myList.push(element);
        this.myList.sort((a, b) => a - b);
        this.size = this.myList.length;
    }

    remove(index) {
        if (index < 0 || index > this.myList.length - 1) {
            throw new Error('Index out of range!')
        }
        else {
            this.myList.splice(index, 1);
            this.myList.sort((a, b) => a - b);
            this.size = this.myList.length;
        }
    }

    get(index) {
        return this.myList[index];
    }

}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.size)
console.log(list.get(1));


console.log(list.hasOwnProperty('size'));