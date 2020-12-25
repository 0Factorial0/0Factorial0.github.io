@extends('layout')

@section('title', 'Hoşgeldiniz!')

@section('content')

    <h1 style="text-align: center">Gece Kuşu Kitabevi'ne Hoşgeldiniz!</h1>
    <hr style="border: 2px solid #0b0b21">
    <div style="background-color: #0b0b21; border: 1px solid #0b0b21; margin-bottom: 20px" class="container">
        <div class="row">
            <div style="margin-left: 30px;margin-top: 40px" class="col-md">

                <h3 style="margin-left: 10px; color:white; float:right; margin-right: 100px; font-size: 50px">Biz kimiz?</h3>
                <p style="margin-left: 10px; width: 40%; font-size: 20px; color: #0398fc">
                Kitapları en önemli kaynak olarak gören ve kitaplar için yaşayan bir ekibiz.
                Sizlere en kaliteli kitapları en hızlı şekilde ulaştırmak için uğraşıyoruz.
                İşte Web Sitemizi tam da bu yüzden kurduk ve sizlere hizmet vermek için hazırız.</p>
                <div style="float: right; margin-right: 70px; margin-bottom: 50px" class="col-md">
            
                    <img style="width: 500px; height:300px; border: 1px solid #fc034a" src="https://nettetrend.com/wp-content/uploads/2020/07/kapak-28.gif">
            
                </div>
                <h4 style="margin-left: 10px; color: #fc034a"> Fakat önce kayıt olmanız gerekiyor:</h5>
                <button style="text-align: center; margin-left: 15px; margin-top:10px" class="btn btn-success"><a href="/register"><span class="glyphicon glyphicon-user"></span>Kayıt Ol</a></button>
                <h4 style="margin-left: 10px; color: #fc034a"> Hesabınız var mı? O zaman giriş yapabilirsiniz:</h5>
                <button style="text-align: center; margin-left: 15px; margin-top:10px" class="btn btn-success"><a href="/login"><span class="glyphicon glyphicon-log-in"></span>Giriş Yap</a></button>
                <div style="background-color: white; width: 500px;margin-top:20px; margin-left:15px; text-align:center">
                    <p><span class="fa fa-facebook-square icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-instagram icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-twitter icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/"> gecekusukitabevi</a></p>
                    <p><span class="fa fa-google icon"></span><a style="color: black; font-size: 20px" href="https://rulesoftheinternet.com/">iletisim@gecekusu.com</a></p>
                </div>
            </div>
        </div>
    </div>

    <hr style="border: 2px solid #0b0b21">

@endsection
