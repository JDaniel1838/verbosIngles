/* INPUTS */
const d = document,
    spanish = d.getElementById("spanish"),
    present = d.getElementById("present"),
    past = d.getElementById("past"),
    participle = d.getElementById("participle"),
    form = d.getElementById("formulario"),
    messageSuccessful = d.querySelector(".correcto"),
    btn_submit = d.getElementById("btn-submit");
    console.log(spanish);

/* DATOS */
const Arreglo = [["ser/estar","am/is/are","was/were","been"],
["hacer/ejecutar","do/does","did","done"],
["tener/haber","have/has","had","had"]];

/* Crear Numeros Aleatorios */
let NumEl = Arreglo.length,
ArrNum = [];
for(let i = 0; i < NumEl; i++) ArrNum.push(i);
Arreglo.sort(() => Math.random()-0.5);

/* Funcion pinta los datos en el document */
function GenVerbo(num) {
    spanish.value = "";
    present.value = "";
    past.value = "";
    participle.value = "";
    present.value = Arreglo[num][1];
}

/* Primer Carga */
d.addEventListener("DOMContentLoaded",(e)=>{
    GenVerbo(0);
});

let inS, inPres, inPas, inPar, contador = 0, CheckArreglo = [];

d.addEventListener("submit",(e)=>{
    e.preventDefault();
    inS = spanish.value;
    inPres = present.value;
    inPas = past.value;
    inPar = participle.value;
    
    if (e.target === form) {
        if (inS === Arreglo[contador][0] & inPres === Arreglo[contador][1] & inPas === Arreglo[contador][2] & inPar === Arreglo[contador][3]) {
            
            console.log("exito");
            if (contador >= (Arreglo.length-1)) {
                messageSuccessful.classList.remove("disabled");
                messageSuccessful.textContent= "☑️ Grupo Terminado ☑️";
                messageSuccessful.classList.add("groupfinally");
                btn_submit.disabled = true;
                spanish.disabled = true;
                present.disabled = true;
                past.disabled = true;
                participle.disabled = true;
            }
            else{
                messageSuccessful.classList.remove("error");
                messageSuccessful.textContent= "✅ Correcto ✅";
                messageSuccessful.classList.remove("disabled");
                btn_submit.disabled = true;
                setTimeout(() => {
                    messageSuccessful.classList.add("disabled");
                    btn_submit.disabled = false;
                    GenVerbo(contador);
                }, 1000);  
            }
            contador++;
            console.log(contador);
        }else{
            CheckArreglo = [];
            CheckArreglo.push(inS);
            CheckArreglo.push(inPres);
            CheckArreglo.push(inPas);
            CheckArreglo.push(inPar);
            let i = 0,
            Error = false,
            ArrelgoErrors = [];
            CheckArreglo.forEach(el => {
                if (el != Arreglo[contador][i]) {
                    Error = false;
                    ArrelgoErrors.push(`${i}`);
                }
                i++;
            });
            console.log(ArrelgoErrors);

            if (ArrelgoErrors.includes("0")) {
                spanish.value="";
                spanish.classList.add("error");
                setTimeout(() => {
                    spanish.classList.remove("error");
                }, 4000);   
            }

            if (ArrelgoErrors.includes("2")) {
                past.value="";
                past.classList.add("error");
                setTimeout(() => {
                    past.classList.remove("error");
                }, 4000);   
            }

            if (ArrelgoErrors.includes("3")) {
                participle.value="";
                participle.classList.add("error");
                setTimeout(() => {
                    participle.classList.remove("error");
                }, 4000);   
            }
            
            if (!Error) {
                messageSuccessful.textContent= "❌ Has tenido Errores ❌";
                messageSuccessful.classList.add("error");
                messageSuccessful.classList.remove("disabled");
                btn_submit.disabled = true;
                setTimeout(() => {
                    messageSuccessful.classList.add("disabled");
                    messageSuccessful.classList.remove("error");
                    btn_submit.disabled = false;
                
                }, 2000);  
            }
        }
        
    }
});



