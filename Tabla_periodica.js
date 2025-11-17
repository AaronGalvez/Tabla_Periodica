function crearElemento(simbolo, nombre) {
    const enlace = document.createElement("a");
    enlace.textContent = simbolo;
    enlace.href = "https://es.wikipedia.org/wiki/" + nombre;

    const elementos = document.createElement("p");
    elementos.appendChild(enlace);
    
    return elementos;
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
Seccion1.appendChild(crearElemento("H", "Hidrógeno"));
Seccion1.appendChild(crearElemento("Li", "Litio"));
Seccion1.appendChild(crearElemento("Na", "Sodio"));
Seccion1.appendChild(crearElemento("K", "Potasio"));
Seccion1.appendChild(crearElemento("Rb", "Rubidio"));
Seccion1.appendChild(crearElemento("Cs", "Césio"));
Seccion1.appendChild(crearElemento("Fr", "Francio"));

// Seccion 2
Seccion2.appendChild(crearElemento("Be", "Berilio"));
Seccion2.appendChild(crearElemento("Mg", "Magnesio"));
Seccion2.appendChild(crearElemento("Ca", "Calcio"));
Seccion2.appendChild(crearElemento("Sr", "Estroncio"));
Seccion2.appendChild(crearElemento("Ba", "Bario"));
Seccion2.appendChild(crearElemento("Ra", "Radio"));

//Elementos del contenedor 2 (Seccion 3)
Contenedor2.appendChild(crearElemento("Sc", "Escandio"));
Contenedor2.appendChild(crearElemento("Ti", "Titanio"));
Contenedor2.appendChild(crearElemento("V", "Vanadio"));
Contenedor2.appendChild(crearElemento("Cr", "Cromo"));
Contenedor2.appendChild(crearElemento("Mn", "Manganeso"));
Contenedor2.appendChild(crearElemento("Fe", "Hierro"));
Contenedor2.appendChild(crearElemento("Co", "Cobalto"));
Contenedor2.appendChild(crearElemento("Ni", "Níquel"));
Contenedor2.appendChild(crearElemento("Cu", "Cobre"));
Contenedor2.appendChild(crearElemento("Zn", "Zinc"));
Contenedor2.appendChild(crearElemento("Y", "Itrio"));
Contenedor2.appendChild(crearElemento("Zr", "Circonio"));
Contenedor2.appendChild(crearElemento("Nb", "Niobio"));
Contenedor2.appendChild(crearElemento("Mo", "Molibdeno"));
Contenedor2.appendChild(crearElemento("Tc", "Tecnecio"));
Contenedor2.appendChild(crearElemento("Ru", "Rutenio"));
Contenedor2.appendChild(crearElemento("Rh", "Rodio"));
Contenedor2.appendChild(crearElemento("Pd", "Paladio"));
Contenedor2.appendChild(crearElemento("Ag", "Plata"));
Contenedor2.appendChild(crearElemento("Cd", "Cadmio"));
Contenedor2.appendChild(crearElemento("Lu", "Lutecio"));
Contenedor2.appendChild(crearElemento("Hf", "Hafnio"));
Contenedor2.appendChild(crearElemento("Ta", "Tantalio"));
Contenedor2.appendChild(crearElemento("W", "Wolframio"));
Contenedor2.appendChild(crearElemento("Re", "Renio"));
Contenedor2.appendChild(crearElemento("Os", "Osmio"));
Contenedor2.appendChild(crearElemento("Ir", "Iridio"));
Contenedor2.appendChild(crearElemento("Pt", "Platino"));
Contenedor2.appendChild(crearElemento("Au", "Oro"));
Contenedor2.appendChild(crearElemento("Hg", "Mercurio"));
Contenedor2.appendChild(crearElemento("Lr", "Lawrencio"));
Contenedor2.appendChild(crearElemento("Rf", "Rutherfordio"));
Contenedor2.appendChild(crearElemento("Db", "Dubnio"));
Contenedor2.appendChild(crearElemento("Sg", "Seaborgio"));
Contenedor2.appendChild(crearElemento("Bh", "Bohrio"));
Contenedor2.appendChild(crearElemento("Hs", "Hassio"));
Contenedor2.appendChild(crearElemento("Mt", "Meitnerio"));
Contenedor2.appendChild(crearElemento("Ds", "Darmstatio"));
Contenedor2.appendChild(crearElemento("Rg", "Roentgenio"));
Contenedor2.appendChild(crearElemento("Cn", "Copernicio"));

//Seccion 4
Seccion4.appendChild(crearElemento("Al", "Aluminio"));
Seccion4.appendChild(crearElemento("Ga", "Galio"));
Seccion4.appendChild(crearElemento("In", "Indio"));
Seccion4.appendChild(crearElemento("Sn", "Estaño"));
Seccion4.appendChild(crearElemento("Ti", "Talio"));
Seccion4.appendChild(crearElemento("Pb", "Plomo"));
Seccion4.appendChild(crearElemento("Bi", "Bismuto"));
Seccion4.appendChild(crearElemento("Nh", "Nihonio"));
Seccion4.appendChild(crearElemento("Fl", "Flerovio"));
Seccion4.appendChild(crearElemento("Mc", "Moscovio"));
Seccion4.appendChild(crearElemento("Lv", "Livermorio"));


//Seccion 5
Seccion5.appendChild(crearElemento("B", "Boro"));
Seccion5.appendChild(crearElemento("Si", "Silicio"));
Seccion5.appendChild(crearElemento("Ge", "Germanio"));
Seccion5.appendChild(crearElemento("As", "Arsénico"));
Seccion5.appendChild(crearElemento("Sb", "Antimonio"));
Seccion5.appendChild(crearElemento("Te", "Telurio"));
Seccion5.appendChild(crearElemento("Po", "Polonio"));

//Seccion 6
Seccion6.appendChild(crearElemento("C", "Carbono"));
Seccion6.appendChild(crearElemento("N", "Nitrógeno"));
Seccion6.appendChild(crearElemento("O", "Oxígeno"));
Seccion6.appendChild(crearElemento("P", "Fósforo"));
Seccion6.appendChild(crearElemento("S", "Azufre"));
Seccion6.appendChild(crearElemento("Se", "Selenio"));

//Seccion 7
Seccion7.appendChild(crearElemento("F", "Fluor"));
Seccion7.appendChild(crearElemento("Cl", "Cloro"));
Seccion7.appendChild(crearElemento("Br", "Bromo"));
Seccion7.appendChild(crearElemento("I", "Yodo"));
Seccion7.appendChild(crearElemento("At", "Astato"));
Seccion7.appendChild(crearElemento("Ts", "Teneso"));

//Seccion 8
Seccion8.appendChild(crearElemento("He", "Helio"));
Seccion8.appendChild(crearElemento("Ne", "Neón"));
Seccion8.appendChild(crearElemento("Ar", "Argón"));
Seccion8.appendChild(crearElemento("Kr", "Kriptón"));
Seccion8.appendChild(crearElemento("Xe", "Xenón"));
Seccion8.appendChild(crearElemento("Rn", "Radón"));
Seccion8.appendChild(crearElemento("Og", "Oganesón"));