let btn = document.querySelectorAll(".btn");
let btnh = document.querySelectorAll(".btnh");

fetch("https://random-flat-colors.vercel.app/api/random?count=5").then((response)=>response.json())
.then((data)=>{

    for(let i=0;i<btn.length;i++)
    {
        btn[i].style.backgroundColor = `${data["colors"][i]}`;
        btnh[i].style.backgroundColor = `${data["colors"][i]}`;
    }
    
})
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.querySelector("#button3");
let outer = document.getElementById("outer");
let outer2 = document.getElementById("outer2");
btn2.addEventListener("click",function()
{
    outer.style.width = "90vw";
    outer2.style.width = "0vw";
    outer2.style.display = "none";
});

btn1.addEventListener("click",function()
{
    outer.style.width = "55vw";
    outer2.style.width = "35vw";
    outer2.style.display = "flex";
});


let color = "";

btnh.forEach((btns) => {
    
    btns.addEventListener("click",(event)=>{
        
        color = btns.style.backgroundColor;
        btnh.forEach((bt)=>{
            bt.style.border = "1px solid black";
        });
        btns.style.border = "2px solid black";
        
    });
});
let obj = function(title,subtitle,col)
{
    this.title = title;
    this.subtitle = subtitle;
    this.col = col;
} ;

let objectarr = [];
btn3.addEventListener("click",function()
{
    let title = document.getElementById("title").value.trim();
    let subtitle = document.getElementById("subtitle").value.trim()
    if( title === "")
    {
        alert("Please enter title");
        return;
    }
    else if(subtitle === "" )
    {
        alert("Please enter subtitle");
        return;
    }
    else if(color === "")
    {
        alert("Please select color"); 
        return;
    }
    const ob = new obj(title,subtitle,color);
    objectarr.push(ob);
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div.classList.add("widget");
    div1.classList.add("temp");
    div2.classList.add("temp");
    div.style.backgroundColor = `${color}`
    let h2 = document.createElement("span");
    h2.innerHTML = `${title}`;
    let h4 = document.createElement("span");
    h4.innerHTML = `${subtitle}`;
    div1.appendChild(h2);
    div2.appendChild(h4);
    div.appendChild(div1);
    div.appendChild(div2);
    document.getElementById("showcreation").appendChild(div);

    document.getElementById("title").value = "";
    document.getElementById("subtitle").value = "";
    color = "";
    let el = document.querySelector("#progress");
    if(objectarr.length <6)
    el.style.width =parseFloat((objectarr.length)*100/5)+"%";
    
    btnh.forEach((bt)=>{
        bt.style.border = "1px solid black";
    });
    
    
});


btn.forEach((btns) => {
    
    btns.addEventListener("click",(event)=>{
        
        let showcreation = document.getElementById("showcreation");
        showcreation.innerHTML = "";
        let colorss = btns.style.backgroundColor;
        for(let i=0;i<objectarr.length;i++)
        { 
            if(colorss === objectarr[i].col)
            {
            let div = document.createElement("div");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div.classList.add("widget");
            div1.classList.add("temp");
            div2.classList.add("temp");
            div.style.backgroundColor = `${objectarr[i].col}`
            let h2 = document.createElement("span");
            h2.innerHTML = `${objectarr[i].title}`;
            let h4 = document.createElement("span");
            h4.innerHTML = `${objectarr[i].subtitle}`;
            div1.appendChild(h2);
            div2.appendChild(h4);
            div.appendChild(div1);
            div.appendChild(div2);
            document.getElementById("showcreation").appendChild(div);
            }
        }
        
    });
});
let btn4 = document.querySelector("#button4");
btn4.addEventListener("click",function()
{
    let showcreation = document.getElementById("showcreation");
    showcreation.innerHTML = "";
    for(let i=0;i<objectarr.length;i++)
        { 
         
         
            let div = document.createElement("div");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div.classList.add("widget");
            div1.classList.add("temp");
            div2.classList.add("temp");
            div.style.backgroundColor = `${objectarr[i].col}`
            let h2 = document.createElement("span");
            h2.innerHTML = `${objectarr[i].title}`;
            let h4 = document.createElement("span");
            h4.innerHTML = `${objectarr[i].subtitle}`;
            div1.appendChild(h2);
            div2.appendChild(h4);
            div.appendChild(div1);
            div.appendChild(div2);
            document.getElementById("showcreation").appendChild(div);
            
        }
        btn.forEach((bt)=>{
            bt.style.border = "1px solid black";
        });
        
});