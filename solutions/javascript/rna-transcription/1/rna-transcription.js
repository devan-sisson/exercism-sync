export default class Transcriptor{
    constructor(){
        this.nonDNARgx = /[^ACTG]/g
        this.dna ={
            C: 'G',
            G: 'C',
            A: 'U',
            T: 'A'
        }
    }

    toRna(dnaStr) {
        const errStr = 'Invalid input DNA.'
        if (this.nonDNARgx.test(dnaStr)){
            throw new Error (errStr)
        } else {
            return dnaStr.split('').reduce((rnaStr, nucleotide) => {
                rnaStr += this.dna[nucleotide]
                return rnaStr
            }, '')
        }
    }
}