@extends('layout')

@section('title', 'E-Mail Adresini Onayla!')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('E-Mail Adresini Onayla!') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('Yeni bir onaylama linki email adresinize gönderildi.') }}
                        </div>
                    @endif

                    {{ __('Devam etmeden önce, girmiş olduğunuz email adresini kontrol edin.') }}
                    {{ __('Eğer mail almadıysanız') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('buraya basıp yenisini isteyin') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
