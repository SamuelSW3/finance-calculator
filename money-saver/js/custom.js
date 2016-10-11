$(document).ready(function() {
    
                $('#close').click(function(e) {
                e.preventDefault();
                        
                        $('#sidebar').animate({
                            left: '-=400px'
                          });
                        
                        $('#sidebarButton').toggle();
                });
                
                $('#sidebarButton').click(function(e) {
                    
                    $('#sidebar').animate({
                            left: '+=400px'
                    });

                    $('#sidebarButton').toggle();
                    
                });
						   
		$('#loginSubmit').click(function(e) {
		
		e.preventDefault();
		
		var data = $("#login").serializeArray();
		
			 $.post(
			   'login.php',
				data,
				function(data){
					//alert(data);
					$('#success').html(data);
					window.location.replace("http://192.168.3.215/foebis_reporting/index.php?page=");
				}
			  );
			 
		});
		

		$('.show_hide').click(function(e) {
			
				$('#userSidebar').animate({left: '+=400px'});
				//$('#sidebarButton').animate({left: '+=233px'});
				$('#sidebarButton').hide();
				$('#sidebarButton').css('position', 'relative');
				
			
		});
		
		$('.hide_bar').click(function(e) {
									   
			$('#userSidebar').animate({left: '-=400px'});
			//$('#sidebarButton').animate({left: '-=233px'});
			$('#sidebarButton').show();
			$('#sidebarButton').css('position', 'absolute');						   
									   
		});
		
                                                                          
        var x = 0;
        var maxField = 10; //Input fields increment limitation
        var wrapper = $('.field_wrapper'); //Input field wrapper

        var x = 2; //Initial field counter is 1
        $('.btn-add1').click(function(bab){ //Once add button is clicked
                        if(x < maxField){ //Check maximum number of input fields
                        var fieldHTML = '<li class="ui-state-default case col-md-12"><button class = "btn-xs remove_button btn btn-danger"><i class = "fa fa-times"></i></button><label>Report/Block Name</label><input placeholder = "Title" type = "text" name = "title[]" id = "title[]" />&nbsp; <br/><span class = "case_title"></span><span class = "case_content"><input type="text" name="name[]" value="" /><label>Report</label><input type="radio" name="name[]" value="report" /><label>Block</label><input type="radio" name="name[]" value="block" /></span></li>'; 
                        //New input field html 
                                        x++; //Increment field counter
                                        $(wrapper).append(fieldHTML); // Add field html
                        }
        });
        $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
                        e.preventDefault();
                        $(this).parent().remove(); //Remove field html
                        x--; //Decrement field counter
        });

    $( "#cases" ).sortable({
        revert: false,
        axis: "y",
        opacity: 0.9                        
    });
    
    

    $( "#button" ).click(function() {
        $( "#effect" ).toggleClass( "newClass", 1000 );
    });      

});

		/*var gridster;
		var deletebutton = '<button class = "removewidget btn btn-danger pull-right"> <i title="Delete Block" class="fa fa-trash"></i> </button>';
		
      $(function(){

        gridster = $(".gridster ul").gridster({
          widget_base_dimensions: [180, 180],
          widget_margins: [3, 3],
			serialize_params: function($w, wgd) { 
				return { 
					   id: $($w).attr('id'), 
					   col: wgd.col, 
					   row: wgd.row, 
					   size_x: wgd.size_x, 
					   size_y: wgd.size_y 
				};
			}
			
        }).data('gridster');

        $('.js-seralize').on('click', function() {
            var s = gridster.serialize();

            $('#log').val(JSON.stringify(s));
        });
		
		$('.addwidget').click(function(e){
			 e.preventDefault(); 
			 var boxID = $(this).attr("id");
			
			 gridster.add_widget.apply(gridster, ['<li id = "' + boxID + '"><h2>' + boxID + deletebutton + '</h2></li>', 1, 1]);
			 $(this).attr("disabled", true);
			 
				$('.removewidget').click(function(f){
					 f.preventDefault();
					 var boxID = $(this).parent().parent().attr("id");
					 //alert(boxID);
 					 //$(this).parent().parent().addClass("killed");
        			 gridster.remove_widget($(this).parent().parent());
					 $('.widgetlist > li > #' + boxID).attr("disabled", false);
					 //gridster.remove_widget( $('#' + boxID + '') );
					 
				});	

		});
		
});		
	
// USER CLICKS LOAD, PRESENTED WITH var serialization RESULTS


      $(function(){

      // same object than generated with gridster.serialize() method
	  
      var serialization = [{"id":"Snacks","col":3,"row":1,"size_x":1,"size_y":1},{"id":"Carrot","col":2,"row":1,"size_x":1,"size_y":1},{"id":"Brick","col":3,"row":2,"size_x":1,"size_y":1},{"id":"Will","col":4,"row":1,"size_x":1,"size_y":1},{"id":"Wedge","col":5,"row":1,"size_x":1,"size_y":1},{"id":"Egg","col":1,"row":1,"size_x":1,"size_y":1},{"id":"Mark Barrets Head","col":2,"row":2,"size_x":1,"size_y":1},{"id":"666","col":3,"row":3,"size_x":1,"size_y":1}];

      // sort serialization
      serialization = Gridster.sort_by_row_and_col_asc(serialization);

        gridster = $(".gridster ul").gridster({
          	widget_base_dimensions: [180, 180],
          	widget_margins: [5, 5],
			
        }).data('gridster');

		//Load predefined json string from var serialization
        $('.loadgrid').on('click', function() {
            gridster.remove_all_widgets();
            $.each(serialization, function() {
                //gridster.add_widget('<li />',  this.size_x, this.size_y, this.col, this.row, this.id);
				gridster.add_widget('<li id="' + this.id + '"><h4>'+ this.id + deletebutton +'</h4></li>');
				//$('').attr("id",this.id);
				//alert(this.id);
            });
			
			//Remove the widget and enable the add button
			$('.removewidget').click(function(f){
				 f.preventDefault();
				 var boxID = $(this).parent().parent().attr("id");
				 //alert(boxID);
				 //$(this).parent().parent().addClass("killed");
				 gridster.remove_widget($(this).parent().parent());
				 $('.widgetlist > li > #' + boxID).attr("disabled", false);
				 //gridster.remove_widget( $('#' + boxID + '') );
			});	
			
			//Click load and disable the add buttons corresponding to which have already been put in the grid
			$(".gridster > ul > li").each(function(){
				$('.widgetlist > li > #' + this.id).attr("disabled", false);
				$('.widgetlist > li > #' + this.id).attr("disabled", true);
			}); 
			
        });	

      });*/
	  

		$("#dashboard").click(function(){
			$("#dashboard-content").show();		//
			$("#blocks-content").hide();
			$("#reports-content").hide();
		});
		
		$("#reports").click(function(){
			$("#dashboard-content").hide();		//
			$("#blocks-content").hide();
			$("#reports-content").show();
		});
		
		$("#blocks").click(function(){
			$("#dashboard-content").hide();		//
			$("#blocks-content").show();
			$("#reports-content").hide();

		});
		
