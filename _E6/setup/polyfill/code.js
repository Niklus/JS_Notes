if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}


console.log('Nicholas'.startsWith('Nich', 0)); 
console.log('Nicholas'.startsWith('ich', 1)); 
console.log('Nicholas'.startsWith('mik')); 