<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |

      <!-- パスが長いと色々と面倒 -->
      <!-- <router-link to="/sample/path/to/destination">Sample</router-link> -->

      <!-- 名前で指定できる -->
      <router-link :to="{ name: 'sample' }">Sample</router-link>

      <!-- パラメータを渡す場合 -->
      <!-- <router-link :to="{ name: 'sample', params: { id: 1 } }">Sample</router-link> -->

    </div>
    <button @click="toPath">toPath</button> |
    <button @click="toName">toName</button>
    <router-view/>
  </div>
</template>

<script>
    export default {
        methods: {
            // こっちで遷移させる場合も使える
            toPath () {
                this.$router.push('/sample/path/to/destination')
            },
            toName () {
                this.$router.push({ name: 'sample' })
            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
