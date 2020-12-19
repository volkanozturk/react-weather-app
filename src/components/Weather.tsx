import React, {FC} from 'react';
import {WeatherData} from '../store/types';
import {useTranslation} from "react-i18next";

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = ((data.main.temp - 273.15)).toFixed(2);
    const {name, weather, sys, main, wind} = data;
    //
    const {t} = useTranslation();

    return (
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered" style={{marginBottom: 50}}>{name} - {sys.country}</h1>
                <div className="level" style={{alignItems: 'flex-start'}}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{weather[0].description}</p>
                            <p className="title"><img
                                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt=""/></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{t('temp')}</p>
                            <div className="title">
                                <p className="mb-2">{main.temp}K</p>
                                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                                <p>{celsius}<sup>&#8451;</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{t('humidity')}</p>
                            <p className="title">{main.humidity}%</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading"> {t('pressure')}</p>
                            <p className="title">{main.pressure} hPa</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{t('wind')}</p>
                            <p className="title">{wind.speed} {t('m/s')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weather;