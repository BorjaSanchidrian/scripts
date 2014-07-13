// ==UserScript==
// @name        BorjaScript
// @namespace   http://spain-estudios.com/
// @include     http://spain-estudios.com/?survey=job
// @version     1.2
// @grant       none
// @description Spain-estudios script por Borja
// ==/UserScript==

// -- [VARIABLES] --
	//No tocar a menos que sepas lo que haces.

	var surv 		 = $('.surv').html();		  //Título de la pregunta
	var surv_num 	 = surv.replace(/\D+/g, '');  //Quita las letras del título dejando solo los números
	var answer_click = false;					  //Detecta cuando se ha pulsado el botón "Responder".
	window.onload 	 = scriptTime;				 

	
// -- [EXTRA] --
	if(surv_num == '410') {surv_num = '4';} //Bug con la pregunta 4

// -- [FUNCIONES] --
	function scriptTime() {
		//Cada cuanto se repite la función Script (1000ms)
		if(!answer_click) {
			setInterval(function() { Script(); }, 1000);
		}
	}

	function Script() {
	   
	    if ($('[name="q' + surv_num + '"]').length > 0) {
		    
		    //usar con precaucion
		    $("#TimerButton").prop('value', 'Responder');
		    $("#TimerButton").prop('disabled', false);


	        if ($('[name="q' + surv_num + '"]').is(':checked')) {
	            //hay una opcion selecionado
	            if ($('#TimerButton').prop('value') == 'Responder') {
	                $('#TimerButton').click();
	                answer_click = true;
	            }
	        } else {
	            //si no hay una opcion selecionada
	            var value = 1 + Math.floor(Math.random() * 3);
	            $('[value^=\'' + value + '\']').prop('checked', true)
	            if ($('#TimerButton').prop('value') == 'Responder') {
	                $('#TimerButton').click();
	                answer_click = true;
	            }
	        }
	    }
	}
