//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const loadImage=(image)=>{
  return new Promise((resolve, reject)=>{
    const img=new Image();
    img.scr=image.url

    img.onload=()=>resolve(img)
    img.onerror=()=>reject(new Error(`Failed to load image's url : ${image.url}`))
  })
}


btn.addEventListener("click", ()=>{
  const promises=images.map((image)=>loadImage(image))//[p1,p2,p3]
   
  Promise.all(promises)
  .then((loadImages)=>{
    output.innerHTML="";
    loadImages.forEach((img)=>{
      output.appendChild(img);
    })
  })
  .catch((error)=>{
    console.log(error.message)
  })
})



// //your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

// const images = [
//   { url: "https://picsum.photos/id/237/200/300" },
//   { url: "https://picsum.photos/id/238/200/300" },
//   { url: "https://picsum.photos/id/239/200/300" },
// ];
