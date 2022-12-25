function mvad1() {
    var element = document.elementFromPoint(event.clientX,event.clientY);
    console.log(event.srcElement.id);
    
    //var danmuurl=url + '';
/*var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;
                console.log(json);
                var unjson = JSON.parse(json);
                element.innerHTML = unjson['0']['num'];
                var danmuurl='./danmu.json?num=' + unjson["data"]["num"];*/
                


 
//每条弹幕发送间隔
var looper_time=1*1000;
var items=data;
//弹幕总数
var total=data.length;
//是否首次执行
var run_once=true;
//弹幕索引
var index=0;
//先执行一次
barrager();
element.innerHTML = upnum;
 console.log(upnum);   
function  barrager(){
 
  
  if(run_once){
      //如果是首次执行,则设置一个定时器,并且把首次执行置为false
      looper=setInterval(barrager,looper_time);                
      run_once=false;
  }
  //发布一个弹幕
  $('body').barrager(items[index]);
  //索引自增
  index++;
  //所有弹幕发布完毕，清除计时器。
  if(index == total){
 
      clearInterval(looper);
      return false;
  }
 
   
 
 
}
 
 

//            }
//       };

}
