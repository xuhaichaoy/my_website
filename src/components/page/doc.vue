<template>
  <div class="contentRight">
    <div style="padding: 20px;">
      <h3 style="text-align: left">共 {{all}} 篇</h3>
      <a-row :gutter="16">
        <a-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" :xll="6" @click="choose(key.date)" v-for="(key, index) in allData" :key="index">
          <a-card :hoverable="true" class="doccard">
            <p style="text-align: left; font-size: 13px">{{key.date}} ({{key.num}})</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import api from "../../httpconfig/request";
export default {
  name: "doc",
  props: {
    msg: String
  },
  data() {
    return {
      allData: [],
      all: 0
    };
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      api.getDate('', res => {
        const code = res.data.code;
        if (code === 100) {
          this.allData = res.data.data
          this.all = res.data.count
          this.spinning = false;
          this.allData = res.data.data;
          this.loading = true;
        } else {
          this.loading = true;
        }
      });
    },
    choose(date) {
      this.$router.push({
        path: "/search/searchValue:date=" + date
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.doccard {
  height: 120px;
  margin-top: 10px;
}
.doccard:hover {
  color: rgb(110, 10, 7);
}
.contentRight {
}
</style>
