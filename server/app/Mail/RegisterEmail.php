<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegisterEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->email_data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('phuocnv101@gmail.com', 'Mohi.vn')
        ->subject("Chào Mừng Bạn Đến Với Mohi.vn")
        ->view('mail.verifyRegister')
        ->with([
          'email_data' => $this->email_data,
      ]);
    }
}
