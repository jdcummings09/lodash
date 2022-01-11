const _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
  
      if (start > end) {
        let newStart = end;
        end = start;
        start = newStart;
      }
  
      if (number < start){
        return false;
      } else if (number >= end){
        return false;
      } else if (number >= start && number < end){
        return true;
      }
    },
  
    words(string) {
      return string.split(' ');
    },
  
    pad(string, length) {
      if (length <= string.length){
        return string;
      } else {
        let padding = length - string.length;
        let frontPadding = Math.floor(padding / 2);
        let endPadding = Math.ceil(padding / 2);
  
        let paddedString = ' '.repeat(frontPadding);
        return paddedString.concat(string, ' '.repeat(endPadding));
      }
    },
  
    has(object, key) {
      if (object[key]){
        return true;
      } else {
        return false;
      }
    },
  
    invert(object) {
      let invertedObject = {};
      for (const [key, value] of Object.entries(object)){
        invertedObject[value] = key;
      }
      return invertedObject;
    },
  
    findKey(object, predicate) {
      for (const [key, value] of Object.entries(object)){
        if (func(value)){
          return key;
        }
      }
      return undefined;
    },
  
    drop(array, number) {
      if (!number){
        array.shift();
        return array;
      }
      for (let i = 0; i < number; i++){
        array.shift();
      }
      return array;
    },
  
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index, array);
      });
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  
    chunk(array, size) {
      if (!size) {
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
};
  
// Do not write or modify code below this line.
module.exports = _;