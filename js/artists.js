$(document).ready(function(){
  $(".pressImg").click(function(){
    //alert("test");
    // $("#artistsbody").hide();
    // $("#aqartist").show();
    // $("#aqartist").animate({left: '250px'});
  });

  $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
