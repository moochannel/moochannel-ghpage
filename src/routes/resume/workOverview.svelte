<script lang="ts">
  import H3 from '$lib/components/resume/h3.svelte'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'

  interface Affiliation {
    company: string
    term: string
    position: string
  }

  const affiliations = [
    {
      company: '株式会社システムズノエル',
      term: '2008年2月～',
      position: 'システムエンジニア',
    },
    {
      company: '株式会社クロスネット',
      term: '1997年6月～2008年1月',
      position: 'システムエンジニア',
    },
  ] satisfies Affiliation[]

  interface WorkSummary {
    category: string
    subCategories: {
      title: string
      descriptions: string[]
    }[]
  }

  const workSummary = [
    {
      category: 'ソフトウェア開発',
      subCategories: [
        {
          title: 'Webアプリケーション開発',
          descriptions: [
            'TypeScript(SvelteKit/Nuxt): 4年',
            'Python(Django REST Framework/Django/Pyramid): 10年以上',
            'Ruby(Rails): 5年',
          ],
        },
        {
          title: 'クライアント/サーバ型システム開発',
          descriptions: ['Oracle Developer R6: 10年以上'],
        },
      ],
    },
  ] satisfies WorkSummary[]
</script>

{#snippet headerCell(text: string)}
  <th class="border-border-slate-300 border px-2 py-1">{text}</th>
{/snippet}

{#snippet dataCell(text: string)}
  <td class="border-border-slate-300 border px-2 py-1">{text}</td>
{/snippet}

{#snippet headerRow(values: string[])}
  <tr class="bg-slate-300">
    {#each values as value}
      {@render headerCell(value)}
    {/each}
  </tr>
{/snippet}

{#snippet dataRow(values: string[])}
  <tr class="odd:bg-transparent even:bg-slate-100">
    {#each values as value}
      {@render dataCell(value)}
    {/each}
  </tr>
{/snippet}

<SectionTitle>職務経歴(概要)</SectionTitle>
<section class="px-4 py-2">
  <table class="border-collapse border">
    <thead>
      {@render headerRow(['会社名', '期間', '職務'])}
    </thead>
    <tbody>
      {#each affiliations as affiliation}
        {@render dataRow([affiliation.company, affiliation.term, affiliation.position])}
      {/each}
    </tbody>
  </table>

  <div class="mt-2">
    {#each workSummary as summary}
      <H3>{summary.category}</H3>
      <Ul>
        {#each summary.subCategories as sub}
          <LiDisk>
            {sub.title}
            <Ul>
              {#each sub.descriptions as description}
                <LiDisk>{description}</LiDisk>
              {/each}
            </Ul>
          </LiDisk>
        {/each}
      </Ul>
    {/each}
  </div>
</section>
