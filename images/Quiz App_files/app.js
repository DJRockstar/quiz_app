var quiz = 
	[
     {image: "images/a_lincoln.jpg", 
	  answer: 1,
	  options:['George Bush', 'Abraham Lincoln','Thomas Jefferson', 'Kanye West'],
	  },
	 {image: "images/b_obama.jpg", 
	  answer: 1,
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Donald Trump']
	  },
	 {image: "images/g_ford.jpg", 
	  answer: 2,
	  options:['Harry Truman', 'Ben Franklin','Gerald Ford', 'Richard Nixon']
	  },
	 {image: "images/t_jefferson.jpg", 
	  answer: 2,
	  options:['Woodrow Wilson', 'Richard Pierce','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/g_cleveland.jpg", 
	  answer: 1,
	  options:['George Bush', 'Grover Cleveland','Thomas Jefferson', 'Theodore Roosevelt']
	  },		  		  
	 {image: "images/j_kennedy.jpg", 
	  answer: 1,
	  options:['George Bush', 'John F Kennedy','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/nixon.jpg", 
	  answer: 1,
	  options:['George Bush', 'Richard Nixon','Thomas Jefferson', 'Hilary Clinton']
	  },
	 {image: "images/g_washington.jpg", 
	  answer: 1,
	  options:['George Bush', 'George Washington','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/f_pierce.jpg", 
	  answer: 3,
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Franklin Pierce']
	  },
   	 {image: "images/t_roosevelt.jpg", 
	  answer: 1,
	  options:['George Bush', 'Thomas Roosevelt','Thomas Jefferson', 'Kanye West']
	 }
	];

var state = {
	currentIndex : 0,
	currentScore : 0
};

//Functions that modify state

function updateScore(){		
	state.currentScore += 1;
}


function checkAnswer(state, data, userChoice){
	if(userChoice === data[index].answer){
		updateScore();
	}
}



//Functions that renders state on html

function displayImage(state, data, index){
	var image = data[index].image;
	$('div.question-box').find('.img-display').attr('src',image);
}


function updateScoreValue(state, element){ //element - $('.score-section').find('.current-score')
	var newScore = parseInt($('.current-score').text()) + 1;
	element.html(newScore);
}

function displayOptions(state, data, index){
	var innerHTML;
	innerHTML = data[index].options;
	$('ul.options .options-li').remove();
	for(var i =0; i < 4; i++){
		$('ul.options').append('<li>' + innerHTML[i] + '</li>');
	}
}















































