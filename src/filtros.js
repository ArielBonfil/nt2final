import Vue from "vue";

Vue.filter("codificado", function(value) {
  return value
    .toLowerCase()
    .split("")
    .map((letra) => {
      if (letra === "a") {
        return "u";
      } else if (letra === "e") {
        return "o";
      } else if (letra === "o") {
        return "e";
      } else if (letra === "u") {
        return "a";
      }
      return letra;
    })
    .join("");
});

Vue.filter("mayuscula", function(value) {
  return value.toUpperCase();
});
Vue.filter("minuscula", function(value) {
  return value.toLowerCase();
});
Vue.filter("mayYmin", function(value, a) {
  return value
    .split("")
    .map((x, i) => {
      return (i % 2 === 0) === a ? x.toUpperCase() : x;
    })
    .join("");
});
