<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fetchAllArticles">Get Articles</button>
    <button @click="fetchArticle">Update</button>
    <button @click="fetchComment">Get comment</button>
    <div style="width: 50%;">
      <pre v-text="stateResponse" style="text-align: left;"></pre>
    </div>
    <div style="width: 50%;">
      <pre v-text="stateEntities" style="text-align: left;"></pre>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class Home extends Vue {
  @Prop() private msg!: string

  @Action private fetchAllArticles!: () => void
  @Action private fetchArticle!: () => void
  @Action private fetchComment!: () => void
  @Getter private allUsers: any
  @Getter private getEntitiesState: any
  @Getter private getCommentsForArticle!: (id: string) => any

  private get stateResponse() {
    return JSON.stringify(this.getEntitiesState.response, null, 2)
  }
  private get stateEntities() {
    return JSON.stringify(this.getEntitiesState.n_entities, null, 2)
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
