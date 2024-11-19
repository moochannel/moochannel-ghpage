<script lang="ts">
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'
</script>

<SectionTitle>保有スキル</SectionTitle>
<section class="px-4 py-2">
  <Ul>
    <LiDisk>SvelteKit(SSR)、Nuxt.js(CSR)を使用したフロントエンド開発</LiDisk>
    <LiDisk>AWS Lambda、Django REST Frameworkを使用したバックエンド開発</LiDisk>
    <LiDisk>Django、Pyramidを使用したサーバサイド開発</LiDisk>
    <LiDisk>データベース(PostgreSQL、MySQL、Oracle)のスキーマ設計</LiDisk>
    <LiDisk>SSTを使用したコードベースのAWSインフラ管理</LiDisk>
    <LiDisk>CI/CD環境(主にGitHub Actions)を含む、デプロイ環境の整備</LiDisk>
    <LiDisk>
      開発環境整備(Git/GitHub、パッケージマネージャ、(Python)仮想環境、Linter、Formatter、Dockerなど)
    </LiDisk>
    <LiDisk>チーム開発におけるタスク管理(カンバン方式)、コードレビュー</LiDisk>
  </Ul>
</section>
