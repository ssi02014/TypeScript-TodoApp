class Sorter {
  constructor(private collection: number[] | string){}

  sort(): number[] {
    const { length } = this.collection;

    for(let i = 0; i < length; i++) {
      for(let j = i + 1; j < length; j++) {
        if (this.collection[i] > this.collection[j]) {
          //swap
          // const temp = this.collection[i];
          // [this.collection[i], this.collection[j]] = [this.collection[j], temp];
          
        }
      }
    }
    return [1, 2, 3, 4];
  }
}

export default Sorter;