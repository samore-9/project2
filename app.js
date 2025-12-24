// window.addEventListener("load", function() {
//     console.log("Page fully loaded!");
// });


// // window.addEventListener("scroll", function() {
// //     console.log("Scrolling... Current Y:", window.scrollY);
// // });

// document.addEventListener("keypress", function(e) {
//     console.log(e);
//     console.log("You pressed: " + e.key);
// });
 


// function addToDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10 + 1);
//         if(internetSpeed > 4){
//             resolve("Data 1 saved");
//         } else{
//             reject("Weak connection ...Transfer failed");
//         }
//     });
// }


// let res = addToDB("Samore")
//     .then((result) => {
//         console.log("Data1 is resolved!");
//         return addToDB("XYz")
//         .then(() =>{
//             console.log("Data 2 is resolved");
//         })
//     }
//     )
//     .catch((e)=>{
//         console.log(e);
//         console.log("Internet is slow");
//     })



// // console.log(res);



// let sum = 0;


// function addition(nos){
//     return new Promise(function(resolve, reject){
//     let rand = Math.floor(Math.random()*10 +1 );
//     if(rand > 5){
//         resolve("Added element is" + " " + rand);
//         sum += rand;
//         console.log("sum is :", sum);
//     }else {
//         reject("Nos is less than 5", rand);
//     }
// })
// }

// let call = addition("abcd")
//     .then((result)=>{
//         console.log("added 1st element");
//         console.log(result);
//         return addition()
//         .then((result)=> {
//             console.log("Added 2nd element");
//             console.log(result);
//         })
//     })
//     .catch(()=> {
//     console.log("no is less than 5");
//     })

    // console.log(call);



    let url = "https://catfact.ninja/fact";
    let dog = "https://dog.ceo/api/breeds/image/random";

    async function getFacts(){
        try {
            let res = await axios.get(url);
            // let data = await res.json();
            console.log(res.data.fact);

        } catch(e){
            console.log("ERROR: ", e);

        }
    }

let ab = function (a,b){
    return a+b;
};

ab(4,5);
console.log(ab(111,333));

for (let i = 0; i<=10 ; i++){
    console.log(i);
}

async function dataTransfer(data){
        return new Promise ( function(resolve,reject){
            let internet = Math.floor(Math.random()*10 +1);

            if(internet < 4){
                resolve("Data is transfered");

            }else{
                reject("Weak connection");
            }
        }
        );

}

let ress = dataTransfer("Samore")
        .then(()=>{
            console.log("Dat1 is transfered");
            return dataTransfer("Harsh")
            .then(()=>{
                console.log("Data 2 is trasfered");
            })
        })
        .catch((err)=> {
            console.log("ERROR = ", err);
            console.log("Weak connection");
        });


console.log(dataTransfer);

setTimeout(() => {
    console.log("Oneee!!");

},2000);


// function one() {
//     for (let i = 5; i >= 0 ; i--){
//         console.log("X"*i);
//     }
// }

// // print();
// // print();
// one();

let i = 1;
do{
    console.log("Akash");
    i++;
} while(i<=10);

for(let i =1;i<=10;i++){
    if(i == 4){
        console.log(`Im \t done \n  ${i}`);
        break;
    }
    console.log(i);
}

console.log(z);

var z;

new Date();
new Date().getDay;
