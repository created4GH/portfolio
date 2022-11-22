import React, { useState } from 'react';

import myPhoto from '../../assets/img/summary/me.jpg';
import meGusta from '../../assets/img/summary/me-gusta.svg';
import github from '../../assets/img/icons/github.svg';
import mail from '../../assets/img/icons/mail.svg';
import linkedin from '../../assets/img/icons/linkedin.svg';
import download from '../../assets/img/icons/download.svg';
import './style.scss';

interface Coordinates {
    x: number;
    y: number;
}

const Summary = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [{ x, y }, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

    const handleClickOnEmail = async (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.target as HTMLSpanElement;
        const text = target.innerText;
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        const { clientX, clientY } = event;
        setCoordinates({
            x: clientX,
            y: clientY
        });
        setTimeout(() => {
            setIsCopied(false);
        }, 500);
    }

    return (
        <section className="summary">
            {isCopied &&
                <span className='summary-copy-pop-up' style={{ top: y, left: x }}>Copied</span>}
            <h2 className='summary__title'>Summary</h2>
            <div className="summary-info-container">
                <div className="summary__image-wrapper">
                    <img className='summary__image' src={myPhoto} alt="me" />
                </div>
                <div className="summary__text-info-wrapper">
                    <p className='summary__text-info-item'>
                        <span>Name:</span> <span>Vlad</span>
                    </p>
                    <p className='summary__text-info-item'>
                        <span>Surname:</span> <span>Koretskyi</span>
                    </p>
                    <p className='summary__text-info-item'>
                        <span>Email:</span>
                        <span
                            onClick={handleClickOnEmail}
                            className='summary__text-info-item--email'>
                            koretskyi10@gmail.com
                        </span>
                    </p>
                    <p className='summary__text-info-item'>
                        <span>Position:</span> <span>JS Developer</span>
                    </p>
                    <p className='summary__text-info-item'>
                        <span>Bio:</span>
                        <span className='summary__text-info-item--bio-icon'>
                            <img src={meGusta} alt="lol face" width='30px' height='30px' />
                        </span>
                    </p>
                </div>
                <ul className="summary__links">
                    <li className="summary__links-item">
                        <a
                            href='https://github.com/created4GitHub'
                            target='_blank'
                            rel='noreferrer'
                            className="summary__link">
                            <img src={github} alt="github icon" />
                        </a>
                    </li>
                    <li className="summary__links-item">
                        <a
                            href='https://www.linkedin.com/in/vladyslav-koretskyi-461aa221a/'
                            target='_blank'
                            rel='noreferrer'
                            className="summary__link">
                            <img src={linkedin} alt="linkedin icon" />
                        </a>
                    </li>
                    <li
                        className="summary__links-item">
                        <a
                            href='mailto:koretskyi10@gmail.com'
                            className="summary__link">
                            <img src={mail} alt="mail icon" />
                        </a>
                    </li>
                </ul>
                <a
                    href='Vladyslav_Koretskyi_JS_Dev.pdf'
                    download
                    className="summary__resume">
                    Resume <img src={download} alt="Download icon" />
                </a>
            </div>
        </section>
    );
};

export default Summary;