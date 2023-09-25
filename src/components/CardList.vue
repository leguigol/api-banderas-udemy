<template>
  <div class="row">
    <div 
        v-for="pais in paises" :key="pais.name" 
        class="col-12"
    >
        <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import {useStore} from 'vuex'
import Card from './Card.vue';

export default {
    setup() {
        const store = useStore();
        const paises = computed(() => {
            return store.getters.topPaisesPoblacion;
        });
        onMounted(() => {
            store.dispatch('getPaises');
        });
        return { paises };
    },
    components: { Card }
}
</script>

<style>

</style>