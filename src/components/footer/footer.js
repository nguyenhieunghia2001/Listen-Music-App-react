import React, { useState } from 'react';
import singImg from '../../images/sing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss'

export default function () {
    return <div className="container footer">
        <div className="row align-items-end">
            <div className="col-4">
                <div className="currentPlay d-flex align-items-center">
                    <div className="currentPlay__avatar">
                        <img src={singImg} alt="" />
                    </div>
                    <div className="currentPlay__info">
                        <div className="currentPlay__info-singName">Người Yêu Đơn Giản</div>
                        <div className="currentPlay__info-singerName">Chi Dân</div>
                    </div>
                    <div className="currentPlay__icons">
                        <FontAwesomeIcon className="" icon="heart" />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="sing">
                    <div className="sing__control d-flex justify-content-around align-items-center">
                        <div className="sing__control-item">
                            <FontAwesomeIcon icon="redo" />
                        </div>
                        <div className="sing__control-item">
                            <FontAwesomeIcon icon="step-backward" />
                        </div>
                        <div className="sing__control-item">
                            {/* <FontAwesomeIcon icon="faPause" /> */}
                            <FontAwesomeIcon icon="play" />
                        </div>
                        <div className="sing__control-item">
                            <FontAwesomeIcon icon="step-forward" />
                        </div>
                        <div className="sing__control-item">
                            <FontAwesomeIcon icon="random" />
                        </div>
                    </div>
                    <input type="range" className="progress" value="0" step="1" min="0" max="100" />
                </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <div className="referent">
                    <FontAwesomeIcon icon="ad" />
                </div>
            </div>
        </div>
    </div>
}