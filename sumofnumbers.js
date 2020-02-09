function sumFor(list){
  let count = 0;
  for (let i = 0; i < list.length; i++){
    count += list[i];
  }
  return count;
}

const array1 = [1,2,3,4,5];
console.log(`array1 = ${sumFor(array1)}`);

function sumWhile(list){
  let count = 0;
  let loopCount = 0;
  while (loopCount < list.length){
    count += list[loopCount];
    loopCount++;
  }
  return count;
}

const array2 = [2,2,2,2];
console.log(`array2 = ${sumWhile(array2)}`);

function sumRecursion(list){
  let leftNum = 0;
  let rightNum = 0;
  const half = Math.ceil(list.length / 2);
  const left = list.slice(0, half);
  const right = list.slice(half, list.length);

  if(left.length >= 2){
    leftNum = sumRecursion(left);
  }
  else{
    leftNum = left[0];
  }

  if(right.length >= 2){
    rightNum = sumRecursion(right);
  }
  else{
    rightNum = right[0];
  }

  return leftNum + rightNum;
}

const array3 = [3,3,3,3,3,3,3];
console.log(`array3 = ${sumRecursion(array3)}`);

function sumTheSimpleWay(list){
  const sum = _.reduce(list, function(memo, num){return memo + num});
  return sum;
}

const array4 = [4, 4, 4, 4];
console.log(`array 4 = ${sumTheSimpleWay(array4)}`);