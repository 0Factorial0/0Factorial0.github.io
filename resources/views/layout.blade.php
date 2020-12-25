<!DOCTYPE HTML5>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    <head>

        <title>Gece Kuşu Kitabevi - @yield('title')</title>

        <link rel="shortcut icon" href="https://i.hizliresim.com/29PEdE.png"/>

        <!-- Scripts And Styles For Every Page-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        @stack('loginStyle')
        
    </head>

    <style>
        .nav-limetrical{

            margin-right: 5px;
            margin-left: 5px;
            margin-top: 5px;
        
        }
        .nav-limetrical2{

            margin-right: 5px;
            margin-left: 5px;
        
        }
        .navbar .search-container {
        
            float: right;
            height: 22px;
        
        }
        .navbar input[type=text] {
        
            font-size: 17px;
            border: none;
        
        }
        .navbar .search-container button {
        
            float: right;
            background: #ddd;
            font-size: 17px;
            height: 100%;
            border: none;
            cursor: pointer;
        
        }
        .navbar .search-container button:hover {
        
            background: #ccc;
        
        }
        .icon{
        
            margin-right: 2px;
            margin-left: 2px;
            margin-top: 2px;
        
        }
    </style>

    <body>

        <!-- Navbar Bootstrap -->
        <nav class="navbar navbar-inverse" style="border-radius: 0px">

            <div class="container-fluid">

                <div class="navbar-header">

                    <img style="width: 200px; height: 60px" src="https://i.hizliresim.com/IJ3gUU.png">

                </div>

                <ul class="nav navbar-nav">

                    <li class="active nav-limetrical"><a href="{{route('home')}}">Hoşgeldiniz</a></li>
                    @auth
                    <li class="active nav-limetrical"><a href="{{route('home')}}">Market</a></li>
                    <li class="active nav-limetrical"><a href="{{route('home')}}">Sepetim</a></li>
                    @endauth
                    
                </ul>

                <ul class="nav navbar-nav navbar-right">

                    @guest
                    <li class="nav-limetrical"><a href="/register"><span class="glyphicon glyphicon-user"></span>Kayıt Ol</a></li>
                    <li class="nav-limetrical"><a href="/login"><span class="glyphicon glyphicon-log-in"></span>Giriş Yap</a></li>
                    @endguest
                    @auth
                    <li class="nav-limetrical">
                    <a>
                    <div class="search-container">
                        <form action="#">
                        <input type="text" placeholder="Arama.." name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    </li>
                    </a>
                    <li class="nav navbar-nav right nav-limetrical" style="color:white;"><a>Bakiye: ${{Auth::user()->money}}</a></li>
                    <li class="nav navbar-nav right nav-limetrical" style="color:white;"><a>Kart Numarası: {{Auth::user()->card_number}}</a></li>
                    <li class="nav navbar-nav right nav-limetrical" style="color:white;"><a>İsim: {{Auth::user()->name}}</a></li>
                    <li class="active nav-limetrical"><a href="{{route('home')}}">Profil</a></li>
                    <li class="nav-limetrical"><form action="{{url('logout')}}" method="POST">
                        {{ csrf_field() }}
                        <button type="Submit"><span class="glyphicon glyphicon-log-out"></span>Çıkış Yap</button>
                    </form></li>
                    @endauth
                
                </ul>

            </div>

        </nav>

        @yield('content')

        <!-- Footer -->
        <div stlye="" class="container-fluid navbar-inverse">
        <footer class="page-footer font-small blue">
            <div class="navbar-header">

                <a><img style="width: 200px; height:200px; margin-top: 15px" src="https://i.hizliresim.com/29PEdE.png"></a>
                <p style= "color: white; font-size: 40px; text-align: center; margin-top: 30px">Ofisimiz:</p>

            </div>
            <li class="nav navbar-nav nav-limetrical"><a><iframe style="width: 500px; height: 300px; margin-top: 5px; margin-left: 15px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5446815728833!2d28.980005515192225!3d41.035216379298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab764005d58fd%3A0xfe290e355825ce79!2sPandora%20Kitabevi!5e0!3m2!1str!2str!4v1608909772043!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></a></li>
            <ul style="margin-right: 35px" class="nav navbar-nav navbar-right nav-limetrical">
                <li style="color: white; font-size: 40px; margin-right:5px; margin-top: 30px; text-align: center"><p>Bize Ulaş:</p><p style="margin-top: 60px">Bizi Paylaş:</p></li>
                <li><div style="width: 400px; height: 270px; margin-top: 15px" class="jumbotron">
                    <p><span class="fa fa-facebook-square icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-instagram icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-twitter icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-linkedin icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-google icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/">iletisim@gecekusu.com</a></p>
                </div></li>
            </ul>
        </footer>
        </div>
        <div style="background-color: white" class="footer-copyright text-center py-3">&copy; 2020 Copyright:

            <a href="https://rulesoftheinternet.com/"> Whocares.com</a>

        </div>

    </body>