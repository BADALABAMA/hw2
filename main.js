const users = [];

//Function to get user information
function getUserInfo() {
  const name = prompt('enter your name:');
  const email = prompt('enter email:');
  const password = prompt('enter password:');

  // Geting skills from user
  const skills = [];
  let skill;
  do {
    skill = prompt("enter your skill (or enter  'exit' ) to exit:");
    if (skill !== 'exit' && skill.trim() !== '') {
      skills.push(skill);
    }
  } while (skill !== 'exit');

  // Checking amount of skills and show result
  if (skills.length < 3) {
    console.log('Useless piece of shit');
  } else if (skills.length >= 3 && skills.length < 8) {
    console.log('Cool');
  } else {
    console.log('WoW!');
  }

  //  email check
  if (email.includes('@') && email.indexOf('.') > email.indexOf('@')) {
    console.log('Email is correct');
  } else {
    console.log('invalid Email');
  }

  // password check
  if (password.length > 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
    console.log('This passwod is correct');
  } else {
    console.log('invalid password');
  }

  // add information about user to array
  users.push({
    name: name,
    email: email,
    password: password,
    skills: skills,
  });
}

getUserInfo();

// login and password check
const login = prompt('Enter your email:');
const passwordInput = prompt('Enter your password:');
const user = users.find((user) => user.email === login);

if (user) {
  if (user.password === passwordInput) {
    console.log('Congrats! You entered');
  } else {
    console.log('Invalid password!');
  }
} else {
  console.log('Error! User with that email do not exist');
}
