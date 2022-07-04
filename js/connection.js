const schemas = document.getElementById('schemas');
const tables = document.getElementById('tables');
const columns = document.getElementById('columns');
let data = [];

(async ()=> {
    const response = await fetch('http://localhost:3000/api/v1/insis/');
    data = await response.json();
    const _schemas = [];

    for(var i = 0; i < data.length; i++) {
 
        const el = data[i].nombre_esquema;
       
        if (!_schemas.includes(el)) {
            _schemas.push(el);
        }
      }
    addOptions("schemas", _schemas);
  })();

schemas.addEventListener('change', (event) => {
    const _tables = [];
    const fil = event.target.value;

    for(var i = 0; i < data.length; i++) {
        const el = data[i].nombre_esquema;

        if (el == fil) {
            const item = data[i].nombre_tabla;
            if (!_tables.includes(item)) {
                _tables.push(item);
            }
        }
      }
    addOptions("tables", _tables);
});

tables.addEventListener('change', (event) => {
    const _columns = [];
    const fil = event.target.value;
    
    for(var i = 0; i < data.length; i++) {
        const el = data[i].nombre_tabla;

        if (el == fil) {
            const item = data[i].nombre_campo;
            if (!_columns.includes(item)) {
                _columns.push(item);
            }
        }
      }
    addOptions("columns", _columns);
});

function addOptions(el, array) {
    array.sort();
    var selector = document.getElementById(el);
    selector.innerHTML = '<option value="">------------</option>';

    for (item in array) {
        var opcion = document.createElement("option");
        opcion.text = array[item];
        opcion.value = array[item]
        selector.add(opcion);
    }
}