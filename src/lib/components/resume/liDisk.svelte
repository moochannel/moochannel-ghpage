<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<li class="ml-4 list-outside list-disc">{@render children()}</li>
