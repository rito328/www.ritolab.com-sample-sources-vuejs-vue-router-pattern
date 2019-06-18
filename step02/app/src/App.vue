<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page/01">Page 01</router-link> |
      <router-link to="/page/02">Page 02</router-link> |
      <router-link to="/page/03">Page 03</router-link> |
      <router-link to="/page/04">Page 04</router-link> |
      <router-link to="/page/05">Page 05</router-link>
    </div>
    <button @click="back">back</button> |
    <button @click="forward">forward</button><br><br>
    <button @click="backDouble">back double</button> |
    <button @click="forwardDouble">forward double</button> |<br><br>
    <button @click="push">push</button> |
    <button @click="replace">replace</button>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'Root',
        methods: {
            forward () {
                // 1つ前へ
                this.$router.forward()
            },
            back () {
                // 1つ先へ
                this.$router.back()
            },
            forwardDouble () {
                // 2つ先へ
                this.$router.go(2)
            },
            backDouble () {
                // 2つ前へ
                this.$router.go(-2)
            },
            push () {
                // Historyは追加される
                this.$router.push('Jump')
            },
            replace () {
                // 現在のhistoryを置換する
                this.$router.replace('Jump')
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
