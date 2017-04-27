<?php
// header("Content-type:text/html;charset=utf-8");
// date_default_timezone_set('PRC');

// 连主库
// $db = mysql_connect(SAE_MYSQL_HOST_M . ':' . SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS);

// 连从库
// $db = mysql_connect(SAE_MYSQL_HOST_S.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

// mysql_select_db(SAE_MYSQL_DB, $db);

// mysql_query("set names utf8");

//上传到新浪云需要更改路径
 header("Content-type:text/html;charset=utf-8");
	date_default_timezone_set('PRC');

	mysql_connect("localhost","root","");
	mysql_select_db("Vmx");

	mysql_query("set names utf8");
?>