import { defineStore } from 'pinia'

export const StoreVars = defineStore('test', {
    state: () => {
        return{
            storageProduct: [],
            token: '',
        }
    }
})