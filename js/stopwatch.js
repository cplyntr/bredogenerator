var	clsStopwatch = function() {
		var	startAt	= 0;
		var	lapTime	= 0;
		this.isStarted = false;

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
		this.start = function() {				
				startAt	= startAt ? startAt : now();
				this.isStarted = true;
			};
		this.stop = function() {
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0;
				this.isStarted = false;
			};
		this.reset = function() {
				lapTime = startAt = 0;
			};
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatch();
var $time;
var wordSW = new clsStopwatch();
var $wordTime;

var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	
	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
	return newTime;
}
function shortFormatTime(time) {
	var formattedTime = formatTime(time);
	if(formattedTime[3] == "0")
	{
		return formatTime(time).slice(4);
	}
	else
	{
		return formatTime(time).slice(3);
	}
}

function show() {
	$time = document.getElementById('time');
	$wordTime = document.getElementById("sec");
	if($time && $wordTime)
	{
		update();
		return true;;
	}
	else
	{
		return false;
	}
}

function update() {
	$time.innerHTML = formatTime(x.time());	
	$wordTime.innerHTML = shortFormatTime(wordSW.time());
}

function start() {
	if(!x.isStarted)
	{
		clocktimer = setInterval("update();", 1000);
		x.start();
		wordSW.start();
		update();
	}
}

function stop() {
	x.stop();
	wordSW.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	wordSW.reset();
	update();
}

function restartSec() {
	wordSW.reset();	
	if(x.isStarted)
	{
		wordSW.start();
	}
	update();
	setRanDir();
}
