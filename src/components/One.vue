<template lang="nunjucks">
<div>
  {% block head %}
    {% raw %}<p>msg: {{ msg }}</p>{% endraw %}
  {% endblock %}
  {% block content %}
    <p>{% if true %}Hello World!{% endif %}</p>
    <router-link to="/two">/two</router-link>
  {% endblock %}
</div>
</template>

<script>
import Base from '../lauyout/Base'

export default {
  extends: Base,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
