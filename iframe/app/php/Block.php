<?php
class Block {
	private $blockList;
	function __construct($filename, $classname) {
		$dom = new domDocument ();
		$dom->preserveWhiteSpace = true;
		$dom->loadHTML ( file_get_contents ( $filename ) );
		$finder = new DomXPath ( $dom );
		$nodes = $finder->query ( "//*[contains(@class, '$classname')]" );
		$this->blockList = $this->getBlockList ( $nodes->item ( 0 )->parentNode );
	}
	private function getBlockList(DOMNode $element) {
		$list = array ();
		$children = $element->childNodes;
		$i = 0;
		foreach ( $children as $child ) {
			if (trim ( $element->ownerDocument->saveHTML ( $child ) ) != "") {
				$i ++;
				array_push ( $list, $element->ownerDocument->saveHTML ( $child ) );
			}
		}
		return $list;
	}
	public function getList() {
		return $this->blockList;
	}
	public function switchPosition($swap_a, $swap_b) {
		list ( $this->blockList [$swap_a], $this->blockList [$swap_b] ) = array (
				$this->blockList [$swap_b],
				$this->blockList [$swap_a] 
		);
	}
	public function getBlock($int) {
		return $this->blockList [$int];
	}
	public function addBlock() {
	}
}


