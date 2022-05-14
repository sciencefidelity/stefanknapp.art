<script lang="ts">

</script>


<template>
  <form>
    <label>{{ $t("language") }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="pl">pl</option>
    </select>
  </form>
  <p>{{ $t("hello") }}</p>
</template>
