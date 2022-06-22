module.exports = function reverse (n) {
   n = n >= 0 ? n : n * (-1); 
   n = (n.toString().split('').reverse().join(''));
   return +n;
}
