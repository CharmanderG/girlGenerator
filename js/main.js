const PI = 3.14159;
var tagList=[];
var imgList;

function initImgList(imgList) {
  this.imgList=imgList;
}

function choose() {
  let maxTag=0;
  let img=imgList[0];
  for(let i=0; i<imgList.length; i++){
    let zongfen=0;
    for(let m in imgList[i].info){
      let a=imgList[i].info[m];

      for(var key in tagList){

        if (a==tagList[key]) {
          if (key=='shijian'||key=='didian'||key=='ganshenme') {
            zongfen+=10;
          }else if (key=='shenfen'){
            zongfen+=50;
          }else {
            zongfen++;
          }
        }
      }
    }
    if (zongfen>maxTag) {
      maxTag=zongfen;
      img=imgList[i];
    }
  }
  // alert($("#nvzhu_img"));
  $("#nvzhu_img").attr('src',`./img/${img.name}.jpg`);

}

function startGenerator() {
  tagList=[];
  generateqizhi();
  generatexingge();
  generateshenfen();
  generatejingli();
  generateshijian();
  generatedidian();
  generateganshenme();
  generateganqing();
  generatenengli();
  choose();
  // window.alert(tagList.length);
}
function generateqizhi() {
  tagList['qizhi']=randomData('qizhi',window.qizhi);
}

function generatexingge() {
  tagList['xingge']=randomData('xingge',window.xingge);
}

function generateshenfen() {
  tagList['shenfen']=randomData('shenfen',window.shenfen);
}

function generatejingli() {
  tagList['jingli']=randomData('jingli',window.jingli);
}

function generateshijian() {
  tagList['shijian']=randomData('shijian',window.shijian);
}

function generatedidian() {
  tagList['didian']=randomData('didian',window.didian);
}

function generateganshenme() {
  tagList['ganshenme']=randomData('ganshenme',window.ganshenme);
}

function generateganqing() {
  tagList['ganqing']=randomData('ganqing',window.ganqing);
}

function generatenengli() {
  tagList['nengli']=randomData('nengli',window.nengli);
}


function randomData(elementId,dataName) {
  var t1Num = Math.floor(Math.random()*dataName.length);
  var text1 = document.getElementById(elementId);
  text1.innerHTML = dataName[t1Num];
  return dataName[t1Num];
}
