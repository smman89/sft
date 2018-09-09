import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = () =>
    new Vuex.Store({
        state: {
            forma: {
                name: 'John',
                phone: 0,
                message: ''
            },
            response: ''
        },
        mutations: {
            commitAnyThing(state, { type, items }) {
                state[type] = items;
            },
        },
        actions: {
            sendForm({ commit }, forma) {
                this.commit('commitAnyThing', { type: 'response', items: '' })
                axios.post('http://localhost:3000/responses', {
                    name: forma.name,
                    phone: forma.phone,
                    message: forma.message
                })
                    .then(res => {
                        if (res.status == 201) {
                            this.commit('commitAnyThing', { type: 'response', items: 'Sent successfully! :)' })
                            this.commit('commitAnyThing', { type: 'forma', items: forma })
                        }
                    })
            }
        }
    })

export default store;