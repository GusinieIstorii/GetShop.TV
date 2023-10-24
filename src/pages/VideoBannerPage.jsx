import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import React from "react";

const VideoBannerPage = () => {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/numberInput");
  };

  const [bannerCardShown, setBannerCardShown] = useState(false);

  
    useEffect(() => {
        // Initialize the YouTube iFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    // Function to create and configure the YouTube player
    function onYouTubeIframeAPIReady() {
      player = new window.YT.Player('youtube-player', {
        videoId: 'M7FIvfx5J10',
        height: '720',
        width: '1280',
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }

    // Function to handle actions when the video is ready
    function onPlayerReady(event) {
        event.target.mute(); //иначе видео не проигрывалось
        event.target.playVideo();
  
        // Set a timeout to show an alert after 5 seconds
        setTimeout(() => {
          setBannerCardShown(true);
        }, 5000);
      }
  
      // Load the YouTube iFrame API
      if (window.YT && window.YT.Player) {
        onYouTubeIframeAPIReady();
      } else {
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
  
      return () => {
        // Remove the onYouTubeIframeAPIReady callback
        window.onYouTubeIframeAPIReady = null;
      };
    }, []);

    
    

  return (
    <>
      <div className="backgroundFirst">
      <div id="youtube-player"></div>
        {bannerCardShown && <div className="card banner__card">
          <div className="bannerCard__header">
            <p className="bannerCard__text">
              ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!
            </p>
          </div>
          <img
            className="card__qr"
            alt="qr code"
            src="../../public/qr-code.png"
          />
          <p className="card__text bannerCard__text">
            Сканируйте QR-код <br></br> или нажмите ОК
          </p>
          <button
            className="btn card__button active"
            onClick={goNext}
            autoFocus
          >
            ОК
          </button>
        </div>}
      </div>
    </>
  );
};

export default VideoBannerPage;
