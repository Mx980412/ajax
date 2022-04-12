//加载分页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

//加载JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
      //异步（下载完成就调用）
      console.log(object);
    }
  };
  request.send();
  //一开始拿不到结果;
  console.log(request.response);
};

//加载XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

//加载HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建div标签
        const div = document.createElement("div");
        //填写div内容
        div.innerHTML = request.response;
        //插到身体里
        document.body.appendChild(div);
      } else {
        alert("加载 HTML 失败");
      }
    }
  };
  request.send();
};

//加载JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建script标签
        const script = document.createElement("script");
        //填写script内容
        script.innerHTML = request.response;
        //插到身体里
        document.body.appendChild(script);
      } else {
        alert("加载 JS 失败");
      }
    }
  };
  request.send();
};

//加载CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); //readyState = 1
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建 style 标签
        const style = document.createElement("style");
        //填写 style 内容
        style.innerHTML = request.response;
        //插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); //readyState = 2
};
