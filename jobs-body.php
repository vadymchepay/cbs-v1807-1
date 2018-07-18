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
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">
</head>

<body id="<?php echo $bodyID?>" class="jobs-body">

    <div class="content">
        <!--Header-->
        <div id="header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                        <a href="<?php echo $currentLanguage?>.php" class="navbar-brand"><img class="img-responsive" src="img/logo.png" alt="Comberry"></a>
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
                        <button type="button" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                        <a href="<?php echo $currentLanguage?>.php" class="navbar-brand"><img class="img-responsive" src="img/logo.png" alt="Comberry"></a>
                        <div class="navbar-language-mobile dropdown">
                               <?php echo $mobileLang?>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!--Header-->
        <div id="jobs" class="pink-section">

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="heading">Jobs</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="job">
                            <div class="posted-job">
                                <div class="job-img">
                                    <img src="img/office_muc.jpg" alt="job_img">
                                </div>
                                <div class="job-desc-shot">
                                    <h2 class="job-title">Job 1 title</h2>
                                    <div class="job-location"><span>Location</span></div>
                                    <div class="job-project"><span>Project/Department:</span></div>

                                </div>
                            </div>
                            <div class="posted-job-desc">
                                <div class="job-desc-long">
                                    <p class="p1">
                                        Are you bored of promoting uninspiring corporate stuff? We offer you exciting original video content to show and grow your viral marketing skills. <br>
                                        <a href="https://www.facebook.com/dailywowvideo/" target="_blank"> https://www.facebook.com/dailywowvideo/</a><br> We’re a global production company with offices in 8 countries. After over 1000 documentaries for television we now venture into online video. dailyWOW is a source for original high quality micro documentaries from all over the world that finds its voice through the noise of online clips made of repurposed stock footage.
                                    </p>
                                    <h4 class="p-heading">YOU CAN EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>What you advertise: No crappy Kickstarter product, no clickbait newsletter, no abstract software but inspiring, original micro-documentaries.</span></li>
                                        <li><span>
                                   Creative freedom and support: We have great content, it’s up to you to make it shine. Deliver creative copywriting ideas and execute engaging marketing strategies.
                               </span></li>
                                        <li><span>
                                   International team: Stories from a Russian who filmed in Europe’s most dangerous places? Advice from a Chinese on how to talk yourself out of an Asian jail? Knowledge from a German on compelling storytelling? The best food recommendations from a lovely Indian? – Our young global team got you covered 😊
                               </span></li>
                                    </ul>
                                    <h4 class="p-heading">WE EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>A skilled social media marketer with knowledge in Facebook advertising (YouTube and Instagram would be a great addition!)</span></li>
                                        <li><span>
                                    Skills to create engagement and organic growth
                                </span></li>
                                        <li><span>Native or fluent English for engaging ad copywriting</span></li>
                                    </ul>
                                    <h4 class="p-heading">LOCATION</h4>
                                    <ul class="p2">
                                        <li><span>
                                    Kuala Lumpur is one of the most modern, safe and convenient cities in Southeast Asia.
                                </span></li>
                                        <li><span>Affordable prices for accommodation and a vibrant food scene</span></li>
                                        <li><span>An exciting and harmonic cultural mix (Chinese, Indian, Malay, Expats) </span></li>
                                    </ul>
                                    <h4 class="p-heading">SUMMARY</h4>
                                    <p>Be part of a team with young creatives and combine our experience in filmmaking with your marketing skills to grow the next BuzzFeed!</p>
                                </div>
                                <div class="job-apply">
                                    <div class="job-contact">Contact: <span>Christiane Otto</span></div>
                                    <a href="mailto:hr@comberry.com" class="apply-btn">Apply</a>
                                </div>
                            </div>
                        </div>
                        <div class="job">
                            <div class="posted-job">
                                <div class="job-img">
                                    <img src="img/office_kual.jpg" alt="job_img">
                                </div>
                                <div class="job-desc-shot">
                                    <h2 class="job-title">Job 2 title</h2>
                                    <div class="job-location"><span>Location</span></div>
                                    <div class="job-project"><span>Project/Department:</span></div>

                                </div>
                            </div>
                            <div class="posted-job-desc">
                                <div class="job-desc-long">
                                    <p class="p1">
                                        Are you bored of promoting uninspiring corporate stuff? We offer you exciting original video content to show and grow your viral marketing skills. <br>
                                        <a href="https://www.facebook.com/dailywowvideo/" target="_blank"> https://www.facebook.com/dailywowvideo/</a><br> We’re a global production company with offices in 8 countries. After over 1000 documentaries for television we now venture into online video. dailyWOW is a source for original high quality micro documentaries from all over the world that finds its voice through the noise of online clips made of repurposed stock footage.
                                    </p>
                                    <h4 class="p-heading">YOU CAN EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>What you advertise: No crappy Kickstarter product, no clickbait newsletter, no abstract software but inspiring, original micro-documentaries.</span></li>
                                        <li><span>
                                   Creative freedom and support: We have great content, it’s up to you to make it shine. Deliver creative copywriting ideas and execute engaging marketing strategies.
                               </span></li>
                                        <li><span>
                                   International team: Stories from a Russian who filmed in Europe’s most dangerous places? Advice from a Chinese on how to talk yourself out of an Asian jail? Knowledge from a German on compelling storytelling? The best food recommendations from a lovely Indian? – Our young global team got you covered 😊
                               </span></li>
                                    </ul>
                                    <h4 class="p-heading">WE EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>A skilled social media marketer with knowledge in Facebook advertising (YouTube and Instagram would be a great addition!)</span></li>
                                        <li><span>
                                    Skills to create engagement and organic growth
                                </span></li>
                                        <li><span>Native or fluent English for engaging ad copywriting</span></li>
                                    </ul>
                                    <h4 class="p-heading">LOCATION</h4>
                                    <ul class="p2">
                                        <li><span>
                                    Kuala Lumpur is one of the most modern, safe and convenient cities in Southeast Asia.
                                </span></li>
                                        <li><span>Affordable prices for accommodation and a vibrant food scene</span></li>
                                        <li><span>An exciting and harmonic cultural mix (Chinese, Indian, Malay, Expats) </span></li>
                                    </ul>
                                    <h4 class="p-heading">SUMMARY</h4>
                                    <p>Be part of a team with young creatives and combine our experience in filmmaking with your marketing skills to grow the next BuzzFeed!</p>
                                </div>
                                <div class="job-apply">
                                    <div class="job-contact">Contact: <span>Christiane Otto</span></div>
                                    <a href="mailto:hr@comberry.com" class="apply-btn">Apply</a>
                                </div>
                            </div>
                        </div>
                        <div class="job">
                            <div class="posted-job">
                                <div class="job-img">
                                    <img src="img/office_muc.jpg" alt="job_img">
                                </div>
                                <div class="job-desc-shot">
                                    <h2 class="job-title">Job 3 title</h2>
                                    <div class="job-location"><span>Location</span></div>
                                    <div class="job-project"><span>Project/Department:</span></div>

                                </div>
                            </div>
                            <div class="posted-job-desc">
                                <div class="job-desc-long">
                                    <p class="p1">
                                        Are you bored of promoting uninspiring corporate stuff? We offer you exciting original video content to show and grow your viral marketing skills. <br>
                                        <a href="https://www.facebook.com/dailywowvideo/" target="_blank"> https://www.facebook.com/dailywowvideo/</a><br> We’re a global production company with offices in 8 countries. After over 1000 documentaries for television we now venture into online video. dailyWOW is a source for original high quality micro documentaries from all over the world that finds its voice through the noise of online clips made of repurposed stock footage.
                                    </p>
                                    <h4 class="p-heading">YOU CAN EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>What you advertise: No crappy Kickstarter product, no clickbait newsletter, no abstract software but inspiring, original micro-documentaries.</span></li>
                                        <li><span>
                                   Creative freedom and support: We have great content, it’s up to you to make it shine. Deliver creative copywriting ideas and execute engaging marketing strategies.
                               </span></li>
                                        <li><span>
                                   International team: Stories from a Russian who filmed in Europe’s most dangerous places? Advice from a Chinese on how to talk yourself out of an Asian jail? Knowledge from a German on compelling storytelling? The best food recommendations from a lovely Indian? – Our young global team got you covered 😊
                               </span></li>
                                    </ul>
                                    <h4 class="p-heading">WE EXPECT</h4>
                                    <ul class="p2">
                                        <li><span>A skilled social media marketer with knowledge in Facebook advertising (YouTube and Instagram would be a great addition!)</span></li>
                                        <li><span>
                                    Skills to create engagement and organic growth
                                </span></li>
                                        <li><span>Native or fluent English for engaging ad copywriting</span></li>
                                    </ul>
                                    <h4 class="p-heading">LOCATION</h4>
                                    <ul class="p2">
                                        <li><span>
                                    Kuala Lumpur is one of the most modern, safe and convenient cities in Southeast Asia.
                                </span></li>
                                        <li><span>Affordable prices for accommodation and a vibrant food scene</span></li>
                                        <li><span>An exciting and harmonic cultural mix (Chinese, Indian, Malay, Expats) </span></li>
                                    </ul>
                                    <h4 class="p-heading">SUMMARY</h4>
                                    <p>Be part of a team with young creatives and combine our experience in filmmaking with your marketing skills to grow the next BuzzFeed!</p>
                                </div>
                                <div class="job-apply">
                                    <div class="job-contact">Contact: <span>Christiane Otto</span></div>
                                    <a href="mailto:hr@comberry.com" class="apply-btn">Apply</a>
                                </div>
                            </div>
                        </div>
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
                        <?php if ($currentLanguage === 'en'): ?>
                        <a class="dropdown-item" href="de.php">de</a>
                        <?php else: ?>
                        <a class="dropdown-item" href="en.php">en</a>
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
