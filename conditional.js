//switch condition---- return or break conditions works same---

function mylife(place) {
    switch (place) {
        case 'home':
            console.log('playing');
            break;
        case 'banglore':
            console.log('mobile');
            break;
        default:
            console.log('wait for job');

    }
}
mylife('kadapaa')


//ternary-----condotion ? statement : statement-----------


function checkevenodd(num) {
    num % 2 == 0 ? console.log('It is an even number') : console.log('It is an odd number');

}
checkevenodd(9)

//