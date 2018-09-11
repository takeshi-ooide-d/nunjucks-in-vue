<template lang="nunjucks">
  <div>
    {% for i in [1,2,3,4,5] %}
      {{ i }}
    {% endfor %}
    <div>
      <router-link to="/">/</router-link>
    </div>
  </div>
</template>
