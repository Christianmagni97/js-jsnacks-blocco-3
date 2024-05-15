const arrayA = [1,2];
const arrayB= [1,2,3,4,5,6,7,8,9,10,11, 12];
while(arrayA. length < arrayB. length){
arrayA. push(Math. round (Math.random ()* 100));
}
console. log(arrayA, arrayB);