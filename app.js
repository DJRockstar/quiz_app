
var quiz = 
	[
     {image: "images/a_lincoln.jpg", 
	  answer: "Abraham Lincoln",
	  options:['George Bush', 'Abraham Lincoln','Thomas Jefferson', 'Kanye West'],
	  },
	 {image: "images/b_obama.jpg", 
	  answer: 'Barack Obama',
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Donald Trump']
	  },
	 {image: "images/g_ford.jpg", 
	  answer: 'Gerald Ford',
	  options:['Harry Truman', 'Ben Franklin','Gerald Ford', 'Richard Nixon']
	  },
	 {image: "images/t_jefferson.jpg", 
	  answer: 'Thomas Jefferson',
	  options:['Woodrow Wilson', 'Richard Pierce','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/g_cleveland.jpg", 
	  answer: 'Grover Cleveland',
	  options:['George Bush', 'Grover Cleveland','Thomas Jefferson', 'Theodore Roosevelt']
	  },		  		  
	 {image: "images/j_kennedy.jpg", 
	  answer: 'John F Kennedy',
	  options:['George Bush', 'John F Kennedy','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/nixon.jpg", 
	  answer: 'Richard Nixon',
	  options:['George Bush', 'Richard Nixon','Thomas Jefferson', 'Hilary Clinton']
	  },
	 {image: "images/g_washington.jpg", 
	  answer: 'George Washington',
	  options:['George Bush', 'George Washington','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/f_pierce.jpg", 
	  answer: 'Franklin Pierce',
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Franklin Pierce']
	  },
   	 {image: "images/t_roosevelt.jpg", 
	  answer: 'Thomas Roosevelt',
	  options:['George Bush', 'Thomas Roosevelt','Thomas Jefferson', 'Kanye West']
	 }
	];

var state = {	
	currentIndex : 0,
	currentScore : 0
};

/*==============================================
========FUNCTIONS THAT MODIFY STATE=============
===============================================*/


// function updateIndex(){
//   if(currentIndex() < 10)
//     state.currentIndex++;
// }


function checkAnswer(state, data, userChoice){ 
/**
Here userChoice is the li(option) that user will choose. 
$('li.options-li').on('click', function(event){
 event.stopPropagation(); //This is optional since we are using li class directly
 alert($(this).text());
})
***************/
	if(userChoice === data[state.currentIndex].answer){
		updateScoreValue(state, $('.score-section').find('.current-score'));
	}
	else {
		alert('Woops!');
	}
}


/*==============================================
========FUNCTIONS THAT RENDERS STATE=============
===============================================*/

function displayImage(state, data, index){
	var image = data[index].image;
	$('div.question-box').find('.img-display').attr('src',image);
}


function updateScoreValue(state, element){ //element - $('.score-section').find('.current-score')
	var newScore = parseInt($('.current-score').text()) + 1;
	element.html(newScore);
}


function displayQuestionNumber(index){ //updates the question number in the nav bar
var updatedQuestionVal;
var element;
 updatedQuestionVal = index + 1;
	if(updatedQuestionVal<=10) {	
		element = $('span.question-number');
		element.html(updatedQuestionVal);
	  }
	else{
	  $('button.next-question').remove();
	  $('span.ques-no-display').text('End of Quiz');
	 }
}


function displayOptions(state, data, index){ //Function Renders the 4 options on the page
	displayQuestionNumber(index)
    var innerHTML;
	innerHTML = data[index].options;
	$('ul.options .options-li').remove();
	 for(var i =0; i < 4; i++){
		$('ul.options').append('<li class="options-li">' + innerHTML[i] + '</li>');
	}
}


function nextQuestion(state){ 
	state.currentIndex += 1;
	$('section .next-question').removeClass('hidden');
}

/*==============================================
=================EVENT LISTENERS================
===============================================*/

function userSelection(){
	$('li.options-li').on('click', function(event){
		event.stopPropagation();
		var userChoice = $(this).html();
		checkAnswer(state, quiz, userChoice);
		$('section .next-question').removeClass('hidden');
		$('li.options-li').unbind('click'); //Unbind will stop the user from clicking the option AGAIN!
	})
}

function startQuiz(){ //Function triggers when user hits the Start Quiz Button.
	$('.start-quiz-button').on('click', function(){
		$('div.quiz-container').remove(); //To make it visible
		$('nav.question-display-count').removeClass('hidden'); //To make styling visible
		$('div.ques-box-container').removeClass('hidden'); //To make styling visible
		$('section.score-section').removeClass('hidden'); //To make styling visible
		displayImage(state, quiz, state.currentIndex);
		displayOptions(state, quiz, state.currentIndex);
		userSelection();//calls the userSelection function when user starts the quiz
	});
}



$('document').ready(function(){
	startQuiz();
	



});





































