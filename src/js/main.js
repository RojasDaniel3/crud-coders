import Swal from "sweetalert2";



let coders = [
            {
            name:"pablo",
            email:"pablo.escobar@gmail.com",
            clan:"Cienaga"
        }
];


let numeros = [2,4,5,6,8]

let numerosDuplicados = numeros.map(numero => numero * 2)
console.log(numerosDuplicados)



const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $clan = document.getElementById("clan");
const $btnSave = document.getElementById("btn-save");

console.log($name, $email, $clan, $btnSave);


$btnSave.addEventListener("click", function () {
    saveCoder()
})






function saveCoder() {
    let newCoder = {
        name: $name.value,
        email: $email.value,
        clan: $clan.value,
    };
    coders.push(newCoder);
    console.clear()
    console.table(coders);
    Swal.fire({
    title: "Saved!",
    icon: "success",
    draggable: true
    });
    
}



