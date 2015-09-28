jQuery(document).ready(function(){
    
    $("#mobile-nav").on("click", function(){
        $(".mobile-menu").slideToggle();
    });
    
    $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
    
    $(".storyblock").on("click", function(){
        $(".modal").fadeIn();
    });
    
    $(".modal").on("click", function(){
        $(".modal").fadeOut();
    });
    
    $("#story1").on("click", function(){
        $(".modal-dialog").scrollTop(0);
        $("#story-content").html(story1);
        $("#story-title").html("I Wrote, No, I Scribbled");
    });
    
    $("#story2").on("click", function(){
        $(".modal-dialog").scrollTop(0);
        $("#story-content").html(story2);
        $("#story-title").html("Are You Having Fun Yet?");
    });
    
    $("#sidenav-btn").on("click", function(){
        $("#left-nav").animate({width:'toggle'},350);
    });
    
    $("#me").mousemove(function(event){
        var relX = event.pageX - $("#mypicture").offset().left;
        var relY = event.pageY - $("#mypicture").offset().top;
        var magicNum = 20;
        if (relX > magicNum && relY < magicNum * -1){
            $("#mypicture").attr("src", "images/max-top-right.png");
        }
        else if (relX < -1 * magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-bottom-left.png");
        }
        else if (relX > magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-bottom-right.png");
        }
        else if (relX < magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-down.png");
        }
        else if (relX > magicNum){
            $("#mypicture").attr("src", "images/max-right.png");
        }
        else if (relX < -1 * magicNum){
            $("#mypicture").attr("src", "images/max-left.png");
        }
        else{
            $("#mypicture").attr("src", "images/max.png");
        }
    });
    
    $("#me").click(function(event){
        var relX = event.pageX - $("#mypicture").offset().left;
        var relY = event.pageY - $("#mypicture").offset().top;
        var magicNum = 20;
        if (relX > magicNum && relY < magicNum * -1){
            $("#mypicture").attr("src", "images/max-top-right.png");
        }
        else if (relX < -1 * magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-bottom-left.png");
        }
        else if (relX > magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-bottom-right.png");
        }
        else if (relX < magicNum && relY > magicNum){
            $("#mypicture").attr("src", "images/max-down.png");
        }
        else if (relX > magicNum){
            $("#mypicture").attr("src", "images/max-right.png");
        }
        else if (relX < -1 * magicNum){
            $("#mypicture").attr("src", "images/max-left.png");
        }
        else{
            $("#mypicture").attr("src", "images/max.png");
        }
    });
    
    function blink(){
        setTimeout(function(){
            $("#mypicture").attr("src", "images/max-closed.png");
        }, 5000);
        setTimeout(function(){
            $("#mypicture").attr("src", "images/max.png");
        }, 5100);
        setTimeout(function(){
            blink();
        }, 6000);
    }
    
    blink();
});

var story1 = "The grey man with the tall hat was having a marvelous Sunday afternoon.<br><br>Wait, hold on a second, I don’t think so. That’s a horrible way to begin a murder mystery. It leaves out all sense of mystery, particularly the part about the murder. After all, the grey man was the victim of the murder about to take place, the murderess being Alice, age 49. I messed up again. A proper writer would never give away the answer to his puzzle within the first few sentences of his writing. That is the wrong thing to do. Might as well begin with that classic ending line:<br><br>So, does anybody know whats for dinner? The grey man gasped for air, nothing came. He began to shake, his stomach sinking into oblivion. That really is the climax of this story. After all, why would one write a murder mystery if there had not been a murder?<br><br>It came to an end on a strangely chilly August evening, the kind of night in which dogs kill their owners and the such. That appears to be a common thing too. At least, in my neighborhood. The ink then bled onto this paper, as did the grey-man’s wrecked heart. Too bad Alice wasn’t there to see the case through- looks like this was going to be a one woman job. It did turn out, however, that he was a poisoned man of great stature. Tall men always are.<br><br>Jupiter is one of the several planets visible from the big red planet right next to that inhabited blue and green one, according to most normal people anyway. Also the dog, who licked that man’s cold, dead, face was there too. Insanity is more of a work of art then a menace, as tends to be the case with confused men with grey faces and tall hats, which is how Alice thought her marriage with the tall grey man would turn out. The subject of this paragraph is the growth of insanity.<br><br>His books lie in a pile of flames. Don’t read them, or else I’m afraid you’ll end up retarded, or something along those lines. The house was being cleaned out by empty people like a dishwasher would clean a polished set of poisoned dishes. Sometimes Alice wondered what on that green and blue planet she was doing with the poison, and other times, she wondered why we can’t eat at our own will, rather then having to wait for someone to supply the food for us.<br><br>She had the eyes of a tiger, the mouth of a lion, the hands of a leopard, the legs of a hyena. Yet, she was none of those things for which she had so dearly hoped. Why? Why did she do it? It’s been awhile since we visited the pool with the grey man, so it’s time to get back to that. He’s the protagonist, anyway. He walked home the way a tall man with a nice hat would. Very quietly. That's the denouement of my story, I’m afraid. I often worry about these things.<br><br>Alice had a short father. Then again, most were short compared to the tall man. She was a rough creature only concerned with the material nature of things, like food. She also had a nonexistent mother of ten. According to Merriam-Webster, the definition of nonexistent is to be absent of existence, which also happened to define Alice’s newly dead father and husband. Alice didn’t know where her other siblings got themselves off to, neither did she much care.<br><br>The cookies were always well baked, laced with a healthy dose of potent sugary cyanide. The grey man stuttered, nearly collapsing on the nearby bearskin rug. Wouldn't want to do that, would he? That was a real bear once. He laughed for the last time, as that bear had its brains removed upon its death. If only we could all have that bliss upon our existence. Can you imagine what it must be like to be a brainless freak like us?<br><br>It was a tiring job for Alice, who was used to nocturnal restlessness, to get him out of that room. Drag, pull, drag, pull. Relax. Often she took the quantum leap to unconsciousness. By the bearskin rug, the grey man's organs put up their for-sale signs. Bye-bye liver, who just so happened to be on strike for internal abuse. He was sick already, the grey man shivered. Getting up out of his chair by the pool, he had just wanted some cookies.<br><br>Spoiler alert: the tall man with the grey hat was Alice’s father through adoption, but she preferred to believe they were married. Alice did not decide to marry within the family; not even within the species. At least, as is the opinion of 94% of today’s qualified scientists. What is it like, spoiled and brain-dead, like a sack of 152 lb. human-jerky. He was not eaten like most, we imagine.<br><br>In conclusion, there was a man, his dog Alice, and a mixed up tall hat which the grey man forgot by the pool he so willingfully left to go get poisoned. The general consensus seems to be he should not have done that. The grey man was hungry, so he got up from his poolside deck, looking forward to an afternoon swim. But he ate well. Too well. Alice killed her owner by accidentally spilling the cyanide on the counter top into his cookie batter.<br><br>Don’t swim until an hour after you eat, please.<br><br>Thank you."

var story2="It was always on some road trip. A family vacation. Just sitting in the car for hours, driving on an empty road. Sometimes we would drive beside pastures, where sheared sheep and cows would wait in line to enter large barns that they would never leave. Other times the ground got so foggy it felt almost as if we were inside a dream.<br><br>Usually near the beginning of a trip, my dad would turn around and ask us the same question. It wasn't how he asked it- but there was always something wrong with the way the words came out. Almost like he was speaking words fed to him through a script.<br><br>'Are you having fun yet?' He would ask.<br><br>My sister and I never knew what else to say except for a half-spirited 'yeah,' and he would turn around and keep driving. Like he was satisfied.<br><br>My sister and I used to fight almost the entire trip. My mom would tell us to stop, and we would, but we'd be back at it again in no time. <br><br>'Mom, it's not fair, how come Danny always gets to sit on the right side?'<br><br>'I do not!'<br><br>'Do too!'<br><br>'Kids, put the pencils away. You're just going to hurt each other.'<br><br>'Will not!'<br><br>And then my sister would poke me with her pencil and I would cry. But it wasn't a real cry, just a fake one. And my mom would know and she would turn around and I would just get louder.<br><br>A few hours would pass and my sister would start talking about one of her friends' moms who was a supermodel, and I would tell her how it wasn't true because supermodels never have kids, and she would look at me like I was five. But I wasn't five.<br><br>My dad never got involved in the family discussions. He rarely turned around, never scolded us, and never told us what was wrong with what we were doing. My mom would yell at him sometimes for 'enabling the kids,' but I don't think he cared much. There was always a kind of sad look on his face. I would have said he was tired from work, but he hadn't worked in three years. Maybe that's what was getting him down. My mom would look at him with raised eyebrows and he wouldn't look back.<br><br>My sister had folded her arms and was pressing her nose against the glass, fogging up the clearness with her breath. After a little she would go back to her coloring book, pushing her straight hair back behind her small ears as it fell down across her face. Looking down always made me carsick, so I was stuck staring straight ahead at the back of my mother's neck. I would think about poking her in between the top of the seat and the head rest, and sometimes I would, but not this time. I was half asleep when my mother turned.<br><br>'Are you kids excited to go to Disney World?'<br><br>My sister always wanted to be the first to answer.<br><br>'Yeah!' I would say before she had the chance. My sister had her nose up against the window again. I thought about pushing her head into it further. Maybe, if I pressed hard enough, I would feel it squish.<br><br>'If you kids keep up this behavior, we might need to cut the vacation short,' Mom would say, knowing the hotel had been booked for months. My dad's eyes would remain on the road. 'Isn't that right, David?' Mom would ask him.<br><br>'Yes. Right, kids. You better behave yourselves,' my dad would say, looking at my mom. <br><br>I thought about what it would be like if I opened my car door, jumping out. It didn't seem like we were moving that fast on the highway anyway. I could press the lock and just lean on the door and then-<br><br>'What did I do? I haven't done anything! It was all Danny,' my sister would say.<br><br>'That's not true! Mom! She started it!'<br><br>'Nuh-uh!<br><br>'Yeah-huh!'<br><br>'Stop it! Both of you!' My mom would yell as I pushed my sister lightly on the shoulder.<br><br>'Mom! Danny hit me!'<br><br>'Danny!<br><br>'I did not!'<br><br>'Don't hit your sister!'<br><br>'I didn't! Why do you always take her side?'<br><br>My mom turned back around to face the road. A moment passed.<br><br>'Mom! He did it again!'<br><br>'Danny, we will stop the car if we have to.'<br><br>'I didn't do anything!'<br><br>'Yes he did! He hit me twice!'<br><br>And then I would push her again. And she wouldn't say anything because she would hit me next. Except her hit would be harder than mine.<br><br>'Kids!'<br><br>I would push her again. Harder than she had done to me. And it would be justified. And she would be forced back against the window. And it would feel good. And she would accidently hit the handle. And I would have won. Then the door would open. And my dad would turn. And he would hit the brake. And my mom would scream. And my sister would be pushed out. <br><br>Like a newborn.<br><br>Into the traffic.<br><br>----<br><br>I would spend late nights in my college girlfriend's apartment because I could. We would sit on the sheep's fur rug and talk. About books. About band names. About strange mixtures of food that would somehow taste better than they sounded.<br><br>We used to hide the fact that we were happy by refusing to smile. It was rare for us to break out into fits of giggles and laughter, because the jokes we told were ones that only we understood, and the crack of a smile would only ruin the moment. Our lives reminded me of something out of a '90s sitcom. Friends passing in and out of her room and making a comment or two before moving on to do whatever our friends did.<br><br>It was about the look on her face when she would try to figure out what I was thinking. And I would stare back at her, trying to memorize that look. Her eyebrows pushed together in an effort to prevent me from memorizing the look completely. The eyebrows were always the hardest part to remember.<br><br>I used to want to put my arm around her shoulders and stop her from going anywhere. And she wouldn't acknowledge my presence- an acknowledgement that only fed my desire to stay there with her and do nothing. We both knew exactly where we were and it was okay because she was completely mine.<br><br>'You think there's a star for everyone who's ever lived?' she would ask, not meaning anything but just wanting to hear her voice echo across the room into my thoughts.<br><br>'Probably more,' I would say, letting her know she was right in thinking so.<br><br>We drank when we wanted to because no one was going to stop us. We kissed when we had to because no one could have stopped us.<br><br>'Danny, we should go on a trip,' she would say.<br><br>'Planes are expensive,' I would say.<br><br>'We could drive.'<br><br>'Where?'<br><br>'Disney World,' she would say, cracking a smile. I wouldn't smile back.<br><br>Around 3AM one of us would become tired and move. Sometimes one of us fell asleep. Most of the time we both went to the bed, often without saying a word, and simply went to sleep. <br><br>There was no need for words. It was a state of being. A simple presence was enough. In sleep we were alone.<br><br>I used to dream about different shades of cows. Sometimes they were purple, mooing towards me as I drove by. Other times they were the color of the road. The door handle and the road. These cows were silent.<br><br>I sometimes awoke with a memory. She was used to this and didn't need to wake up with me. I would remove my shirt, wet from perspiration, and count sheep. The same sheep that had been sheared to make the rug at the foot of the bed. My personal flock.<br><br>I would think about starting a family. Four kids. A quiet home. Radio would play in the morning as they got ready for school. Each of them with unique names and personalities that I had created. And I would never raise my voice against them because they would take care of themselves.<br><br>I would drive them to school and go off to work knowing they were excited for summer vacation. Only then, we would go on family outings. We would visit modern art museums. We would go swimming in the local pond used for ice skating in the winter. We would visit my parents house and they would give my kids presents. We would go on road trips.<br><br>No.<br><br>Not road trips.<br><br>----<br><br>'Next in line, please,' I would say as the next family approached  the car-shaped vehicle. 'Make sure you guys keep your eyes on the road, okay?' The kids would look at me as their parents put the bars across their laps, the excitement of a new experience in their eyes.<br><br>I lived the same day for three years. The skies were usually blue, and if they weren't it was only raining. A passing, hard rain that would shut down the Motor Speedway for an hour and let up almost immediately.<br><br>'Keep your hands on the steering wheel. Remember- you're driving the car!' I would tell them. The kids would always get excited at this. Even teenagers became mildly satisfied from being able to control the movement of a car two feet in either direction of a predefined track. <br><br>'You guys ready?' The kids would nod, their parents smiling. '3... 2... 1... Go!' The cars would burst forward with the power of a lawnmower engine. Over the years I had repaired hundreds, learning each individual piece and function of the ride like it was my own. The fact was the ride had been there far before me and would continue to be long after I leave.<br><br>The track became dull after the first thirty second rush of speed, so I quickly rose to the position of Ride Operator after a few weeks of having to face the crowds of disappointed kids leaving the ride as the Exit Assistant. It was almost my lunch break.<br><br>I ate my turkey sandwich smeared with mayonnaise like it was the first thing I had eaten in weeks. One of my closest friends approached me from across the room as I ate.<br><br>'Another day in the Happiest Place on Earth,' he would say. I would nod. 'A kid threw up earlier in Tomorrowland. Got that cleaned up in under a minute,' he added.<br><br>'Wouldn't want to ruin anyone's day,' I said, swallowing. We sat in silence for a moment.<br><br>'Danny, you're still a kid. What are you still doing here, man?' He would ask. I had been asked this before and it wouldn't be the last time.<br><br>'Can't get enough, I guess.'<br><br>'Cut the crap man, I'm not one of the guys up top. Honest, man. Why are you still here?'<br><br>'Why are you still here?'<br><br>'You know why I'm here, man, I don't have anywhere else to go, but look at you! You've got a degree in... what is it, Philosophy? Can't you use that for something?'<br><br>'I kind of lost interest.'<br><br>'Lost interest... Man, if I was in your position. I mean, you've got all the chance in the world! You've got a family, don't you?'<br><br>'My parents are a few hours away,' I said, taking another bite.<br><br>'No, no, man I mean a real family. Wife, kids-'<br><br>'Didn't work out, I suppose,' I said.<br><br>'You're somethin' else, I'll tell you that...' He looked off into the distance. 'Guess you can lead a horse to water.'<br><br>'What wrong with staying here? It's nice, quiet...'<br><br>'And fake! Don't you get it? Everything here is completely artificial! Nonsense! This isn't the real world, man, this is-'<br><br>'Disney World. I know.'<br><br>'It doesn't bother you that there's a whole other world out there that's... Real?'<br><br>'I guess I don't really see the difference,' I paused. He looked down at the table.<br><br>'I don't know, man, I'm just saying... I took this job because I thought it would be cool to work here. I mean, it's Disney, we're working in a dream. And I just thought it would be more...'<br><br>'Fun?' I asked.<br><br>'Yeah,' he said.<br><br>'I used to think that's what it was all about too. The magic. Making people happy. The 'dream.' But that's not what it is. We're all just in our own little world and it doesn't even matter what's out here. You could be in the happiest place on earth and have a terrible time- because it's not about the real world. It's about you and what makes you happy in your own world. And if it's not about you having fun, then there's no dream left to have.'<br><br>'So tell me something man- Are you having fun yet?' he asked. <br><br>I sat still for a moment, thinking.<br><br>'Almost.'<br><br>So I pulled the door shut and my sister never left the car.<br><br>And my father looked back at me.<br><br>And I looked up at him.<br><br>And he smiled.<br><br>"