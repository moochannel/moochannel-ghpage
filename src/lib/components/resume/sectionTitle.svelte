<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<h2 class="text-xl font-bold text-green-600">{@render children()}</h2>
