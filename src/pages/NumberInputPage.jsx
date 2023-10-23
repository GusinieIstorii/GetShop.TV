import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { InputMask } from '@react-input/mask';


const NumberInputPage = () => {
  const [inputValue, setValue] = useState("+7(___)___-__-__");
  const onChange = (e) => setValue(e.target.value);
  
  // const submitEl = useRef(null);
  const navigate = useNavigate();

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current && phoneInputRef.current.element) {
      phoneInputRef.current.element.setSelectionRange(2, 3); // Set the cursor position after "+7"
      phoneInputRef.current.element.focus(); // Focus the input
    }
  }, []);

  const handleSendMsg = (e) => {
    e.preventDefault();
    // логика для отправки данных на сервер
    navigate("/submitted");
  };




  return (
    <>
      <div className="backgroundSecond">
        <div className="card number__card">
          
            <form className="form" onSubmit={handleSendMsg}>
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
              ref={phoneInputRef}/>
              <p className="form__text">и с Вами свяжется наш менеждер для <br></br> дальнейшей консультации</p>
              <input type="checkbox" id="personalData" name="personalData" required />
    <label htmlFor="personalData"><p>Согласие на обработку<br></br>персональных данных</p></label>
              <button
                className="btn"
                type="submit"
                id="button-addon2"
                // ref={submitEl}
              >ПОДТВЕРДИТЬ НОМЕР</button>
            </form>
          
          
        </div>
        <img
          className="card__qr"
          alt="qr code"
          src="../../public/videoBG.png"
        />
      </div>
    </>
  );
};

export default NumberInputPage;
