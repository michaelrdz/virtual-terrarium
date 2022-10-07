dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
	//Establece 4 posiciones en pantalla (ejes x, y)
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		// toma la posición inicial de lmouse
		pos3 = e.clientX;
		pos4 = e.clientY;
		// detecta el inicio del movimiento tras el click
		document.onpointermove = elementDrag;
		// cuanto se suelta el mouse termina el movimiento
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		// Calculca la nueva posisicón del mouse
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		//Actualiza posición x
		pos3 = e.clientX;
		//Actualiza posición y
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		// da al elemento una nueva posición en x,y
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	function stopElementDrag() {
		// detiene el calculo de la nueva posición 
		document.onpointerup = null;
		document.onpointermove = null;
	}
}   