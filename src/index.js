import _ from "./js/tools";
import "./another-module";
// import * as config from './config.js';
import config from "./js/config";
import "./style/style.css";
import myImg from "./img/1.jpeg";
console.log(config);

function component() {
    const element = document.createElement("div");
    const hello = document.createElement("div");
    const btn = document.createElement("button");
    const image = new Image();
    //插入文本
    hello.innerHTML = _.join(
        ["你好，", "webpack！", "&nbsp;你是真的棒！你是最牛逼的"],
        ""
    );
    hello.classList.add("hello");
    element.appendChild(hello);
    //插入按钮
    btn.innerHTML = "Click me and check the console!";
    import(/* webpackChunkName:'print.js' */ "./js/print.js").then(
        ({ default: printMe }) => {
            console.log("funck you");
            btn.onclick = printMe;
        }
    );
    btn.classList.add("btn");
    element.appendChild(btn);
    //插入图片
    image.src = myImg;
    image.classList.add("img");
    element.appendChild(image);
    element.classList.add("el");
    return element;
}
document.body.appendChild(component());
console.log("moduleHot:", module.hot);
if (module.hot) {
    console.log("e33");
    module.hot.accept("./js/print.js", function () {
        console.log("Accepting the updated printMe module!");
        printMe();
    });
}
