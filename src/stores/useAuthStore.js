import { defineStore } from 'pinia';
import CryptoJS from 'crypto-js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
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

      let level;
      this.users.forEach((u) => {
        if (u.username === user.username) {
          level = u.level;
        }
      });

      this.currentUser = user;
      this.currentUser.level = level;
      console.log(this.currentUser.level);
      localStorage.setItem('currentUser', JSON.stringify(user));

      return { success: true, message: 'Inloggning lyckades!' };
    },
    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('Vatten');
      localStorage.removeItem('Värme');
      localStorage.removeItem('Kommunikation');
      localStorage.removeItem('savedSumOfAnswers');
    },
    progress() {
      if (this.currentUser) {
        this.users.forEach((user) => {
          if (user.username === this.currentUser.username) {
            if (user.level && user.level < 4) {
              user.level += 1;
              console.log('ökar level med 1', user.level);
            } else if (!user.level) {
              user.level = 1;
              console.log('skapar level och sätter till 1', user.level);
            }
            this.currentUser.level = user.level;
          }
        });
        console.log(this.users);
        localStorage.setItem('users', JSON.stringify(this.users));

        console.log('currentUser level', this.currentUser.level);
      }
    }
  }
});
