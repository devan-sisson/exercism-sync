function DnaTranscriber(){
  pairs = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }

  this.transcribe = function(nucleotide){
    return pairs[nucleotide]
  }

  return this;
}

DnaTranscriber.prototype.toRna = function (strandStr) {
  if((/([^ACGT])/g.test(strandStr))){
    throw new Error('Invalid input')
  }
  var dnaStrand = strandStr.split('');

  return dnaStrand.map(nucleotide => this.transcribe(nucleotide)).join('');
}

module.exports = DnaTranscriber;