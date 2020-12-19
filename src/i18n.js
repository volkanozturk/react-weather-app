import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import { register } from 'timeago.js';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'City is required': 'City is required!',
                'Enter city name': 'Enter city name',
                temp: 'Temp',
                humidity: 'Humidity',
                pressure: 'Pressure',
                wind: 'Wind',
                close: 'Close',
                search: 'Search',
                'm/s': 'm/s',
                'Enter city name and press search button':'Enter city name and press search button',
                'loading': 'Loading...'
            }
        },
        tr: {
            translations: {
                'City is required': 'Şehir ismi zorunludur',
                'Enter city name': 'Lütfen şehir adı giriniz',
                temp: 'Sıcaklık',
                humidity: 'Nem',
                pressure: 'Basınç',
                wind: 'Rüzgar',
                close: 'Kapat',
                search: 'Ara',
                'm/s': 'm/s',
                'Enter city name and press search button':'Lütfen şehir adını girip ara butonuna basınız',
                'loading': 'Yükleniyor...'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});


const timeageTR = (number, index) => {
    return [
        ['az önce', 'şimdi'],
        ['%s saniye önce', '%s saniye içinde'],
        ['1 dakika önce', '1 dakika içinde'],
        ['%s dakika önce', '%s dakika içinde'],
        ['1 saat önce', '1 saat içinde'],
        ['%s saat önce', '%s saat içinde'],
        ['1 gün önce', '1 gün içinde'],
        ['%s gün önce', '%s gün içinde'],
        ['1 hafta önce', '1 hafta içinde'],
        ['%s hafta önce', '%s hafta içinde'],
        ['1 ay önce', '1 ay içinde'],
        ['%s ay önce', '%s ay içinde'],
        ['1 yıl önce', '1 yıl içinde'],
        ['%s yıl önce', '%s yıl içinde']
    ][index];
};
register('tr', timeageTR);


export default i18n;
