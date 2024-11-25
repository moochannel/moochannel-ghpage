<script lang="ts">
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'

  interface PersonalInfo {
    title: string
    value: string
  }

  const personalInfo = [
    { title: '氏名', value: '上田 勝久' },
    { title: 'Web', value: 'https://moochannel.github.io' },
  ] satisfies PersonalInfo[]
</script>

{#snippet row(key: string, value: string)}
  <tr class="odd:bg-transparent even:bg-slate-100">
    <td class="border-y border-slate-300 px-2 py-1">{key}</td>
    {#if URL.canParse(value)}
      <td class="border-y border-slate-300 px-2 py-1"><a href={value}>{value}</a></td>
    {:else}
      <td class="border-y border-slate-300 px-2 py-1">{value}</td>
    {/if}
  </tr>
{/snippet}

<SectionTitle>基本情報</SectionTitle>
<section class="px-4 py-2">
  <table class="border-collapse">
    <tbody>
      {#each personalInfo as info}
        {@render row(info.title, info.value)}
      {/each}
    </tbody>
  </table>
</section>
