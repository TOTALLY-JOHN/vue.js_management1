<template>
  <div>
    <img alt="Vue logo" width="200" height="200" :src="logoPath"/>
    <h2>Contact Page</h2>
  </div>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {
    name: 'ContactPage',
    data() {
      return {
        logoPath,
      };
    },
  };
</script>
