<!DOCTYPE html>
<html lang="<?php echo $currentLanguage?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Comberry</title>
    <link rel="icon" href="img/favicon.png" type="image/png" sizes="16x16">
    <!--Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!--Style-->
    <link rel="stylesheet" type="text/css" href="css/style.css">
   
    <!--Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
</head>

<body id="<?php echo $bodyID?>" class="home-body">
    <div class="content">
        <!--Header-->
        <div id="header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed  " data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a href="<?php echo $currentLanguage?>.php" class="navbar-brand"><img class="img-responsive" src="img/logo.png" alt="Comberry"></a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="nav-item">
                                <a class="nav-link home-nav" href="#">
                                    <?php echo $home?>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="workDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo $work?>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="workDropdown">
                                    <a class="dropdown-item selectedButton" href="#">
                                        <?php echo $selected?>
                                    </a>
                                    <a class="dropdown-item allButton" href="#">
                                        <?php echo $all?>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link about-nav" href="#">
                                    <?php echo $about?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link contact-nav" href="#">
                                    <?php echo $contact?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link transition" href="jobs.php">
                                    <?php echo $jobs?>
                                </a>
                            </li>
                            <li class="margin-left nav-item lang-link"><a class="active nav-link" href="en.php">en</a></li>
                            <li class="nav-item disabled-item lang-link"><a class="nav-link" href="#"> / </a></li>
                            <li class="nav-item lang-link"><a class="nav-link" href="de.php">de</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div id="header-mobile">
            <nav class="navbar navbar-default navbar-fixed-top  ">
                <div class="container">
                    <div class="navbar-header  ">
                        <button type="button" class="navbar-toggle"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a href="<?php echo $currentLanguage?>.php" class="navbar-brand"><img class="img-responsive" src="img/logo.png" alt="Comberry"></a>
                        <div class="navbar-language-mobile dropdown">
                            <?php echo $mobileLang?>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!--Header-->
        <div id="home">
            <!--Top section-->
            <div id="video-bg">
                <video class="blur video-background" playsinline autoplay muted loop style="min-width: 110%; min-height: 100vh">
                    <source src="video/intro2.mp4" type="video/mp4"> </video>
               
            </div>
            <div id="top-section">
                <div class="darken-layer"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-md-push-5 right-side"> <img src="img/offices/office-1.png" id="office-1" class="img-responsive overlay-layer overlay-layer-offices"> <img src="img/country-flags.png" id="flags" class="img-responsive overlay-layer overlay-layer-countries"> <img src="img/pins/pin-1.png" id="pin-1" class="img-responsive overlay-layer overlay-layer-pins"> <img src="img/worldmap.png" id="root-layer" class="img-responsive"> </div>
                        <div class="col-md-5 col-md-pull-7 left-side">
                            <div>
                                <h1 id="main-heading">
                                    <?php echo $motto?>
                                </h1>
                                <button id="explore">
                                    <?php echo $explore?>
                                </button>
                            </div>
                        </div>
                        <div id="watch-movies">
                            <h1>
                                <?php echo $watchMovies?>
                            </h1>
                            <div><img src="img/right.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Top section-->
            <!--Work section-->
            <div id="work-section">
                <?php include ("work.php")?>
            </div>
            <div id="work-all-section" class="pink-section">
                <?php include ("work-all.php")?>
            </div>
            <!--Work section-->
            <!--About-->
            <div id="about" class="pink-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <h1 class="heading">
                                <?php echo $aboutHeading?>
                            </h1>
                            <p>
                                <?php echo $aboutText?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!--About-->
            <!--Contact-->
            <div id="contact" class="pink-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="heading">
                                <?php echo $contactTitle?>
                            </h1> </div>
                    </div>
                </div>
                <div id="map"></div>
                <div id="contactSlider">
                    <a class="left carousel-control" href="#contactCarousel" data-slide="prev" onclick="checkLocation(0)"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a>
                    <a class="right carousel-control" href="#contactCarousel" data-slide="next" onclick="checkLocation(2)"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="contactCarousel" class="carousel slide multi-item-carousel" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active" id="malaysia">
                                            <div class="col-md-4 office">
                                                <h3 class="additional">
                                                    <?php echo $asia?>
                                                </h3>
                                                <h3 class="location">
                                                    <?php echo $malaysia?>
                                                </h3>
                                                <a href="mailto:malaysia...comberry...com" class="email mail"><img src="img/mail.png">malaysia...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $asiaAdres?>
                                                </p>
                                                <div class="regional-director">
                                                    <h5>
                                                        <?php echo $director?>
                                                    </h5>
                                                    <div class="col-md-3 col-xs-4 portrait-container"><img src="img/simon-bethke.png" alt="Simon Bethke" class="img-responsive"></div>
                                                    <div class="col-md-9 col-xs-8">
                                                        <h4 class="name">Simon <br>Bethke</h4>
                                                        <a href="mailto:malaysia...comberry...com" class="mail"><img src="img/mail-sent-icon.png"></a>
                                                        <a href="tel:+60327775696"><img src="img/incoming-call.png"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" id="germany">
                                            <div class="col-md-4 office">
                                                <h3 class="additional">
                                                    <?php echo $europe?>
                                                </h3>
                                                <h3 class="location">
                                                    <?php echo $germany?>
                                                </h3>
                                                <a href="mailto:germany...comberry...com" class="email mail"><img src="img/mail.png">germany...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $germanyAdres?>
                                                </p>
                                                <div class="regional-director">
                                                    <h5>
                                                        <?php echo $director?>
                                                    </h5>
                                                    <div class="col-md-3 col-xs-4 portrait-container"><img src="img/boris-werschbizky.png" alt="Boris Werschbizky" class="img-responsive"></div>
                                                    <div class="col-md-9 col-xs-8">
                                                        <h4 class="name">Boris <br>Werschbizky</h4>
                                                        <a href="mailto:germany...comberry...com" class="mail"><img src="img/mail-sent-icon.png"></a>
                                                        <a href="tel:+498999650390"><img src="img/incoming-call.png"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" id="russia">
                                            <div class="col-md-4 office">
                                                <h3 class="additional">
                                                    <?php echo $easternEurope?>
                                                </h3>
                                                <h3 class="location">
                                                    <?php echo $russia?>
                                                </h3>
                                                <a href="mailto:russia...comberry...com" class="email mail"><img src="img/mail.png">russia...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $russiaAdres?>
                                                </p>
                                                <div class="regional-director">
                                                    <h5>
                                                        <?php echo $director?>
                                                    </h5>
                                                    <div class="col-md-3 col-xs-4 portrait-container"><img src="img/niko-karasek.png" alt="Niko Karasek" class="img-responsive"></div>
                                                    <div class="col-md-9 col-xs-8">
                                                        <h4 class="name">Niko <br>Karasek</h4>
                                                        <a href="mailto:russia...comberry...com" class="mail"><img src="img/mail-sent-icon.png"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" id="boston">
                                            <div class="col-md-4 office">
                                                <h3 class="additional"></h3>
                                                <h3 class="location">
                                                    <?php echo $usa?>
                                                </h3>
                                                <a href="mailto:us...comberry...com" class="email mail"><img src="img/mail.png">us...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $usaAdres?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="item" id="china">
                                            <div class="col-md-4 office">
                                                <h3 class="additional"></h3>
                                                <h3 class="location">
                                                    <?php echo $china?>
                                                </h3>
                                                <a href="mailto:china...comberry...com" class="email mail"><img src="img/mail.png">china...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $chinaAdres?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="item" id="india">
                                            <div class="col-md-4 office">
                                                <h3 class="additional"></h3>
                                                <h3 class="location">
                                                    <?php echo $india?>
                                                </h3>
                                                <a href="mailto:india...comberry...com" class="email mail"><img src="img/mail.png">india...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $indiaAdres?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="item" id="tokyo">
                                            <div class="col-md-4 office">
                                                <h3 class="additional"></h3>
                                                <h3 class="location">
                                                    <?php echo $japan?>
                                                </h3>
                                                <a href="mailto:japan...comberry...com" class="email mail"><img src="img/mail.png">japan...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $japanAdres?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="item" id="berlin">
                                            <div class="col-md-4 office">
                                                <h3 class="additional"></h3>
                                                <h3 class="location">
                                                    <?php echo $berlin?>
                                                </h3>
                                                <a href="mailto:berlin...comberry...com" class="email mail"><img src="img/mail.png">berlin...comberry...com</a>
                                                <p class="address">
                                                    <?php echo $berlinAdres?>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Contact-->
        </div>
        <!--Footer-->
        <div id="footer">
            <div class="container  ">
                <div class="row">
                    <div class="col-md-6 col-xs-6">© 2018 Comberrystudios</div>
                    <div class="col-md-6 col-xs-6" align="right">
                        <a id="open-legal-notice transition" href="legal-notice.php">
                            <?php echo $legal?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--Footer-->
        <!--Mobile sidebar-->
        <div id="navbar-mobile" class="pink-section">
            <ul class="nav navbar-nav  ">
                <li class="nav-item">
                    <a class="nav-link mobile-nav-link home-nav" href="#">
                        <?php echo $home?>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mobile-nav-link selectedButton" href="#">
                        <?php echo $work?>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mobile-nav-link about-nav" href="#">
                        <?php echo $about?>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mobile-nav-link contact-nav" href="#">
                        <?php echo $contact?>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mobile-nav-link" href="jobs.php">
                        <?php echo $jobs?>
                    </a>
                </li>
            </ul>
            <ul id="languageSwitcherMobile" class="nav navbar-nav navbar-right">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="languageMobile" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <?php echo $currentLanguage?>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="languageMobile">
                        <?php if ($currentLanguage === 'en'): ?> <a class="dropdown-item" href="de.php">de</a>
                            <?php else: ?> <a class="dropdown-item" href="en.php">en</a>
                                <?php endif ?>
                    </div>
                </li>
            </ul>
        </div>
        <!--Mobile sidebar-->
    </div>
    <!--Scripts-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
        var currentViewWidth = window.innerWidth;
        var videoWiewHeight = currentViewWidth * 0.5625;
        var mute = videoWiewHeight - 40;
        var mapHeight = window.innerHeight - videoWiewHeight;
        $('head').append('<style type="text/css">' + '@media screen and (max-width: 767px) {' + '#work-section #workCarousel .carousel-control {height: ' + videoWiewHeight + 'px}' + '#work-section #workCarousel .carousel-inner, #work-section{height: auto}' + '#work-section #workCarousel .item video {width: 100%;min-width: auto !important;height: ' + videoWiewHeight + 'px; min-height: auto !important;}' + '#work-section .play-pause {height: ' + videoWiewHeight + 'px}' + '.work-carousel-control {height: ' + videoWiewHeight + 'px; width: 10%}' + '#work-map { height:' + mapHeight + 'px!important}' + '#work-section .mute-video {top: ' + mute + 'px; bottom: auto; width: 50px; left: 0}' + '#work-section .mute-video img {width: 100%}' + '#work-section .seek-bar {top: ' + videoWiewHeight + 'px; border-radius: 0}' + '.carousel-caption {height: ' + mapHeight + 'px!important; overflow-y: scroll;-webkit-overflow-scrolling: touch; pointer-events: auto!important;}' + '}' + '@media only screen and (max-width: 767px) and (orientation: landscape) {' + '#work-map {height: 100vh!important;}' + '}' + '</style>');
    </script>
    <script src="js/work.min.js"></script>
    <!--    <script src="js/work-bottom.js"></script>-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIr3O2RS5i5_F7oDmyErmxFn3TpBfzaEY&callback=myMap"></script>
</body>

</html>