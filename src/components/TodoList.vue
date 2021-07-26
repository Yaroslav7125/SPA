<template>
    <div>
        <ul>

        <!-- таким образом мы прередали из компонента App массив todos -->
        <!-- теперь нуебходимо проитерировать каждый элемент массива todos
        
        делается это с помощью v-for

         -->
            
            <TodoItem
             v-for='todo of todos' 
             v-bind:todoStr='todo' 
             v-on:remove-todo="removeTodo"
             />
            
        </ul>
    </div>
</template>
<script>



import TodoItem from './TodoItem.vue'
export default{
    props:["todos"],
    components:{
        TodoItem:TodoItem
    },
    methods:{
        removeTodo(id){
            this.$emit('remove-todo', id)
            console.log('from TodoList:'+id)
        }
    }
}
</script>


<style scoped>
ul{
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
}


</style>



