<template lang="nunjucks">
  <div>
    <section>
      <h1>HEAD SECTION</h1>
      {% block head %}{% endblock %}
    </section>
    <h2>HEAD SECTION</h2>
    <main>
      <p>ここから下がメイン</p>
      {% block content %}{% endblock %}
    </main>
  </div>
</template>
<script>
export default {
  name: 'Base'
}
</script>
