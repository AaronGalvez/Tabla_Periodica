function crearElemento(simbolo, nombre, tipo) {
    const enlace = document.createElement("a");
    enlace.textContent = simbolo;
    enlace.href = "https://es.wikipedia.org/wiki/" + nombre;

    const elementos = document.createElement("td");
    elementos.classList.add("elementos", tipo);
    elementos.appendChild(enlace);
    
    return elementos;
}
function crearElemento2(simbolo2, nombre2, tipo2) {
    const enlace2 = document.createElement("a");
    enlace2.textContent = simbolo2;
    enlace2.href = "https://es.wikipedia.org/wiki/" + nombre2;

    const elementos2 = document.createElement("tr");
    elementos2.classList.add("elementos2", tipo2);
    elementos2.appendChild(enlace2);
    
    return elementos2;
}

const Seccion1 = document.getElementById("Seccion1");
const Seccion2 = document.getElementById("Seccion2");
const Contenedor2 = document.getElementById("Contenedor2");
const Seccion4 = document.getElementById("Seccion4");
const Seccion5 = document.getElementById("Seccion5");
const Seccion6 = document.getElementById("Seccion6");
const Seccion7 = document.getElementById("Seccion7");
const Seccion8 = document.getElementById("Seccion8");
Seccion1.className = "section1";
Seccion2.className = "section2";
Contenedor2.className = "Contenedor2";
Seccion4.className = "section4";
Seccion5.className = "section5";
Seccion6.className = "section6";
Seccion7.className = "section7";
Seccion8.className = "section8";



//Seccion 1
Seccion1.appendChild(crearElemento("H", "Hidrógeno", "H"));
Seccion1.appendChild(crearElemento("Li", "Litio", "Li"));
Seccion1.appendChild(crearElemento("Na", "Sodio", "Na"));
Seccion1.appendChild(crearElemento("K", "Potasio", "K"));
Seccion1.appendChild(crearElemento("Rb", "Rubidio", "Rb"));
Seccion1.appendChild(crearElemento("Cs", "Césio", "Cs"));
Seccion1.appendChild(crearElemento("Fr", "Francio", "Fr"));

// Seccion 2
Seccion2.appendChild(crearElemento("Be", "Berilio", "Be"));
Seccion2.appendChild(crearElemento("Mg", "Magnesio", "Mg"));
Seccion2.appendChild(crearElemento("Ca", "Calcio", "Ca"));
Seccion2.appendChild(crearElemento("Sr", "Estroncio", "Sr"));
Seccion2.appendChild(crearElemento("Ba", "Bario", "Ba"));
Seccion2.appendChild(crearElemento("Ra", "Radio", "Ra"));
//Elementos del contenedor 2 (Seccion 3)
Contenedor2.appendChild(crearElemento2("Sc", "Escandio", "Sc"));
Contenedor2.appendChild(crearElemento2("Ti", "Titanio", "Ti"));
Contenedor2.appendChild(crearElemento2("V", "Vanadio", "V"));
Contenedor2.appendChild(crearElemento2("Cr", "Cromo", "Cr"));
Contenedor2.appendChild(crearElemento2("Mn", "Manganeso", "Mn"));
Contenedor2.appendChild(crearElemento2("Fe", "Hierro", "Fe"));
Contenedor2.appendChild(crearElemento2("Co", "Cobalto", "Co"));
Contenedor2.appendChild(crearElemento2("Ni", "Níquel", "Ni"));
Contenedor2.appendChild(crearElemento2("Cu", "Cobre", "Cu"));
Contenedor2.appendChild(crearElemento2("Zn", "Zinc", "Zn"));
Contenedor2.appendChild(crearElemento2("Y", "Itrio", "Y"));
Contenedor2.appendChild(crearElemento2("Zr", "Circonio", "Zr"));
Contenedor2.appendChild(crearElemento("Nb", "Niobio", "Nb"));
Contenedor2.appendChild(crearElemento("Mo", "Molibdeno", "Mo"));
Contenedor2.appendChild(crearElemento("Tc", "Tecnecio", "Tc"));
Contenedor2.appendChild(crearElemento("Ru", "Rutenio", "Ru"));
Contenedor2.appendChild(crearElemento("Rh", "Rodio", "Rh"));
Contenedor2.appendChild(crearElemento("Pd", "Paladio", "Pd"));
Contenedor2.appendChild(crearElemento("Ag", "Plata", "Ag"));
Contenedor2.appendChild(crearElemento("Cd", "Cadmio", "Cd"));
Contenedor2.appendChild(crearElemento("Lu", "Lutecio", "Lu"));
Contenedor2.appendChild(crearElemento("Hf", "Hafnio", "Hf"));
Contenedor2.appendChild(crearElemento("Ta", "Tantalio", "Ta"));
Contenedor2.appendChild(crearElemento("W", "Wolframio", "W"));
Contenedor2.appendChild(crearElemento("Re", "Renio", "Re"));
Contenedor2.appendChild(crearElemento("Os", "Osmio", "Os"));
Contenedor2.appendChild(crearElemento("Ir", "Iridio", "Ir"));
Contenedor2.appendChild(crearElemento("Pt", "Platino", "Pt"));
Contenedor2.appendChild(crearElemento("Au", "Oro", "Au"));
Contenedor2.appendChild(crearElemento("Hg", "Mercurio", "Hg"));
Contenedor2.appendChild(crearElemento("Lr", "Lawrencio", "Lr"));
Contenedor2.appendChild(crearElemento("Rf", "Rutherfordio", "Rf"));
Contenedor2.appendChild(crearElemento("Db", "Dubnio", "Db"));
Contenedor2.appendChild(crearElemento("Sg", "Seaborgio", "Sg"));
Contenedor2.appendChild(crearElemento("Bh", "Bohrio", "Bh"));
Contenedor2.appendChild(crearElemento("Hs", "Hassio", "Hs"));
Contenedor2.appendChild(crearElemento("Mt", "Meitnerio", "Mt"));
Contenedor2.appendChild(crearElemento("Ds", "Darmstatio", "Ds"));
Contenedor2.appendChild(crearElemento("Rg", "Roentgenio", "Rg"));
Contenedor2.appendChild(crearElemento("Cn", "Copernicio", "Cn"));
//yo
//Seccion 4
Seccion4.appendChild(crearElemento("Al", "Aluminio", "Al"));
Seccion4.appendChild(crearElemento("Ga", "Galio", "Ga"));
Seccion4.appendChild(crearElemento("In", "Indio", "In"));
Seccion4.appendChild(crearElemento("Sn", "Estaño", "Sn"));
Seccion4.appendChild(crearElemento("Ti", "Talio", "Ti"));
Seccion4.appendChild(crearElemento("Pb", "Plomo", "Pb"));
Seccion4.appendChild(crearElemento("Bi", "Bismuto", "Bi"));
Seccion4.appendChild(crearElemento("Nh", "Nihonio", "Nh"));
Seccion4.appendChild(crearElemento("Fl", "Flerovio", "Fl"));
Seccion4.appendChild(crearElemento("Mc", "Moscovio", "Mc"));
Seccion4.appendChild(crearElemento("Lv", "Livermorio", "Lv"));

//Seccion 5
Seccion5.appendChild(crearElemento("B", "Boro", "B"));
Seccion5.appendChild(crearElemento("Si", "Silicio", "Si"));
Seccion5.appendChild(crearElemento("Ge", "Germanio", "Ge"));
Seccion5.appendChild(crearElemento("As", "Arsénico", "As"));
Seccion5.appendChild(crearElemento("Sb", "Antimonio", "Sb"));
Seccion5.appendChild(crearElemento("Te", "Telurio", "Te"));
Seccion5.appendChild(crearElemento("Po", "Polonio", "Po"));

//Seccion 6
Seccion6.appendChild(crearElemento("C", "Carbono", "C"));
Seccion6.appendChild(crearElemento("N", "Nitrógeno", "N"));
Seccion6.appendChild(crearElemento("O", "Oxígeno", "O"));
Seccion6.appendChild(crearElemento("P", "Fósforo", "P"));
Seccion6.appendChild(crearElemento("S", "Azufre", "S"));
Seccion6.appendChild(crearElemento("Se", "Selenio", "Se"));
//Seccion 7
Seccion7.appendChild(crearElemento("F", "Fluor", "F"));
Seccion7.appendChild(crearElemento("Cl", "Cloro", "Cl"));
Seccion7.appendChild(crearElemento("Br", "Bromo", "Br"));
Seccion7.appendChild(crearElemento("I", "Yodo", "I"));
Seccion7.appendChild(crearElemento("At", "Astato", "At"));
Seccion7.appendChild(crearElemento("Ts", "Teneso", "Ts"));

//Seccion 8
Seccion8.appendChild(crearElemento("He", "Helio", "He"));
Seccion8.appendChild(crearElemento("Ne", "Neón", "Ne"));
Seccion8.appendChild(crearElemento("Ar", "Argón", "Ar"));
Seccion8.appendChild(crearElemento("Kr", "Kriptón", "Kr"));
Seccion8.appendChild(crearElemento("Xe", "Xenón", "Xe"));
Seccion8.appendChild(crearElemento("Rn", "Radón", "Rn"));
Seccion8.appendChild(crearElemento("Og", "Oganesón", "Og"));