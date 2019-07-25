<template>
  <div>
    <table>
      <thead>
        <tr>
          <slot name="columns">
            <th v-for="(head,i) in headers" :key="i">{{ head.text}}</th>
            <th v-show="showExpand"></th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items">
          <tr :key="item.link" @click="expandDetail(item.id)">
            <slot :row="item">
              <!-- default content -->
              <td v-for="(header,i) in headers" :key="i">{{ item[header.value]}}</td>
              <td v-show="showExpand">                
                <i class="fas" :class="src(item.id)"></i>
              </td>
            </slot>
          </tr>
          <tr v-show="showExpand" v-if="toggle.includes(item.id)" :key="item.id">
            <td :colspan="columnSpan">
              <slot name="expandItem" :distributions="item.distributions"> 
                <!-- default content -->
                <div class="item-background"> Hello world </div>
              </slot>
            </td>
          </tr>
        </template>
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
    items: Array,
    showExpand: Boolean,
    subTitle:String
  },
  data() {
    return {
      expanded: [],
      isExpand: false,
      decimalDigit: 4,
      toggle: []
    };
  },
  computed:{
    columnSpan() {
      return this.showExpand ? this.headers.length + 1 : this.headers.length;
    }
  },
  methods: {
    src(id) {
      let expanded = this.expanded.find(e => e.id === id && e.isExpand);

      if (expanded) {
        return 'fa-chevron-up'
      } else {
        return 'fa-chevron-down'
      }
    },      
    expandDetail(id) {
      const index = this.toggle.indexOf(id);
      if (index > -1) {
        this.toggle.splice(index, 1);
      } else {
        this.toggle.push(id);
      }

      const expanded = this.expanded.find(e => e.id === id);
      if (expanded) {
        expanded.isExpand = !expanded.isExpand;
      } else {
        this.expanded.push({ id, isExpand: true });
      }
    }
  }
};
</script>

<style scoped>
@import url('https://pro.fontawesome.com/releases/v5.8.2/css/all.css');

img {
  margin-top: 10px;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

tbody {
  border: 1px solid #ddd;
  
}

th {
  text-align: left;
  padding: 10px 0px 10px 20px;
}

tr{
  height: 80px;
}

td {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}

tbody > tr:hover {
  cursor: pointer;  
}

.item-background {
  padding-top: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
  background-color: var(--Grey-2);
}
</style>
