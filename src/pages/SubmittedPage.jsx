const SubmittedPage = () => {
    return (
        <>
          <div className="backgroundSecond">
            <div className="card number__card submitted__card">
                <h1 className="submitHeader">ЗАЯВКА <br></br>ПРИНЯТА</h1>
                <p className="form__text">Держите телефон под рукой. <br></br>Скоро с Вами свяжется наш менеджер. </p>
              </div>
              <p className="qr__text">СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img
          className="card__qr"
          alt="qr code"
          src="../../public/videoBG.png"
        />
        <button className="btn closeBtn"><svg xmlns="http://www.w3.org/2000/svg" width="88" height="52" viewBox="0 0 88 52" fill="none">
  <g clipPath="url(#clip0_190_36741)">
    <rect width="88" height="52" transform="matrix(1 0 0 -1 0 52)" fill="white"/>
    <line x1="34.3448" y1="14.9407" x2="54.6264" y2="35.2223" stroke="black" strokeWidth="3"/>
    <line x1="33.6576" y1="35.2223" x2="53.9392" y2="14.9407" stroke="black" strokeWidth="3"/>
  </g>
  <rect x="1" y="1" width="86" height="50" stroke="black" strokeWidth="2"/>
  <defs>
    <clipPath id="clip0_190_36741">
      <rect width="88" height="52" fill="white"/>
    </clipPath>
  </defs>
</svg></button>
          </div>
        </>
      );
    };

export default SubmittedPage;