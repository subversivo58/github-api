/**
 * @copyright Copyright (c) 2020 Lauro Moraes <https://github.com/subversivo58>
 * @license  MIT <https://github.com/subversivo58/github-api/blob/master/LICENSE>
 */

const debug = function() {
    let args = Array.from(arguments);
    console.debug.apply(console, args);
}

export default debug;