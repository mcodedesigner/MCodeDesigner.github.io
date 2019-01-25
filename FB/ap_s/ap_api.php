<?php  
include "apconfig.php";

function authSendEmail($from, $namefrom, $to, $nameto, $subject, $message)  
{ 

$date = date('m/d/Y h:i:s a ', time());

global $smtpServer ;  
global $port;  
global $username ;  
global $password ;  

$timeout = "30";  
$localhost = "localhost";  
$newLine = "\r\n";  

//Connect to the host on the specified port  
$smtpConnect = fsockopen($smtpServer, $port, $errno, $errstr, $timeout);  
$smtpResponse = fgets($smtpConnect, 515);  
if(empty($smtpConnect))   
{  
	$output = "Failed to connect: $smtpResponse +[$errno, $errstr] ";  
	//return $output; 
	file_put_contents('send_.log', $date.$output.$newLine, FILE_APPEND | LOCK_EX);
	return 1;
}  
else 
{  
	$logArray['connection'] = "Connected: $smtpResponse";  
}  
 
//Say Hello to SMTP  
fputs($smtpConnect, "HELO $localhost" . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['heloresponse'] = "$smtpResponse";
 
//Request Auth Login  
fputs($smtpConnect,"AUTH LOGIN" . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['authrequest'] = "$smtpResponse";  
 
//Send username  
fputs($smtpConnect, base64_encode($username) . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['authusername'] = "$smtpResponse";  
 
//Send password  
fputs($smtpConnect, base64_encode($password) . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['authpassword'] = "$smtpResponse";  
 
//Email From  
fputs($smtpConnect, "MAIL FROM: $from" . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['mailfromresponse'] = "$smtpResponse";  
 
//Email To  
fputs($smtpConnect, "RCPT TO: $to" . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['mailtoresponse'] = "$smtpResponse";  
 
//The Email  
fputs($smtpConnect, "DATA" . $newLine);  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['data1response'] = "$smtpResponse";  
 
//Construct Headers  
$headers = "MIME-Version: 1.0" . $newLine;  
$headers .= "Content-type: text/html; charset=iso-8859-1" . $newLine;  
$headers .= "To: $nameto <$to>" . $newLine;  
$headers .= "From: $namefrom <$from>" . $newLine;  
 
fputs($smtpConnect, "To: $to\nFrom: $from\nSubject: $subject\n$headers\n\n$message\n.\n");  
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['data2response'] = "$smtpResponse";  
 
// Say Bye to SMTP  
fputs($smtpConnect,"QUIT" . $newLine);   
$smtpResponse = fgets($smtpConnect, 515);  
$logArray['quitresponse'] = "$smtpResponse";   
//print_r ($logArray);
$dump = print_r($logArray, true);

if (strpos($dump, 'Error') > 0 ){
	file_put_contents('send_.log', $date.$dump.$newLine, FILE_APPEND | LOCK_EX);
	return 1;
}

return 0;
}  


function getRealIpAddr()
{
  if (!empty($_SERVER['HTTP_CLIENT_IP']))
  //check ip from share internet
  {
    $ip=$_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  //to check ip is pass from proxy
  {
    $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else
  {
    $ip=$_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}
?> 