<?php

class TestBlock extends \PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider provider
     */
    public function testMethod($data)
    {
        $this->assertTrue($data);
        echo dirname(__FILE__);
    }

    public function provider()
    {
        return array(
           'my named data' => array(true),
           'my data'       => array(true)
        );
    }
}