 var pattern = [];
 var userclickedpattern = [];
 var colors = ["red", "blue", "green", "yellow"];

 var level = 0;


 $(document).keydown(function () {
     if (level === 0) {
         $("h1").text("Press A Key to Start");
         newsequence();
     }
 });

 function newsequence() {
     level++;
     userclickedpattern = [];
     $("h1").text("Level " + level);
     var rand = Math.floor(Math.random() * 4);
     var randchosencolor = colors[rand];

     pattern.push(randchosencolor);
     var i=-1;

    var bruh= setInterval(() => {

        if(i===parent.length)clearInterval(bruh)

       if(i!==-1){
        $('#' + pattern[i]).fadeIn(100).fadeOut(200).fadeIn(100);
        playsound(pattern[i]);
       }
        i++
         
     }, 400)();


     //  $('#' + randchosencolor).fadeIn(100).fadeOut(200).fadeIn(100);

 }

 function playsound(name) {
     var sound = new Audio("sounds\\" + name + ".mp3");
     sound.play();
 }

 $(".btn").click(function (e) {
     var userchosenbutton = e.target.id;
     userclickedpattern.push(userchosenbutton);
     playsound(userchosenbutton);
     animatepress(userchosenbutton);
     checkanswer(userclickedpattern.length - 1);
 });

 function animatepress(currentcolor) {
     $('#' + currentcolor).addClass("pressed");
     setTimeout(function () {
         $('#' + currentcolor).removeClass("pressed");
     }, 100);
 }

 function checkanswer(currentlvl) {
     if (userclickedpattern[currentlvl] === pattern[currentlvl]) {
         if (currentlvl === pattern.length - 1) {
             setTimeout(newsequence(), 1000);
         }
     } else {
         playsound("wrong");
         $("body").addClass("game-over");
         setTimeout(function () {
             $("body").removeClass("game-over");
         }, 200);
         $("h1").text("Game Over, Press Any Key to Restart");
         startover();
     }
 }

 function startover() {
     level = 0;
     pattern = [];
 }