import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";

function YandexMap({ lat, long}) {
    const defaultLat = 55.751244;
    const defaultLong = 37.618423;
    const options = {
        center: [lat ?? defaultLat, long ?? defaultLong],
        zoom: 13,
    };

    return (
        <YMaps>
            <Map defaultState={options}>
                <Placemark defaultGeometry={[lat ?? defaultLat, long ?? defaultLong]} />
            </Map>
        </YMaps>
    );
}

export default YandexMap;