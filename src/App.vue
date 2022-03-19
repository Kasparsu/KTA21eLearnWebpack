<template>
    <div class="container">

        <button class="button is-primary" @click="modalActive=true">Open modal</button>

        <modal 
        :active="modalActive"
        @close="modalActive=false"
        src="https://placekitten.com/1280/960"        
        ></modal>

        <button class="button is-primary" @click="modalActive2=true">Open modal</button>

        <modal 
        :active="modalActive2"
        @close="modalActive2=false"
        src="https://placebear.com/1280/960"        
        ></modal>


        <div class="is-flex mt-3">
            <input type="text" class="input" placeholder="New item" v-model="newItem" @keypress.enter="addItem">
            <button class="button is-primary" type="button" @click="addItem">Add Item</button>
        </div>

        <ul>
            <li v-for="(item, index) in items" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  components: { Modal },
    data(){
        return {
            message: 'Hello component',
            newItem: '',
            items: ['leib', 'sai', 'piim', 'viin'],
            modalActive: false,
            modalActive2: false,
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() !== ''){
                this.items.push(this.newItem);
            }
            this.newItem = '';
        }
    }
}
</script>

<style>

</style>