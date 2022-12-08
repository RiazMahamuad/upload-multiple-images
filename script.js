    var  fileUpload=document.querySelector("#file-upload");
    var ImageCointener=document.querySelector("#images");
    var NumberOfFileCount=document.querySelector("#num-of-file");
     
    var btn=document.querySelector(".card");
    var PopUpBox=document.querySelector(".popUpBox");
    var span = document.getElementsByClassName("close")[0];
 
function img()  //usear how many iter select
{   
    ImageCointener.innerHTML= "";
    NumberOfFileCount.textContent= `${fileUpload.files.length} Files Selected`;

    for(i of fileUpload.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        ImageCointener.appendChild(figure);
        reader.readAsDataURL(i);
    }
   
}
// When the user clicks the button, open the modal 
function clickMe()
{
    PopUpBox.style.display="block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
    PopUpBox.style.display = "none";
}

