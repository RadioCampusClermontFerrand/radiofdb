
/* create the player */
$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        swfPath: "/js",
        supplied: "mp3",
        cssSelectorAncestor: "",
    });
      
                  jQuery('#jquery_jplayer_1').bind(jQuery.jPlayer.event.ended +'.jp-repeat', function() { 
                $('.pause').addClass('hide');
                $('.play').removeClass('hide');
                $('.main-pause').addClass('hide');
                $('.main-play').removeClass('hide');
            });

    });


/* build a list of tracks */

var tracks = { "b1p1": "son/mini ITW Habitants.mp3",
                       "b1p2": "son/mini ITW Habitants 2.mp3", 
                       "b1p3": "son/MT Maison de quartier ++ noise shaping.mp3",
                       "b1p4": "son/MT maison 2.mp3" };
                       

                       
var selected = "";
                       
for(var pastille in tracks) {
        $('.pause').click(function() {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').removeClass('hide');
                        $('.main-pause').addClass('hide');
                        $("#jquery_jplayer_1").jPlayer("pause");
                        $("#" + selected).css("color", "#DF3445");
        });
        $('.main-pause').click(function() {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').removeClass('hide');
                        $('.main-pause').addClass('hide');
                        $("#jquery_jplayer_1").jPlayer("pause");
                        $("#" + selected).css("color", "#DF3445");
        });
        $('#' + pastille).click(function(event) {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').addClass('hide');
                        $('.main-pause').removeClass('hide');
                        $('.entry-1button > span').css("display", "none");
                        if (selected == this.id) {
                                $("#jquery_jplayer_1").jPlayer("play");
                        }
                        else {
                            if (selected != "")
                                $("#" + selected).css("color", "#555555");

                            $("#jquery_jplayer_1").jPlayer("pause");
                            $("#jquery_jplayer_1").jPlayer("clearMedia");
                            $("#jquery_jplayer_1").jPlayer("setMedia", { mp3 : tracks[this.id] });
                            $("#jquery_jplayer_1").jPlayer("play");
                            $("#jquery_jplayer_1").jPlayer( "option", "cssSelector", {currentTime: "#currentTime-" + this.id} );
                            $("#jquery_jplayer_1").jPlayer( "option", "cssSelector", {duration: "#duration-" + this.id} );
                            selected = this.id;
                        }
                        $('#'+ this.id + '-pause').removeClass('hide');
                        $('#'+ this.id).addClass('hide');
                        $('#timer-' + this.id).css("display", "inline");
                        
        });
    
}