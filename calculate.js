function store(value) {
	panel.value = panel.value + value;
}
function clr() {
	panel.value = "";

}	
function back() {
	var nayeem = panel.value;
	panel.value = nayeem.substr(0,nayeem.length-1);
}
function calculate(equal) {
	panel.value = eval(equal);
}