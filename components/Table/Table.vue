<template>
  <div>
    <table>
      <thead>
        <tr>
          <slot name="columns">
            <th v-for="(head,i) in headers" :key="i">{{ head.text}}</th>            
          </slot>          
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in items" :key="item.link">
            <slot :row="item">
              <td v-for="(header,i) in headers" :key="i">                
                  {{ item[header.value]}}                
              </td>             
            </slot>
          </tr>  
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {    
  },
  props: {
    headers: Array,
    items: Array
  }
}
</script>

<style scoped>

img {
  margin-top: 10px;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

th {
  text-align: left;
  padding: 10px 0px 10px 20px;
}

tr {
  height: 80px;
  border-bottom: 1px solid #eee;
}

td {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;  
}

tbody tr {  
  border-bottom: 1px solid #eee;
}
</style>
