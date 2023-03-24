// for(i=0;i<10;i++){
//     if(i%2==0){
//         document.write(i)
//     }

// }

// sum of values


// sum=0
// for(i=0;i<10;i++){
// sum+=i
// }
// document.write(sum)

//  array

// marks=[10,20,30,40]
// for(i=0;i<marks.length;i++){
//     document.write(marks[i]+"</BR>")
// }

// .length=to see num of elements in array

// mul array

// arr=[
//     [2,3,1,4],
//      [20,30,10,10]
//  ]
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[0].length;j++){
//         document.write(arr[i][j])
//     }
// }


// pattern


// for(i=0;i<5;i++){
//     for(j=0;j<5;j++){
//         document.write(" * ")
//     }
//     document.write("<BR/>")
// }




// while loop



// i = 0
// while (i < 10) {
//     document.write(i)
//     i++
// }



// even


// i = 0
// while (i < 10) {
//     if (i % 2 == 0) {
//         document.write(i)
//     }
//     i++
// }


// count


// num1=12445
// count=0
// while(num1>0){
//     num1=parseInt(num1/10)
//     count++


// }
// document.write(count)


// sum of digits


//  num=Number(prompt("enter a num"))
//  sum=0

//  while(num>0){
//     sum+=num%10
//      num=parseInt(num/10)

// }
//  document.write(sum)



// do while


// i=0
// do{
//     document.write(i)
//     i++
// }while(i<10)


// for of



// arr=[2,4,6,8]
// for (const i of arr) {
//     document.write(i)

// }


// for in


// arr=[2,4,6,8]
// for (const i in arr) {
//     document.write(i,arr[i]+"<br/>")

// }



// student={
//     fname:"babu",lname:"raam",age:10
// }
// for(item in student){
//     document.write(item+"    "+student[item])
// }








// wrk





// factorial




// num=Number(prompt("enter a num"))
// fact=1

// for(i=1;i<=num;i++){
//    fact *= i
// }
// document.write(fact)



// find the gcd




//  num1=Number(prompt("enter first num"))
//  num2=Number(prompt("enter second num"))
 
// var gcd
// if(num1==0 && num2==0){
//     gcd=0

// }
// if(num1==0){
//     gcd=num2
// }if(num2==0){
//     gcd=num1
// }
// for(i=1;i<=num1 && i<=num2;i++){
// if(num1%i==0 && num2%i==0){
//  gcd=i
//     }
//  }
//  document.write("gcd of "+num1+ "and"+num2+ "is"+gcd)





// lcm




// num1=Number(prompt("enter a num"))
// num2=Number(prompt("enter a num"))

// for(i=1;i<=num1 && i<=num2;i++){
//     if(num1%i==0 && num2%i==0){
//         gcd=i
//     }
// }

// lcm=(num1*num2)/gcd
// document.write("lcm of"+num1+"and" +num2+"is" +lcm)



// fibonacci





// num1=Number(prompt("enter a num"))
// f0=0
// f1=1



// for(i=1;i<=n;i++){
//    document.write(f0)
//    fn=f0+f1
//    f0=f1
//    f1=fn
// }





// prime numbers



// num =Number(prompt("enter a num"))
// prime = 0

// for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//         prime=1
//         break;
//     }
// }
// if (prime==1) {
//     document.write("prime")

// }
// else {
//     document.write("not a prime")
// }



// palindrome




// n=Number(prompt("enter a num"))
// enternum=n
// res=0

// while(n>0){
//     reminder=n%10;
//     res=res*10+reminder
//     n=parseInt(n/10)
// }
// document.write(res)
// if(enternum==res){
//     document.write("palindrome")
// }
// else{
//     document.write("not")
// }



// armstrong




// num=Number(prompt("enter a num"))
// n=num
// result=0
// while(n!=0){
// r=n%10
// result=result+(r*r*r)
// n=parseInt(n/10)
// }
// if(result==num){
//     document.write("armstrong")
// }else{
//     document.write("not a amstrong")
// }




// sort 3 num




// num1 = Number(prompt("enter a num"))
// num2 = Number(prompt("enter a num"))
// num3 = Number(prompt("enter a num"))


// if (num1 > num2) {
//     if (num2 > num3) {
//         document.write(`Ascending order:${num3},${num2},${num1}`)
//     }
//     else if (num3 > num1) {
//         document.write(`Ascending order:${num2},${num1},${num3}`)
//     }
//     else if (num1 > num3) {
//         document.write(`Ascending oreder: ${num2},${num3},${num1}`)
//     }

// }
// if(num2 > num1) {
//     if (num3 > num2) {
//         document.write(`Ascending oreder: ${num1},${num2},${num3}`)
//     }
//     else if (num3 > num1) {
//         document.write(`Ascending oreder: ${num1},${num3},${num2}`)
// }
// else if(num1>num3){
  
//     document.write(`Ascending oreder: ${num3},${num1},${num2}`)  
// }

// }


// if (num1 < num2) {
//     if (num2 < num3) {
//         document.write(`descending order:${num3},${num2},${num1}`)
//     }
//     else if (num3 < num1) {
//         document.write(`descending order:${num2},${num1},${num3}`)
//     }
//     else if (num1 < num3) {
//         document.write(`descending oreder: ${num2},${num3},${num1}`)
//     }

// }
// if(num2 < num1) {
//     if (num3 < num2) {
//         document.write(`descending oreder: ${num1},${num2},${num3}`)
//     }
//     else if (num3 < num1) {
//         document.write(`descending oreder: ${num1},${num3},${num2}`)
// }
// else if(num1<num3){
  
//     document.write(`descending oreder: ${num3},${num1},${num2}`)  
// }

// }



// reverse




// str=prompt("enter a string")
// str1=''

// for(i=str.length-1;i>=0;i--){
//  str1+=str[i]
// }
// document.write(str1)










