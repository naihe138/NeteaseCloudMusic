<template>
  <div>
    <p class="test">{{count}}</p>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      }
    },
    methods: {
      async add () {
        let res = await this.test()
        console.log(res)
      },
      test () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.count += 1
            resolve('done')
          }, 1000)
        })
      }
    }
  }
</script>

<style scoped>
  .test {
    color: hotpink;
    background: blueviolet
  }
</style>
