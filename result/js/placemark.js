jQuery(document).ready(function( $ ) {

    ymaps.ready(init);
    ymaps.ready(init2);

    function init () {
        var myMap = new ymaps.Map('map', {
            center: [44.651491, 37.938316],        
            controls: ['zoomControl'],
            zoom: 18            
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'islands#darkGreenIcon',

                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),



        myPlacemark2 = new ymaps.Placemark([44.651491, 37.938316], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo.svg',
            // Размеры метки.
            iconImageSize: [60, 77],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });




        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });



    // Добавляем все метки на карту.
    myMap.controls.add(zoomControl);
    myMap.geoObjects
    .add(myPlacemark2)        
    .add(myGeoObject);
}

    function init2 () {
        var myMap = new ymaps.Map('map2', {
            center: [44.651491, 37.938316],        
            controls: ['zoomControl'],
            zoom: 18            
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'islands#darkGreenIcon',

                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),



        myPlacemark2 = new ymaps.Placemark([44.651491, 37.938316], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo.svg',
            // Размеры метки.
            iconImageSize: [60, 77],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });




        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });



    // Добавляем все метки на карту.
    myMap.controls.add(zoomControl);
    myMap.geoObjects
    .add(myPlacemark2)        
    .add(myGeoObject);
}

}); //ready