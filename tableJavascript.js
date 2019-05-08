var mainObj= [{
    "name": "Alderaan", 
    "rotation_period": "24", 
    "orbital_period": "364"
    
}, 
{
    "name": "Yavin IV", 
    "rotation_period": "24", 
    "orbital_period": "4818"
    
}, 
{
    "name": "Hoth", 
    "rotation_period": "23", 
    "orbital_period": "549"

}, 
{
    "name": "Dagobah", 
    "rotation_period": "23", 
    "orbital_period": "341" 

}, 
{
    "name": "Bespin", 
    "rotation_period": "12", 
    "orbital_period": "5110" 
 
}, 
{
    "name": "Endor", 
    "rotation_period": "18", 
    "orbital_period": "402" 
},
{
    "name": "Naboo", 
    "rotation_period": "26", 
    "orbital_period": "312" 

}, 
{
    "name": "Coruscant", 
    "rotation_period": "24", 
    "orbital_period": "368" 
   
}, 
{
    "name": "Kamino", 
    "rotation_period": "27", 
    "orbital_period": "463" 
   
}, 
{
    "name": "Geonosis", 
    "rotation_period": "30", 
    "orbital_period": "256" 
}];

var table = '<tbody>';
for(i = 0;i < mainObj.length; i++){
    table+= '<tr>';
    table+= '<td>' + mainObj[i].name + '</td>';
    table+= '<td>' + mainObj[i].rotation_period + '</td>';
    table+= '<td>' + mainObj[i].orbital_period + '</td>';
    table+= '</tr>';
}
table+='</tbody>';
document.getElementById('tableData').innerHTML = table;



	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
    });
    
   
