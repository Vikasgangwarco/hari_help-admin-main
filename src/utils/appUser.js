// appUser.js
class AppUser {
  static instance = null;

  static getInstance() {
    if (AppUser.instance == null) {
      AppUser.instance = new AppUser();
    }
    return AppUser.instance;
  }

  userAccessToken = '';  // User token
}

export default AppUser;
