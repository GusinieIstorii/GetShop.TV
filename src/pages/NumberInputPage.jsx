import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputMask } from "@react-input/mask";

const NumberInputPage = () => {
  const [inputValue, setValue] = useState("+7(___)___-__-__");
  const onChange = (e) => setValue(e.target.value);
  const navigate = useNavigate();

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current && phoneInputRef.current.element) {
      phoneInputRef.current.element.setSelectionRange(2, 3);
      phoneInputRef.current.element.focus();
    }
  }, []);

  const submitNumber = (e) => {
    e.preventDefault();
    // логика для отправки данных на сервер
    navigate("/submitted");
  };

  const numPadClick = (e) => {
    const value = e.target.getAttribute("data-value");
    if (value === "Стереть") {
      if (inputValue === "+7(___)___-__-__") {
        return null;
      }
      const newValueAfterDelete = inputValue.replace(/\d(?=[^\d]*$)/, "_");
      console.log(newValueAfterDelete);
      setValue(newValueAfterDelete);
      return null;
    }
    const newValue = inputValue.replace("_", value);
    setValue(newValue);
  };

  return (
    <>
      <div className="backgroundSecond">
        <div className="card number__card">
          <form action="" className="form" onSubmit={submitNumber}>
            <h1 className="form__header">
              Введите ваш номер <br></br> мобильного телефона
            </h1>
            <InputMask
              className="form__phoneInput"
              mask="+7(___)___-__-__"
              replacement={{ _: /\d/ }}
              showMask
              separate
              required
              value={inputValue}
              onChange={onChange}
              autoFocus
              onFocus={(e) => e.target.setSelectionRange(2, 3)}
              ref={phoneInputRef}
            />
            <p className="form__text">
              и с Вами свяжется наш менеждер для <br></br> дальнейшей
              консультации
            </p>

            <label htmlFor="personalData" className="checkboxContainer">
              Согласие на обработку<br></br>персональных данных
              <input
                type="checkbox"
                name="personalData"
                id="personalData"
                required
              />
              <span className="checkmark"></span>
            </label>
            <button
              className="btn"
              type="submit"
              id="button-addon2"
              // ref={submitEl}
            >
              ПОДТВЕРДИТЬ НОМЕР
            </button>
          </form>
          <div className="numpad">
            <button
              type="button"
              className="numpad__btn"
              onClick={numPadClick}
              data-value="1"
            >
              1
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="2"
            >
              2
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="3"
            >
              3
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="4"
            >
              4
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="5"
            >
              5
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="6"
            >
              6
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="7"
            >
              7
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="8"
            >
              8
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="9"
            >
              9
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="Стереть"
            >
              СТЕРЕТЬ
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="0"
            >
              0
            </button>
          </div>
        </div>
        <p className="qr__text">СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img
          className="card__qr"
          alt="qr code"
          src="../../public/videoBG.png"
        />
        <button className="btn closeBtn"><svg xmlns="http://www.w3.org/2000/svg" width="88" height="52" viewBox="0 0 88 52" fill="none">
  <g clip-path="url(#clip0_190_36741)">
    <rect width="88" height="52" transform="matrix(1 0 0 -1 0 52)" fill="white"/>
    <line x1="34.3448" y1="14.9407" x2="54.6264" y2="35.2223" stroke="black" stroke-width="3"/>
    <line x1="33.6576" y1="35.2223" x2="53.9392" y2="14.9407" stroke="black" stroke-width="3"/>
  </g>
  <rect x="1" y="1" width="86" height="50" stroke="black" stroke-width="2"/>
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

export default NumberInputPage;
