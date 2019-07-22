<template>
  <div>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:items="props">
        <td v-for="(header,i) in headers" :key="i">{{ props.item[header.value] }}</td>
      </template>
    </v-data-table>    
  </div>
</template>

<script>
export default {
  name: "mytable", 
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
