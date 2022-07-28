module.exports = {

    validateString(argName, argValue) {
        if (!argValue) throw 'You must provide valid ' + argName;
        if (typeof argValue !== 'string') throw argName + ' must be a string';
        if (argValue.trim().length === 0) throw argName + ' cannot be an empty string or just spaces';
    },

    validateNumber(argName, argValue) {
        if (!argValue) throw 'You must provide valid ' + argName;
        if (typeof argValue !== 'number') throw argName + ' must be a number';
        if (argValue <= 0) throw argName + ' must be a positive number';
    }

};