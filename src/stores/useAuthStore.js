import { defineStore } from 'pinia';
import CryptoJS from 'crypto-js'

export const useAuthStore = defineStore ('auth', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users')) || []
    }),
    actions: {
        hashPassword(password){
            return CryptoJS.SHA256(password).toString()
        },
        register(username, password, confirmPassword){
            if(!username || !password || !confirmPassword){
                return {success: false, message: 'Alla fält måste fyllas i'}
            }

            if (this.users.some(user => user.username === username)) {
                return {success: false, message: 'Användarnamnet är redan upptaget!'}
            }
        
            if(password !== confirmPassword){
                return {success: false, message: 'Lösenordet matchar inte'}
            }

            const hashedPassword = this.hashPassword(password)
            const newUser = {username, password: hashedPassword}
            this.users.push(newUser)
            localStorage.setItem('users', JSON.stringify(this.users))
            
            return {success: true, message: 'Registering lyckades! Du kan nu logga in.'}

        },
        logout(){

        },
        login(){

        },
    }
})