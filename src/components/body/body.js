import React, { useState } from 'react';
import albumImg from '../../images/mixtape.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './body.scss'

export default function (){
    return <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="album__left">
                    <div className="album__img">
                        <img src={albumImg} />
                    </div>
                    <div className="album__info">
                        <div className="album__info-title album__info-item">Mixtape Chiều Thu Họa Bóng Nàng</div>
                        <div className="album__info-content album__info-item">Cập nhật: 14/05/2021</div>
                        <div className="album__info-content album__info-item">DatKaa, Thiên Tú, Châu Khải Phong, ACV</div>
                        <div className="album__info-content album__info-item">4k người yêu thích</div>
                    </div>
                </div>
            </div>
            <div className="col-8"></div>
        </div>
    </div>
}