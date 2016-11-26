	(function clsNameChange(){
		var box=document.getElementsByClassName('box')[0].getElementsByTagName('li');
		var bc=document.getElementsByClassName('circleBg');
		console.log(box);
		for(var i=0;i<box.length;i++){	
			box[i].onmouseover = function(){
				this.getElementsByClassName('box-cover-on')[0].className = this.getElementsByClassName('box-cover-on')[0].className.replace('leave','hover');
				fadeIn(bc[this.title-1],300);
			}
			box[i].onmouseout = function(){
				this.getElementsByClassName('box-cover-on')[0].className = this.getElementsByClassName('box-cover-on')[0].className.replace('hover','leave');
				fadeOut(bc[this.title-1],300);
			}
		}
	})();

(function tonext(){
		var timer=null;
		var button=document.getElementsByClassName('topnext')[0];
		var img=document.getElementsByClassName('arrow')[0]
		button.onmouseup=function(){
			if(img.className.indexOf('blur')!=-1){
				var i=0;
				timer=function(){
					if(i<10){
					document.body.scrollTop+=50;
					setTimeout(timer,30);
					i++;
					}else{
						clearInterval(timer);
					}
				};
				timer();
				img.className=img.className.replace('blur','on');
			}else{
				// document.body.scrollTop=0;
				var i=0;
				timer=function(){
					if(i<10){
					document.body.scrollTop-=document.body.scrollTop/10
					setTimeout(timer,30);
					i++;
					}else{
						clearInterval(timer);
					}
					timer();
				}
				img.className=img.className.replace('on','blur');
			}
			console.log(document.body.scrollTop);
		}
	})();
 function fadeIn(obj,time){//淡入函数  实现time毫秒后显示，原理是根据透明度来完成的
 				flag=true;
	            var startTime=new Date(); 
	            obj.style.opacity=0;//设置下初始值透明度
	            obj.style.display="block";
	            var timer=setInterval(function(){
	                var nowTime=new Date();
	                var prop=(nowTime-startTime)/time;
	                if(prop>=1){
	                    prop=1;//设置最终系数值
	                    clearInterval(timer);
	                }
	                obj.style.opacity=prop;//透明度公式： 初始值+系数*（结束值-初始值）
	            },13);//每隔13ms执行一次function函数
        };
        
function fadeOut(obj,time){
	            var startTime=new Date(); 
	            obj.style.opacity=1;//设置下初始值透明度
	            obj.style.display="block";
	            var timer=setInterval(function(){
	                var nowTime=new Date();
	                var prop=(nowTime-startTime)/time;
	                if(prop>=1){
	                    prop=1;//设置最终系数值
	                    clearInterval(timer);
	                }
	                obj.style.opacity=1+prop*(0-1);//透明度公式： 初始值+系数*（结束值-初始值）
	            },13);//每隔13ms执行一次function函数
        };
