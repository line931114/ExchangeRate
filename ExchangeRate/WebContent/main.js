let currencyRatio = {
	USD:{
			KRW:1194.02,
			USD:1,
			VND:22970.00,
			unit:"달러"
	},
	KRW:{
		KRW:1,
		USD:0.00084,
		VND:19.24,
		unit:"원"
	},
	VND:{
		VND:1,
		USD:0.000044,
		KRW:0.052,
		unit:"동"
	}
};
/*let json = JSON.stringify(currencyRatio,['USD']);
console.log(json);

json = JSON.stringify(currencyRatio, (key, value) => {
	console.log(`key:${key}, value: ${value}`);
	return value;
});*/

let fromCurrency = 'USD';
let toCurrency = 'KRW';
let fromMoney = "1";

console.log(currencyRatio.USD.KRW);
console.log(currencyRatio)
console.log(currencyRatio[fromCurrency][toCurrency]);

//  1. console.log(currencyRatio.USD.unit);
// currencyRatio 안에 USD 안에 unit 의 값
//2. console.log(currencyRatio['VND']['unit']);


document.querySelectorAll("#from-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
	//1. 버튼을 가져온다 (click 이벤트)
	document.getElementById("from-button").textContent=this.textContent;
	//2. 버튼의 값을 바꾼다.
	//3. 선택된 currency값을 변수에 저장해준다.
	fromCurrency = this.textContent;
	console.log(fromCurrency);
	//document.getElementById("money").innerText = fromCurrency;	
	convert("from");

}));
document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
	
	document.getElementById("to-button").textContent=this.textContent;
	toCurrency= this.textContent;
	console.log(toCurrency);
	//document.getElementById("money1").innerText = toCurrency;
	convert("to");
	console.log(currencyRatio[toCurrency].unit);

}));

function convert(type) {
	let money= 0	;
	if( type=="from"){
		money = document.getElementById("from-Money").value;
		let exMoney = money * currencyRatio[fromCurrency][toCurrency]
		document.getElementById("to-Money").value = exMoney;
		document.getElementById("money").innerText = currencyRatio[fromCurrency].unit;	
	
	}else{
		money = document.getElementById("to-Money").value;
		let exreMoney= money * currencyRatio[toCurrency][fromCurrency]
		document.getElementById("from-Money").value = exreMoney;	
		document.getElementById("money1").innerText = currencyRatio[toCurrency].unit;
	}
};

