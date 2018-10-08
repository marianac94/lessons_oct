
const number = 8;
const taco = "taco";

// the simple syntax of how to export something from a file
module.exports.name = 'burt';

module.exports.someObject = {
  color: 'blue'
};

module.exports.arr = [1, 2, 5];
module.exports.getNumber = () => {
  console.log('this is number', number, taco);
  return number;
};


// this is one way to export an object
const Tomogotchi = {
  name: 'jimigotchi',
  color: 'white'
}
  module.exports = Tomogotchi;

// if you dont give them property names the last export is what is exported from the file.
// module.exports = number;

console.log('end of file');
