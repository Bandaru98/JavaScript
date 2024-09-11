//collection of words
//length
let str = 'madhu'
let strlength = str.length
console.log(strlength);


//uppercase
let a = 'Madhavi'
// let b=a.toUpperCase()
let b = a.toLowerCase()
console.log(b);

//trim
let ab = ' madhu '
let bc = ab.trim()
console.log(bc);

//replace
let r = 'JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.'
let ra=r.replace('is','are')
let rab=r.replace(/is/g,'are')//g represents global variable
console.log(ra);
console.log(rab);

//include
let i='JavaScript is the programming language of the Web'
let ib=i.includes('is')
console.log(ib);//true

//charat & charcodeat
let c='JavaScript is the programming language of the Web'
let cb=c.charAt(15)
let cab=c.charCodeAt(15)
console.log(cb);//h- represents index no of the 15 number
console.log(cab);//104 -represents asci value

//fromcharcode
let ch=String.fromCharCode(100)
console.log(ch);//d

//search
let s='JavaScript is the programming language of the Web'
let sb=s.search('of')
console.log(sb);//39-- index no

//endswith
let st='JavaScript is the programming language of the Web'
let stb=s.endsWith('Web')
console.log(stb);//true

//endswith
let sta='JavaScript is the programming language of the Web'
let stab=s.startsWith('JavaScript')
console.log(stab);//true

//match
let m='JavaScript is the programming language of the Web'
let mb=s.match(/is/g)
console.log(mb);//[ 'is' ]

//indexof
let ind='JavaScript is the programming language of the Web'
let inb=s.indexOf('the')
console.log(inb);//14


//lastindexof
let index='JavaScript is the programming language of the Web'
let indb=s.lastIndexOf('the')
console.log(indb);//42

//concat
let concata='JavaScript is the programming'
let concatb=' language of the Web'
let cob=concata.concat(concatb)
console.log(cob);//JavaScript is the programming language of the Web

//split
let sp='JavaScript is the programming language of the Web'
let spb=sp.split(' ')
console.log(spb);// returns as an array-------[ 'JavaScript','is','the','programming','language','of','the','Web']

//repeat
let re='JavaScript'
let reb=re.repeat(3)
console.log(reb);//JavaScriptJavaScriptJavaScript

//slice
let sl='JavaScript is the programming language of the Web'
let slb=sl.slice(5,15)
console.log(slb);//cript is t

//substring
let stri='JavaScript is the programming language of the Web'
let strb=stri.substring(7)
console.log(strb);//ipt is the programming language of the Web

//tostring
let tost=20
let tob=tost.toString()
console.log(tob+1000);//201000

