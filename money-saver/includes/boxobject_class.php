<?php

class boxobject_class {
	var $form_vars = array();
	var $changeArray = array();
	
	function __CONSTRUCT() {
            
	}
        
        public function setBlock($header, $column, $content) {
            $this->blockTitle = $header;
            $this->bootstrapCols = "col-md-" . $column;
            $this->blockContent = $content;
            
        }
        
        public function  getBlock() {
            //return $this->blockTitle . $this->bootstrapCols . $this->blockContent;
            
            echo '<div class="content-block '.$this->bootstrapCols.'"> ' 
                . '<p class="fancy-header">'
                .   $this->blockTitle 
                . '</p>'
                . '<p class="fancy-content">'
                .   $this->blockContent
                . '</p>'
                . '</div>';
        }
        
}

