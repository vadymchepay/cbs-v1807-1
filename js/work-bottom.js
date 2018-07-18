var map;
var workmap;
var markersArray = [];
var videoMarkersArray = [];
var slides = document.getElementById("contactCarousel").getElementsByClassName("item");
var btnClose = [
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
    '\t width="21px" height="21px" viewBox="0 0 21 21" xml:space="preserve">\n' +
    '<g>\n' +
    '\t<rect x="0" y="8" transform="matrix(0.7071 0.7071 -0.7071 0.7071 10.4998 -4.3494)" fill="{{ color }}" width="21" height="5"/>\n' +
    '\t<rect x="0" y="8" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 25.3494 10.5004)" fill="{{ color2 }}" width="21.001" height="5"/>\n' +
    '</g>\n' +
    '</svg>'
].join('\n');
var workinfobox;

function myMap() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "js/infobox.js";
    $("head").append(s);
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "stylers": [
                    {
                        "color": "#e63b7a"
                    }
                ]
            }
            , {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }
            , {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
            , {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
            , {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }
            , {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }
            , {
                "featureType": "administrative.country",
                "stylers": [
                    {
                        "color": "#78193d"
                    }
                ]
            }
            , {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#85b5dd"
                    }
                ]
            }
            , {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#85b5dd"
                    }
                ]
            }
            , {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#afcbdf"
                    }
                    , {
                        "visibility": "on"
                    }
                    , {
                        "weight": 1.5
                    }
                ]
            }
            , {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            }
            , {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
            , {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
            , {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
            , {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#f6f7f6"
                    }
                ]
            }
            , {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }
            , {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }
            , {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }
            , {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
            , {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
            , {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }
            , {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            }
            , {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }
            , {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
            , {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }
            , {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }
            , {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#afcbdf"
                    }
                ]
            }
            , {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ], {
            name: 'Styled Map'
        });
    var styledWorkMap = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }
            , {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
            , {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }
            , {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }
            , {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#b3b3b1"
                    }
                ]
            }
            , {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            }
            , {
                "featureType": "administrative.province",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#b3b3b1"
                    }
                ]
            }
            , {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }
            , {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }
            , {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }
            , {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
            , {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
            , {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }
            , {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            }
            , {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }
            , {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
            , {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }
            , {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }
            , {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            }
            , {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#111111"
                    }
                ]
            }
            , {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ], {
            name: 'Styled Work Map'
        });
    var markers = [
        {
            "title": "malaysia",
            "lat": '3.136705',
            "lng": '101.687409'
        }
        , {
            "title": "germany",
            "lat": '48.189459',
            "lng": '11.644860'
        }
        , {
            "title": "russia",
            "lat": '55.749473',
            "lng": '37.620110'
        }
        , {
            "title": "boston",
            "lat": '42.343708',
            "lng": '-71.065915'
        }
        , {
            "title": "china",
            "lat": '31.091512',
            "lng": '121.451869'
        }
        , {
            "title": "india",
            "lat": '12.972027',
            "lng": '77.590416'
        }
        , {
            "title": "tokyo",
            "lat": '35.708396',
            "lng": '139.732351'
        }
        , {
            "title": "berlin",
            "lat": '52.514871',
            "lng": '13.394491'
        }
    ];
    var icon = {
        url: "img/marker.png",
        scaledSize: new google.maps.Size(20, 20)
    };
    var iconActive = {
        url: "img/marker.png",
        scaledSize: new google.maps.Size(30, 30)
    };
    var mapOptions = {
        center: new google.maps.LatLng(48.189459, 11.644860),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var workMapOptions = {
        center: new google.maps.LatLng(-4.338065, 122.467041),
        zoom: 2,
        backgroundColor: '#111',
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var closeButton;
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    workmap = new google.maps.Map(document.getElementById("work-map"), workMapOptions);
    // var workinfowindow = new google.maps.InfoWindow({});
    // var infoBoxParams;
    map.mapTypes.set('styled_map', styledMapType);
    workmap.mapTypes.set('styled_work_map', styledWorkMap);
    map.setMapTypeId('styled_map');
    workmap.setMapTypeId('styled_work_map');
    var template = [
        '<?xml version="1.0"?>'
        , '<svg id="gmmarker" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">'
        , '<defs>'
        , '<filter id="f1" x="-50%" y="-50%" width="200%" height="200%">'
        , '<feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />'
        , '<feGaussianBlur result="blurOut" in="offOut" stdDeviation="30" />'
        , '<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />'
        , '</filter>'
        , '</defs>'
        , '<path fill="{{ color }}" fill-opacity="0.5" d="M402.667,199.409c0,78.787-131.074,168.351-142.722,256.351C250,368.324,117.356,278.196,117.356,199.409                             c0-78.786,63.869-142.655,142.656-142.655C338.798,56.754,402.667,120.623,402.667,199.409z" filter="url(#f1)"></path>'
        , '<path fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="20" stroke-linecap="square" stroke-linejoin="bevel" stroke-miterlimit="10" d="                             M402.667,199.409c0,78.787-131.074,168.351-142.722,256.351C250,368.324,117.356,278.196,117.356,199.409                             c0-78.786,63.869-142.655,142.656-142.655C338.798,56.754,402.667,120.623,402.667,199.409z"></path>'
        , '</svg>'
    ].join('\n');
    $.getJSON("videos.txt", function (markersjson) {
        $.each(markersjson, function (key, data) {
            var workdata = markersjson[i];
            var latLng = new google.maps.LatLng(data.gmapslat, data.gmapslng);
            // Creating a marker and putting it on the map
            if (data.enabled === 1) {
                var videomarker = new google.maps.Marker({
                    id: data.projectid,
                    title: data.posttitleen,
                    titlede: data.posttitlede,
                    position: latLng,
                    shortdescren: data.shortdescren,
                    shortdescrde: data.shortdescrde,
                    year: data.year,
                    country: data.country,
                    cliplength: data.cliplength,
                    color: data.keycolor,
                    map: workmap,
                    icon: {
                        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(template.replace('{{ color }}', data.keycolor)),
                        scaledSize: new google.maps.Size(35, 35)
                    },
                    optimized: false
                });
            }
            // }
            (function (videomarker, workdata) {
                google.maps.event.addListener(videomarker, "click", function (e) {
                    openInfoBox(videomarker);
                    updateVideo(videomarker.id);
                    changeVideo(videomarker.id);
                    if (viewWidth < 768) {
                        var newLat = videomarker.getPosition().lat() + 25;
                        var newLng = videomarker.getPosition().lng() + 85;
                        workmap.setCenter(new google.maps.LatLng(newLat, newLng));
                        $("#mobile-work-hide-map").css('visibility', 'hidden');
                        $("#work-all-section").hide();
                        $("#workCarousel .carousel-caption").show();
                        $("#mobile-work-open-map").css('visibility', 'visible');
                        animatedTitle();
                    }
                });
            })(videomarker, workdata);
            videoMarkersArray.push(videomarker);
        });
    });
    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            title: data.title,
            position: myLatlng,
            map: map,
            icon: icon
        });
        markersArray.push(marker);
        (function (marker, data) {
            var infowindow = new google.maps.InfoWindow({
                // pixelOffset: new google.maps.Size(0,20)
            });
            var infowindow2 = new google.maps.InfoWindow({
                pixelOffset: new google.maps.Size(0, 120)
            });
            marker.addListener('mouseover', function () {
                var elementArray = $('#' + data.title + ' ' + '.address');
                var string = elementArray[0].innerHTML;
                if (data.title === 'russia' || data.title === 'germany' || data.title === 'berlin') {
                    infowindow2.setContent('<div class="marker-info">' + string + "</div>");
                    infowindow2.open(map, this);
                } else {
                    infowindow.setContent('<div class="marker-info">' + string + "</div>");
                    infowindow.open(map, this);
                }
            });
            marker.addListener('mouseout', function () {
                infowindow.close();
                infowindow2.close();
            });
            google.maps.event.addListener(marker, "click", function (e) {
                for (var i = 0; i < markers.length; i++) {
                    markersArray[i].setIcon(icon);
                    marker.setIcon(iconActive);
                    map.panTo(marker.getPosition());
                    $('html, body').animate({
                        scrollTop: $('#map').offset().top
                    }, 200);
                }
                switch (data.title) {
                    case "malaysia":
                        markerSelected("malaysia");
                        break;
                    case "germany":
                        markerSelected("germany");
                        break;
                    case "russia":
                        markerSelected("russia");
                        break;
                    case "boston":
                        markerSelected("boston");
                        break;
                    case "china":
                        markerSelected("china");
                        break;
                    case "india":
                        markerSelected("india");
                        break;
                    case "tokyo":
                        markerSelected("tokyo");
                        break;
                    case "berlin":
                        markerSelected("berlin");
                        break;
                }
            });
        })(marker, data);
    }
    markersArray[1].setIcon({
        url: "img/marker.png",
        scaledSize: {
            width: 30,
            height: 30
        }
    })
}

function changeMarker(title) {
    for (i in markersArray) {
        markersArray[i].setIcon({
            url: "img/marker.png",
            scaledSize: {
                width: 20,
                height: 20
            }
        })
    }
    for (i in markersArray) {
        if (markersArray[i].title === title) {
            map.panTo(markersArray[i].getPosition());
            markersArray[i].setIcon({
                url: "img/marker.png",
                scaledSize: {
                    width: 30,
                    height: 30
                }
            })
        }
    }
}

function changeVideo(title) {
    $("#workCarousel .item").removeClass("active");
    $("#workCarousel .item#" + title).addClass("active");
    $("#all-video").find('source').attr('src', $("#workCarousel .active").find('source').attr('src'));
    document.getElementById("all-video").load();
    $("#work-all-section .video-name").html($("#workCarousel .active").find(".video-name").html());
    $("#work-all-section .video-location").html($("#workCarousel .active").find(".video-location").html());
    $("#work-all-section .video-text").html($("#workCarousel .active").find(".video-text").html());
    $("#work-all-section .additional-info").html($("#workCarousel .active").find(".additional-info").html());
    $("#all-seek").css({
        'background': '-webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(138, 15, 51)), from(rgb(215, 215, 215)))'
    });
}

function markerSelected(item) {
    var slides = document.getElementById("contactCarousel").getElementsByClassName("item");
    for (var i = 0; i < slides.length; i++) {
        slides.item(i).classList.remove("active");
    }
    var element = document.getElementById(item).previousElementSibling;
    if (!element) {
        document.getElementById("berlin").classList.add("active");
    } else {
        element.classList.add("active");
    }
}

function checkLocation(difference) {
    for (var i = 0; i < slides.length; i++) {
        if (slides.item(i).classList.contains("active")) {
            if (difference > 0 && slides.item(i).id === "berlin") {
                changeMarker("germany");
            } else if (difference > 0 && slides.item(i).id === "tokyo") {
                changeMarker("malaysia");
            } else {
                changeMarker(slides.item(i + difference).id);
            }
        }
    }
}

function updateVideo(activeid) {
    var temp;
    $("#workCarousel .carousel-inner .item").remove();
    for (i = 0; i < workVideoArray.length; i++) {
        if (workVideoArray[i].project_id === activeid) {
            temp = i;
        }
    }
    for (i = temp - 1; i < temp + 2; i++) {
        loadVideo(i, true);
    }
    $("#workCarousel .carousel-inner .item").each(function () {
        $("#workCarousel .carousel-inner .item:nth-child(2)").addClass("active");
    });
    slideIndex = temp;
    updateAllWorkVideo($("#workCarousel .item.active"));
}

function getContrastYIQ(hexcolor) {
    var txtcolor;
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    (yiq >= 128) ? txtcolor = '#222222': txtcolor = '#ffffff'; //original:128 , 156
    return txtcolor;
}

function openInfoBox(elem) {
    var textcolor = getContrastYIQ(elem.color);
    var tmpthumb = 'http://win.comberry.com/misc/comberry-web-media_test/' + 'Thumbs/' + elem.id + '.jpg';
    if ($("body").attr('id') === 'deutch') {
        info = '<div class="cbinfobox">' + '<div class="thumb" style="background:url(' + tmpthumb + ') no-repeat center 0;background-size:auto 100%;background-color:#fff;border-color:' + elem.color + ';">' +
            //'<div class="overlay"><button onclick="initVideoPlayer(pois[slideid][\'poster\'][0],pois[slideid][\'content\'],pois[slideid][\'clip_ogg\'])"><img src="'+path+'wp-content/themes/comberry/img/btn-play.png" alt="Play" title="Play"/></button></div>'+
            '</div>' + '<div class="arrow" style="border-right: 40px solid ' + elem.color + '"></div>' + '<div class="content">' + '<h4 class="title" style="background-color:' + elem.color + ';color:' + textcolor + ';"' + elem.titlede + '</h4>' +
            //'<p>'+contentString+'</p>'+
            '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.shortdescrde + '</p>' + '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.year + ' | ' + elem.country + ' | ' + Math.round(elem.cliplength * 100 / 60) / 100 + ' min</p>' + '</div>' + '<div style="clear:both;"></div>' + '</div>'
    } else {
        info = '<div class="cbinfobox">' + '<div class="thumb" style="background:url(' + tmpthumb + ') no-repeat center 0;background-size:auto 100%;background-color:#fff;border-color:' + elem.color + ';">' +
            //'<div class="overlay"><button onclick="initVideoPlayer(pois[slideid][\'poster\'][0],pois[slideid][\'content\'],pois[slideid][\'clip_ogg\'])"><img src="'+path+'wp-content/themes/comberry/img/btn-play.png" alt="Play" title="Play"/></button></div>'+
            '</div>' + '<div class="arrow" style="border-right: 40px solid ' + elem.color + '"></div>' + '<div class="content">' + '<h4 class="title" style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.title + '</h4>' +
            //'<p>'+contentString+'</p>'+
            '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.shortdescren + '</p>' + '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.year + ' | ' + elem.country + ' | ' + Math.round(elem.cliplength * 100 / 60) / 100 + ' min</p>' + '</div>' + '<div style="clear:both;"></div>' + '</div>'
    }
    workinfobox.setContent(info);
    workinfobox.open(workmap, elem);
    if (viewWidth < 768) {
        var newLat = elem.getPosition().lat() + 25;
        var newLng = elem.getPosition().lng() - 85;
        workmap.setCenter(new google.maps.LatLng(newLat, newLng));
    } else {
        workmap.setCenter(elem.getPosition());
    }
    $(".infoBox img:first-child").attr('src', 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(btnClose.replace('{{ color }}', elem.color).replace('{{ color2 }}', elem.color)));
}

function openInfoBoxMob(elem) {
    var textcolor = getContrastYIQ(elem.color);
    var tmpthumb = 'http://win.comberry.com/misc/comberry-web-media_test/' + 'Thumbs/' + elem.id + '.jpg';
    if ($("body").attr('id') === 'deutch') {
        info = '<div class="cbinfobox">' + '<div class="thumb" style="background:url(' + tmpthumb + ') no-repeat center 0;background-size:auto 100%;background-color:#fff;border-color:' + elem.color + ';">' +
            //'<div class="overlay"><button onclick="initVideoPlayer(pois[slideid][\'poster\'][0],pois[slideid][\'content\'],pois[slideid][\'clip_ogg\'])"><img src="'+path+'wp-content/themes/comberry/img/btn-play.png" alt="Play" title="Play"/></button></div>'+
            '</div>' + '<div class="arrow" style="border-right: 40px solid ' + elem.color + '"></div>' + '<div class="content">' + '<h4 class="title" style="background-color:' + elem.color + ';color:' + textcolor + ';"' + elem.titlede + '</h4>' +
            //'<p>'+contentString+'</p>'+
            '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.shortdescrde + '</p>' + '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.year + ' | ' + elem.country + ' | ' + Math.round(elem.cliplength * 100 / 60) / 100 + ' min</p>' + '</div>' + '<div style="clear:both;"></div>' + '</div>'
    } else {
        info = '<div class="cbinfobox">' + '<div class="thumb" style="background:url(' + tmpthumb + ') no-repeat center 0;background-size:auto 100%;background-color:#fff;border-color:' + elem.color + ';">' +
            //'<div class="overlay"><button onclick="initVideoPlayer(pois[slideid][\'poster\'][0],pois[slideid][\'content\'],pois[slideid][\'clip_ogg\'])"><img src="'+path+'wp-content/themes/comberry/img/btn-play.png" alt="Play" title="Play"/></button></div>'+
            '</div>' + '<div class="arrow" style="border-right: 40px solid ' + elem.color + '"></div>' + '<div class="content">' + '<h4 class="title" style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.title + '</h4>' +
            //'<p>'+contentString+'</p>'+
            '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.shortdescren + '</p>' + '<p style="background-color:' + elem.color + ';color:' + textcolor + ';">' + elem.year + ' | ' + elem.country + ' | ' + Math.round(elem.cliplength * 100 / 60) / 100 + ' min</p>' + '</div>' + '<div style="clear:both;"></div>' + '</div>'
    }
    workinfobox.setContent(info);
    workinfobox.open(workmap, elem);
    var newLat = elem.getPosition().lat() + 25;
    var newLng = elem.getPosition().lng() + 85;
    workmap.setCenter(new google.maps.LatLng(newLat, newLng));
    $(".infoBox img:first-child").attr('src', 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(btnClose.replace('{{ color }}', elem.color).replace('{{ color2 }}', elem.color)));
}


$(document).ready(function () {
    $('.multi-item-carousel').carousel({
        interval: false
    });

    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('.multi-item-carousel .item .office:nth-child(1)').attr({
        "href": "#contactCarousel",
        "data-slide": "prev"
    }).addClass("previous-slide-item-click");
    $('.multi-item-carousel .item .office:nth-child(3)').attr({
        "href": "#contactCarousel",
        "data-slide": "next"
    }).addClass("next-slide-item-click");

    $(".previous-slide-item-click").click(function () {
        checkLocation(0);
    });
    $(".next-slide-item-click").click(function () {
        checkLocation(2);
    });

    $(".content").click(function () {
        if (menuOpened && $(this).hasClass('opened-menu')) {
            closeMobileMenu();
        }
    });
    $(".navbar-toggle").click(function () {
        if (menuOpened) {
            closeMobileMenu();
        } else {
            $(".navbar-language-mobile").hide();
            $("#header-mobile .navbar-toggle").html('<span class="sr-only">Toggle navigation</span>\n' +
                '<span class="glyphicon glyphicon-remove"></span>');
            $(".navbar-toggle .glyphicon").css('color', '#fff').css('font-size', '25px');
            $("#navbar-mobile").show().animate({
                left: 0
            }, 100, function () {});
            setTimeout(function () {
                $(".content").addClass("opened-menu")
            }, 1);
            menuOpened = true;
        }
    });
    $(".mobile-nav-link").click(function () {
        closeMobileMenu();
    });

});
