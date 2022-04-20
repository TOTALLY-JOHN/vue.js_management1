<template>
  <div>
    <img alt="Vue logo" width="200" height="200" :src="logoPath"/>
    <HelloWorld :msg="$appName"/>
    <br />
    <p>Environments: <strong>{{ $mode }}</strong></p>
    <p>Base Path: <strong>{{ $basePath }}</strong></p>
    <p>Custom .env variable test: <strong>{{ customEnvVarTest }}</strong></p>
  </div>
</template>

<script>
  import logoPath from '../../assets/logo.png';

  export default {
    name: 'HomePage',
    data () {
      return {
        logoPath,
        customEnvVarTest: import.meta.env.VITE_TEST,
      };
    },
  };
</script>