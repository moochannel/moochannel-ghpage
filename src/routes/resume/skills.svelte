<script lang="ts">
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'

  const skills = [
    'SvelteKit(SSR)、Nuxt.js(CSR)を使用したフロントエンド開発',
    'AWS Lambda、Django REST Frameworkを使用したバックエンド開発',
    'Django、Pyramidを使用したサーバサイド開発',
    'データベース(PostgreSQL、MySQL、Oracle)のスキーマ設計',
    'SSTを使用したコードベースのAWSインフラ管理',
    'CI/CD環境(主にGitHub Actions)を含む、デプロイ環境の整備',
    '開発環境整備(Git/GitHub、パッケージマネージャ、(Python)仮想環境、Linter、Formatter、Dockerなど)',
    'チーム開発におけるタスク管理(カンバン方式)、コードレビュー',
  ] satisfies string[]
</script>

<SectionTitle>保有スキル</SectionTitle>
<section class="px-4 py-2">
  <Ul>
    {#each skills as description}
      <LiDisk>{description}</LiDisk>
    {/each}
  </Ul>
</section>
