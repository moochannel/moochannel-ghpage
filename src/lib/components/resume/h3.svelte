<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<h3 class="text-lg font-bold">{@render children()}</h3>
