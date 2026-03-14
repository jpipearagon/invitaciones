document.getElementById("openEnvelope").addEventListener("click", function(){

    document.querySelector(".container").style.opacity="0";
    
    setTimeout(()=>{
    
    document.querySelector(".container").style.display="none";
    
    document.getElementById("video-container").style.display="block";
    
    document.getElementById("video").src=
    "https://player.vimeo.com/video/TU_VIDEO_ID?autoplay=1";
    
    },800);
    
    });