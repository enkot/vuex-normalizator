<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getArticles">Get Articles</button>
    <button @click="updateArticles">Update</button>
    <pre v-text="appState" style="text-align: left;"></pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Home extends Vue {
  @Prop() private msg!: string

  @Action private fetchFirstData!: () => void
  @Action private fetchSecondData!: () => void
  @Getter private allUsers: any
  @Getter private getEntitiesState: any
  @Getter private getCommentsForArticle!: (id: string) => any

  private get appState() {
    return JSON.stringify(this.getEntitiesState, null, 2)
  }
  private async getArticles() {
    await this.fetchFirstData()
  }
  private async updateArticles() {
    await this.fetchSecondData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
