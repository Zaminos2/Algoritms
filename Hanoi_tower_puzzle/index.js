// const n = 3; 
// const movesIterative = hanoiIterative(n);

// function hanoiIterative(n) {
//     const stack = [];
//     let source = [n, 'A'];
//     let auxiliary = [0, 'B'];
//     let target = [0, 'C'];
//     let moves = [];
  
//     while (true) {
//       if (source[0] > 0) {
//         stack.push([source, auxiliary, target]);
//         target = auxiliary;
//         auxiliary = source;
//         source = [source[0] - 1, source[1]];
//       } else if (stack.length > 0) {
//         moves.push([stack[stack.length - 1][0][1], stack[stack.length - 1][2][1]]);
//         source = stack.pop()[2];
//         auxiliary = stack[stack.length - 1][0];
//         target = stack[stack.length - 1][2];
//         target = [target[0] - 1, target[1]];
//       } else {
//         break;
//       }
//     }
  
//     return moves;
//   }
  

//   console.log(movesIterative);
  
const n = 3;
const source = 'A'; 
const auxiliary = 'B'; 
const target = 'C'; 



  function hanoiRecursive(n, source, auxiliary, target, moves) {
    if (n > 0) {
      hanoiRecursive(n - 1, source, target, auxiliary, moves);
  
      moves.push([source, target]);
  
      hanoiRecursive(n - 1, auxiliary, source, target, moves);
    }
  
    return moves;
  }
  const movesRecursive = hanoiRecursive(n, source, auxiliary, target, []);
 
  console.log(movesRecursive);