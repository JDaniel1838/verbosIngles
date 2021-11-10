/* INPUTS */
const d = document,
    spanish = d.getElementById("spanish"),
    present = d.getElementById("present"),
    past = d.getElementById("past"),
    participle = d.getElementById("participle"),
    form = d.getElementById("formulario"),
    messageSuccessful = d.querySelector(".correcto"),
    btn_submit = d.getElementById("btn-submit");

/* DATOS */
const Arreglo = [
    ["morder","bite","bit","bitten"],
    ["esconder","hide","hid","hidden"],
    ["romper","break","broke","broken"],
    ["congelar","freeze","froze","frozen"],
    ["hablar","speak","spoke","spoken"],
    ["robar","steal","stole","stolen"],
    ["pasear","ride","rode","ridden"],
    ["surgir","arise","arose","arisen"],
    ["resucitar","rise","rose","risen"],
    ["esforzarse","strive","strove","striven"],
    ["despertar","wakeup", "wokeup","wakenup"],
    ["escoger","choose","chose","chosen"],
    ["sacudir","shake","shook","shaken"],
    ["tomar","take","took","taken"],
    ["escribir","write","wrote","written"],
    ["dibujar","draw","drew","drown"],
    ["volar","fly","flew","flown"],
    ["saber","know","knew","known"],
    ["mostrar","show","showed","shown"],
    ["sopla","blow","blew","blown"],
    ["crecer","grow","grew","grown"],
    ["jurar","swear","swore","sworn"],
    ["lanzar","throw","threw","thrown"],
    ["vestir","wear","wore","worn"],
    ["rasgar","tear","tore","torn"],
    ["manejar","drive","drove","driven"]
];

/* Crear Numeros Aleatorios */
/* let NumEl = Arreglo.length,
ArrNum = [];
for(let i = 0; i < NumEl; i++) ArrNum.push(i);
Arreglo.sort(() => Math.random()-0.5); */
/* Funcion pinta los datos en el document */
function GenVerbo(num) {
    spanish.value = "";
    present.value = "";
    past.value = "";
    participle.value = "";
    spanish.value = Arreglo[num][0];
}

/* Primer Carga */
d.addEventListener("DOMContentLoaded",(e)=>{
    GenVerbo(0);
});

let inS, inPres, inPas, inPar, contador = 0, CheckArreglo = [];

d.addEventListener("submit",(e)=>{
    e.preventDefault();
    spanish.value = spanish.value.trim().toLowerCase();
    present.value = present.value.trim().toLowerCase();
    past.value = past.value.trim().toLowerCase();
    participle.value = participle.value.trim().toLowerCase();


    inS = spanish.value;
    inPres = present.value;
    inPas = past.value;
    inPar = participle.value;
    
    if (e.target === form) {
        if (inS === Arreglo[contador][0] & inPres === Arreglo[contador][1] & inPas === Arreglo[contador][2] & inPar === Arreglo[contador][3]) {
            
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

            if (ArrelgoErrors.includes("1")) {
                present.value="";
                present.classList.add("error");
                setTimeout(() => {
                    present.classList.remove("error");
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

