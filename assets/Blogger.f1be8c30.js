import{s as m}from"./index.71a58e6b.js";import{_ as h,o as l,c as u,b as s,w as a,e as c,t as i,a as p,f as g,F as d,g as v}from"./index.eccb33de.js";const f=""+new URL("turn.55327070.png",import.meta.url).href;const _={data(){return{posts:[],username:"\u767B\u5F55",nickname:"--",sex:"--",email:"3097928420@qq.com",password:"--",avatar:"",logined:!1,seen:!1,uid:"",store:m}},methods:{onMouseOver(){this.seen=!0},onMouseOut(){this.seen=!1},logout:function(){localStorage.clear(),location.reload()},turn:function(){this.nickname=="--"?alert("\u8BF7\u5148\u767B\u5F55"):this.$router.push("/change")}},mounted(){fetch("https://blog-server-api.amarea.cn/post/getList?page=1").then(e=>e.json()).then(e=>{console.log(e),e.code==0&&(this.posts=e.data.posts)}),this.uid=localStorage.getItem("uid"),fetch("https://blog-server-api.amarea.cn/user/getInfo?uid="+this.uid).then(e=>e.json()).then(e=>{e.code==0&&(this.avatar=e.data.userInfo.avatar,this.nickname=e.data.userInfo.nickname,this.sex=e.data.userInfo.sex,this.password=e.data.userInfo.password,this.logined=!0),console.log(e)})}},k={class:"myself"},w=["src"],x={class:"message"},M={id:"seen"},y={class:"container"},C=["onClick"],I={class:"user"},O=["src"],B={class:"username"},S={class:"title"};function b(e,t,L,N,o,r){return l(),u(d,null,[s("div",k,[a(s("img",{src:o.avatar,class:"avatar"},null,8,w),[[c,o.logined]]),a(s("p",{onClick:t[0]||(t[0]=n=>e.$router.push("/login")),id:"login",style:{"font-size":"14px"}},i(o.username),513),[[c,!o.logined]]),a(s("div",x,[s("li",null," \u6635\u79F0\uFF1A"+i(o.nickname),1),s("li",null," \u6027\u522B:"+i(o.sex),1),s("li",null," \u90AE\u7BB1\u5730\u5740\uFF1A"+i(o.email),1),s("li",null,[p(" \u5BC6\u7801\uFF1A"+i(o.password)+" ",1),s("img",{id:"turn",onClick:t[1]||(t[1]=(...n)=>r.turn&&r.turn(...n)),onMouseenter:t[2]||(t[2]=(...n)=>r.onMouseOver&&r.onMouseOver(...n)),onMouseleave:t[3]||(t[3]=(...n)=>r.onMouseOut&&r.onMouseOut(...n)),src:f,alt:"",width:"20",height:"20"},null,32),a(s("p",M,"\u4FEE\u6539\u5BC6\u7801",512),[[c,o.seen]])])],512),[[c,o.logined]]),o.logined?(l(),u("p",{key:0,class:"message",onClick:t[4]||(t[4]=n=>e.$router.push("/new"))},"\u65B0\u5EFA\u6587\u7AE0")):g("",!0),o.logined?(l(),u("p",{key:1,class:"message",onClick:t[5]||(t[5]=(...n)=>r.logout&&r.logout(...n))},"\u9000\u51FA\u767B\u5F55")):g("",!0)]),s("div",y,[(l(!0),u(d,null,v(o.posts,n=>(l(),u("div",{class:"post",onClick:V=>e.$router.push("/post/"+n.pid)},[s("div",I,[s("img",{src:n.user.avatar,class:"userimg"},null,8,O),s("div",B,i(n.user.nickname),1)]),s("div",S,i(n.title),1),s("div",null,i(n.text),1)],8,C))),256))])],64)}const D=h(_,[["render",b]]);export{D as default};