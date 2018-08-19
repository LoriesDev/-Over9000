function getGreet(){
	function let0(){
		var i=document.getElementById("nameInput");
		var s=document.getElementById("inputContainer");
		var t=document.getElementById("greetPerson");
		s.className="animated zoomOut";
	}
	function let1(){
		var i=document.getElementById("nameInput");
		var s=document.getElementById("inputContainer");
		var t=document.getElementById("greetPerson");
		t.innerHTML="Здравствуй, "+i.value;
		t.className="animated zoomIn";
	}
	function let2(){
		var i=document.getElementById("nameInput");
		var s=document.getElementById("inputContainer");
		var t=document.getElementById("greetPerson");
		s.parentNode.removeChild(s);
	}
	setTimeout(let0, 0);
	setTimeout(let1, 100);
	setTimeout(let2, 100);
}	