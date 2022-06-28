function cargarProvincias() {
    var array = ["Esquema1", "Esquema2", "Esquema3", "Esquema4", "Esquema5"];
    array.sort();
    addOptions("provincia", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (provincia in array) {
        var opcion = document.createElement("option");
        opcion.text = array[provincia];
        // Añadimos un value a los option para hacer mas facil escoger los pueblos
        opcion.value = array[provincia].toLowerCase()
        selector.add(opcion);
    }
}



function cargarPueblos() {
    //
    var listaPueblos = {
      esquema1: ["Tabla2", "Gama", "Solares", "Castillo", "Santander"],
      esquema2: ["Langreo", "Villaviciosa", "Oviedo", "Gijon", "Covadonga"],
      esquema3: ["Tui", "Cambados", "Redondella", "Porriño", "Ogrove"],
      esquema4: ["Dos Hermanas", "Écija", "Algeciras", "Marbella", "Sevilla"],
      esquema5: ["Caceres", "Badajoz", "Plasencia", "Zafra", "Merida"]
    }
    
    var provincias = document.getElementById('provincia')
    var pueblos = document.getElementById('pueblo')
    var provinciaSeleccionada = provincias.value

    console.log(provinciaSeleccionada)
    
    //
    pueblos.innerHTML = '<option value="">Seleccione un Pueblo...</option>'
    
    if(provinciaSeleccionada !== ''){
      //
      provinciaSeleccionada = listaPueblos[provinciaSeleccionada]
      
      provinciaSeleccionada.sort()
    
      //
      provinciaSeleccionada.forEach(function(pueblo){
        let opcion = document.createElement('option')
        opcion.value = pueblo
        opcion.text = pueblo
        pueblos.add(opcion)
      });
    }
    
  }
  
 //
cargarProvincias();

dselect(document.querySelector('#tables'))
