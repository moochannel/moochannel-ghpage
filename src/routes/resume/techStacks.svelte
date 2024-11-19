<script lang="ts">
  import H3 from '$lib/components/resume/h3.svelte'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'
</script>

<SectionTitle>技術スタック</SectionTitle>
<section class="px-4 py-2">
  <H3>TypeScript</H3>
  <Ul>
    <LiDisk>
      4.2～5.5で実務経験あり。フロントエンド、バックエンド、IaaCで使用していて、通常の業務で必要な読み書きは可能。
    </LiDisk>
    <LiDisk>
      フレームワークとしてはSvelteKit(Svelte v4)、Nuxt.js(v2)、SST(v0.29～v2)が実務経験あり。
    </LiDisk>
  </Ul>
  <H3>Python</H3>
  <Ul>
    <LiDisk>
      2.1～3.9で実務経験あり。MPA、バックエンド、デプロイスクリプトなどで採用した他、ちょっとしたデータ処理などでは真っ先に利用を検討する。
    </LiDisk>
    <LiDisk>フレームワークとしてはDjango REST Framework、Django、Pyramidが実務経験あり。</LiDisk>
  </Ul>
  <H3>Ruby</H3>
  <Ul>
    <LiDisk>1.8で実務経験あり。ただし、Railsでの使用のみ。</LiDisk>
    <LiDisk>
      フレームワークとしてはRuby on
      Rails(v2.3)が実務経験あり。既存のコードの追加開発のみで、新規で採用したことはない。
    </LiDisk>
  </Ul>
  <H3>Oracle Developer</H3>
  <Ul>
    <LiDisk>R6で実務経験あり。Oracleデータベースに対するクライアントアプリ開発で使用した。</LiDisk>
  </Ul>
  <H3>データベース系</H3>
  <Ul>
    <LiDisk>
      PostgreSQL、Oracle、MySQL(MariaDB)の実務経験あり。近年はO/R
      Mapper経由での利用が多いが、時々複雑なクエリを直接SQLで書くこともある。
    </LiDisk>
  </Ul>
  <H3>インフラ・デプロイ系</H3>
  <Ul>
    <LiDisk>SST(旧Serverless Stack)</LiDisk>
    <LiDisk>GitHub Actions</LiDisk>
    <LiDisk>Docker</LiDisk>
    <LiDisk>Fabric(Python)</LiDisk>
  </Ul>
  <H3>開発環境系</H3>
  <Ul>
    <LiDisk>ESLint</LiDisk>
    <LiDisk>Prettier</LiDisk>
    <LiDisk>changesets</LiDisk>
    <LiDisk>pnpm(TypeScript)</LiDisk>
    <LiDisk>Poetry(Python)</LiDisk>
  </Ul>
</section>
