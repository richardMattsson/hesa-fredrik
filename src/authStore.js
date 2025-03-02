import { defineStore } from "pinia";

export const authStore = defineStore ('auth', {
    state: () => ({
        isLoggedIn: false,
        username: '',
        users: []
    }),
    actions: {
        login(){

        },
        logout(){

        },
        register(){

        },
    }
})