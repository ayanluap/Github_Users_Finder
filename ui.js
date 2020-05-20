class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display Profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-4">
        <div class="row">
          <div class="col-md-3 mb-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" alt="Avatar Image">
            <a href="${user.html_url}" target=blank class="btn btn-outline-success btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary ">Public Repos : ${user.public_repos}</span>
            <span class="badge badge-secondary ">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-info ">Followers : ${user.followers}</span>
            <span class="badge badge-danger ">Following : ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company Name : ${user.company}</li>
              <li class="list-group-item">Website/Blog : ${user.blog}</li>
              <li class="list-group-item">Location : ${user.location}</li>
              <li class="list-group-item">Joined GitHub : ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="h3 mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show Each repo Info
  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
          <span class="badge badge-secondary"
            >Watchers : ${repo.watchers_count}</span
          >
          <span class="badge badge-info">Forks : ${repo.forks_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  // Show alert when User not found
  showAlert(msg, className) {
    // clear Alert
    this.clearAlert();
    // create new div element
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add inner text
    div.appendChild(document.createTextNode(msg));

    // Get parent
    const container = document.querySelector('.searchContainer');
    // Searh box
    const search = document.querySelector('.search');
    // Insert Alert into Profile
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert if previously one is present
  clearAlert() {
    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }
  }

  // Clear all when there is nothing in input field
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
