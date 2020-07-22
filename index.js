var id1,id2;
var timermin=0,timersec=0,timermsec=0;
var lapmin=0,lapsec=0,lapmsec=0;
var timer,timerlap;

$(function(){
    showhide("#startbutton", "#lapbutton");
    $("#startbutton").click(function(){
        showhide("#stopbutton", "#lapbutton");
        starttimer();
        startlap();
    });
    $("#stopbutton").click(function(){
        showhide("#resumebutton", "#resetbutton");
        clearInterval(timer);
        clearInterval(timerlap);
    });
    $("#resumebutton").click(function(){
        showhide("#stopbutton", "#lapbutton");
        starttimer();
        startlap();
    });
    $("#lapbutton").click(function(){
        divlap();
        lapmin=0;
        lapsec=0;
        lapmsec=0;
        $("#lapmin").html("0" + lapmin);
        $("#lapsec").html("0" + lapsec);
        $("#lapmsec").html("0" + lapmsec);
    }); 
    $("#resetbutton").click(function(){
        location.reload();
    });
});

function showhide(id1, id2){
    $(".control").hide();
    $(id1).show();
    $(id2).show();
}; 

function starttimer(){
    $("#watchmin").html("0" + timermin);
    $("#watchsec").html("0" + timersec);
    $("#watchmsec").html("0" + timermsec);
    timer = setInterval(function(){
        timermsec+=1;
        if(timermsec < 10){
            $("#watchmsec").html("0" + timermsec);
        }
        else if(timermsec > 9){
            $("#watchmsec").html(timermsec);
        }

        if(timermsec >=60){
            timermsec=0;
            timersec++;
            $("#watchmsec").html("0" + timermsec);
            $("#watchsec").html("0" + timersec);
        };


        if(timersec < 10){
            $("#watchsec").html("0" + timersec);
        }
        else if(timersec > 9){
            $("#watchsec").html(timersec);
        }

        if(timersec >=60){
            timersec=0;
            timermin++;
            $("#watchsec").html("0" + timersec);
            $("#watchmin").html("0" + timermin);
        };
    },10);
};



function startlap(){
    timerlap = setInterval(function(){
        lapmsec+=1;
        if(lapmsec < 10){
            $("#lapmsec").html("0" + lapmsec);
        }
        else if(lapmsec > 9){
            $("#lapmsec").html(lapmsec);
        }

        if(lapmsec >=60){
            lapmsec=0;
            lapsec++;
            $("#lapmsec").html("0" + lapmsec);
            $("#lapsec").html("0" + lapsec);
        };

        if(lapsec < 10){
            $("#lapsec").html("0" + lapsec);
        }
        else if(lapsec > 9){
            $("#lapsec").html(lapsec);
        }

        if(lapsec >=60){
            lapsec=0;
            lapmin++;
            $("#lapsec").html("0" + lapsec);
            $("#lapmin").html("0" + lapmin);
        };

    },10);
};
var t=1;
function divlap(){
    if(lapmsec < 10){
        if(lapsec < 10){
            $("#lap").prepend('<div id="lapno" class="col-xs-6">Lap ' + t + '</div><div id="lapval" class="col-xs-6"> 0' + lapmin + ':0' + lapsec + ':0' + lapmsec + "</br>");
            t+=1;
        }
        else{
            $("#lap").prepend('<div id="lapno" class="col-xs-6">Lap ' + t + '</div><div id="lapval" class="col-xs-6"> 0' + lapmin + ':' + lapsec + ':0' + lapmsec + "</br>");
            t+=1;
        }
    }else if(lapmsec > 9){
        if(lapsec < 10){
            $("#lap").prepend('<div id="lapno" class="col-xs-6">Lap ' + t + '</div><div id="lapval" class="col-xs-6"> 0' + lapmin + ':0' + lapsec + ':' + lapmsec + "</br>");
            t+=1;
        }
        else{
            $("#lap").prepend('<div id="lapno" class="col-xs-6">Lap ' + t + '</div><div id="lapval" class="col-xs-6"> 0' + lapmin + ':' + lapsec + ':' + lapmsec + "</br>");
            t+=1;
        }
    };
};