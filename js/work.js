//Variables
workVideoArray = [];
slideIndex = 0;
tempNum = 0;
var legalTriger = false;
var workCarouselTrig = false;
var logoTrigger = false;
var allWorksTrigger = false;
var selectedTrig = false;
var vcRemove = false;
var viewWidth = window.innerWidth;
var menuOpened = false;
var videovolumevar = 1;
var allVolChange = 1;
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

//Functions
function initOnLoad() {
    renderMarkers();
    renderOffices();
    animation();
}
var firstHeading = 'WE <br>DOCUMENT <br>THE WORLD';
var secondHeading = '1450+ <br>MOVIES';
var thirdHeading = 'IN 50+ <br>COUNTRIES';
var fourthHeading = 'FROM <br>8 OFFICES';

function animation() {
    var interval = 10000;
    if ($('body').attr('id') === 'deutch') {
        firstHeading = '<span style=\'48px\'>WIR <br>DOKUMENTIEREN <br>DIE WELT</span>';
        secondHeading = '1450+ <br>FILME';
        thirdHeading = 'IN 50+ <br>LÄNDERN';
        fourthHeading = 'AUS <br>8 STANDORTEN';
    }
    window.setTimeout(function () {
        showPins();
        $(".overlay-layer-offices").hide().css('bottom', '50px');
        $("#main-heading").hide().html(secondHeading).fadeIn();
    }, interval);
    window.setTimeout(function () {
        showCountries();
        $(".overlay-layer-pins").hide().css('bottom', '50px');
        $("#main-heading").hide().html(thirdHeading).fadeIn();
    }, interval * 2);
    window.setTimeout(function () {
        showOffices();
        $(".overlay-layer-countries").fadeOut();
        $("#main-heading").hide().html(fourthHeading).fadeIn();
    }, interval * 3);
    window.setTimeout(function () {
        $(".overlay-layer").hide();
        $("#main-heading").hide().html(firstHeading).fadeIn();
        animation();
    }, interval * 4);
}

function renderMarkers() {
    var baseUrl = 'img/pins/pin-';
    for (i = 0; i < 25; i++) {
        var currentId = i + 1;
        var nextId = currentId + 1;
        $("#pin-" + currentId.toString()).clone().attr("id", "pin-" + nextId.toString()).attr("src", baseUrl + nextId.toString() + '.png').insertBefore($("#pin-" + currentId));
    }
}

function renderOffices() {
    var baseUrl = 'img/offices/office-';
    for (i = 0; i < 7; i++) {
        var currentId = i + 1;
        var nextId = currentId + 1;
        $("#office-" + currentId.toString()).clone().attr("id", "office-" + nextId.toString()).attr("src", baseUrl + nextId.toString() + '.png').insertBefore($("#office-" + currentId));
    }
}

function showPins() {
    for (i = 0; i < 26; i++) {
        var elementId = i + 1;
        $("#pin-" + elementId).delay(50 * i).fadeIn().animate({
            bottom: 0
        }, 50, function () {});
    }
}

function showOffices() {
    for (i = 0; i < 7; i++) {
        var elementId = i + 1;
        $("#office-" + elementId).delay(50 * i).fadeIn().animate({
            bottom: 0
        }, 50, function () {});
    }
}

function showCountries() {
    $(".overlay-layer-countries").fadeIn(1000);
}

function workReel() {
    $("#top-section .left-side, #top-section .right-side").animate({
        bottom: "+=300"
        , opacity: 0
    }, 700, function () {});
    $({
        blurRadius: 3
    }).animate({
        blurRadius: 0
    }, {
        duration: 700
        , easing: 'swing'
        , step: function () {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur(" + this.blurRadius + "px)"
                , "filter": "blur(" + this.blurRadius + "px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 700, function () {});
    window.setTimeout(function () {
        $("#top-section .left-side, #top-section .right-side").hide();
        $("#top-section .darken-layer").hide();
        $("#watch-movies").css('display', 'flex').fadeIn();
        $('.home-body').css('overflow', 'auto')
    }, 700);
}

function workReelNew() {
    $("#top-section .left-side, #top-section .right-side").animate({
        opacity: 0
    }, 1000, function () {});
    $({
        blurRadius: 5
    }).animate({
        blurRadius: 0
    }, {
        duration: 1000
        , easing: 'swing'
        , step: function () {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur(" + this.blurRadius + "px)"
                , "filter": "blur(" + this.blurRadius + "px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 700, function () {});
    window.setTimeout(function () {
        $("#top-section .left-side, #top-section .right-side").hide();
        $("#top-section .darken-layer").hide();
        $("#watch-movies").css('display', 'flex').hide();
        $("#top-section").css('position', 'absolute');
        $("#work-section").css('position', 'relative').css('left', '100%').show().animate({
            left: 0
        }, 500, function () {});
        setTimeout(function () {
            $("#top-section").hide().css('position', 'relative')
        }, 500);
        $("#work-all-section").hide();
        $(".work-carousel-control").show()
    }, 1000);
}

function workReel2() {
    $("#top-section .left-side, #top-section .right-side").animate({
        bottom: "+=300"
        , opacity: 0
    }, 1, function () {});
    $({
        blurRadius: 3
    }).animate({
        blurRadius: 0
    }, {
        duration: 1
        , easing: 'swing'
        , step: function () {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur(" + this.blurRadius + "px)"
                , "filter": "blur(" + this.blurRadius + "px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 1, function () {});
    window.setTimeout(function () {
        $("#top-section .left-side, #top-section .right-side").hide();
        $("#top-section .darken-layer").hide();
        $("#watch-movies").css('display', 'flex').fadeIn();
        $('.home-body').css('overflow', 'auto')
    }, 1);
}

function showReel() {
    $("#top-section .darken-layer").animate({
        opacity: 1
    }, 700, function () {});
    window.setTimeout(function () {
        $('.home-body').css('overflow', 'hidden');
        $("#watch-movies").css('display', 'none').fadeOut();
        $("#top-section .darken-layer").show();
        $("#top-section .left-side, #top-section .right-side").show();
    }, 700);
    $({
        blurRadius: 0
    }).animate({
        blurRadius: 3
    }, {
        duration: 700
        , easing: 'swing'
        , step: function () {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur(" + this.blurRadius + "px)"
                , "filter": "blur(" + this.blurRadius + "px)"
            });
        }
    });
    $("#top-section .left-side, #top-section .right-side").animate({
        opacity: 1
    , }, 500).animate({
        bottom: "-=300"
    }, 500);
}

function addFunctionality(video, videos, playButton, muteButton, seekBar) {
    playButton.click(function () {
        if (video.get(0).paused == true) {
            video.get(0).play();
            playButton.css("opacity", "0");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeOut();
            }
        }
        else {
            video.get(0).pause();
            playButton.css("opacity", "1");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeIn();
            }
        }
    });
    muteButton.click(function () {
        if (videos.get(0).muted === true) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).muted = false;
                videos.get(i).volume = 1;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_4.png");
            });
        }
        else if (videos.get(0).volume === 1) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.75;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_3.png");
            });
        }
        else if (videos.get(0).volume === 0.75) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.5;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_2.png");
            });
        }
        else if (videos.get(0).volume === 0.5) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.25;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_1.png");
            });
        }
        else if (videos.get(0).volume === 0.25) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).muted = true;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_0.png");
            });
        }
        videovolumevar = videos.get(0).volume;
    });
    seekBar.bind('change', function () {
        // Calculate the new time
        var time = video.get(0).duration * (seekBar.val() / 100);
        // Update the video time
        video.get(0).currentTime = time;
    });
    video.bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / video.get(0).duration) * video.get(0).currentTime;
        // Update the slider value
        seekBar.val(value);
        seekBar.css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #8a0f33), color-stop(" + value + "%, #d7d7d7))");
        seekBar.css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
    seekBar.bind('mouseup', function () {
        video.get(0).play();
        playButton.css('opacity', '0');
        if (viewWidth > 767) {
            $('.carousel-caption').fadeOut();
        }
    });
    $(window).bind('orientationchange', function (event) {
        document.getElementById('optimizeVideo').load();
    });
}

function allPlayPause() {
    if ($("#all-video").get(0).paused == true) {
        $("#all-video").get(0).play();
        $("#all-play").css("visibility", "hidden");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
    else {
        $("#all-video").get(0).pause();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
}

function createElementDataArray(data, array) {
    data.each(function () {
        var temp = $(this).html();
        array.push(temp);
    });
}

function updateAllWorkVideo(item) {
    $("#work-all-section video").html(item.find("video").html());
    $("#work-all-section .video-name").html(item.find(".video-name").html());
    $("#work-all-section .video-location").html(item.find(".video-location").html());
    $("#work-all-section .video-text").html(item.find(".video-text").html());
    $("#work-all-section .additional-info").html(item.find(".additional-info").html());
}

function closeMobileMenu() {
    if ($(window).scrollTop() === 0) {
        $(".navbar-language-mobile").show();
    }
    else {
        $(".navbar-language-mobile").hide();
    };
    $(".navbar-toggle .icon-bar").css('background', '#d12257');
    $("#header-mobile .navbar-toggle").html('<span class="sr-only">Toggle navigation</span>\n' + '                        <span class="icon-bar"></span>\n' + '                        <span class="icon-bar"></span>\n' + '                        <span class="icon-bar"></span>');
    $("#navbar-mobile").animate({
        left: -200
    }, 100, function () {});
    setTimeout(function () {
        $("#navbar-mobile").hide()
    }, 100);
    $(".content").removeClass("opened-menu");
    menuOpened = false;
}

function optimizeWork() {
    var metaWidth = document.getElementById('optimizeVideo').videoWidth;
    var metaHeight = document.getElementById('optimizeVideo').videoHeight;
    var currentViewWidth = window.innerWidth;
    var videoWiewHeight = currentViewWidth * 0.5625;
    var temp = metaWidth / metaHeight;
    var videoHeight = currentViewWidth / temp - 1;
    var mute = videoHeight - 40;
    var mapHeight = window.innerHeight - videoHeight;
    $('head').append('<style type="text/css">' + '@media screen and (max-width: 767px) {' + '#work-section #workCarousel .carousel-control {height: ' + videoHeight + 'px}' + '#work-section #workCarousel .carousel-inner, #work-section{height: auto}' + '#work-section #workCarousel .item video {width: 100%;min-width: auto !important;height: ' + videoWiewHeight + 'px; min-height: auto !important;}' + '#work-section .play-pause {height: ' + videoHeight + 'px}' + '.work-carousel-control {height: ' + videoHeight + 'px; width: 10%}' + '#work-map { height:' + mapHeight + 'px!important}' + '#work-section .mute-video {top: ' + mute + 'px; bottom: auto; width: 50px; left: 0}' + '#work-section .mute-video img {width: 100%}' + '#work-section .seek-bar {top: ' + videoHeight + 'px; border-radius: 0}' + '.carousel-caption {height: ' + mapHeight + 'px!important; overflow-y: scroll;-webkit-overflow-scrolling: touch; pointer-events: auto!important;}' + '}' + '@media only screen and (max-width: 767px) and (orientation: landscape) {' + '#work-map {height: 100vh!important;}' + '}' + '</style>');
};

function scrollToSection(section) {
    $('html, body').animate({
        scrollTop: section.offset().top
    }, 500);
}

function hideSel() {
    allPlayPause2();
    allWorksTrigger = true;
    logoTrigger = true;
    $("#top-section").hide();
    $("#video-bg").hide();
    $("#work-all-section").show();
    $(".work-carousel-control").show();
    $("#all-play").css('visibility', 'visible');
    $(".navbar-brand .img-responsive").attr('src', 'img/logo_white.png');
    scrollToSection($("#work-section"));
    var volRange = $("#vol-range");
    $("input#vol-range").val(allVolChange * 10);
    if (viewWidth > 767) {
        $("#work-section").hide();
        $('#play-pause-1').css('opacity', '1');
        for (i = 0; i < $("#workCarousel .item video").length; i++) {
            $("#workCarousel .item video").get(i).pause();
        }
    }
    else {
        $("#work-section").show();
        $(".work-carousel-control").show();
        $("#workCarousel .carousel-caption").hide();
        $(".work-all-content").hide();
        $("#workCarousel").css('height', 'auto');
        $("#mobile-work-open-map").css('visibility', 'hidden');
        $("#mobile-work-hide-map").css('visibility', 'visible');
    }
}

function animatedTitle() {
    var videoName = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name");
    var videoNameSpan = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name span.main-title");
    var scrollW = videoName.get(0).scrollWidth;
    var offsetW = videoName.get(0).offsetWidth;
    if (scrollW > offsetW) {
        var titleText = videoNameSpan.text();
        var spanWidth = videoNameSpan.width();
        var ssMarginLeft = spanWidth / 2;
        var secondSpan = '<span id="shadowSpan" style="margin-left: ' + ssMarginLeft + 'px">' + titleText + '</span>'
        if (!videoName.hasClass('title-animated')) {
            $.when(videoName.append(secondSpan)).then(videoName.addClass('title-animated'))
        }
        var anMarginLeft = spanWidth + ssMarginLeft;

        function animSpan() {
            setInterval(function () {
                videoNameSpan.delay(3000).animate({
                    marginLeft: -anMarginLeft
                }, 5000, function () {
                    videoNameSpan.css({
                        'margin-left': 0
                    })
                })
            }, 500)
        }
        animSpan();
    };
};

function panVideoMarker(item) {
    for (i = 0; i < videoMarkersArray.length; i++) {
        if (item.attr('id') === videoMarkersArray[i].id) {
            workmap.setCenter(videoMarkersArray[i].getPosition());
        }
    }
}

function renderVideos(index, right) {
    if (right) {
        $("#workCarousel .carousel-inner .item:first-child").remove();
        loadVideo(index + 2, true);
    }
    else {
        $("#workCarousel .carousel-inner .item:last-child").remove();
        loadVideo(index, false);
    }
}

function loadVideo(index, right) {
    if (index < -(workVideoArray.length - 1)) {
        slideIndex = 0;
    }
    else if (index > workVideoArray.length) {
        slideIndex = -1
    }
    if (index < 0) {
        index = workVideoArray.length + index;
    }
    else if (index > workVideoArray.length - 1) {
        index = index - workVideoArray.length;
    }
    if ($('body').attr('id') === 'deutch') {
        title = workVideoArray[index].post_title_de;
        city = workVideoArray[index].city_de;
        descr = workVideoArray[index].descr_de;
        clientLabel = 'Klient: ';
        producerLabel = 'Hersteller: '
    }
    else {
        title = workVideoArray[index].post_title_en;
        city = workVideoArray[index].city_en;
        descr = workVideoArray[index].descr_en;
        clientLabel = 'Client: ';
        producerLabel = 'Producer: ';
    }
    if (city === undefined) {
        city = ''
    }
    if (descr === undefined) {
        descr = ''
    }
    if (workVideoArray[index].client === undefined) {
        workVideoArray[index].client = ''
    }
    if (workVideoArray[index].producer_1 === undefined) {
        workVideoArray[index].producer_1 = ''
    }
    if (workVideoArray[index].producer_2 === undefined) {
        workVideoArray[index].producer_2 = ''
    }
    else {
        workVideoArray[index].producer_2 = ', ' + workVideoArray[index].producer_2
    }
    if (workVideoArray[index].producer_3 === undefined) {
        workVideoArray[index].producer_3 = ''
    }
    else {
        workVideoArray[index].producer_3 = ', ' + workVideoArray[index].producer_3
    }
    if (workVideoArray[index].year === undefined) {
        workVideoArray[index].year = ''
    }
    else {
        workVideoArray[index].year = workVideoArray[index].year + '|'
    }
    if (workVideoArray[index].country === undefined) {
        workVideoArray[index].country = ''
    }
    else {
        workVideoArray[index].country = workVideoArray[index].country + '|'
    }
    var itemTemplate = '<div id="' + workVideoArray[index].project_id + '" class="item">\n' + '<video id="work-video" style="min-width: 110%; min-height: 100vh" playsinline>\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/mp4">\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/webm">\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/ogg">\n' +
        '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n' + '</video>' + '<div class="carousel-caption">' + '<div class="caption-body">' + '<div>' + '<h1 class="video-name"><span class="main-title">' + title + '</span></h1>' + '<h3 class="video-location">' + city + '</h3>' + '<p class="video-text">' + descr + '</p>' + '<p class="additional-info">' + clientLabel + workVideoArray[index].client + '<br>' + producerLabel + workVideoArray[index].producer_1 + workVideoArray[index].producer_2 + workVideoArray[index].producer_3 + '<br>' + workVideoArray[index].year + workVideoArray[index].country + (workVideoArray[index].cliplength / 60).toFixed(2) + 'min' + '</p>' + '</div>' + '</div>' + '</div>' + '</div>';
    if (right) {
        $("#workCarousel .carousel-inner").append(itemTemplate);
    }
    else {
        $("#workCarousel .carousel-inner").prepend(itemTemplate);
    }
    // var minutes = parseInt(workVideoArray[index].timestamp.slice(0, 2));
    // var seconds = parseInt(workVideoArray[index].timestamp.slice(3, 5));
    // var miliseconds = parseInt(workVideoArray[index].timestamp.slice(6, 9));
    $("#seek-bar-1").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #d3164e), color-stop(0, #d7d7d7))");
    $("#seek-bar-1").css("background", "-moz-linear-gradient(left center, #d3164e 0, #d3164e0, #d7d7d70, #d7d7d7 100%)");
    $("#workCarousel video").bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / $(this).get(0).duration) * $(this).get(0).currentTime;
        // Update the slider value
        $("#seek-bar-1").val(value);
        $("#seek-bar-1").css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #d3164e), color-stop(" + value + "%, #d7d7d7))");
        $("#seek-bar-1").css("background", "-moz-linear-gradient(left center, #d3164e 0%, #d3164e" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
}

function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function allPlayPause2() {
    if ($("#all-video").get(0).paused == false) {
        $("#all-video").get(0).pause();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
}

function allPlayPause3() {
    if ($("#all-video").get(0).paused == false) {
        $("#all-video").get(0).pause();
        $("#all-video").get(0).load();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
        $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
        $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
    }
}

function selectedPlayPause() {
    var activeSlide = $("#selectedCarousel .carousel-inner .item.active video");
    activeSlide.get(0).pause();
    var selInd;
    $("#selectedCarousel .carousel-inner .item").each(function (i, el) {
        if ($(el).hasClass("active")) {
            selInd = i + 1;
            console.log(selInd)
        }
    });
    var strPlayBtn = '$("#play-pause-selected-' + selInd + '")';
    var playBtn = eval(strPlayBtn);
    playBtn.css('opacity', '1');
    if (viewWidth > 767) {
        $('.carousel-caption').fadeIn();
    }
    selectedTrig = false;
}

function workPlayPause() {
    workCarouselTrig = false;
    var activeSlide = $("#workCarousel .carousel-inner .item.active video");
    activeSlide.get(0).pause();
    var selInd;
    if (!vcRemove) {
        $("#play-pause-1").css('opacity', '1');
    }
    else {
        $("#workCarousel .carousel-inner .item").each(function (i, el) {
            if ($(el).hasClass("active")) {
                selInd = $(el).attr('id');
                console.log(selInd)
            }
        });
        var strPlayBtn = '$(".video-control-' + selInd + '")';
        console.log(strPlayBtn)
        var playBtn = eval(strPlayBtn);
        console.log(playBtn)
        playBtn.each(function (i, el) {
            $(el).css({
                'opacity': '1'
                , 'display': 'block'
            });
            console.log($(el));
        })
    }
    selectedTrig = false;
}
//Execution
$(document).ready(function () {
    //top-section.js
    $("body").fadeIn(2000);
    var linkLocation;
    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
    //scripts.js
    var videopaused = false;
    if (viewWidth < 768) {
        workmap.setZoom(1);
    }
    $(".carousel").on("touchstart", function (event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
                checkLocation(2);
            }
            else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
                checkLocation(0);
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });
    $("#work-all-section").hide();
    $("#work-all-section").hide();
    $(".work-carousel-control").hide();
    $("#play-pause-1").css('visibility', 'visible');
    $("#mute-video-1").css('visibility', 'visible');
    $("#seek-bar-1").css('visibility', 'visible');
    $("#all-video").click(function () {
        $("#all-video").get(0).pause();
        $("#all-play").css('visibility', 'visible');
    });
    $("#all-play").click(function () {
        allPlayPause();
    });
    $(".all-play").click(function () {
        allPlayPause();
    });
    var volRangeTrigger = false;
    $(".all-volume").click(function () {
        if (!volRangeTrigger) {
            volRangeTrigger = true;
            $("#vol-range").show();
        }
        else {
            volRangeTrigger = false;
            $("#vol-range").hide();
        }
    });
    $(".all-volume").dblclick(function () {
        if ($("#all-video").get(0).volume != 0) {
            $("#all-video").get(0).volume = 0;
            $(".all-volume img").attr("src", "img/video/icon_volume_red_0.png");
        }
        else {
            $("#all-video").get(0).volume = 1;
            $(".all-volume img").attr("src", "img/video/icon_volume_red_4.png");
        }
    });
    $("#vol-range").on('change', function () {
        allVolChange = $("#vol-range").get(0).value / 10;
        $("#all-video").get(0).volume = allVolChange;
        if ($("#all-video").get(0).volume == 0) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_0.png");
        }
        else if ($("#all-video").get(0).volume > 0 && $("#all-video").get(0).volume <= 0.25) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_1.png");
        }
        else if ($("#all-video").get(0).volume > 0.25 && $("#all-video").get(0).volume <= 0.5) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_2.png");
        }
        else if ($("#all-video").get(0).volume > 0.5 && $("#all-video").get(0).volume <= 0.75) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_3.png");
        }
        else {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_4.png");
        }
    });
    $("#vol-range").on('mouseup', function () {
        allVolChange = ($("#vol-range").val()) / 10;
        $("#all-video").get(0).volume = allVolChange;
        $("#vol-range").val(allVolChange * 10);
        if ($("#all-video").get(0).volume == 0) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_0.png");
        }
        else if ($("#all-video").get(0).volume > 0 && $("#all-video").get(0).volume <= 0.25) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_1.png");
        }
        else if ($("#all-video").get(0).volume > 0.25 && $("#all-video").get(0).volume <= 0.5) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_2.png");
        }
        else if ($("#all-video").get(0).volume > 0.5 && $("#all-video").get(0).volume <= 0.75) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_3.png");
        }
        else {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_4.png");
        }
        $("#vol-range").get(0).value = $("#all-video").get(0).volume * 100;
        if (volRangeTrigger) {
            $("#vol-range").hide();
            volRangeTrigger = false;
        }
    });
    var mozFScr = false;
    var fullScreenButton = document.getElementById("all-fullscreen");
    fullScreenButton.addEventListener("click", function () {
        var video = document.getElementById("all-video");
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        }
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });
    $(document).bind('mozfullscreenchange', function () {
        var video = document.getElementById("all-video");
        var state = document.mozFullScreen;
        var event = state ? 'FullscreenOn' : 'FullscreenOff';
        if (event === 'FullscreenOn') {
            video.controls = true;
        }
        else if (event === 'FullscreenOff') {
            video.controls = false;
        }
    })
    $("#all-seek").bind('change', function () {
        // Calculate the new time
        var time = $("#all-video").get(0).duration * ($("#all-seek").val() / 100);
        // Update the video time
        $("#all-video").get(0).currentTime = time;
    });
    $("#all-video").bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / $("#all-video").get(0).duration) * $("#all-video").get(0).currentTime;
        // Update the slider value
        $("#all-seek").val(value);
        $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #8a0f33), color-stop(" + value + "%, #d7d7d7))");
        $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
    $("#all-seek").bind('mouseup', function () {
        $("#all-video").get(0).play();
        $("#all-play").css('visibility', 'hidden');
    });
    $("#selectedCarousel").carousel({
        wrap: false
    });
    $(window).bind('scroll', function (e) {
        if ($(window).scrollTop() > 0) {
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        else {
            $("#header-mobile .navbar-brand").fadeIn();
            $("#header-mobile .navbar-language-mobile").fadeIn();
        }
        //        if ($("#workCarousel").css('display') === 'block' && $(window).scrollTop() === 0) {
        //            $("#header-mobile .navbar-brand").fadeOut();
        //            $("#header-mobile .navbar-language-mobile").fadeOut();
        //        } else if ($("#workCarousel").css('display') === 'none' && $(window).scrollTop() === 0) {
        //            $("#header-mobile .navbar-brand").fadeIn();
        //            $("#header-mobile .navbar-language-mobile").fadeIn();
        //        }
        var viewport = $(window).height();
        var current = $(window).scrollTop() / (viewport / 100);
        var volume = 1 - (1 / 100 * current * 2);
        var volume2 = 1 - (1 / 100 * current) * 1.5;
        if (volume2 <= 0) {
            volume2 = 0;
        }
        if ($("#work-all-section").css('display') === 'block') {
            $("#all-video").get(0).volume = volume2;
            if ($("#all-video").get(0).volume === 0) {
                $("#all-video").get(0).pause();
                $("#all-play").css('visibility', 'visible');
            }
        }
        if ($("#workCarousel").css('display') === 'block') {
            for (i = 0; i < $("#workCarousel video").length; i++) {
                if (0.25 > volume && 0 < volume) {
                    $("#workCarousel video").get(i).volume = 1 - (1 / 100 * current);
                    if ($("#workCarousel video").get(i).muted === true) {
                        $(".mute-video img").attr("src", "img/video/icon_volume_0.png");
                    }
                    else {
                        $(".mute-video img").attr("src", "img/video/icon_volume_1.png");
                    }
                    if (videopaused) {
                        $("#workCarousel .item.active video").get(i).play();
                        videopaused = false;
                    }
                }
                else if (1 < volume) {
                    $("#workCarousel video").get(i).volume = videovolumevar;
                }
                else if (0 > volume && $("#workCarousel .item video").get(i).paused === false) {
                    $("#workCarousel .item video").get(i).pause();
                    videopaused = true;
                }
                else if (0.25 < volume) {
                    $("#workCarousel video").get(i).volume = videovolumevar;
                    if ($("#workCarousel video").get(i).muted === true) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_0.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 1) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_4.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.75) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_3.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.5) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_2.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.25) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_1.png");
                        });
                    }
                }
            }
        }
        else if ($("#selectedCarousel").css('display') === 'block') {
            var selVideo = $("#selectedCarousel .carousel-inner .item video");
            var selVideoActive = $("#selectedCarousel .carousel-inner .item.active video");
            for (i = 0; i < selVideo.length; i++) {
                if (0.25 > volume && 0 < volume) {
                    selVideo.get(i).volume = 1 - (1 / 100 * current) * 0.5;
                    if (selVideo.get(i).muted === true) {
                        $(".mute-video img").attr("src", "img/video/icon_volume_0.png");
                    }
                    else {
                        $(".mute-video img").attr("src", "img/video/icon_volume_1.png");
                    }
                    if (videopaused) {
                        selVideoActive.get(i).play();
                        videopaused = false;
                    }
                }
                else if (1 < volume) {
                    selVideo.get(i).volume = videovolumevar;
                }
                else if (0 > volume && selVideo.get(i).paused === false) {
                    selVideo.get(i).pause();
                    videopaused = true;
                }
                else if (0.25 < volume) {
                    selVideo.get(i).volume = videovolumevar;
                    if (selVideo.get(i).muted === true) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_0.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 1) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_4.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.75) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_3.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.5) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_2.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.25) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_1.png");
                        });
                    }
                }
            }
        }
    });
    $(".mail").each(function () {
        $(this).html($(this).html().replace("...", "@").replace(/\.\.\./g, "."));
        $(this).attr("href", $(this).attr("href").replace("...", "@").replace(/\.\.\./g, "."));
    });
    //navigation.js
    var onExpore = false;
    initOnLoad();
    $("#explore").click(function () {
        if (viewWidth > 767) {
            workReelNew();
            onExpore = true;
            selectedTrig = true;
        }
        else {
            workReel();
            onExpore = true;
        }
    });
    $(".darken-layer").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000
            , easing: 'swing'
            , step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)"
                    , "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    $(".right-side").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000
            , easing: 'swing'
            , step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)"
                    , "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    $("#main-heading").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000
            , easing: 'swing'
            , step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)"
                    , "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    var lastY;
    var currentY;
    var pos = 0;
    $(window).scroll(function () {
        pos = $(this).scrollTop();
    });
    $('.home-body').bind('touchstart', function (e) {
        var currentY = e.originalEvent.touches[0].clientY;
        lastY = currentY;
    });
    //    $('.home-body').bind('mousewheel', function (n) {
    //        var n1 = n.originalEvent;
    //        var deltaY = n1.deltaY;
    //        if (!onExpore && deltaY > 0) {
    //            workReel();
    //            onExpore = true;
    //        } else if (pos === 0 && deltaY < 0 && onExpore === true) {
    //            showReel()
    //            onExpore = false;
    //        }
    //
    //    });
    $('.home-body').bind('touchmove', function (e) {
        var currentY = e.originalEvent.touches[0].clientY;
        if (!onExpore && lastY > currentY) {
            workReel();
            onExpore = true;
        }
        else if (pos === 0 && onExpore === true && lastY < currentY) {
            showReel()
            onExpore = false;
        }
        lastY = currentY;
    });
    if ($('body').attr('id') === 'deutch') {
        $(".lang-link").find("a").removeClass("active");
        $(".lang-link:last-child").find("a").addClass("active");
    }
    $("#open-legal-notice").click(function () {
        allPlayPause2();
        $("#home").toggle();
        $("#legal-notice").toggle();
        if (!legalTriger) {
            legalTriger = true;
        }
        else {
            legalTriger = false;
        }
    });
    $(".selectedButton").click(function () {
        selectedTrig = true;
        allPlayPause3();
        $("#top-section").hide();
        $("#video-bg").hide();
        $("#work-section").show();
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        $("#workCarousel .carousel-caption").show();
        $("#workCarousel").css('height', '100vh');
        $("#mobile-work-open-map").css('visibility', 'visible');
        $("#mobile-work-hide-map").css('visibility', 'hidden');
        closeMobileMenu();
        scrollToSection($("#work-section"));
        $("#all-video").get(0).pause();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        if (allWorksTrigger) {
            allWorksTrigger = false;
        }
        if (logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        if (workCarouselTrig) {
            $('.video-control-current').hide();
        }
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        animatedTitle()
    });
    $(".allButton").click(function () {
        if (selectedTrig) {
            $.when(selectedPlayPause()).then(hideSel());
        }
        else {
            hideSel()
        }
    });
    $(window).scroll(function () {
        var sPos = $(this).scrollTop();
        var wsHeight = $("#work-all-section").height();
        if (sPos >= wsHeight && logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        if (sPos <= wsHeight && !logoTrigger && allWorksTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo_white.png");
            logoTrigger = true;
        }
    });
    $("#watch-movies").click(function () {
        selectedTrig = true;
        $("#watch-movies").hide();
        $("#top-section").css('position', 'absolute');
        $("#work-section").css('position', 'relative').css('left', '100%').show().animate({
            left: 0
        }, 500, function () {});
        setTimeout(function () {
            $("#top-section").hide().css('position', 'relative')
        }, 500);
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        animatedTitle()
    });
    $("#workCarousel").on('slid.bs.carousel', function () {
        animatedTitle()
    });
    var selVidCount = 1;
    $("#selectedCarousel .right.carousel-control").click(function () {
        $("#selectedCarousel").next();
        if (selVidCount >= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount = $("#selectedCarousel .carousel-inner .item").length
        }
        else {
            selVidCount++;
        };
    });
    $("#selectedCarousel .left.carousel-control").click(function () {
        if (selVidCount > 1 && selVidCount <= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount--;
            $("#selectedCarousel").prev();
        }
        else {
            $("#watch-movies").hide();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
            setTimeout(function () {
                if (onExpore) {
                    onExpore = false;
                }
                $("#top-section").css({
                    position: 'relative'
                    , 'z-index': '1'
                }).show();
                $("#video-bg").show();
                $("#top-section .left-side, #top-section .right-side").css('opacity', '1').show();
                $("#top-section .darken-layer").css('opacity', '1').show();
                $('.blur').css('filter', 'blur(5px)');
            }, 400);
            $("#work-section").animate({
                left: '100%'
            }, 500, function () {
                $("#work-section").css('display', 'none').css('left', '0')
            });
            selVidCount = 1;
        };
    });
    $(".about-nav").click(function () {
        allPlayPause2();
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        scrollToSection($("#about"));
    });
    $(".contact-nav").click(function () {
        allPlayPause2();
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        scrollToSection($("#contact"));
    });
    $(".home-nav").click(function () {
        if (viewWidth > 767) {
            if (selectedTrig) {
                selectedPlayPause()
            }
            allPlayPause2();
            scrollToSection($("#top-section"));
            $("#top-section").show();
            $("#video-bg").show();
            $("#top-section .left-side, #top-section .right-side").css('opacity', '1').show();
            $("#top-section .darken-layer").css('opacity', '1').show();
            $('.blur').css('filter', 'blur(5px)');
            $("#watch-movies").hide();
            $("#work-section").hide();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
            if (allWorksTrigger) {
                allWorksTrigger = false;
            }
            if (logoTrigger) {
                $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
                logoTrigger = false;
            }
            if (legalTriger) {
                $("#home").toggle();
                $("#legal-notice").toggle();
            }
        }
        else {
            if (selectedTrig) {
                workPlayPause()
            }
            scrollToSection($("#top-section"));
            $("#top-section").show();
            $("#video-bg").show();
            $("#top-section .left-side, #top-section .right-side").css({
                'opacity': '1'
                , 'bottom': '0'
            }).show();
            $("#top-section .darken-layer").css('opacity', '1').show();
            $('.blur').css('filter', 'blur(5px)');
            $("#watch-movies").hide();
            $("#work-section").hide();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
        }
    });
    //work.js
    $.getJSON("videos.txt", function (videosjson) {
        var temparray = [];
        $.each(videosjson, function (key, data) {
            var video = {
                project_id: data.projectid
                , post_title_de: data.posttitlede
                , post_title_en: data.posttitleen
                , descr_de: data.descrde
                , descr_en: data.descren
                , country: data.country
                , city_de: data.cityde
                , city_en: data.cityen
                , client: data.client
                , producer_1: data.producer1
                , producer_2: data.producer2
                , producer_3: data.producer3
                , year: data.year
                , cliplength: data.cliplength
                , timestamp: data.timestamp1
                , isSelected: data.isselected
            };
            if (data.enabled === 1) {
                temparray.push(video);
            }
        });
        workVideoArray = shuffle(temparray);
        for (i = 0; i < 3; i++) {
            loadVideo(i, true);
        }
        var selectedItems = 1;
        for (i = 0; i < workVideoArray.length; i++) {
            if (workVideoArray[i].isSelected === 1) {
                var index = i;
                if ($('body').attr('id') === 'deutch') {
                    title = workVideoArray[index].post_title_de;
                    city = workVideoArray[index].city_de;
                    descr = workVideoArray[index].descr_de;
                    clientLabel = 'Klient: ';
                    producerLabel = 'Hersteller: '
                }
                else {
                    title = workVideoArray[index].post_title_en;
                    city = workVideoArray[index].city_en;
                    descr = workVideoArray[index].descr_en;
                    clientLabel = 'Client: ';
                    producerLabel = 'Producer: ';
                }
                if (city === undefined) {
                    city = ''
                }
                if (descr === undefined) {
                    descr = ''
                }
                if (workVideoArray[index].client === undefined) {
                    workVideoArray[index].client = ''
                }
                if (workVideoArray[index].producer_1 === undefined) {
                    workVideoArray[index].producer_1 = ''
                }
                if (workVideoArray[index].producer_2 === undefined) {
                    workVideoArray[index].producer_2 = ''
                }
                else {
                    workVideoArray[index].producer_2 = ', ' + workVideoArray[index].producer_2
                }
                if (workVideoArray[index].producer_3 === undefined) {
                    workVideoArray[index].producer_3 = ''
                }
                else {
                    workVideoArray[index].producer_3 = ', ' + workVideoArray[index].producer_3
                }
                if (workVideoArray[index].year === undefined) {
                    workVideoArray[index].year = ''
                }
                else {
                    workVideoArray[index].year = workVideoArray[index].year + '|'
                }
                if (workVideoArray[index].country === undefined) {
                    workVideoArray[index].country = ''
                }
                else {
                    workVideoArray[index].country = workVideoArray[index].country + '|'
                }
                var video = '<div id="selectedVideo' + selectedItems + '" class="item">\n' + '<video id="work-video-' + selectedItems + '" style="min-width: 110%; min-height: 100vh" playsinline>\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n' + '</video>' + '<div class="carousel-caption">' + '<div class="caption-body">' + '<div>' + '<h1 class="video-name"><span>' + title + '</span></h1>' + '<h3 class="video-location">' + city + '</h3>' + '<p class="video-text">' + descr + '</p>' + '<p class="additional-info">' + clientLabel + workVideoArray[index].client + '<br>' + producerLabel + workVideoArray[index].producer_1 + workVideoArray[index].producer_2 + workVideoArray[index].producer_3 + '<br>' + workVideoArray[index].year + workVideoArray[index].country + (workVideoArray[index].cliplength / 60).toFixed(2) + 'min' + '</p>' + '</div>' + '</div>' + '</div>' + '</div>';
                var control = '<button type="button" id="play-pause-selected-' + selectedItems + '" class="play-pause video-control video-control-selected"><img src="img/video/play.png"></button>' + '<input type="range" id="seek-bar-selected-' + selectedItems + '" class="seek-bar video-control video-control-selected" value="0">';
                $("#selectedCarousel").after(control);
                $("#selectedCarousel .carousel-inner").append(video);
                var funcVideo = '$("#selectedCarousel .carousel-inner #selectedVideo' + selectedItems + ' video")';
                var fVid = eval(funcVideo);
                var fVideos = $("#selectedCarousel video");
                var funcPlayBtn = '$("#play-pause-selected-' + selectedItems + '")';
                var fPlayBtn = eval(funcPlayBtn);
                var fMute = $("#mute-video-selected");
                var funcSeekBar = '$("#seek-bar-selected-' + selectedItems + '")';
                var fSeekBar = eval(funcSeekBar);
                addFunctionality(fVid, fVideos, fPlayBtn, fMute, fSeekBar);
                selectedItems++;
            }
        }
        $(".video-control-selected").hide();
        $("#play-pause-selected-1").show();
        $("#mute-video-selected").show();
        $("#seek-bar-selected-1").show();
        $("#selectedCarousel .carousel-inner .item:first-child").addClass("active");
        var firstMarker;
        $("#workCarousel .carousel-inner .item").each(function () {
            if ($(this).attr("id") === workVideoArray[1].project_id) {
                $(this).addClass("active");
                for (i = 0; i < videoMarkersArray.length; i++) {
                    if (videoMarkersArray[i].id === workVideoArray[1].project_id) {
                        firstMarker = videoMarkersArray[i]
                    }
                }
            }
        });
        workinfobox = new InfoBox({
            disableAutoPan: false
            , maxWidth: 275
            , pixelOffset: new google.maps.Size(5, -110)
            , zIndex: null
            , boxStyle: {
                background: "transparent", //opacity: 0.75,
                width: "275px"
            }
            , closeBoxURL: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(btnClose.replace('{{ color }}', firstMarker.color).replace('{{ color2 }}', firstMarker.color))
            , scaledSize: new google.maps.Size(35, 35)
            , closeBoxMargin: "5px -25px -25px 0"
            , infoBoxClearance: new google.maps.Size(1, 1)
            , isHidden: false
            , pane: "floatPane"
            , enableEventPropagandation: false
        });
        openInfoBox(firstMarker);
        var workAllVideoSource = '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n';
        $('.work-all-content .video-blockquote .all-video-player .video').html(workAllVideoSource);
        var wcVideo = $("#workCarousel .carousel-inner .item.active video");
        var wcVideos = $("#workCarousel video");
        var wcPlay = $("#play-pause-1");
        var wcVol = $("#mute-video-1");
        var wcSeek = $("#seek-bar-1");
        $('.video-control-2').hide();
        addFunctionality(wcVideo, wcVideos, wcPlay, wcVol, wcSeek);
        $("#workCarousel").on('slid.bs.carousel', function () {
            workCarouselTrig = true;
            var currentItem = $("#workCarousel .carousel-inner .item.active");
            var currentVideo = currentItem.children('video');
            var curVideos = $("#workCarousel video");
            var curVidId = currentItem.attr('id');
            var curControl = '<button type="button" id="play-pause-' + curVidId + '" class="play-pause video-control video-control-' + curVidId + ' video-control-current"><img src="img/video/play.png"></button>' + '<button type="button" id="mute-video-' + curVidId + '" class="mute-video video-control video-control-' + curVidId + ' video-control-current"><img src="img/video/icon_volume_4.png"></button>' + '<input type="range" id="seek-bar-' + curVidId + '" class="seek-bar video-control video-control-' + curVidId + ' video-control-current" value="0">';
            $("#workCarousel").after(curControl);
            var curPlayBtn = '$("#play-pause-' + curVidId + '")';
            var curMuteBtn = '$("#mute-video-' + curVidId + '")';
            var curSeekBar = '$("#seek-bar-' + curVidId + '")';
            var fCurPlayBtn = eval(curPlayBtn);
            var fCurMuteBtn = eval(curMuteBtn);
            var fCurSeekBar = eval(curSeekBar);
            addFunctionality(currentVideo, curVideos, fCurPlayBtn, fCurMuteBtn, fCurSeekBar)
        });
        updateAllWorkVideo($("#workCarousel .item.active"));
        $("#workCarousel #work-video").bind("loadedmetadata", function (e) {
            optimizeWork();
        }, false);
        $(".selected-carousel-control").click(function () {
            for (i = 0; i < $("#selectedCarousel video").length; i++) {
                $("#selectedCarousel video").get(i).pause();
            }
            $("#play-pause-selected").css("opacity", "1");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeIn();
            }
            setTimeout(function () {
                var number = $("#selectedCarousel .item.active").attr('id').replace('selectedVideo', '');
                $(".video-control-selected").hide();
                $("#play-pause-selected-" + number).show().css('opacity', '1');
                $("#mute-video-selected").show();
                $("#seek-bar-selected-" + number).show();
            }, 650);
        });
        $(".work-carousel-control").click(function () {
            if (viewWidth > 767) {
                $("body").css('pointer-events', 'none');
                $("#workCarousel .carousel-inner .item video").each(function () {
                    $(this).get(0).pause();
                    $(this).get(0).currentTime = 0;
                });
                $("#play-pause-1").css("opacity", "1");
                if (viewWidth > 767) {
                    $('.carousel-caption').fadeIn();
                }
                if ($(this).hasClass('right')) {
                    panVideoMarker($("#workCarousel .item:last-child"));
                    var lcId = $("#workCarousel .item.active").attr('id');
                    updateVideo(lcId);
                    changeVideo(lcId);
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === lcId) {
                            openInfoBox(videoMarkersArray[i])
                        }
                    }
                    slideIndex++;
                    renderVideos(slideIndex, true);
                }
                else {
                    panVideoMarker($("#workCarousel .item:first-child"));
                    var fcId = $("#workCarousel .item.active").attr('id');
                    updateVideo(fcId);
                    changeVideo(fcId);
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === fcId) {
                            openInfoBox(videoMarkersArray[i])
                        }
                    }
                    slideIndex--;
                    renderVideos(slideIndex, false);
                }
                $("#all-video").get(0).pause();
                $("#all-play").css("visibility", "visible");
                $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
                $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
                $(".all-play img").attr('src', 'img/video/play_button.png');
                setTimeout(function () {
                    $("body").css('pointer-events', 'auto');
                }, 600);
            }
            else {
                $('.video-control-1').remove();
                var vcRemove = true;
                $('.video-control-current').remove();
                $("body").css('pointer-events', 'none');
                $("#workCarousel .carousel-inner .item video").each(function () {
                    $(this).get(0).pause();
                    $(this).get(0).currentTime = 0;
                });
                $("#play-pause-1").css("opacity", "1");
                if (viewWidth > 767) {
                    $('.carousel-caption').fadeIn();
                }
                if ($(this).hasClass('right')) {
                    updateAllWorkVideo($("#workCarousel .item:last-child"));
                    panVideoMarker($("#workCarousel .item:last-child"));
                    var lcId = $("#workCarousel .item:last-child").attr('id');
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === lcId) {
                            openInfoBoxMob(videoMarkersArray[i])
                        }
                    }
                    slideIndex++;
                    renderVideos(slideIndex, true);
                }
                else {
                    updateAllWorkVideo($("#workCarousel .item:first-child"));
                    panVideoMarker($("#workCarousel .item:first-child"));
                    var fcId = $("#workCarousel .item:first-child").attr('id');
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === fcId) {
                            openInfoBoxMob(videoMarkersArray[i])
                        }
                    }
                    slideIndex--;
                    renderVideos(slideIndex, false);
                }
                $("#all-video").get(0).pause();
                $("#all-play").css("visibility", "visible");
                $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
                $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
                $(".all-play img").attr('src', 'img/video/play_button.png');
                setTimeout(function () {
                    $("body").css('pointer-events', 'auto');
                }, 600);
            }
        });
    });
    $("body").fadeIn(2000);
    var linkLocation;
    $("a.transition").each(function (i, el) {
        $(el).click(function (event) {
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        })
    });

    function redirectPage() {
        window.location = linkLocation;
    };
    var contents = $('.posted-job-desc');
    var titles = $('.posted-job');
    titles.on('click', function () {
        var title = $(this);
        contents.filter(':visible').slideUp(function () {
            $(this).prev('.posted-job').removeClass('is-opened');
        });
        var content = title.next('.posted-job-desc');
        if (!content.is(':visible')) {
            title.addClass('is-opened');
            content.slideDown();
        }
    });
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
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    $('.multi-item-carousel .item .office:nth-child(1)').attr({
        "href": "#contactCarousel"
        , "data-slide": "prev"
    }).addClass("previous-slide-item-click");
    $('.multi-item-carousel .item .office:nth-child(3)').attr({
        "href": "#contactCarousel"
        , "data-slide": "next"
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
        }
        else {
            $(".navbar-language-mobile").hide();
            $("#header-mobile .navbar-toggle").html('<span class="sr-only">Toggle navigation</span>\n' + '<span class="glyphicon glyphicon-remove"></span>');
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