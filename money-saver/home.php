<?php

    $block = new boxobject_class;
    
    $inputFields = '<label class="control-label">Payee</label><br/><input type="text" name="purchasedAt" class="form-control col-md-6 form-input" placeholder="" value="" />';
    $inputFields .= '<br/><br/>';
    $inputFields .= '<label class="control-label">Amount</label><br/><input type="text" name="spent" class="form-control col-md-6 form-input" placeholder="" vvalue="" />';
    $inputFields .= '<br/><br/>';
    $inputFields .= '<label class="control-label">Shared Bill</label><br/><select name="shared" class="form-control col-md-6 form-input"><option value="Y">Yes</option><option value="N">No</option></select>';
    $inputFields .= '<br/><br/>';
    $inputFields .= '<label class="control-label">Duration In Months</label><br/><input type="text" name="months" class="form-control col-md-6 form-input" placeholder="e.g. 24" value="" />';
    $inputFields .= '<br/><br/>';
    $inputFields .= '<label class="control-label">Spend Type</label><br/><select name="reason" class="form-control col-md-6 form-input"><option value="DD">Direct Debit</option><option value="JunkFood">Takeaway/Junk</option><option value="Petrol">Petrol</option><option value="Fags">Fags</option></select>';
    $inputFields .= '<br/><br/>';
?>

<div id="fancy-page-header"></div>


<div id="canvas" class="col-md-12">
    <a id="sidebarButton" style="display:none;"<span class="glyphicon glyphicon-triangle-left"></span></a>

    <div id="sidebar">
        
        <a id="close" href="#">CLOSE X</a>
        
        <ul>
            <li><a>April 2016</a></li>
            <li><a>March 2016</a></li>
            <li><a>Febuary 2016</a></li>
            <li><a>January 2016</a></li>
        </ul>
        
        <!--<div id="chart-container"></div>-->
        
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-10">
    <?php 
    
      $reminderText = "(DB Placeholder text)";

      $mainBlock = $block->setBlock("Expenditure details", "11 \" style=\"height:400px", $inputFields); 
      $displayBlock = $block->getBlock();

      $block1 = $block->setBlock("Popular Purchases", "2 content-block-tall", "(DB Placeholder text)"); 
      $displayBlock = $block->getBlock();
      
      $block1 = $block->setBlock("Scatter Graph", "2", "(DB Placeholder text)"); 
      $displayBlock = $block->getBlock();

      $block2 = $block->setBlock("Pie Chart", "2", "(DB Placeholder text)"); 
      $displayBlock = $block->getBlock();

      $block3 = $block->setBlock("Bar Chart", "2", "(DB Placeholder text)"); 
      $displayBlock = $block->getBlock();

      $mainBlock = $block->setBlock("Reminders", "8", $reminderText); 
      $displayBlock = $block->getBlock();

    ?>
        
</div>
    
</div>

