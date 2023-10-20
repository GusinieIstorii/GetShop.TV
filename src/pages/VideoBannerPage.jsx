// import '../styles/videoBannerPage.css';

const VideoBannerPage = () => {

    return(
        <div className="background">
            <div className="card banner__card">
                <div className="bannerCard__header">
                <h>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!</h>
                </div>
                <img className="card__qr" alt="qr code" src="../../public/videoBG.png"/>
                <p className="card__text bannerCard__text">Сканируйте QR-код <br></br> или нажмите ОК</p>
                <button className='btn card__button active'>ОК</button>
            </div>
        </div>
    )
    
}

export default VideoBannerPage;