class GitHub {
  constructor() {
    this.client_id = '06a1c7e14239a77583ef';
    this.client_secret = 'c80af73de08373b75422617c3ce6a78f1228c490';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
