document.addEventListener("DOMContentLoaded", function(){

    const params = new URLSearchParams(window.location.search);
    
    const invitados = params.get("invitados") || "2";
    const videoId = params.get("video") || "123456789";
    
    document.getElementById("guestCount").textContent = invitados;
    
    document.getElementById("openEnvelope").addEventListener("click", function () {
    
        const container = document.querySelector(".container");
        const videoContainer = document.getElementById("video-container");
        const video = document.getElementById("video");
    
        container.style.transition = "opacity .8s ease";
        container.style.opacity = "0";
    
        setTimeout(() => {
    
            container.style.display = "none";
            videoContainer.style.display = "block";
    
            video.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    
        }, 900);
    
    });
    
    });