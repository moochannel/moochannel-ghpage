<script lang="ts">
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'

  const strengths = [
    'フロントエンド、バックエンド、インフラまで開発経験があります。',
    'データベースのスキーマ設計の経験が多く、アプリケーションのモデリングや動作設計をしたり、逆にアプリケーションモデルからテーブル構造を考えることもします。',
    '他社が残したコードを引き継ぐことも多かったため、キャッチアップやリファクタリングは得意です。',
    '新しい技術やライブラリを見つけては試し、プロジェクトへの導入を提案することをよく行います。',
    '開発環境整備やタスク管理などを通じてチーム運営を支えることができます。',
    'Windows NT 4.0時代から自作PCを使っていて、ある程度のPCトラブルには対応できます。',
  ] satisfies string[]
</script>

<SectionTitle>強み</SectionTitle>
<section class="px-4 py-2">
  <Ul>
    {#each strengths as description}
      <LiDisk>{description}</LiDisk>
    {/each}
  </Ul>
</section>
