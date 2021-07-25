<template>
<div class="">
    <li>
        <span v-bind:class = "{done:todoStr.completed}">
            <input type="checkbox" v-on:change='todoStr.completed=!todoStr.completed'>
            <strong>{{todoStr.id}}</strong>
            {{todoStr.titile}}
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todoStr.id)">&times;</button>
        <!-- <strong>{{todoStr.titile}}</strong> -->
        <!--  
        <span>
        <input type="checkbox" >
        <strong>{{todo.title}}</strong>
        </span>
        
        -->
        </li>
</div>
    
</template>

<script>
/*
ниже мы принимаем строчку переданную из TodoList в данном случае props представлен не массвом а обьектом
в котороммы валидируем этот компонент, тоеесть если в этот компонент не передать - клмпонет не будет работать

*/ 
export default{
    /* props: 
       ['todoStr'], */

    props:{
        todoStr:{
            type: Object,
            required:true,
        }
    }
}

</script>

<style scoped>
li{
    border: 1px solid #ccc;
    display:flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}

.rm{ /* описываем кнопку*/
    background-color: red;
    color:#fff; 
    border-radius: 50%;
    font-weight: bold;
}
input{
    margin-right: 1rem;
}
.done{
    text-decoration: line-through;
}

</style>

