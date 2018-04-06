var windowWidth = $(window).height();

var menuWidth = $("#menubar").height();

var contentHeight = windowWidth-menuWidth;

$(".codeContainer").height(contentHeight+"px");

$(".toggle").click(function(){
    
    $(this).toggleClass("selected");
    
    var activeDiv = $(this).html();
    
    $("#"+activeDiv+"Container").toggle();
    
    var showingDiv = $('.codeContainer').filter(function() {
        
       return ($(this).css('display') != 'none');
        
}).length;

 var width=100/showingDiv;
    
   $(".codeContainer").css("width",width+"%");
    
   });
    
    
$("#run").click(function(){
    
   $('iframe').contents().find('html').html("<style>"+$
('#cssCode').val()+"</style>"+$("#htmlCode").val());
    
  document.getElementById("frame").contentWindow.eval($('#jsCode').val());
    
    
}); 


                                               
    
