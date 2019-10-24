// Helper library to do requests against our backend.
import axios from 'axios';

export default class RestService {
    //All functions return a promise
    //that we can wait for in our logic layer
    //eg Todos.vue file.
    async getTodos() {
        //Get todos from the backend.
        return axios.get('/api/getTodos');
    }
    async deleteTodo(id) {
        return axios.get('/api/deleteTodo/'+id);
    }

    async saveTodo(task) {
        //Post values to endpoint, second argument is the javascript object
        //that gets transformed into a json-formatted body.
        return axios.post('/api/saveTodo', {
            username: 'user01',
            task: task,
        });
    }
    async updateTodo(id, done) {
        return axios.post('/api/updateTodo/'+id, {
            done: done,
        })
    }
}


