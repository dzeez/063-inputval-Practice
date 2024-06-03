//create a click handler for the Post button.
$("button").click(function() {
    // grab the input field contents
    var inputval = $(".inputclass").val();
    $(".comments").append('<div class="row"><div class="avatar odie"></div><div class="comment">'+inputval+'</div></div>');
    console.log($(".avatar.odie.comment").val());
    
    //clear the input field
    $(".inputclass").val("");
    // console.log(inputval);
    // alert("test");
});







// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
    // header.toggleClass("instagram");
});