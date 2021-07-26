<template>
    <form v-on:submit.prevent="onSubmit" > <!-- -->
        <input type="text"  v-model = "title">
        <button type="submit">Create</button>
        
    </form>
</template>
<script>
export default{


    methods:{
        onSubmit:function(){
           console.log(this.title)
            if(this.title){
                let newTodo = {
                    id:Date.now(),
                    title:this.title,
                    completed:false,
                };
                alert(newTodo)
                this.$emit('addtodo', newTodo); // прописываем событие add-todo с отправкой в другой компонент обьектка newTodo
            }
        }
    }, 

    data(){
        return{
            title:'asddasdad1'
        }
    }
}
</script>


<style scoped>
form{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
}
input{
    width:400px;
}
</style>