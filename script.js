let apikye="al2VCk4DzzmXgH7dAtg6uJ04DX25z5iP"; 








let submitbtn= document.getElementById("submit-btn");
let generateGif=()=>{
    let loader=document.querySelector(".loader");
    loader.style.display="block";
    document.querySelector(".wrapper").style.display=
    "none";




    let q=document.getElementById("search-box").value;
    let gifcount=10;
    // let finalurl=`https://api.giphy.com/vl/gifs/searh?api_kye=${apikye}&q=${q}&limit=${gifcount}&offset=0&rating=g&lang=e`;
    let finalurl=`https://api.giphy.com/v1/gifs/search?api_key=${apikye}&q=${q}&limit=10&offset=0&rating=g&lang=en`;
    document.querySelector(".wrapper").innerHTML="";

    fetch(finalurl).then(resp => resp.json()).then(info=>{console.log(info.data);
        let gifsData=info.data;
         gifsData.forEach((gif)=>{

            let contaner=document.createElement("div");
            contaner.classList.add("container");
            let iframe=document.createElement("img");
            console.log(gif);
            iframe.setAttribute("src", gif.images
                .downsized_medium.url);
                iframe.onload=() =>{
                    gifcount--;
                    if(gifcount ==0){
                        loader.style.display="none";
                        document.querySelector(".wrapper").style.display="grid";

                    }
                };
                contaner.append(iframe);
                // document.querySelector(".wrapper").append(contaner);
                let copybtn =document.createElement("button");
                copybtn.innerText="Copy link";
                copybtn.onclick=()=>{
                    let copylink=`htttps://media4.giphy.com/media/${gif.id}/giphy.mp4`;
                    navigator.clipboard.writeText(copylink).then(()=>{
                        alert("copied gif in clipboard");

                    }).catch(()=>{
                        alert("copied gif in clipboard");
                        let hiddenInput=document.createElement("input");
                        hiddenInput/setAttribute("type","text");
                        document.body.appendChild(hiddenInput);
                        hiddenInput.value=copylink;
                        hiddenInput.select();
                        document.execCommand("copy");
                        document.body.removeChild(hiddenInput);

                    });

                };

                contaner.append(copybtn);
                document.querySelector(".wrapper").append(contaner);
        })

});
}


submitbtn.addEventListener("click", generateGif);
window.addEventListener("load",generateGif);