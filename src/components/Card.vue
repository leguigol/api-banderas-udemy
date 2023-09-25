<template>
  <div class="card mb-2">
    <h5>{{ pais.name.official }}</h5>
    <p class="text-center">
        <img :src="pais.flags.svg" :alt="pais.flags.alt" class="img-fluid w-50">
    </p>
    <p class="card-text">
        <span class="badge text-bg-dark d-block mb-1">nativeName: {{ pais.name.common }}</span>
        <span class="badge text-bg-dark d-block mb-1">Population: {{ numeroFormato(pais.population) }}</span>
        <span class="badge text-bg-dark d-block mb-1">Capital: {{ pais.capital }}</span>
        <span class="badge text-bg-dark d-block mb-1">Region: {{ pais.region }}</span>
    </p>
  </div>
</template>

<script>
export default {
    props: ['pais'],
    setup(){
        const numeroFormato=(num)=>{
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return {numeroFormato}
    }
}
</script>

<style>

</style>