
var scr=document.getElementById("screen");

var res=0;//存放结果
var temp=0;//记录上一轮结果
function inputKey(num){//获得数字
     //scr.value当前屏幕的值
	//num是你按下去的0-9或点
	if(clearBool)//需要清屏
	{
		scr.value='';
		clearBool=false;
		//清完了
		
	}	
  if(scr.value=="0" && num!="."){ //当你屏幕的值是0，你下一次按0-9应该就是直接替换
		 scr.value=num;
		 
  }else{
		if((scr.value.indexOf(".")==-1 && num==".") || num!="."){//屏幕没有点，且我按的就是点或者我按的是0-9
			scr.value+=num;
			}
		}
}
var Num1,Num2,signGlobal,clearBool=false;signResult//Num1表示符号之前的值;Num1表示符号之后的值；signGlobal符号;clearBool是需要清屏;signResult给一直按等于符号单独存一个运算符号

function operatingFun(sign){//按了符号
	if(signGlobal!=null)//符号已经赋值，先运算之前的运算
	{
		Num1=scr.value;//屏幕现在的值
		result();//触发计算
		
	}
	Num2=null;//解决连续运算按等于没更新afterNum的问题
			Num1=scr.value;//记录屏幕的值
			signGlobal=sign;//记录符号
			clearBool=true;
			//window.alert(typeof e);
        
}
	

function clearFun(){//清空
	scr.value="";	
}
function del(){//退一格
	scr.value=scr.value.substr(0,scr.value.length-1);
}
function sqr(){//开根
	scr.value=Math.sqrt(scr.value);
}

function result(){
		console.log("等于开始",Num1,Num2,clearBool);
	if(signGlobal!=null)
	{
		signResult=signGlobal;
	}
	if(Num2==null)//连续等于做的判断
	{
		Num2=scr.value;//屏幕现在的值
	}
	switch(signResult)
	{
		case "+":
			scr.value=Number(Num1)+Number(Num2);
			break;
		case "-":
			scr.value=Number(Num1)-Number(Num2);
			break;
		case "*":
			scr.value=Number(Num1)*Number(Num2);
			break;
		case "/":
			scr.value=Number(Num1)/Number(Num2);
			break;
		case "%":
			scr.value=Number(Num1)%Number(Num2);
			break;
		default:
			alert("程序有误！");
			break;
	}
}
		


// JavaScript Document