@extends('layouts.app')
@section('title', auth()->user()->firstname. ' '. auth()->user()->lastname)
@section('content')
  <div id="profile">

  </div>
@stop
