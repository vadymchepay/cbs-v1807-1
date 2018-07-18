<!DOCTYPE html>
<html lang="<?php echo $currentLanguage?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Comberry</title>
    <link rel="icon" href="img/favicon.png" type="image/png" sizes="16x16">
    <!--Bootstrap-->
    <!--    <link rel="stylesheet" href="//code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--    <script src="js/pure-swipe.min.js"></script>-->
    <script src="js/jquery.touchSwipe.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!--Style-->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/responsive.css">
    <!--Scripts-->
    <script src="js/scripts.js"></script>
    <script src="js/jobs-navigation.js"></script>
    <script src="js/jobs.js"></script>
    <!--Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet"> </head>

<body id="<?php echo $bodyID?>" class="jobs-body">
    <div class="content">
        <!--Header-->
        <div id="header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a href="<?php echo $currentLanguage?>.php" class="navbar-brand"><img class="img-responsive" src="img/logo_white_2.png" alt="Comberry"></a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="nav-item">
                                <a class="nav-link home-nav transition" href="<?php echo $currentLanguage?>.php">
                                    <?php echo $home?>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="workDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <?php echo $work?>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="workDropdown">
                                    <a class="dropdown-item selectedButton transition" href="<?php echo $currentLanguage?>.php">
                                        <?php echo $selected?>
                                    </a>
                                    <a class="dropdown-item allButton transition" href="<?php echo $currentLanguage?>.php">
                                        <?php echo $all?>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link about-nav transition" href="<?php echo $currentLanguage?>.php#about">
                                    <?php echo $about?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link contact-nav transition" href="<?php echo $currentLanguage?>.php#contact">
                                    <?php echo $contact?>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="jobs.php">
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
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
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
        <div id="legal-notice" class="pink-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="heading">Legal notice</h1>
                        <div id="info-container">
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                            <p>In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
                            <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--Footer-->
            <div id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-xs-6">© 2018 Comberrystudios</div>
                        <div class="col-md-6 col-xs-6" align="right"><a id="open-legal-notice transition" href="legal-notice.php">impressum</a></div>
                    </div>
                </div>
            </div>
            <!--Footer-->
            <!--Mobile sidebar-->
            <div id="navbar-mobile" class="pink-section">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link mobile-nav-link home-nav" href="<?php echo $currentLanguage?>.php">
                            <?php echo $home?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mobile-nav-link selectedButton" href="<?php echo $currentLanguage?>.php">
                            <?php echo $work?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mobile-nav-link about-nav" href="<?php echo $currentLanguage?>.php#about">
                            <?php echo $about?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mobile-nav-link contact-nav" href="<?php echo $currentLanguage?>.php#contact">
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
            <!--Scripts-->
            <!--
        <script src="js/map.js"></script>
        <script src="js/contact-carousel.js"></script>
-->
            <script src="js/mobile-menu.js"></script>
            <!--        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIr3O2RS5i5_F7oDmyErmxFn3TpBfzaEY&callback=myMap"></script>-->
</body>

</html>