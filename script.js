let stories = [
    {
        id:1,
        img:"https://i.pinimg.com/564x/b9/a9/3c/b9a93c12729bbf4da56b7e1bc47243ae.jpg",
        story:"https://i.pinimg.com/236x/33/cf/b0/33cfb069cb6b22bbe3d9e8d99145debc.jpg"
    },
    {
        id:2,
        img:"https://i.pinimg.com/236x/d6/3c/1e/d63c1efc24ac5624a95751af552622f4.jpg",
        story:"https://i.pinimg.com/236x/25/80/2a/25802ae4d2ac69523b8d756fd886e587.jpg"
    },
    {
        id:3,
        img:"https://i.pinimg.com/236x/09/59/c2/0959c247deb74d5224650187f284b23d.jpg",
        story:"https://i.pinimg.com/236x/49/55/4a/49554a3d48b9684dc6a360b62b4ce53d.jpg"
    },
    {
        id:4,
        img:"https://i.pinimg.com/236x/fa/74/57/fa7457469b7599ce5bd28173ea691d28.jpg",
        story:"https://i.pinimg.com/564x/b1/95/21/b195210ae3c36ea78e4bde1451e83e6f.jpg"
    },
    {
        id:5,
        img:"https://i.pinimg.com/236x/82/5c/a5/825ca5dd41ae661bd8577d059ba6fc2b.jpg",
        story:"https://i.pinimg.com/236x/4a/da/da/4adada14c7c6508c62e688a176f711bc.jpg"
    },
    {
        id:6,
        img:"https://i.pinimg.com/236x/36/d0/be/36d0beff398aec1f56f9bfa3a7dfacad.jpg",
        story:"https://images.unsplash.com/photo-1663774496401-e6a0aa0b21af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsJTIwaGQlMjBmdWxsfGVufDB8fDB8fHww"
    },
    {
        id:7,
        img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwaGQlMjBwb3J0ZWlydHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1663774496332-71986d1176b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsJTIwaGQlMjBmdWxsfGVufDB8fDB8fHww"
    }
];

let headdiv = document.querySelector("#head");
let bag = "";
stories.forEach(function(elem,index){
    bag += `<div class="circle">
    <img id ="${index}" src="${elem.img}">
</div>`
});

headdiv.innerHTML = bag;
let circlediv = document.querySelector(".class");
let vdiv = document.querySelector("#body2 > video");
let mutediv = document.querySelector("#mutedi");
let opndiv = document.querySelector("#openi");
 

let storydiv = document.querySelector("#full-screen");
headdiv.addEventListener("click",function(dets){
    storydiv.style.display = "block";
    storydiv.style.backgroundImage = `url(${stories[dets.target.id].story})`

    vdiv.muted = true;
    opndiv.style.opacity = 0;

    setTimeout(function(){
        storydiv.style.display = "none";
    },2000);
});


opndiv.addEventListener("click", function(){
    if(vdiv.muted){
        vdiv.muted = false;
        opndiv.style.opacity = 1;
        console.log("Sound On");
    }
    else{
        vdiv.muted = true;
        console.log("Sound Off");
        opndiv.style.opacity = 0;
    }

});

let likeb = document.querySelector("#love");
let bodydiv = document.querySelector("#body2");

bodydiv.addEventListener("dblclick", function(){
   likeb.style.opacity = 1;
   likeb.style.transform = "translate(-50%, -50%) scale(5)";

   setTimeout(function(){
    likeb.style.opacity = 0;
   },1000)

   setTimeout(function(){
    likeb.style.transform = "translate(-50%, -50%) scale(0)";
   },2000)
})
