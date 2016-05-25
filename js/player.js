
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

var tracks = { 
            "b1p0": "son/13-BANDE ANNONCE.mp3",
            "b1p1": "son/1-je me souviens _PREMIERS SOUVENIRS_.mp3",
            "b1p2": "son/2-je me souviens _A manger !_.mp3",
            "b1p3": "son/3-je me souviens _benevoles_.mp3",
            "b1p4": "son/4-je me souviens Divers festival.mp3",
            "b1p5": "son/5-je me souviens Fin festival.mp3",
            "b1p6": "son/6-Je me souviens _quartier 2_.mp3",
            "b1p7": "son/7-Je me souviens _quartier_.mp3",
            "b1p8": "son/8-Je me souviens _SORTIES_.mp3",
            "b1p9": "son/9-MT Maison de quartier ++ noise shaping.mp3",
            "b1p10": "son/10-MT maison 2.mp3",
            "b1p11": "son/11-mini ITW Habitants 2.mp3",
            "b1p12": "son/12-mini ITW Habitants.mp3"

};
                       

                       
var selected = "";
                       
for(var pastille in tracks) {
        $('.pause').click(function() {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').removeClass('hide');
                        $('.main-pause').addClass('hide');
                        $("#jquery_jplayer_1").jPlayer("pause");
                        $("#" + selected).css("color", "#900C3F");
        });
        $('.main-pause').click(function() {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').removeClass('hide');
                        $('.main-pause').addClass('hide');
                        $("#jquery_jplayer_1").jPlayer("pause");
                        $("#" + selected).css("color", "#900C3F");
        });
        $('#' + pastille).click(function(event) {
                        $('.pause').addClass('hide');
                        $('.play').removeClass('hide');
                        $('.main-play').addClass('hide');
                        $('.main-pause').removeClass('hide');
                        $('.entry-1button > span.timer').css("display", "none");
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