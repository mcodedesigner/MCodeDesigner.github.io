<?php

$recepient = "mcode.designer@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["client_name"]);
$phone = trim($_POST["client_phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");