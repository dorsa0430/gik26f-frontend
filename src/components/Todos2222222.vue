<template>
    <div class="list-wrapper">
        <h1>My to do list</h1>
        <div class="list-box">
            <div class="input-wrapper">
                <input type="text" placeholder="type something...">
                <button>Add</button>
            </div>
            <ul>
                <li v-for="item in todos">
                    <span>{{item.task}}</span>
                    <span class="close"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import RestService from '../RESTService';

    const service = new RestService();
    export default {
        name: 'Todos',
        data() {
            return {
                todos: []

            }
        },

        created() {
            this.getTodos();
        }
        ,
        methods: {
            async getTodos() {
                try {
                    let result = await service.getTodos();
                    this.todos = result.data;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    *, *:after, *:before {
        box-sizing: border-box;
    }

    htm, body {
        margin: 0;
        padding: 0;
    }

    h1 {
        color: #f3b4b4;
    }

    .close {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 100%;
    }

    .close:hover {
        background: #f3b4b4;
    }

    .close:after, .close:before {
        content: '';
        position: absolute;
        width: 16px;
        height: 1px;
        background: #222;
    }

    .close:after {
        transform: rotate(45deg);
    }

    .close:before {
        transform: rotate(-45deg);
    }

    .list-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 32px;
    }

    .list-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 320px;
        background: #f4f4f4;
        border: 1px solid #eee;
        box-shadow: 0 18px 20px -2px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        overflow: hidden;
    }

    .input-wrapper {
        display: flex;
    }

    .input-wrapper {
        display: flex;
    }

    .input-wrapper button {
        border: none;
        outline: none;
        width: 56px;
        background: #f3b4b4;
        cursor: pointer;
    }

    .input-wrapper button:hover {
        background: #fbebeb;
    }

    .input-wrapper input {
        border: none;
        outline: none;
        height: 56px;
        padding: 0 16px;
        flex: 1 1 auto;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul > li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 16px;
        height: 56px;
        cursor: pointer;
    }

    ul > li:hover {
        background: #eee;
    }

</style>