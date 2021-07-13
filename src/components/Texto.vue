<template>
  <div>
    <input name="texto" id="texto" type="text" v-model="texto" required />
    <div>
      <h4>cantidad {{ showQuantity }}</h4>
      <h4>{{ texto | codificado }}</h4>
      <h4>{{ texto | mayuscula }}</h4>
      <h4>{{ texto | minuscula }}</h4>
      <h4>{{ texto | mayYmin(true) }}</h4>
      <h4>{{ texto | mayYmin(false) }}</h4>
    </div>

    <p>1:b 2:b 3:c 4:b 5:b,c</p>
  </div>
</template>

<script>
export default {
  props: [],
  mounted() {},
  data() {
    return {
      texto: "",
      cantidad: 0,
    };
  },
  methods: {},
  computed: {
    showQuantity() {
      return this.texto.length;
    },
  },
};
</script>

<style></style>
