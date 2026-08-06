(function(){
function fit(vp){
var slide=vp.querySelector('.slide');
if(!slide||!vp.clientWidth||!vp.clientHeight)return;
var scale=Math.min(vp.clientWidth/1920,vp.clientHeight/1080);
slide.style.transform='translate(-50%,-50%) scale('+scale+')';
}
function fitAll(){document.querySelectorAll('.slide-viewport').forEach(fit);}
window.addEventListener('resize',fitAll);
if(window.ResizeObserver){
document.querySelectorAll('.slide-viewport').forEach(function(vp){new ResizeObserver(function(){fit(vp);}).observe(vp);});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fitAll);}else{fitAll();}
})();
