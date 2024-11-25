<script lang="ts">
  import H3 from '$lib/components/resume/h3.svelte'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'

  interface TechStack {
    title: string
    descriptions: string[]
  }

  const techStacks = [
    {
      title: 'TypeScript',
      descriptions: [
        '4.2～5.5で実務経験あり。フロントエンド、バックエンド、IaaCで使用していて、通常の業務で必要な読み書きは可能。',
        'フレームワークとしてはSvelteKit(Svelte v4)、Nuxt.js(v2)、SST(v0.29～v2)が実務経験あり。',
      ],
    },
    {
      title: 'Python',
      descriptions: [
        '2.1～3.9で実務経験あり。MPA、バックエンド、デプロイスクリプトなどで採用した他、ちょっとしたデータ処理などでは真っ先に利用を検討する。',
        'フレームワークとしてはDjango REST Framework、Django、Pyramidが実務経験あり。',
      ],
    },
    {
      title: 'Ruby',
      descriptions: [
        '1.8で実務経験あり。ただし、Railsでの使用のみ。',
        'フレームワークとしてはRuby on Rails(v2.3)が実務経験あり。既存のコードの追加開発のみで、新規で採用したことはない。',
      ],
    },
    {
      title: 'Oracle Developer',
      descriptions: [
        'R6で実務経験あり。Oracleデータベースに対するクライアントアプリ開発で使用した。',
      ],
    },
    {
      title: 'データベース系',
      descriptions: [
        'PostgreSQL、Oracle、MySQL(MariaDB)の実務経験あり。近年はO/R Mapper経由での利用が多いが、時々複雑なクエリを直接SQLで書くこともある。',
      ],
    },
    {
      title: 'インフラ・デプロイ系',
      descriptions: ['SST(旧Serverless Stack)', 'GitHub Actions', 'Docker', 'Fabric(Python)'],
    },
    {
      title: '開発環境系',
      descriptions: ['ESLint', 'Prettier', 'changesets', 'pnpm(TypeScript)', 'Poetry(Python)'],
    },
  ] satisfies TechStack[]
</script>

<SectionTitle>技術スタック</SectionTitle>
<section class="px-4 py-2">
  {#each techStacks as stack}
    <H3>{stack.title}</H3>
    <Ul>
      {#each stack.descriptions as description}
        <LiDisk>{description}</LiDisk>
      {/each}
    </Ul>
  {/each}
</section>
