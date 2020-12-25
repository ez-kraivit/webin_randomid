const base62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const base36 = 'abcdefghijklmnopqrstuvwxyz0123456789'
const base10 = '0123456789'
module.exports = class randomid {
    /**
     * @static
     * @constructor
     */
    constructor() {
        this.chars = chars;
        this.numbers = numbers;
    }

    /**
    * Function RandomId By Kraivit
    * @private
    */
    static randomid = (length) => {
        try {
            this.numbers = this.numbers || 10
            let salt = '',i = 0
            while(i <this.numbers){salt += this.chars[Math.floor(length * Math.random())]; i++;}
            return salt
        } catch (error) {
            console.log(error)
            return error
        }
    }

    /**
    * Function GenID By Kraivit
    * @private
    */
    static generateid = (options = '', numbers = 0) => {
        try {
            if (typeof options != "string" || typeof numbers === "string" || typeof numbers === "object" || typeof numbers === "undefined" || Array.isArray(numbers) === true) { return "Error Number" }
            else {
                switch (String(options)) {
                    case "base62":
                        this.chars = base62
                        break;
                    case "base36":
                        this.chars = base36
                        break;
                    case "base10":
                        this.chars = base10
                        break;
                    default:
                        return "Options : base10 base36 base10";
                }
                let length = Buffer.byteLength(this.chars)
                this.numbers = numbers
                return this.randomid(length)
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }
}