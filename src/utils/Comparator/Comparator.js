export default class Comparator {

    /**
     * @param compareFunc {function(a: *, b: *)}
     */
    constructor(compareFunc) {
        this.compare = compareFunc || Comparator.defaultCompareFunc;
    }

    /**
     * @param a {(string|number)}
     * @param b {(string|number)}
     * @returns {number}
     */
    static defaultCompareFunc(a, b) {
        if (a === b) {
            return 0;
        }

        return a > b ? 1 : -1;
    }

    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    lessThan() {
        return this.compare(a, b) < 0;
    }

    greaterThan() {
        return this.compare(a, b) > 0;
    }

    lessThanOrEqual() {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual() {
        return this.greaterThan(a, b) || this.equal(a, b);
    }
}
