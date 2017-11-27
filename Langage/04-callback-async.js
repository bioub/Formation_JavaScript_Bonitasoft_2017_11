setTimeout(function timeout500() {
  console.log('500ms');
}, 500);

setTimeout(function timeout1000A() {
  console.log('1s A');
}, 1000);

setTimeout(function timeout1000B() {
  console.log('1s B');
}, 1000);


setTimeout(function timeout800() {
  console.log('800ms');
}, 800);

console.log('fin');

/*

call stack
^
|
|
|
|
|
|            idle cl             cl             cl           cl
|st-st-st-cl .... timeout500 ... timeout800 ... timeout1000A-timeout1000B
+--------------------------------------------------------------> time
0                 500            800            1000

file d'attente :

 */