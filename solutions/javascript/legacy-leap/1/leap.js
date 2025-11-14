//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
    this.value = input;
};

Year.prototype.isLeap = function () {
    var theTruth = this.value % 4 === 0;
    if(this.value % 100 === 0){
        theTruth = this.value % 400 === 0;
    }

    return theTruth;
};


module.exports = Year;