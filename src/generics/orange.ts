class Orange {
  private name: string = 'Orange';
  constructor (private brix: number = 0)  {}

  getName(): string {
    return this.name;
  }
  getBrix(): number {
    return this.brix;
  }
}

export default Orange;