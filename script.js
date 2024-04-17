document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
  
    // Question 1
    let answer1 = document.getElementById('answer1').value.toLowerCase();
    let message1 = document.getElementById('message1');
    if (answer1 == 'singapore' || answer1 == 'singapura') {
      message1.textContent = 'Correct! Great job!';
      message1.classList.add('correct');
      score++;
    } else if (answer1 == "") {
      message1.textContent = 'Please answer this question!!'
    } else {
      message1.textContent = 'Incorrect. The correct answer is Singapore.';
      message1.classList.add('incorrect');
    }
  
    // Question 2
    let answer2 = document.getElementById('answer2').value.toLowerCase();
    let message2 = document.getElementById('message2');
    if (answer2 == 'civil ensign') {
      message2.textContent = 'Correct!';
      message2.classList.add('correct');
      score++;
    } else if (answer2 == "") {
        message2.textContent = 'Please answer this question!!'
    } else {
      message2.textContent = 'Incorrect. The correct answer is the Civil Ensign.';
      message2.classList.add('incorrect');
    }
  
    // Question 3
    let answer3 = document.getElementById('answer3').value.toLowerCase();
    let message3 = document.getElementById('message3');
    if (answer3 == 'c') {
      message3.textContent = 'Correct!';
      message3.classList.add('correct');
      score++;
    } else if (answer3 == "") {
        message3.textContent = 'Please answer this question!!'
    } else {
      message3.textContent = 'Incorrect. Singapore was expelled from Malaysia in 1965.';
      message3.classList.add('incorrect');
    }
  
    // Question 4
    let answer4 = document.getElementById('answer4').value.toLowerCase();
    let message4 = document.getElementById('message4');
    if (answer4 === '2:3' || answer4 === '2 to 3') {
      message4.textContent = 'Correct!';
      message4.classList.add('correct');
      score++;
    } else if (answer4 == "") {
        message4.textContent = 'Please answer this question!!'
    } else {
      message4.textContent = 'Incorrect. The correct answer is 2:3.';
      message4.classList.add('incorrect');
    }

    // Question 5
    let answer5 = document.getElementById('answer5').value.toLowerCase();
    let message5 = document.getElementById('message5');
    if (answer5 === 'd' || answer5 === 'hokkien chinese' || answer5 === "hokkien") {
      message5.textContent = 'Correct!';
      message5.classList.add('correct');
      score++;
    } else if (answer5 == "") {
        message5.textContent = 'Please answer this question!!'
      } else {
      message5.textContent = 'Incorrect. Hokkien Chinese is not an official language of Singapore.';
      message5.classList.add('incorrect');
    }

    // Question 6
    let answer6 = document.getElementById('answer6').value.toLowerCase();
    let message6 = document.getElementById('message6');
    if (answer6 === 'lion city') {
      message6.textContent = 'Correct!';
      message6.classList.add('correct');
      score++;
    } else if (answer6 == "") {
        message6.textContent = 'Please answer this question!!'
      } else {
      message6.textContent = 'Incorrect. The name Singapura comes from the Sanskrit words "simha", meaning lion, and "pura", meaning city.';
      message6.classList.add('incorrect');
    }

    // Question 7
    let answer7 = document.getElementById('answer7').value.toLowerCase();
    let message7 = document.getElementById('message7');
    if (answer7 === 'b') {
      message7.textContent = 'Correct!';
      message7.classList.add('correct');
      score++;
    } else if (answer7 == "") {
        message7.textContent = 'Please answer this question!!'
      } else {
      message7.textContent = "Incorrect. Han Chinese makes up 74.3% of Singapore's population. Within the Han Chinese, there are 1.1 million Hokkien chinese, followed by Teochew and Cantonese at a population 580 000 and 430 000 respectively.";
      message7.classList.add('incorrect');
    }

    // Question 8
    let answer8 = document.getElementById('answer8').value.toLowerCase();
    let message8 = document.getElementById('message8');
    if (answer8 === 'marilah') {
      message8.textContent = 'Correct!';
      message8.classList.add('correct');
      score++;
    } else if (answer8 == "") {
        message8.textContent = 'Please answer this question!!'
      } else {
      message8.textContent = 'Incorrect. The correct answer is Marilah (Marilah kita berseru).';
      message8.classList.add('incorrect');
    }
  
    // Calculate percentage
    let percentage = (score / 8) * 100;
  
    // Display result
    let result = document.getElementById('result');
    result.textContent = `You got ${score}/8 (${percentage}%)`;
  
    // Provide appropriate response
    if (percentage === 100) {
      result.textContent += ' Perfect score! Congratulations!';
    } else if (percentage >= 75) {
      result.textContent += ' Well done!';
    } else {
      result.textContent += ' Keep practicing!';
    }
  });