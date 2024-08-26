<script lang="ts">
  export let name = "World";
</script>

<div>
  <a href="/hello-world">Hello world</a>
</div>
<div> 
  <input bind:value={name}>
  <a href="/hello?name={name}"><button name="Hello {name}">Hello {name}</button></a>
</div>