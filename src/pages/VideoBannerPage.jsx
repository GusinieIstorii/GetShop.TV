import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const VideoBannerPage = () => {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/numberInput");
  };

  const [bannerCardShown, setBannerCardShown] = useState(false);

  useEffect(() => {
    // создаем и конфигурируем YouTube player
    function onYouTubeIframeAPIReady() {
      new window.YT.Player("youtube-player", {
        videoId: "M7FIvfx5J10",
        height: "720",
        width: "1280",
        playerVars: {
          autoplay: 1,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }

    function onPlayerReady(event) {
      event.target.mute(); //иначе видео не проигрывалось
      event.target.playVideo();

      setTimeout(() => {
        setBannerCardShown(true);
      }, 5000);
    }

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
        {bannerCardShown && (
          <div className="card banner__card">
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
          </div>
        )}
      </div>
    </>
  );
};

export default VideoBannerPage;
