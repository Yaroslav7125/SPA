<template>
    <form v-on:submit.prevent="onSubmit" >
        <input type="text" v-model='title'>
        <button type="submit">Create</button>
        
    </form>
</template>
<script>
export default{


    methods:{
        onSubmit(){
           console.log(this.title)
            if(this.title.trim()){
                const newTodo ={
                    id:Data.now(),
                    title:this.title,
                    completed:false,
                };
                this.$emit('addtodo', newTodo); // прописываем событие add-todo с отправкой в другой компонент обьектка newTodo

            }
        }
    }, 

    data(){
        return{
            title:''
        }
    }
}
</script>


<style scoped>
form{
    display: flex;

}
input{
    width:400px;
}
</style>