import CloseButton from "../components/CloseButton";

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
        <CloseButton autoFocus/>
          </div>
        </>
      );
    };

export default SubmittedPage;