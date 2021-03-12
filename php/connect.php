<?php

//$DB = array(
//    "HOST" => 'localhost',
//    "USER" => 'root',
//    "PASS" => '',
//    "NAME" => 'qmdci'
//);

$DB = array(
    "HOST" => 'localhost',
    "USER" => 'qmdci_register',
    "PASS" => 'Combination@1234',
    "NAME" => 'qmdci_register'
);

$QMDCI = mysqli_connect($DB['HOST'], $DB['USER'], $DB['PASS'], $DB['NAME']);
