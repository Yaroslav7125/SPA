<template>
  <div id="app">
    <h1>todo app</h1>
    
    <AddTodo
    v-on:addtodo="addTodo"
    />
    <!-- 5 
    ниже заюзали компонет TodoLisst, в который директивой
    v-bind передали массив todos из функции data ->  смотри в секции 
    script

    далле в компоненте котороый мв передаём в разделе scripts долюно быть поле props
    которое содержит массив,в котором должны быть перечислено всё то что мы передаём 
    в этот компонент
    имя должно совпадать с именем после двух точек (v-bind:...="adasdas" )) в данном случае
     это то что находиться в контексте data в этом компоненте, а ... это то что находится в компоненте в который мы передаём

     
    
    таким образом можно передавать данные из компонента в компонент
    
     -->
    <TodoList 
      v-bind:todos="todos" 
      v-on:remove-todo="removeTodo"    
    />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
export default {
  name: 'App',
  data(){
    return{
      todos:[
        {id:1, titile:'asdasdasd', completed:false},
        {id:2, titile:'asdasdasdasdasd', completed:false},
        {id:3, titile:'asdasdasdasdad', completed:false},
        
      ],
      delforAddTodo: "hello, I'm here",
      count: 0,
    }
  },
  components: {
    TodoList: TodoList,
    AddTodo: AddTodo,
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t=> t.id !==id);
    },
    addTodo(newTodo){
      console.log(newTodo)
      this.todos.push(newTodo);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
