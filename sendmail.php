<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

$mail->setFrom('ivan@mgautokool.ee', 'MG Autokool');
$mail->addAddress('ivan@mgautokool.ee');
$mail->Subject = 'E-mail с сайта autokool.info';

$body = '<h1>Пришло письмо с сайта</h1>';

if (trim(!empty($_POST['name']))){
    $body.='<p><strong>Nimi:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'E-mail sent';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>