<?php
// работа с данным скриптом показана в видео на сайте http://rek9.ru/otpravka-zayavok-v-google-forms/
// формируем запись в таблицу google (изменить)
$url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_yIg7AK3Ta6c_ZAvvuARxcU6NyVMMTeGDHYPsGxuYzJcorA/formResponse";
// сохраняем url, с которого была отправлена форма в переменную utm
$link = '';
$long_link = $_SERVER["HTTP_REFERER"];
$split_link = parse_url($long_link);
$link = trim($split_link['path'],'/'); // $split_link['host'].$split_link['path'] == voron.store/maski2/
$output = "<a href='$long_link'>$link</a>";

// массив данных (изменить entry, draft и fbzx)
$post_data = array (
 "entry.162474457" => $_POST['name'],
 "entry.1465718736" => $_POST['phone'],
 "entry.841460973" => $_POST['input-vacancy'],
 // "entry.613951642" => $link,
 "draftResponse" => "[null,null,&quot;-6227974125012172830&quot;]",
 "pageHistory" => "0",
 "fbzx" => "-6227974125012172830"
);

// Далее не трогать
// с помощью CURL заносим данные в таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);
curl_close($ch);

//перенаправляем браузер пользователя на скачивание оффера по нашей ссылке
// header('Location: success.html');

/* https://api.telegram.org/bot734862732:AAFSW-fDThV3umZOus0j9NPxARpR2fwfzVI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$vacancy = $_POST['input-vacancy'];
$phone = preg_replace('![^0-9]+!', '', $_POST['phone']);

if ($_POST['feedback'] == 'phone') {
    $feedback = $_POST['feedback'];
}
elseif ( $_POST['feedback'] == 'telegram' ) {
    $feedback = $_POST['feedback'];
}
elseif ( $_POST['feedback'] == 'viber' ) {
    $feedback = "<a href='viber://chat?number=%2B".$phone."'>Viber</a>";
}
elseif ( $_POST['feedback'] == 'whatsapp' ) {
    $feedback = "<a href='https://wa.me/".$phone."'>Whatsapp</a>";
}

// switch($_POST['feedback']){
// case 'phone':
//     $feedback = $_POST['feedback'];
// break;
// case 'telegram':
//     $feedback = $_POST['feedback'];
// break;
// case 'viber':
//     $feedback = "<a href='viber://add?number=".$phone."'>viber</a>";
// break;
// case 'whatsapp':
//     $feedback = "<a href='https://wa.me/".$phone."'>whatsapp</a>";
// break;
// default:
//     $feedback = $_POST['feedback'];
// }

$token = "900973756:AAFfxrdOG8SyosLKqsOQ9OmYuELjivx5R4M";
$chat_id = "-362343380";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Вакансия: ' => $vacancy,
  'url:' => "<a href='https://docs.google.com/spreadsheets/d/1n-5o7ZvNfsZ-MzAcT6j8n9_UtuCLrgQuVdZHxCQWqww/'>гугл таблица</a>"
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}


?>
