let showkitka = document.getElementById('kitka');
let kitka = document.getElementById('myRange');
let showbounce = document.getElementById('hyppy');
let hyppy = document.getElementById('bounce');
let hyppys;
let kitkas;

kitka.oninput = function(){
	showkitka.innerHTML = this.value / 100;
	kitkas = this.value /100;
}
hyppy.oninput = function(){
	showbounce.innerHTML = this.value / 100;
	hyppys = this.value /100;
}
