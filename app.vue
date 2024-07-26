<template>
  <div>
    <All_Header />
    <div class="default">
      <All_Sidebar />
      <NuxtPage />
      <All_Calender2 />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    loadInfogramScript() {
      if (document.getElementById('infogram-async')) {
        return;
      }
      const script = document.createElement('script');
      script.async = true;
      script.id = 'infogram-async';
      script.src = '//e.infogram.com/js/dist/embed-loader-min.js';
      document.head.appendChild(script);
    }
  }, mounted() {
    this.loadInfogramScript();
  },
};
</script>
<style lang="scss">
@mixin phone {
  @media (min-width: 550px) {
    @content;
  }
}

@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}




.default {
  max-width: 80%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
}

.mb {
  display: block;

  @include pad {
    display: none;
  }
}

.pc {
  display: none;

  @include pad {
    display: block;
  }
}
</style>
