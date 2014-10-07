<?php
function DOMinnerHTML(DOMNode $element)
{
	$innerHTML = "";
	$children  = $element->childNodes;

	$i = 0;
	foreach ($children as $child)
	{
		if(trim($element->ownerDocument->saveHTML($child)) != ""){
			$i++;
			$innerHTML .= $element->ownerDocument->saveHTML($child);
		}
		
		
	}
	return $innerHTML;
}

function getBlockList(DOMNode $element)
{
	$list = array();
	$children  = $element->childNodes;

	$i = 0;
	foreach ($children as $child)
	{
		if(trim($element->ownerDocument->saveHTML($child)) != ""){
			$i++;
			array_push($list, $element->ownerDocument->saveHTML($child));
		}

	}
	return $list;
}



$filename = "clean-index.html";

$dom = new domDocument; 
$dom->preserveWhiteSpace = true;
$dom->loadHTML(file_get_contents($filename));
$finder = new DomXPath($dom);
$classname="mega-entry";
$nodes = $finder->query("//*[contains(@class, '$classname')]");


$i = 1;
foreach ($nodes as $node)
{
	//echo DOMinnerHTML($node->parentNode);
	$blockList = getBlockList($node->parentNode);
	if($i > 0)break;
	$i++;
}


print_r($blockList);