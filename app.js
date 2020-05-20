// Initialize GitHub Object
const github = new GitHub();
// Initialize UI Object
const ui = new UI();

// Decieding variables
const userName = document.getElementById('username');

// Add Event Listener
userName.addEventListener('keyup', (e) => {
  // get input value
  const val = e.target.value;

  if (val !== '') {
    // Make HTTP call to get user detail
    github.getUser(val).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger dismiscible');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
