export default class Gigasecond {
    private gigaMillisecond = 1000000000 * 1000
    gigasecond: Date

    constructor(date: Date) {
        this.gigasecond = ((d) => new Date(d.valueOf() + this.gigaMillisecond))(date)
    }

    date(): Date {
        return this.gigasecond;
    }
}