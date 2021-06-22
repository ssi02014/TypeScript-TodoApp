class Sorter {
  constructor(private collection: number[] | string){}

  sort(): number[] | string {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (this.collection[i] > this.collection[j]) {
          if (typeof this.collection === 'string') {
            // this.collection = this.collection.toLowerCase()
            if (this.collection[i].toLowerCase() > this.collection[j].toLowerCase()) {
              const characters = this.collection.split('');
              const temp = characters[i];
              characters[i] = characters[j];
              characters[j] = temp;
              this.collection = characters.join('');
            }
          } 
          // else {
          //   if (this.collection[i] > this.collection[j]) {
          //     const temp = this.collection[i];
          //     [this.collection[i], this.collection[j]] = [this.collection[j], temp];
          //   }
          // }
          if (this.collection instanceof Array) {
            const temp = this.collection[i];
            [this.collection[i], this.collection[j]] = [this.collection[j], temp];
          }
        }
      }
    }
    return this.collection;
  }
}

export default Sorter;