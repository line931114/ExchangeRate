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

let fromCurrency = 'USD';
let toCurrency = 'USD';
let fromMoney = "1";

console.log(currencyRatio.USD.KRW);
console.log(currencyRatio)
//console.log(currencyRatio['fromCurrency']['toCurrency']);

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
	document.getElementById("money").innerText = fromCurrency;
	

}));
var m = 1;
var u = "달러";
document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
	
	document.getElementById("to-button").textContent=this.textContent;
	toCurrency= this.textContent;
	console.log(toCurrency);
	document.getElementById("money1").innerText = toCurrency;
	
	//console.log(currencyRatio.fromCurrency.toCurrency);
	console.log(currencyRatio.USD.KRW)
	//만약 fromCurrency = usd고, toCurrency = krw일경우
	
	
	//console.log(currencyRatio.fromCurrency.toCurrency);
	//이런 식으로 값을 이용해서 꺼내고 싶은데 fromCurrency,toCurrency값이 undefined라고 나와요..
	
	//console.log(currencyRatio.toCurrency);
	
		if(fromCurrency=="USD" && toCurrency=="KRW"){
		 m = 1190.77;
		 u = "원(환율금액)";
		
	}else if(fromCurrency=="USD" && toCurrency=="VDN"){
		m=22970.00;
		u = "동(환율금액)";
	}
	
}));




function fromMoeney() {
	var money = document.getElementById("fromMoney").value;
	document.getElementById("result").innerText = (m*money)+u;
	
};


//from-currency-list 안에 있는 a태그에 이벤트를 줄거다.
//