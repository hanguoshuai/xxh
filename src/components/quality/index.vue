<template>
<div class="quality">
  <div class="content">
    <div class="elevator" id="elev">
      <ul>
        <li><a href="#item1" class="current">网易战略级业务</a></li>
        <li><a href="#item2">假一赔十</a></li>
        <li><a href="#item3">原产地直采</a></li>
        <li><a href="#item4">直播采货</a></li>
        <li><a href="#item5">入仓全检</a></li>
        <li><a href="#item6">全程追溯</a></li>
      </ul>
    </div>
    <div id="wrap">
      <div class="floor-title" id="item1"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/e6a9214f-990e-41cf-8a76-9e7e968d8fa6.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>
        </div>
      </div>

      <div class="floor-title" id="item2"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/0c9eafcb-9696-48d4-abc5-f3a5801b5669.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>

        </div>
      </div>

      <div class="floor-title" id="item3"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/05f9bd1d-89d8-4d1a-93c7-f2e314a73d05.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>

        </div>
      </div>
      <div class="floor-title" id="item4"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/b541ab5c-88be-4a78-9284-eac70f1d955f.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>

        </div>
      </div>
      <div class="floor-title" id="item5"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/80abe3db-1c63-4b58-bf18-a41b76389085.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>

        </div>
      </div>
      <div class="floor-title" id="item6"><h3 class="floor-text"></h3></div>
      <div class="content">
        <div class="list0">
          <div class="item">
            <a href="#">
              <div class="img-wrap"><img src="http://haitao.nos.netease.com/90d78adb-7c42-4d28-b7c0-8212327f9c57.jpg?imageView&type=webp&thumbnail=750x0&quality=95&
"></div>
            </a>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'quality',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<script type="text/javascript">
    //在页面加载完后立即执行多个函数完美方案。
    function addloadEvent(func){
        var oldonload=window.onload;
        if(typeof window.onload !="function"){
            window.onload=func;
        }
        else{
            window.onload=function(){
                if(oldonload){
                   oldonload();
                }
                func();
            }
        }
    }
    addloadEvent(b);
    //在页面加载完后立即执行多个函数完美方案over。
    //给元素在原来基础上添加一个className
    function addClass(element,value){
      if(!element.className){
        element.className=value;
      }
      else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
      }
    }

    function b(){
      window.onscroll=function(){
        //获取滚动条下拉的高度
        var top=document.documentElement.scrollTop||document.body.scrollTop;
        //console.log(top)
        //所有楼层
        var items=document.getElementById("wrap").getElementsByClassName("floor-title");
        //a标签父级
        var elev=document.getElementById("elev");
        //创建空变量下面存储当前楼层的ID
        var thisID="";
        //遍历所有楼层
        for(var i=0;i<items.length;i++){
          //获取每个楼层距离文档顶部的距离
          var itemTop=items[i].offsetTop;
          //console.log(itemTop)
          //如果滚动条的高度大于楼层的高度，就把楼层的ID赋给thisID
          //每个楼层都比较一次，直到不满足条件退出循环
          if(top>itemTop-100){//减去100是为了用户体验，自己测试下就懂了
            thisID=items[i].id;
          }else{
            break;
          }
        }

        //所有a标签
        var alinks=elev.getElementsByTagName("a");
        if(thisID){
          for(var j=0;j<alinks.length;j++){
            //因为获取的是一个完整链接所以要切割两半
            var _href=alinks[j].href.split("#");
            //对数组最后一位和当前高度楼层的id进行校验
            if(_href[_href.length-1]!=thisID){
              alinks[j].className="";
            }else{
              addClass(alinks[j],"current")
            }

          }
        }
      }
    }

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
address,cite,dfn,em,var{font-style:normal;}
code,kbd,pre,samp{font-family:courier new,courier,monospace;}
ul,ol{list-style:none;}
a{text-decoration:none;}
a:hover{text-decoration:none;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
legend{color:#000;}
fieldset,img{border:0;}
button,input,select,textarea{font-size:100%;}
table{border-collapse:collapse;border-spacing:0;}
.clear{clear: both;float: none;height: 0;overflow: hidden;}
body{background: #9B1BC5;}

@font-face {
  font-family: 'iconfont';  /* project id 196174 */
  src: url('https://at.alicdn.com/t/font_9dwvwg9edp0q9f6r.eot');
  src: url('https://at.alicdn.com/t/font_9dwvwg9edp0q9f6r.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_9dwvwg9edp0q9f6r.woff') format('woff'),
  url('https://at.alicdn.com/t/font_9dwvwg9edp0q9f6r.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_9dwvwg9edp0q9f6r.svg#iconfont') format('svg');
}
/*.content{width: 100%;height: 600px;}*/
.cart{
  font-family:"iconfont" !important;
  font-size:36px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  color: #dd2727;
  height: 36px;
  width: 36px;
  padding: 0;
  line-height: 1;
  position: absolute;
  right: 0;
  bottom: 0;
}

.floor-title{width: 100%; margin: 0 auto; overflow: hidden;}
.floor-text{width:100%; height: 80px; margin: 10px auto 0; font-size: 100%;}

.content{width: 100%; margin: 0 auto; overflow: hidden;padding-top: 47px;}
.list0{font-size: 0; margin: 0 -10px -10px 0;}
.item{display: inline-block; vertical-align: top; width: 100%; margin:0 10px 10px 0; background: #fff; position: relative; line-height: 1.2;}
.item a{display: block;}
.item img{width: 100%;}

.item-main{padding: 9px; position: relative;}
.item-title{font: 14px/1.3 tahoma,arial,"\5b8b\4f53"; color: #313D44; display: -webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow: hidden; margin-bottom: 3px;}
.item-desc{font: 12px/1.2 tahoma,arial,"\5b8b\4f53"; color: #dd2727; margin-bottom: 5px;}
.item-imp{font: 12px/1.2 tahoma,arial,"\5b8b\4f53"; margin-top: 9px; padding-right: 35px; position: relative;}
.item-sales{color: #666;}
.promotion-price{font-size: 18px; color: #dd2727; font-weight: 700; font-family: Helvetica; line-height: 1.1; display: inline-block;}
.promotion-price:first-letter {font-size: 14px; font-weight: 400; margin-right: 1px;}

.elevator{position: fixed; left:0; margin-left: 0;z-index: 800;top: 0px; width: 500px;
  font: 12px/1.5 "Microsoft Yahei",tahoma,arial;}
.elevator ul{background: #ccc;}
.elevator li{float: left;background: #888;padding: 3px;}
.elevator ul li a{height: 25px; line-height: 25px; color: #fff; display: block; text-align: center;}
.elevator ul li a:hover,
.elevator ul li a.current{background: #800100;}

</style>
