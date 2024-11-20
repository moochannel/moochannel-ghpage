<script lang="ts">
  import type { Snippet } from 'svelte'

  import '../app.css'

  interface Props {
    header?: Snippet
    footer?: Snippet
    children: Snippet
  }
  let { header, footer, children }: Props = $props()
</script>

<div class="bg-slate-100">
  <div
    class="container mx-auto grid min-h-svh grid-rows-[auto_1fr_auto] bg-white px-4 py-8 shadow-md"
  >
    <header class="row-span-1">
      {#if header}
        {@render header()}
      {/if}
    </header>

    <main class="row-span-1">
      {@render children()}
    </main>

    <footer class="row-span-1">
      {#if footer}
        {@render footer()}
      {/if}
      <p class="text-center">&copy; 2024 Katsuhisa Ueda</p>
      <p class="text-center">
        このサイトはSvelteKitで作成しています。 →<a
          href="https://github.com/moochannel/moochannel.github.io">リポジトリ</a
        >
      </p>
    </footer>
  </div>
</div>
