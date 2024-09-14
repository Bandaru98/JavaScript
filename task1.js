        /*
        1.write a function to calculateTotal that takes two arguments ,price and quantity, 
         and returnthe total cost.Ensure that the arguments are numbers,and if not,return 
         an error message.
        */

        // function calculateTotal(price,quantity){
        //     if(typeof price !== 'number'){
        //         return "entered price must be a number"
        //     }
        //     if(typeof quantity !== 'number'){
        //         return "entered quantity must be a number"
        //     }

        //   let total=  price*quantity;
        //   return total;

        // }
        // let CT=calculateTotal("a",2)
        // let CT1=calculateTotal(400,2)
        // console.log(CT);
        // console.log(CT1);


        /*
        2.write a function findMax that takes an array of numbers and returns the largest number.
        */

        // let largeNumber=[2,4,8,20,40,6,3,55,1,120]
        // function LN(number){
        //     let maxvalue=Math.max(...number)
        //    console.log(maxvalue);
        //     return maxvalue;
        // }LN(largeNumber)

        /*
        3.write a function capitalizeFirstLetter that takes  a string and capitalize
         the first letter of each word.
        */

         function capitalize(name) {
            let UC = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            return UC;
            let LC = name.split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1)).join(' ')
            return LC;
        }
        let uc1 = capitalize("hello evary one my self Madhu")
        console.log(uc1);
        let lc1 = capitalize("HELLO EVARY ONE MY SELF MADHU")
        console.log(lc1);

        /*
        4.write a function getFullName that takes an object with firstName and 
        lastName properties and return the full name
        */

        function fullName(person) {

            return person.firstName + '  ' + person.lastName;
        }
        let person = {
            firstName: "Jeslyn",
            lastName: "Dhiya"
        }
        console.log(fullName(person));

        /*    5. Write a function getAdults that takes an array of object(each with a name and age property)
                 and return an array of names of people who are 18 or older
       */

       let array=[
        {
            name:"Jessy",
            age:16
        },
        {
            name:"Jesli",
            age:30
        },
        {
            name:"Jeslyn",
            age:35
        }
       ]
       function getAdults(name){
        let result=[];
        let index=0;

    name.forEach((element, index) => {
        if(element.age>=18){
            
             result[index]=element.name;
             index++
             console.log(index);
        }
    });
    return result;

       }
       var a=getAdults(array)
       console.log(a);