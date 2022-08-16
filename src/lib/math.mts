
const math = {

    /**
     * get random number
     * @param min min value (include)
     * @param max max value (exclude)
     */
    random: function (min: number, max: number): number {
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }

        return Math.random() * (max - min) + min;
    },

    randomInt: function (min: number, max: number): number {
        return Math.floor(this.random(min, max));
    }
}

export default math;