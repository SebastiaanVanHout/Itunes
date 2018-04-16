$(document).ready(function(){

    $("#enter").on("click",function(){
        var songs = $("#artists").val();
        var numberofSongs = $('#songNumber').val();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + songs + "&limit=" + numberofSongs,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                searchArtist(result);
                $("audio").clear();
            },
            error: function() { alert('Failed!'); }
        });
    });

});

function searchArtist(result){
    $("#table").empty();
    for(var i=0; i<result.resultCount; i++){
        $("#table").append("<tr><td><div id='trackName" + i + "'></div></td><td><img id='picture" + i + "' src=''" + "'</img></td><td><audio controls='true' + id='audio"+ i + "' type='audio/m4a'"+"'</audio></td></tr>");
        $("#trackName" + i).text(result.results[i].trackName);
        $("#picture" + i).attr('src', result.results[i].artworkUrl100);
        $("#audio" + i).attr('src', result.results[i].previewUrl);

    }
}
