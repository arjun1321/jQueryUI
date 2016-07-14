// Script

$(function() {
    
    // DRAGGABLE
    // https://jqueryui.com/draggable/
   
    $('.box').draggable();
    
    $('#box1').draggable({ scroll:true });
    
    $('#box2').draggable({ axis: "x" });
    $('#box3').draggable({ axis: "y" });
    
    $('#box4').draggable({ containment: ".container",revert: "valid" });
    
    
    // DROPPABLE
    //https://jqueryui.com/droppable/
    
    $('#droppable').droppable({ 
        accept: '#box1',
        drop: function() {
//            $(this).find('span').html("when a box got attitude, drop it like it's hot!");
            $(this).text("when a box got attitude, drop it like it's hot!"):
        }
    });
    
    // SORTABLE
    // htpps://jqueryui.com/sortable/
    
    $('#sortable').sortable({ connectWith: "sortableToo", placeholder: "placeholderBox" });
    $('#sortableToo').sortable({ connectWith: "sortable", placeholder: "placeholderBox" });
    
    
    // ACCORDION
    // https://jqueryui.com/accordion/
    
    $('#accordion').accordion({ collapsible: true, heightStyle: "content" });
    
    // DATEPICKER
    //https://jqueryui.com/datepicker
    
    $('.date').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            showButtonPanel: true,
            changeMonth: false,
            changeYear: false,
            numberOfMonths: 2,
            minDate: -1
        });
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});