@extends('layouts.app')

@section('content')
<div class="background content py-4 ">
  <div class="body container">
    <div class="body-left col-md-6">
      <img src="{{ asset('images/vietnam.png') }}" alt="">
    </div>
    <div class="body-right col-md-6">
      <form class="form-register" action="" method="POST">
        {{ csrf_field() }}
        <h1 class="form-title">Đăng Ký</h1>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label  for="inputEmail4">Họ</label>
            <input name="firstname" type="text" value="{{ old('firstname') }}" class="form-control" id="inputEmail4">
            @error('firstname')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Tên</label>
            <input name="lastname" value="{{ old('lastname') }}" type="text" class="form-control" id="inputPassword4">
            @error('lastname')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Mật khẩu</label>
          <input name="password" type="password" value="{{ old('password') }}" class="form-control" id="inputAddress" >
          @error('password')
              <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
              </span>
          @enderror
        </div>
        <div class="form-group">
          <label  for="inputAddress2">Email</label>
          <input name="email" type="text" class="form-control" value="{{ old('email') }}" id="inputAddress2" >
          @error('email')
              <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
              </span>
          @enderror
        </div>
        <div class="form-group">
          <label >Ngày sinh</label>
          <div class="form-group form-inline">
            <select name="day" id="date" class="form-control">
                @for ($i = 1; $i <= 31;$i ++)
                  <option>{{ $i }}</option>
                @endfor
            </select>
            <select name="month" id="month" class="form-control">
                @for ($i = 1; $i <= 12;$i ++)
                  <option>{{ $i }}</option>
                @endfor
            </select>
            <select name="year" id="year" class="form-control">
                @for ($i = 1950; $i <= 2020;$i ++)
                  <option>{{ $i }}</option>
                @endfor
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check form-check-inline">
            <input name="gender" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="nam">
            <label class="form-check-label" for="inlineRadio1">Nam</label>
          </div>
          <div class="form-check form-check-inline">
            <input name="gender" class="form-check-input" type="radio"name="inlineRadioOptions" id="inlineRadio2" value="nữ">
            <label class="form-check-label" for="inlineRadio2">Nữ</label>
          </div>
          <div class="form-check form-check-inline">
            <input name="gender" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="không xác định" >
            <label class="form-check-label" for="inlineRadio3">Không xác định</label>
          </div>
          @error('gender')
              <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
              </span>
          @enderror
        </div>

        <button type="submit" class="btn btn-primary register">{{ __('Đăng ký') }}</button>
      </form>
    </div>
  </div>
  <div class="container">
    <hr>
    <footer>
      <ul >
        <li><a href="#">Giới thiệu</a></li>
        <li><a href="#">Chính sách và điều khoản</a></li>
        <li><a href="#">Ngôn ngữ</a></li>
        <li><a href="#">Trợ giúp</a></li>
      </ul>
      <div class="mohi">
        Mohi &copy; 2020
      </div>
    </footer>
</div>

@endsection
