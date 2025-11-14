class Year {
    constructor(year){
        this.year = year;
    }

    isLeap(){
        let leapYear = this.year % 4 === 0;

        return (this.year % 100 === 0)
            ? this.year % 400 === 0
            : leapYear
    }
}

module.exports = Year;