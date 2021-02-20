var wiccweek = "weekday";

function setWeekday(){

	wiccweek = "weekday";
	document.getElementById("header").innerHTML = "Weekday!";
	check_timeforlist();

}

function setWeekend(){

	wiccweek = "weekend";
	document.getElementById("header").innerHTML = "Weekend!";
	check_timeforlist();
	
}

function setWeekday1(){

	wiccweek = "weekday1";
	document.getElementById("header").innerHTML = "Weekday!";
	check_timeforlist();

}

function setWeekend1(){

	wiccweek = "weekend1";
	document.getElementById("header").innerHTML = "Weekend!";
	check_timeforlist();
	
}

function setEpigra(){

	wiccweek = "epigra";
	document.getElementById("header").innerHTML = "Week Epigra!";
	check_timeforlist();
	
}


function check(){

	check_timeforlist();

	setInterval(function(){

		check_timeforlist();

	}, 60000)

	setInterval(function(){

		check_time();
		check_timeremaining();

	}, 1000)

}

function check_timeremaining(){

	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	hoursed15 = hour*4;

	if(minute == 0){

		minuted15 = 0;
	
	}else if(minute > 0 && minute < 15){

		minuted15 = 0;

	}else if(minute >= 15 && minute < 30){

		minuted15 = 1;

	}else if(minute >= 30 && minute < 45){

		minuted15 = 2;

	}else if(minute >= 45 && minute <= 59){

		minuted15 = 3;

	}else{

		console.log("ERROR AT CHECK TIME FOR CHECK REMAINING");
	
	}

	all15 = hoursed15 + minuted15;

	var index = 0;

	if(wiccweek == "weekday"){

		index = all15+1;

	}else if(wiccweek == "weekend"){

		index = all15+1;

	}else if(wiccweek == "weekday1"){

		index = all15+1;

	}else if(wiccweek == "weekend1"){

		index = all15+1;

	}else if(wiccweek == "epigra"){

		index = all15+1;

	}else{

		console.log("ERROR AT GET LIST ELEMENT AT CHECK REMAINING");

	}

	var nextTimeSeconds = index*15*60;

	var nowTimeSeconds = (hour*60+minute)*60+second;

	var remainingTimeSeconds = nextTimeSeconds - nowTimeSeconds;

	var remainingtimeMinutes = 0;

	while(remainingTimeSeconds >= 60){

		remainingTimeSeconds = remainingTimeSeconds - 60;
		remainingtimeMinutes++;

	}

	if(remainingtimeMinutes <= 0 || remainingTimeSeconds <= 0){

		check_timeforlist();

	}

	document.getElementById("remaining_").innerHTML = remainingtimeMinutes+":"+remainingTimeSeconds;

}

function check_timeforlist(){

	var hoursed15 = 0;
	var minuted15 = 0;
	var all15 = 0;

	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();

	hoursed15 = hour*4;

	if(minute == 0){

		minuted15 = 0;
	
	}else if(minute > 0 && minute < 15){

		minuted15 = 0;

	}else if(minute >= 15 && minute < 30){

		minuted15 = 1;

	}else if(minute >= 30 && minute < 45){

		minuted15 = 2;

	}else if(minute >= 45 && minute <= 59){

		minuted15 = 3;

	}else{

		console.log("ERROR AT CHECK TIME FOR LIST");
	
	}

	all15 = hoursed15 + minuted15;
	console.log("15s= "+all15);

	if(wiccweek == "weekday"){

		var now_work = weekday_works[all15];
		console.log("work= "+now_work);

		document.getElementById("now_").innerHTML = weekday_works[all15];
		document.getElementById("next_").innerHTML = weekday_works[all15+1];

	}else if(wiccweek == "weekend"){

		var now_work = weekend_works[all15];
		console.log("work= "+now_work);

		document.getElementById("now_").innerHTML = weekend_works[all15];
		document.getElementById("next_").innerHTML = weekend_works[all15+1];

	}else if(wiccweek == "weekday1"){

		var now_work = weekday1_works[all15];
		console.log("work= "+now_work);

		document.getElementById("now_").innerHTML = weekday1_works[all15];
		document.getElementById("next_").innerHTML = weekday1_works[all15+1];

	}else if(wiccweek == "weekend1"){

		var now_work = weekend1_works[all15];
		console.log("work= "+now_work);

		document.getElementById("now_").innerHTML = weekend1_works[all15];
		document.getElementById("next_").innerHTML = weekend1_works[all15+1];

	}else if(wiccweek == "epigra"){

		var now_work = epigra_works[all15];
		console.log("work= "+now_work);

		document.getElementById("now_").innerHTML = epigra_works[all15];
		document.getElementById("next_").innerHTML = epigra_works[all15+1];

	}else{

		console.log("ERROR AT GETTING THE LIST");

	}

}

function check_time(){

	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	document.getElementById("time_").innerHTML = hour+":"+minute+":"+second;

}

var weekday_works = [

"Sleep",

"Sleep","Sleep","Sleep","Sleep","Sleep",    //00:00 - 06:00 1+23 Sleep
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep",

"Wake Up","Wake Up","Wake Up","Wake Up",    //06:00 - 07:00 4 Wake Up

"Eat","Eat",                                //07:00 - 07:30 2 Eat

"Workout","Workout",                        //7:30 - 8:00 2 Workout

"Work1","Work1","Work1","Break1",           //8:00 - 12:00 12 Work 4 Break
"Work2","Work2","Work2","Break2",
"Work3","Work3","Work3","Break3",
"Work4","Work4","Work4","Break4",

"Long Break","Long Break","Long Break",     //12:00 - 13:30 6 Long Break
"Long Break","Long Break","Long Break",

"Work5","Work5","Work5","Break5",           //13:30 - 16:30 9 Work 3 Break
"Work6","Work6","Work6","Break6",
"Work7","Work7","Work7","Break7",

"Game / Video / Free Time",                 //16:30 - 18:30 8 Game / Video / Free Time
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",

"Wiki Hour","Wiki Hour",                    //18:30 - 20:00 6 Wiki Hour
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",

"Eat","Eat","Eat",                          //20:00 - 21:30 6 Eat
"Eat","Eat","Eat",

"Book / Free Time","Book / Free Time",      //21:30 - 23:00 6 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Sleep","Sleep","Sleep","Sleep"            //23:00 - 24:00 4 Sleep

];

var weekend_works = [

"Sleep",

"Sleep","Sleep","Sleep","Sleep","Sleep",    //00:00 - 06:00 1+23 Sleep
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep",

"Wake Up","Wake Up","Wake Up","Wake Up",    //06:00 - 07:00 4 Wake Up

"Eat","Eat",                                //07:00 - 07:30 2 Eat

"Workout","Workout",                        //7:30 - 8:00 2 Workout

"Work1","Work1","Work1","Break1",           //8:00 - 12:00 12 Work 4 Break
"Work2","Work2","Work2","Break2",
"Work3","Work3","Work3","Break3",
"Work4","Work4","Work4","Break4",

"Long Break","Long Break",     				//12:00 - 14:00 6 Long Break
"Long Break","Long Break",
"Long Break","Long Break",
"Long Break","Long Break",

"Book / Free Time","Book / Free Time",		//14:00 - 16:00 8 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Game / Video / Free Time",                 //16:00 - 18:00 8 Game / Video / Free Time
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",

"Wiki Hour","Wiki Hour",                    //18:00 - 20:00 8 Wiki Hour
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",

"Eat","Eat","Eat",                          //20:00 - 21:30 6 Eat
"Eat","Eat","Eat",

"Book / Free Time","Book / Free Time",      //21:30 - 23:00 6 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Sleep","Sleep","Sleep","Sleep"            //23:00 - 24:00 4 Sleep

];

var weekday1_works = [

"Sleep",

"Sleep","Sleep","Sleep","Sleep","Sleep",    //00:00 - 06:00 1+23 Sleep
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep",

"Sleep","Sleep","Sleep","Sleep",    		//06:00 - 07:00 4 Sleep

"Sleep","Sleep",                            //07:00 - 07:30 2 Sleep

"Eat","Workout",                        	//7:30 - 8:00 2 Sleep

"Work1","Work1","Work1","Break1",           //8:00 - 12:00 12 Work 4 Break
"Work2","Work2","Work2","Break2",
"Work3","Work3","Work3","Break3",
"Work4","Work4","Work4","Break4",

"Long Break","Long Break","Long Break",     //12:00 - 13:30 6 Long Break
"Long Break","Long Break","Long Break",

"Work5","Work5","Work5","Break5",           //13:30 - 16:30 9 Work 3 Break
"Work6","Work6","Work6","Break6",
"Work7","Work7","Work7","Break7",

"Game / Video / Free Time",                 //16:30 - 18:30 8 Game / Video / Free Time
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",

"Wiki Hour","Wiki Hour",                    //18:30 - 20:00 6 Wiki Hour
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",

"Eat","Eat","Eat",                          //20:00 - 21:30 6 Eat
"Eat","Eat","Eat",

"Book / Free Time","Book / Free Time",      //21:30 - 23:00 6 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Sleep","Sleep","Sleep","Sleep"            //23:00 - 24:00 4 Sleep

];

var weekend1_works = [

"Sleep",

"Sleep","Sleep","Sleep","Sleep","Sleep",    //00:00 - 06:00 1+23 Sleep
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep",

"Sleep","Sleep","Sleep","Sleep",    		//06:00 - 07:00 4 Sleep

"Sleep","Sleep",                            //07:00 - 07:30 2 Sleep

"Eat","Workout",                        	//7:30 - 8:00 2 Sleep

"Work1","Work1","Work1","Break1",           //8:00 - 12:00 12 Work 4 Break
"Work2","Work2","Work2","Break2",
"Work3","Work3","Work3","Break3",
"Work4","Work4","Work4","Break4",

"Long Break","Long Break",     				//12:00 - 14:00 6 Long Break
"Long Break","Long Break",
"Long Break","Long Break",
"Long Break","Long Break",

"Book / Free Time","Book / Free Time",		//14:00 - 16:00 8 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Game / Video / Free Time",                 //16:00 - 18:00 8 Game / Video / Free Time
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",
"Game / Video / Free Time",

"Wiki Hour","Wiki Hour",                    //18:00 - 20:00 8 Wiki Hour
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",
"Wiki Hour","Wiki Hour",

"Eat","Eat","Eat",                          //20:00 - 21:30 6 Eat
"Eat","Eat","Eat",

"Book / Free Time","Book / Free Time",      //21:30 - 23:00 6 Book / Free Time
"Book / Free Time","Book / Free Time",
"Book / Free Time","Book / Free Time",

"Sleep","Sleep","Sleep","Sleep"            //23:00 - 24:00 4 Sleep

];

var epigra_works = [

"Sleep",

"Sleep","Sleep","Sleep","Sleep","Sleep",    //00:00 - 06:00 1+23 Sleep
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep","Sleep","Sleep",
"Sleep","Sleep","Sleep",

"Wake Up","Wake Up",					    //06:00 - 06:30 2 Wake Up

"Eat","Eat",                                //06:30 - 07:00 2 Eat

"Workout","Workout",                        //7:00 - 7:30 2 Workout

"Work1","Work1","Work1","Break1",           //7:30 - 9:30 6 Work 2 Break
"Work2","Work2","Work2","Break2",

"Hey! it's Epigra","Hey! it's Epigra",     	//9:30 - 18:00 34 Epigra
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",
"Hey! it's Epigra","Hey! it's Epigra",

"Long Break","Long Break",					//18:00 - 19:00 4 Long Break
"Long Break","Long Break",

"Work3","Work3","Work3","Break3",           //19:00 - 20:00 3 Work 1 Break

"Eat","Eat","Eat","Eat",                    //20:00 - 21:00 4 Eat

"Work4","Work4","Work4","Break4",      		//21:00 - 22:00 3 Work 1 Break

"Book / Free Time","Book / Free Time",      //22:00 - 23:00 4 Book / Free Time
"Book / Free Time","Book / Free Time",

"Sleep","Sleep","Sleep","Sleep"             //23:00 - 24:00 4 Sleep

];

//Booogle Inc.