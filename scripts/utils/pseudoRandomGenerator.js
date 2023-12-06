class PseudoRandomGenerator {
  constructor(pseudoRandomValues) {
    this.pseudoRandomValues = pseudoRandomValues;
    this.count = 0;
  }

  random(){
      var value = this.pseudoRandomValues[this.count]/100;
      this.count++;
      if(this.count>=this.pseudoRandomValues.length){
          this.count=0;
      }
      return value;
  }

  reset(){
      this.count=0;
  }
}