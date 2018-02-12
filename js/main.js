// 把code写到#code和style标签里面
function writeCode(prefix, code, callback) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop=domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      callback&&callback()
    }
  }, 30)
}

function createPaper(callback) {
  var myResume = document.createElement('div')
  myResume.id = 'myResume'
  var content=document.createElement('pre')
  content.className='content'
  myResume.appendChild(content)
  document.body.appendChild(myResume)
  callback&&callback.call()
}

function writeResume(html,callback){
    let domResume=document.querySelector('#myResume>.content')
    domResume.innerHTML=html.substring(0,html.length);
    callback&&callback.call()

//   let domResume=document.querySelector('#myResume> .content')
//   let n = 0
//   let id = setInterval(() => {
//     n += 1
//     domResume.innerHTML = html.substring(0, n)
//     domResume.scrollTop=domResume.scrollHeight
//     if (n >= html.length) {
//       window.clearInterval(id)
//       callback&&callback.call()
//     }
//   }, 5)
}

function convertMarkdownToHtml(callback){
  var div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(html)
  let markdownContainer = document.querySelector('#myResume > .content')
  markdownContainer.replaceWith(div)
  callback && callback.call()
}

let css1 = `/*您好,面试官. 我是崔慧敏
 *我将以动画的形式来介绍自己
 *只用文字介绍太单调了
 *我就用代码来展示吧
 */

/* 首先给所有样式加上一些过渡的效果*/
*{
  transition:all 1s;
  font-family:'微软雅黑';
}

/*白色背景太单调啦，我们来点背景*/
html{
  color:rgb(222,222,222);
  background:rgb(0,43,54);
  font-size:16px;
}

/*文字离边框太近了*/
#code{
  padding:1em;
  border: 1px solid #aaa;
  margin:1em;
  overflow: auto;
  width: 45vw;
  height:90vh;
}

/*我需要一点代码高亮*/
.token.selector{color:#690;}
.token.property{color:#905;}
.token.string{color:#690;}
.token.function{color:#DD4A68;}


/*加一个呼吸效果*/
#code{animation: breath 0.5s infinite alternate-reverse;}


/*加点3D效果*/
html{
  perspective: 1000px;
}
.code-wrapper {
position: fixed;left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/*准备一个编辑器*/
#myResume{
  position:fixed;right:0;top:0;
  width:50vw;height:90vh;background:#444444;
  margin:.5em;color:#3D4451;overflow:auto;
}
#myResume > .content{
  background:white;
  height:100%;
  width:100%;
}

/*下面开始正式介绍我自己*/


`

let css2=`
/*接下来用一个优秀的库 marked.js
 *把Markdown变成HTML
*/

`

let html=`
<main>
  <div class="mycard">
    <div class="text">
      <span class="welcome">Hello</span>
      <span class="comma">,</span>
      <p class="selfInroduction">
        崔慧敏，初级前端开发工程师,希望应聘前端开发岗位. 熟练多门技术语言,包括HTML5、CSS3、JavaScript、jQuery和Vue等.
      </p>
    </div>
    <div class="myData">
      <dl>
        <dt>年龄</dt>
        <dd>23</dd>
        <dt>所在城市</dt>
        <dd>广州</dd>
        <dt>E-mail</dt>
        <pre><dd>phoebechoi.isme@gmail.com</dd></pre>
        <dt>手机</dt>
        <dd>15800004690</dd>
      </dl>
    </div>
    </div>
  </div>
</main>
<section class="skillBar">
  <h2>技能</h2>
  <ol class="clearfix">
      <li>
        <h3>HTML5 &amp; CSS3</h3>
        <div class="progressBar">
          <div class="progress" style="width:80%"></div>
        </div>
      </li>
      <li>
        <h3>JavaScript</h3>
        <div class="progressBar">
          <div class="progress" style="width:70%"></div>
        </div>
      </li>
      <li>
        <h3>jQuery</h3>
        <div class="progressBar">
          <div class="progress" style="width:60%"></div>
        </div>
      </li>
      <li>
        <h3>Vue</h3>
        <div class="progressBar">
          <div class="progress" style="width:50%"></div>
        </div>
      </li>
      <li>
        <h3>Ajax</h3>
        <div class="progressBar">
          <div class="progress" style="width:50%"></div>
        </div>
      </li>
      <li>
        <h3>HTTP</h3>
        <div class="progressBar">
          <div class="progress" style="width:70%"></div>
        </div>
      </li>
  </ol>
</section>
<section class="portfolio">

`

let css3 = `
/*
*这就是我的会动的简历
*谢谢观看
*/
`


writeCode('', css1, () => { //异步，writeCode call the function
  createPaper(() => {
    writeResume(html,()=>{
      writeCode(css1,css2,()=>{
        convertMarkdownToHtml(()=>{
          writeCode(css1+css2,css3,()=>{

          })
        })
      })
    })
  })
})

