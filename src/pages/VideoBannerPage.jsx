import { useNavigate } from 'react-router-dom';

const VideoBannerPage = () => {
    const navigate = useNavigate();
    const goNext = () => {
        navigate("/numberInput");
    }

    return(
        <>
        <div className="backgroundFirst">
            <div className="card banner__card">
                <div className="bannerCard__header">
                <p className="bannerCard__text">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                </div>
                <img className="card__qr" alt="qr code" src="../../public/qr-code.png"/>
                <p className="card__text bannerCard__text">Сканируйте QR-код <br></br> или нажмите ОК</p>
                <button className='btn card__button active' onClick={goNext} autoFocus>ОК</button>
            </div>
        </div>
        </>
        
    )
    
}

export default VideoBannerPage;