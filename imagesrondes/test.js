$(document).ready(function() {
    $("img").animate({
        borderRadius: "50%"
    });
    $("img:odd").css("border",
        "3px dashed red");
    $("img:even").css("border",
        "3px solid orange");
    $("img:first-child").css("border",
        "5px solid pink");
    $("img:last-child").css("border",
        "5px solid pink");
    $("img:nth-child(11)").css("border",
        "5px solid purple");
});


//$("tr:odd").css()

/*<script>


jQuery(document).ready(function (){


    $('#pictures img').css('border','4px dashed deepskyblue'); // faire un cadre sur des photos
    $('#pictures img:odd').css('border','4px dashed deepskyblue'); // mise en forme des images paires
    $('#pictures img:even').css('border','4px solid chartreuse'); // mise en forme des images impaires
    $('#pictures img:first, #pictures img:last').css('border','4px solid orchid'); // mise en forme 1ere et 2eme image
    $('#pictures img:eq(10)').css('border','4px dashed blue'); // pour mettre en forme la 11eme image
    $('#pictures img').animate({borderRadius:'50%'},2000);


}); */


/******************************************* BONUS ************************************/
/*************************************************************************************/

/* avant la 11e (lower than)
	$('#pictures img:lt(10)').css('border-style','solid'); */

/* apres la 11e (greater than)
	$('#pictures img:gt(10)').css('border-style','dashed'); */

</script>