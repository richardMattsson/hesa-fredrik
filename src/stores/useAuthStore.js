import { defineStore } from 'pinia';
import CryptoJS from 'crypto-js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    level: 0
  }),
  actions: {
    hashPassword(password) {
      return CryptoJS.SHA256(password).toString();
    },
    register(username, password, confirmPassword) {
      if (!username || !password || !confirmPassword) {
        return { success: false, message: 'Alla fält måste fyllas i' };
      }

      if (this.users.some((user) => user.username === username)) {
        return { success: false, message: 'Användarnamnet är redan upptaget!' };
      }

      if (password !== confirmPassword) {
        return { success: false, message: 'Lösenordet matchar inte' };
      }

      const hashedPassword = this.hashPassword(password);
      const newUser = { username, password: hashedPassword };
      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));

      return {
        success: true,
        message: 'Registering lyckades! Du kan nu logga in.'
      };
    },
    login(username, password) {
      const hashedPassword = this.hashPassword(password);
      const user = this.users.find(
        (user) => user.username === username && user.password === hashedPassword
      );

      if (!user) {
        return {
          success: false,
          message: 'Fel användarnamn eller lösenord'
        };
      }

      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));

      return { success: true, message: 'Inloggning lyckades!' };
    },
    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    },
    progress() {
      console.log(this.users);
      console.log(this.currentUser);
      if (this.users && this.currentUser) {
        this.users.forEach((user) => {
          if (user.username === this.currentUser.username) {
            if (user.level && user.level === 0) {
              user.level += 1;
              localStorage.setItem('users', JSON.stringify(this.users));
              // console.log(JSON.parse(localStorage.getItem('users')));
            } else {
              user.level = 1;
            }
          }
          console.log(user);
        });
      }
    }
  }
});
