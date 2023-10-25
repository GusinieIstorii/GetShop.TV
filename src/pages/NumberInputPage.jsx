import React, { useState, useEffect, useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import cn from "classnames";
import CloseButton from "../components/CloseButton";
import numverify from "../utils/numverify";

const NumberInputPage = () => {
  const [inputValue, setValue] = useState("+7(___)___-__-__");
  const [checkBox, setCheckBox] = useState(false);
  const [userActive, setUserActive] = useState(true);
  const navigate = useNavigate();

  const phoneInputRef = useRef(null);
  const submitBtnRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const btn3Ref = useRef(null);
  const btn4Ref = useRef(null);
  const btn5Ref = useRef(null);
  const btn6Ref = useRef(null);
  const btn7Ref = useRef(null);
  const btn8Ref = useRef(null);
  const btn9Ref = useRef(null);
  const btn0Ref = useRef(null);
  const deleteRef = useRef(null);
  const closeBtnRef = createRef(null);
  const checkmarkRef = useRef(null);

  const resetTimer = () => {
    setUserActive(true);
    clearTimeout(timerId);
    startTimer();
  };

  let timerId;
  const startTimer = () => {
    timerId = setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  useEffect(() => {
    startTimer();

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  const onChange = (e) => setValue(e.target.value);

  const handleCheckBox = () => {
    const newCheckBox = !checkBox;
    setCheckBox(newCheckBox);
  };

  const valuesAndRefs = {
    1: btn1Ref,
    2: btn2Ref,
    3: btn3Ref,
    4: btn4Ref,
    5: btn5Ref,
    6: btn6Ref,
    7: btn7Ref,
    8: btn8Ref,
    9: btn9Ref,
    0: btn0Ref,
    checkmarkkBox: checkmarkRef,
    submitBtn: submitBtnRef,
    closeButton: closeBtnRef,
  };

  const handleKeyDown = (e) => {
    const value = e.target.getAttribute("data-value");
    const action = e.code;
    if (action === "Enter") {
      e.preventDefault();
    }
    const add1 = (value) => {
      const newNum = Number(value) + 1;
      valuesAndRefs[newNum].current.focus();
    };
    const add3 = (value) => {
      const newNum = Number(value) + 3;
      valuesAndRefs[newNum].current.focus();
    };
    const deduct1 = (value) => {
      const newNum = Number(value) - 1;
      valuesAndRefs[newNum].current.focus();
    };
    const deduct3 = (value) => {
      const newNum = Number(value) - 3;
      valuesAndRefs[newNum].current.focus();
    };

    const chooseNum = (value) => {
      e.preventDefault();
      if (value === "delete") {
        if (inputValue === "+7(___)___-__-__") {
          return null;
        }
        const newValueAfterDelete = inputValue.replace(/\d(?=[^\d]*$)/, "_");
        setValue(newValueAfterDelete);
        return null;
      }
      const newValue = inputValue.replace("_", value);
      setValue(newValue);
      valuesAndRefs[value].current.focus();
    };

    const constuctorFunc = {
      phoneInput: {
        ArrowDown: () => btn1Ref.current.focus(),
        ArrowUp: () => closeBtnRef.current.focus(),
      },
      1: {
        ArrowDown: add3,
        ArrowUp: () => phoneInputRef.current.focus(),
        ArrowLeft: () => phoneInputRef.current.focus(),
        ArrowRight: add1,
        Enter: chooseNum,
      },
      2: {
        ArrowDown: add3,
        ArrowUp: () => phoneInputRef.current.focus(),
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      3: {
        ArrowDown: add3,
        ArrowUp: () => phoneInputRef.current.focus(),
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      4: {
        ArrowDown: add3,
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      5: {
        ArrowDown: add3,
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      6: {
        ArrowDown: add3,
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      7: {
        ArrowDown: () => deleteRef.current.focus(),
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      8: {
        ArrowDown: () => deleteRef.current.focus(),
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: add1,
        Enter: chooseNum,
      },
      9: {
        ArrowDown: () => btn0Ref.current.focus(),
        ArrowUp: deduct3,
        ArrowLeft: deduct1,
        ArrowRight: () => deleteRef.current.focus(),
        Enter: chooseNum,
      },
      0: {
        ArrowDown: () => checkmarkRef.current.focus(),
        ArrowUp: () => btn9Ref.current.focus(),
        ArrowLeft: () => deleteRef.current.focus(),
        ArrowRight: () => checkmarkRef.current.focus(),
        Enter: chooseNum,
      },
      delete: {
        ArrowDown: () => checkmarkRef.current.focus(),
        ArrowUp: () => btn7Ref.current.focus(),
        ArrowLeft: () => btn9Ref.current.focus(),
        ArrowRight: () => btn0Ref.current.focus(),
        Enter: chooseNum,
      },
      checkmark: {
        ArrowDown: () => submitBtnRef.current.focus(),
        ArrowUp: () => deleteRef.current.focus(),
        ArrowLeft: () => btn0Ref.current.focus(),
        ArrowRight: () => submitBtnRef.current.focus(),
      },
      submitBtn: {
        ArrowDown: () => phoneInputRef.current.focus(),
        ArrowUp: () => checkmarkRef.current.focus(),
        ArrowLeft: () => checkmarkRef.current.focus(),
        ArrowRight: () => closeBtnRef.current.focus(),
      },
      closeButton: {
        ArrowLeft: () => phoneInputRef.current.focus(),
      },
    };

    if (Object.hasOwn(constuctorFunc[value], action)) {
      constuctorFunc[value][action](value);
    }
  };

  const numPadClick = (e) => {
    const value = e.target.getAttribute("data-value");
    if (value === "delete") {
      if (inputValue === "+7(___)___-__-__") {
        return null;
      }
      const newValueAfterDelete = inputValue.replace(/\d(?=[^\d]*$)/, "_");
      setValue(newValueAfterDelete);
      return null;
    }
    const newValue = inputValue.replace("_", value);
    setValue(newValue);
  };

  const submitNumber = async (e) => {
    e.preventDefault();
    try {
      const numValidation = await numverify(inputValue);
    const isValid = numValidation.data.valid;
    console.log(isValid);
    if (!isValid) {
      alert("Перепроверь номер");
    } else {
      navigate("/submitted");
    }
    } catch(e) {
      if (e.message === 'Network Error') {
        navigate("/submitted");               // Render use https, but Numverify https encryption is available for paid customers only
      }
    }
    
  };

  return (
    <>
      <div className="backgroundSecond">
        <div className="card number__card">
          <form
            action=""
            className="form"
            onSubmit={submitNumber}
            id="numInputForm"
          >
            <h1 className="form__header">
              Введите ваш номер <br></br> мобильного телефона
            </h1>
            <label htmlFor="numInput"></label>
            <InputMask
              className="form__phoneInput"
              name="numInput"
              id="numInput"
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
              onKeyDown={handleKeyDown}
              data-value="phoneInput"
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
                onClick={handleCheckBox}
                ref={checkmarkRef}
                onKeyDown={handleKeyDown}
                data-value="checkmark"
              />
              <div className="checkmark"></div>
            </label>
            <button
              className={cn("btn", {
                "btn-enabled": checkBox && !inputValue.includes("_"),
                "btn-disabled": !checkBox || inputValue.includes("_"),
              })}
              type="submit"
              id="button-addon2"
              ref={submitBtnRef}
              onKeyDown={handleKeyDown}
              data-value="submitBtn"
            >
              ПОДТВЕРДИТЬ НОМЕР
            </button>
          </form>
          <div className="numpad" tabIndex="0">
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="1"
              ref={btn1Ref}
              onKeyDown={handleKeyDown}
            >
              1
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="2"
              ref={btn2Ref}
              onKeyDown={handleKeyDown}
            >
              2
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="3"
              ref={btn3Ref}
              onKeyDown={handleKeyDown}
            >
              3
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="4"
              ref={btn4Ref}
              onKeyDown={handleKeyDown}
            >
              4
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="5"
              ref={btn5Ref}
              onKeyDown={handleKeyDown}
            >
              5
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="6"
              ref={btn6Ref}
              onKeyDown={handleKeyDown}
            >
              6
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="7"
              ref={btn7Ref}
              onKeyDown={handleKeyDown}
            >
              7
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="8"
              ref={btn8Ref}
              onKeyDown={handleKeyDown}
            >
              8
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="9"
              ref={btn9Ref}
              onKeyDown={handleKeyDown}
            >
              9
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="delete"
              ref={deleteRef}
              onKeyDown={handleKeyDown}
            >
              СТЕРЕТЬ
            </button>
            <button
              className="numpad__btn"
              onClick={numPadClick}
              data-value="0"
              ref={btn0Ref}
              onKeyDown={handleKeyDown}
            >
              0
            </button>
          </div>
        </div>
        <p className="qr__text">
          СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
        </p>
        <img className="card__qr numberInputPage_card__qr" alt="qr code" />
        <CloseButton
          ref={closeBtnRef}
          onKeyDown={handleKeyDown}
          data-value="closeButton"
        />
      </div>
    </>
  );
};

export default NumberInputPage;
