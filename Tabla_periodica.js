
function crearElemento(simbolo, nombre, tipo, col, row) {
  const enlace = document.createElement("a");
  enlace.textContent = simbolo;
  enlace.href = "https://es.wikipedia.org/wiki/" + nombre;

  const elemento = document.createElement("div");
  elemento.classList.add("elementos", tipo);
  elemento.appendChild(enlace);

  // posicionar en la grid
  if (col) elemento.style.gridColumn = String(col);
  if (row) elemento.style.gridRow = String(row);

  return elemento;
}

const contenedor = document.getElementById("periodica");
contenedor.className = "periodica-grid";

// Fila 1
contenedor.appendChild(crearElemento("H", "Hidrógeno", "seccion1", 1, 1));
contenedor.appendChild(crearElemento("He", "Helio", "seccion8", 18, 1));

// Fila 2
contenedor.appendChild(crearElemento("Li", "Litio", "seccion1", 1, 2));
contenedor.appendChild(crearElemento("Be", "Berilio", "seccion2", 2, 2));

contenedor.appendChild(crearElemento("B", "Boro", "seccion5", 13, 2));
contenedor.appendChild(crearElemento("C", "Carbono", "seccion6", 14, 2));
contenedor.appendChild(crearElemento("N", "Nitrógeno", "seccion6", 15, 2));
contenedor.appendChild(crearElemento("O", "Oxígeno", "seccion6", 16, 2));
contenedor.appendChild(crearElemento("F", "Flúor", "seccion7", 17, 2));
contenedor.appendChild(crearElemento("Ne", "Neón", "seccion8", 18, 2));

// Fila 3
contenedor.appendChild(crearElemento("Na", "Sodio", "seccion1", 1, 3));
contenedor.appendChild(crearElemento("Mg", "Magnesio", "seccion2", 2, 3));

contenedor.appendChild(crearElemento("Al", "Aluminio", "seccion4", 13, 3));
contenedor.appendChild(crearElemento("Si", "Silicio", "seccion5", 14, 3));
contenedor.appendChild(crearElemento("P", "Fósforo", "seccion6", 15, 3));
contenedor.appendChild(crearElemento("S", "Azufre", "seccion6", 16, 3));
contenedor.appendChild(crearElemento("Cl", "Cloro", "seccion7", 17, 3));
contenedor.appendChild(crearElemento("Ar", "Argón", "seccion8", 18, 3));

// Fila 4
contenedor.appendChild(crearElemento("K", "Potasio", "seccion1", 1, 4));
contenedor.appendChild(crearElemento("Ca", "Calcio", "seccion2", 2, 4));
contenedor.appendChild(crearElemento("Sc", "Escandio", "seccion3", 3, 4));

contenedor.appendChild(crearElemento("Ti", "Titanio", "seccion3", 4, 4));
contenedor.appendChild(crearElemento("V", "Vanadio", "seccion3", 5, 4));
contenedor.appendChild(crearElemento("Cr", "Cromo", "seccion3", 6, 4));
contenedor.appendChild(crearElemento("Mn", "Manganeso", "seccion3", 7, 4));
contenedor.appendChild(crearElemento("Fe", "Hierro", "seccion3", 8, 4));
contenedor.appendChild(crearElemento("Co", "Cobalto", "seccion3", 9, 4));
contenedor.appendChild(crearElemento("Ni", "Níquel", "seccion3", 10, 4));
contenedor.appendChild(crearElemento("Cu", "Cobre", "seccion3", 11, 4));
contenedor.appendChild(crearElemento("Zn", "Cinc", "seccion3", 12, 4));

contenedor.appendChild(crearElemento("Ga", "Galio", "seccion4", 13, 4));
contenedor.appendChild(crearElemento("Ge", "Germanio", "seccion5", 14, 4));
contenedor.appendChild(crearElemento("As", "Arsénico", "seccion5", 15, 4));
contenedor.appendChild(crearElemento("Se", "Selenio", "seccion6", 16, 4));
contenedor.appendChild(crearElemento("Br", "Bromo", "seccion7", 17, 4));
contenedor.appendChild(crearElemento("Kr", "Kriptón", "seccion8", 18, 4));

// Fila 5
contenedor.appendChild(crearElemento("Rb", "Rubidio", "seccion1", 1, 5));
contenedor.appendChild(crearElemento("Sr", "Estroncio", "seccion2", 2, 5));
contenedor.appendChild(crearElemento("Y", "Ytrio", "seccion3", 3, 5));

contenedor.appendChild(crearElemento("Zr", "Circonio", "seccion3", 4, 5));
contenedor.appendChild(crearElemento("Nb", "Niobio", "seccion3", 5, 5));
contenedor.appendChild(crearElemento("Mo", "Molibdeno", "seccion3", 6, 5));
contenedor.appendChild(crearElemento("Tc", "Tecnecio", "seccion3", 7, 5));
contenedor.appendChild(crearElemento("Ru", "Rutenio", "seccion3", 8, 5));
contenedor.appendChild(crearElemento("Rh", "Rodio", "seccion3", 9, 5));
contenedor.appendChild(crearElemento("Pd", "Paladio", "seccion3", 10, 5));
contenedor.appendChild(crearElemento("Ag", "Plata", "seccion3", 11, 5));
contenedor.appendChild(crearElemento("Cd", "Cadmio", "seccion3", 12, 5));

contenedor.appendChild(crearElemento("In", "Indio", "seccion4", 13, 5));
contenedor.appendChild(crearElemento("Sn", "Estaño", "seccion4", 14, 5));
contenedor.appendChild(crearElemento("Sb", "Antimonio", "seccion5", 15, 5));
contenedor.appendChild(crearElemento("Te", "Telurio", "seccion5", 16, 5));
contenedor.appendChild(crearElemento("I", "Yodo", "seccion7", 17, 5));
contenedor.appendChild(crearElemento("Xe", "Xenón", "seccion8", 18, 5));

// Fila 6
contenedor.appendChild(crearElemento("Cs", "Cesio", "seccion1", 1, 6));
contenedor.appendChild(crearElemento("Ba", "Bario", "seccion2", 2, 6));
contenedor.appendChild(crearElemento("La", "Lantano", "seccion3", 3, 6));

contenedor.appendChild(crearElemento("Hf", "Hafnio", "seccion3", 4, 6));
contenedor.appendChild(crearElemento("Ta", "Tantalio", "seccion3", 5, 6));
contenedor.appendChild(crearElemento("W", "Wolframio", "seccion3", 6, 6));
contenedor.appendChild(crearElemento("Re", "Renio", "seccion3", 7, 6));
contenedor.appendChild(crearElemento("Os", "Osmio", "seccion3", 8, 6));
contenedor.appendChild(crearElemento("Ir", "Iridio", "seccion3", 9, 6));
contenedor.appendChild(crearElemento("Pt", "Platino", "seccion3", 10, 6));
contenedor.appendChild(crearElemento("Au", "Oro", "seccion3", 11, 6));
contenedor.appendChild(crearElemento("Hg", "Mercurio", "seccion3", 12, 6));

contenedor.appendChild(crearElemento("Tl", "Talio", "seccion4", 13, 6));
contenedor.appendChild(crearElemento("Pb", "Plomo", "seccion4", 14, 6));
contenedor.appendChild(crearElemento("Bi", "Bismuto", "seccion4", 15, 6));
contenedor.appendChild(crearElemento("Po", "Polonio", "seccion5", 16, 6));
contenedor.appendChild(crearElemento("At", "Astato", "seccion7", 17, 6));
contenedor.appendChild(crearElemento("Rn", "Radón", "seccion8", 18, 6));

// Fila 7
contenedor.appendChild(crearElemento("Fr", "Francio", "seccion1", 1, 7));
contenedor.appendChild(crearElemento("Ra", "Radio", "seccion2", 2, 7));
contenedor.appendChild(crearElemento("Ac", "Actinio", "seccion3", 3, 7));

contenedor.appendChild(crearElemento("Rf", "Rutherfordio", "seccion3", 4, 7));
contenedor.appendChild(crearElemento("Db", "Dubnio", "seccion3", 5, 7));
contenedor.appendChild(crearElemento("Sg", "Seaborgio", "seccion3", 6, 7));
contenedor.appendChild(crearElemento("Bh", "Bohrio", "seccion3", 7, 7));
contenedor.appendChild(crearElemento("Hs", "Hassio", "seccion3", 8, 7));
contenedor.appendChild(crearElemento("Mt", "Meitnerio", "seccion3", 9, 7));
contenedor.appendChild(crearElemento("Ds", "Darmstadtio", "seccion3", 10, 7));
contenedor.appendChild(crearElemento("Rg", "Roentgenio", "seccion3", 11, 7));
contenedor.appendChild(crearElemento("Cn", "Copernicio", "seccion3", 12, 7));

contenedor.appendChild(crearElemento("Nh", "Nihonio", "seccion4", 13, 7));
contenedor.appendChild(crearElemento("Fl", "Flerovio", "seccion4", 14, 7));
contenedor.appendChild(crearElemento("Mc", "Moscovio", "seccion4", 15, 7));
contenedor.appendChild(crearElemento("Lv", "Livermorio", "seccion4", 16, 7));
contenedor.appendChild(crearElemento("Ts", "Tenesino", "seccion7", 17, 7));
contenedor.appendChild(crearElemento("Og", "Oganesón", "seccion8", 18, 7));
