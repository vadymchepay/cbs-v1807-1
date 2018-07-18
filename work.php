<div id="selectedCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
    <a class="left carousel-control selected-carousel-control" href="#selectedCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control selected-carousel-control" href="#selectedCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
    <!-- Wrapper for slides -->
    <div class="carousel-inner"></div>
</div>
<button type="button" id="mute-video-selected" class="mute-video video-control video-control-selected"><img src="img/video/icon_volume_4.png"></button>

<div id="workCarousel" class="carousel slide" data-ride="carousel" data-interval="false" style="display: none">
    <a class="left carousel-control work-carousel-control  " href="#workCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control work-carousel-control  " href="#workCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
    <!-- Wrapper for slides -->
    <div class="carousel-inner"></div>
</div>

<button type="button" id="play-pause-1" class="play-pause video-control video-control-1"><img src="img/video/play.png"></button>
<button type="button" id="mute-video-1" class="mute-video video-control video-control-1"><img src="img/video/icon_volume_4.png"></button>
<input type="range" id="seek-bar-1" class="seek-bar video-control video-control-1" value="0">
<video id="optimizeVideo" onloadedmetadata="optimizeWork()" style="display: none"><source src="http://vod.comberry.tne-dev.com:8800/raw/0727_transcoded_1080.mp4" type="video/mp4"></video>

<button id="mobile-work-open-map" class="mobile-work-cta-fixed allButton  ">
    <img src="img/open-map.png">
</button>
