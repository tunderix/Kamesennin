export const isFunction = function(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}