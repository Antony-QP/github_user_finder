class GitHub {
  constructor() {
    this.client_id = '48d479ea43794a140f57';
    this.client_secret = '4d2c3394ad683366e23b6ed112061081743017b2'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}