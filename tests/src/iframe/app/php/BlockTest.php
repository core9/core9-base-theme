<?php

include 'C:\wamp\www\core9-base-theme\src\iframe\app\classes\Block.php';

/**
 * Test class for Block.
 * Generated by PHPUnit on 2014-10-07 at 12:13:41.
 */
class BlockTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Block
     */
    protected $object;

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp()
    {
    	$file = "C:\wamp\www\core9-base-theme\src\iframe\frontpage.html";
    	$classname = "block";

        $this->object = new Block($fil, $classname);
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown()
    {
    }

    /**
     * @covers Block::getList
     * @todo Implement testGetList().
     */
    public function testGetList()
    {
        // Remove the following lines when you implement this test.
        $this->markTestIncomplete(
          'This test has not been implemented yet.'
        );
    }

    /**
     * @covers Block::switchPosition
     * @todo Implement testSwitchPosition().
     */
    public function testSwitchPosition()
    {
        // Remove the following lines when you implement this test.
        $this->markTestIncomplete(
          'This test has not been implemented yet.'
        );
    }

    /**
     * @covers Block::getBlock
     * @todo Implement testGetBlock().
     */
    public function testGetBlock()
    {
        // Remove the following lines when you implement this test.
        $this->markTestIncomplete(
          'This test has not been implemented yet.'
        );
    }

    /**
     * @covers Block::addBlock
     * @todo Implement testAddBlock().
     */
    public function testAddBlock()
    {
        // Remove the following lines when you implement this test.
        $this->markTestIncomplete(
          'This test has not been implemented yet.'
        );
    }
}
