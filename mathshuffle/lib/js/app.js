var ms = {
      config : {
        'version': '1.3'
      }
    },
    msMenu = {
      'toggleMenu': function(delay){
        delay = delay || 0;
        var easing = 'easeInOutCirc';
        menuWidth = $('#mode-menu').width();
        if (menuWidth == 50){
            $('#mode-menu').animate({
              width: "360"
            }, 1000, easing);
        } else{
            $('#mode-menu').delay(delay).animate({
              width: "50"
            }, 1000, easing);
        }
      },
      'changeType': function(setType){
        type = setType;
        this.toggleMenu();
        fader($notification, type + ' activated');
        clearAnswer();
        genQuestion();
        return type;
      }
    },
    $usrAnswer = document.getElementById('usr-answer'),
    clearAnswer = function (){
      $usrAnswer.value = '';
      $usrAnswer.focus();
    },
    $streak = document.getElementById('streak'),
    $score = document.getElementById('score'),
    $notification = document.getElementById('notification-text'),
    $val1 = document.getElementById('val1'),
    $val2 = document.getElementById('val2'),
    $operator = document.getElementById('operator'),
    $modeMenu = document.getElementById('mode-menu'),
    $modeMenuIcon = document.getElementById('mode-menu-icon'),
    // TODO: Why does removing the following semicolon break the program?
    type = type || 'addition'; // Sets default type
    closeWindow = function (){
      $('.modal').fadeOut(200);
    },
    highlight = function(element){
      $(element).effect('highlight', {color: 'red'});
    },
    slider = function(element){
      $(element).effect('highlight', {color: 'red'});
    },
    fader = function (element, message){
      element = element || $notification;
      message = message || 'Notify Err: No Message';
      $(element).fadeOut(200, function (){
        $(element).text(message).fadeIn(200);
      });
    },
    rndm = function(max){
      max = max || 10; // If max is falsey, max = 10
      return Math.floor((Math.random() * max)+ 1);
    },
    eval = function (x){
      // Evalutes usrAnswer
        if (gen.sum === parseInt(usrAnswer)){
            clearAnswer();
            player.updateScore(100);
            player.updateStreak(1, 'white');
            notify.writeOut('correct');
            genQuestion();
        } else if (usrAnswer == '' || usrAnswer == null) {
            notify.writeOut('empty');
        } else if (usrAnswer == 'add') {
            type = 'addition';
            fader($notification, 'Addition activated');
            clearAnswer();
            genQuestion();
        } else if (usrAnswer == 'sub') {
            type = 'subtraction';
            fader($notification, 'Subtraction activated');
            clearAnswer();
            genQuestion();
        } else if (usrAnswer == 'mul') {
            type = 'multiplication';
            fader($notification, 'Multiplication activated');
            clearAnswer();
            genQuestion();
        } else if (usrAnswer == 'div') {
            type = 'division';
            fader($notification, 'Division activated');
            clearAnswer();
            genQuestion();
        } else if (usrAnswer == 'shuffle') {
            fader($notification, 'Shuffle is coming soon...');
            clearAnswer();
        } else if (usrAnswer == 'time') {
            fader($notification, 'Time Trials are coming soon...');
            clearAnswer();
        } else if (usrAnswer == 'print') {
            fader($notification, gen.sum);
            clearAnswer();
        } else if (usrAnswer == 'version') { 
            fader($notification, ms.config.version); 
            clearAnswer();
        } else if (isNaN(parseInt(usrAnswer)) == true){
            fader($notification, "Sorry... I can't do that :( ");
            clearAnswer();
        } else{
            clearAnswer();
            player.updateScore(-50);
            player.updateStreak(0, 'red');
            notify.writeOut('incorrect');
            highlight('.view');
        }
    },
    player = {
        score: 0,
        streak: 0,
        skip: 0,
        updateScore: function (amount){
          amount = amount || 100;
          this.score += amount;
          $score.innerText = this.score;
        },
        updateStreak: function (amount, color){
          amount != 0 ? (this.streak += amount) : this.streak = 0 ;
          $streak.innerText = this.streak;
          $streak.style.color = color;
        },
        answer: function (){
          usrAnswer = $usrAnswer.value;
          eval(usrAnswer);
          return usrAnswer;
        }
    },
    notify = {
     'pos': 0,
      writeOut: function (e){
        var notifi = $notification;
        switch (e){
          case 'correct':
            fader($notification, this.correct[this.pos])
             this.pos >= notify.cLen ? (this.pos = 0) : this.pos ++;
            break;
          case 'incorrect':
            fader($notification, notify.incorrect);
            break;
          case 'empty':
            fader($notification, notify.empty);
            break;
        }
               },
      correct: ["Great Job!",
                "You Rock!",
                "keep it up!",
                "You're on a roll!",
                "You're on fire!",
                "No one can stop you now!",
                "You must be a human calculator.",
                "Elementary, my dear Watson.",
                "I feel the need—the need for maths!",
                "You're king of the world!"
               ],
      incorrect: "That doesn't seem right.",
      empty: "Try adding an answer first."
    },
    // Get length of notify.correct
    notify.cLen = parseInt(notify.correct.length) - 1,
    op = {
      'length': 4,
      'ADD': function (a, b){
        var val = a + b;
        return val;
      },
      'SUB': function (c, d){
        var val = c - d;
        return val;
      },
      'MUL': function (e, f){
        var val = e * f;
        return val;
      },
      'DIV': function (g, h){
        var val = g / h;
        return val;
      }
    },
    gen = {
        'addition': function (){
          var qVal1 = rndm(),
              qVal2 = rndm(),
              sum = '';
          $val1.innerText = qVal1;
          $val2.innerText = qVal2;
          sum = op.ADD(qVal1,qVal2);
          $operator.innerText = '+';
          this.sum = sum;
          return sum;
        },
        'subtraction': function (){
          var qVal1 = rndm(),
              qVal2 = rndm(),
              sum = '';
          // Prevent number from subtracting itself to often.
          qVal1 == qVal2 ? (qVal1 = rndm()) : qVal1 = qVal1;
          // No negative numbers. Check if val1 < val2
          qVal1 < qVal2 && qVal2 > 1 ? (qVal2 = rndm(qVal1)) : qVal2 = qVal2;
          $val1.innerText = qVal1;
          $val2.innerText = qVal2;
          sum = op.SUB(qVal1,qVal2);
          $operator.innerText = '-';
          this.sum = sum;
          return sum;
        },
        'multiplication': function (){
          var qVal1 = rndm(),
              qVal2 = rndm(),
              sum = '';
          $val1.innerText = qVal1;
          $val2.innerText = qVal2;
          sum = op.MUL(qVal1,qVal2);
          $operator.innerText = '*';
          this.sum = sum;
          return sum;
        },
        'division': function (){
          var qVal1 = rndm(),
              qVal2 = rndm(),
              sum = '';
          $val1.innerText = qVal1;
          $val2.innerText = qVal2;
          sum = op.DIV(qVal1,qVal2);
          $operator.innerText = '/';
          this.sum = Math.floor(sum);
          return sum;
        }
    };
function setType(){
  fader($notification, 'Changed to ' + type + '... enjoy!');
  genQuestion();
  return type;
}
function genQuestion(){
  switch (type){
    case 'addition':
      gen.addition();
      break;
    case 'subtraction':
      gen.subtraction();
      break;
    case 'multiplication':
      gen.multiplication();
      break;
    case 'division':
      gen.division();
      break;
    case 'shuffle':
      fader($notification, 'Coming soon...');
      break;
  };
}
