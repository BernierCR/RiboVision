<?php
header('Content-Description: File Transfer');
header('Content-type: application/pdf');
header('Content-Disposition: attachment; filename="RibovisionFigure.pdf"');
header('Content-Transfer-Encoding: binary');
header("Pragma: public");
$data = $_POST['content'];
$seed = rand();
$file = "/var/tmp/tmp" . $_SERVER['REQUEST_TIME'] . "_" . $seed;
$fp = fopen($file . ".svg", "w") or die("Couldn't open $file for writing!");
fwrite($fp, $data) or die("Couldn't write values to file!");
fclose($fp);
echo "Saved to $file successfully!";
system("inkscape -z --file=" . $file . ".svg  --export-pdf=" . $file . ".pdf");
ob_clean();
flush();
sleep(3);
readfile($file . ".pdf");
exit;

?>

