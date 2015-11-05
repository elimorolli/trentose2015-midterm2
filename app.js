/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = "<li id=ID><h3>WORD</h3><h3 class='solution'>SOLUTION</h3></li> ";

var i=0;var inc=0;var cor=0;
$(document).ready(function(){
    
    for(var i=0;i<data[i].lenght;i++){
   $(".cards").append(tmpl.replace('WORD',data[i].word_en).replace("ID",i).replace("SOLUTION",data[i].word_de));
    $(".solution").hide();
    $(".options").hide();
    $(".final").hide();
    $(".cards").click(function(event){
        $(".solution").show();
         $(".options").show();
    });
    $("btn opt-incorrect").click(function(event){
        inc++;alert(inc);
    });
    $("btn opt-correct").click(function(event){
        corr++;alert(corr);
    });
        if(i==data.lenght){
        $(".final").show();
            $("#tot-good").text(corr);
            var tot=inc+corr;
            $("#tot").text(tot);
        }
}
    
});
var ese={
    
}








