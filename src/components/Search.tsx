import React, {FC, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {setAlert} from "../store/actions/alertActions";
import {getWeather, setLoading} from "../store/actions/weatherActions";
import {useTranslation} from "react-i18next";
import LanguageSelector from "../shared/LanguageSelector";


interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const {t} = useTranslation();

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() === '') {
            return dispatch(setAlert(t('City is required')));
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }
    return (
        <div className="hero is-light has-text-centered">
            <div className="hero is-light mt-1" id="openweathermap-widget-9"></div>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form className="py-5" onSubmit={submitHandler}>
                        <input
                            className="input has-text-centered mb-2  input is-focused"
                            type="text"
                            placeholder={t('Enter city name')}
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                        />
                        <button className="button is-primary is-fullwidth"
                                style={{maxWidth: 300, margin: '0 auto'}}>{t('search')}
                        </button>
                    </form>
                    <LanguageSelector/>
                </div>
            </div>
        </div>
    );
}

export default Search;

