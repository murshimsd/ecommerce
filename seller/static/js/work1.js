// wk-1  push elements in differents array to according even or odd
// var students=["anu","manu","babu","sunu","aju","murshid","anand"]
// // document.write(students)
// var odd=[]
// var even=[]


// for (i=0;i<students.length;i++){
//     if(students[i].length % 2 == 0){
//         even.push(students[i])
//     }
//     else if(students[i].length % 2 != 0){
//         odd.push(students[i])
//     }
// }
// document.write(odd)
// document.write("<br/>")
// document.write(even)
// document.write("<br/>")






// wk-2  make array ascending order
// var guyz=["murhsi","anu","babu","shaabu","harikrishn","aaaaaaaaaaaaaaaaa",'a']

// for(let i=0;i<guyz.length;i++){
//     for(let j=0;j<guyz.length;j++){
//         if(guyz[i].length<guyz[j].length){
//             let temp=guyz[i]
//             guyz[i]=guyz[j]
//             guyz[j]=temp
//         }
//     }
// }
// console.log(guyz)





// wk-3  eliminate duplicates from array
// var voter=["babu","babu","murshi","murshi","sabu","anu","manu"]



// for(i=0;i<voter.length;i++){
//     for(j=i+1;j<voter.length;j++){
//         if(voter[i] == voter[j]){
//             voter.splice(j,1)
//             j--
//             // dup.push(voter[j])

//         }
//     }
// }
// console.log(voter) 








// var voter=["babu","babu","murshi","murshi","sabu","anu","manu","anu"]
// var dup=[]
// for(i=0;i<voter.length;i++){
//     for(j=i+1;j<voter.length;j++){
//         if(voter[i] == voter[j]  && !dup.includes(voter[j])){
//             dup.push(voter[j])
//         }
//     }
// }
// console.log(voter)
// console.log(dup)















// wk-4  check both array is same or
// var boy =["aa","bb","ss","cc","dd","ee"]
// var girl=["bb","aa","cc","dd","ee","ss"]
// for(let i=0;i<boy.length;i++){
//     for(let j=0;j<girl.length;j++){
//         if(boy[i]==girl[j]){
//            a="same"
//         }else{
//           a="not same"
//         }
//     }
// }
// console.log(a)





// count vowels
// str = prompt("enter something")
// count=0
// for(i=0;i<str.length;i++){
//     if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//         count++
//     }
// }
// document.write(count)

// vowels finding
// var vow = ["a","e","i","o","u"]
// var name= prompt("enter name")
// count=0

// for(i=0;i<vow.length;i++){
//     for(j=0;j<name.length;j++){
//         if(vow[i] == name[j]){
//             count++
//         }
//     }
// }
// console.log(count)












// temp = 0
// var num = prompt("enter num")
// for (i = 0; i < num.length; i++) {
//     for (j = i + 1; j < num.length; j++) {
//         if (num[i] == num[j]) {
//             temp = num[j]
//             j--

//         }
//     }
// }
// console.log(temp)
// // uncomplete




// var name =prompt("enter name")
// var fname=''

// for(i=0;i<name.length;i++){
//     if(name[i] ===""){
//         break
//     }
//     fname += name[i]
// }
// fname = fname.charAt(0).toUpperCase()+fname.slice(2)

// console.log(fname+name.slice(fname.length))





var ar1 = ["aa", "bb", "cc", "dd", "ee", "ss"]
var ar2 = ["aa", "bb", "cc", "dd", "ee","ss"]

if (ar1.length !== ar2.length) {
    console.log("nop")
} else {
    let eql = true
    for (i = 0; i < ar1.length; i++) {
        if (ar1[i] == ar2[i]) {
            eql = false
            break
        }
    }

    if (eql) {
        console.log("same")

    } else {
        console.log("nop")
    }

}






















