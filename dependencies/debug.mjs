/**
 * @copyright Copyright (c) 2020 Lauro Moraes <https://github.com/subversivo58>
 * @license  MIT License <https://github.com/subversivo58/subversivo58.github.io/blob/master/LICENSE>
 */
class debuggingLogger {
    constructor(logPrefix) {
        if ( logPrefix ) {
            this.logPrefix = `%c[${logPrefix}]`;
        }
    }

    get log() {
        const logPrefix = this.logPrefix;
        if ( logPrefix.length ) {
            return console.debug.bind(console, logPrefix, 'color:blue;');
        } else {
            return console.debug.bind(console);
        }
    }
}

const debug = function debug() {
    if ( !(this instanceof debug) ) {
        return new debug(arguments[0])
    }
    const debugLoger = new debuggingLogger(arguments[0])
    return debugLoger.log;
}

export default debug;