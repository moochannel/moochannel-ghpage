<script lang="ts">
  import H3 from '$lib/components/resume/h3.svelte'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'
</script>

<SectionTitle>職務経歴(概要)</SectionTitle>
<section class="px-4 py-2">
  <table class="border-collapse border">
    <thead>
      <tr class="bg-slate-300">
        <th class="border-border-slate-300 border px-2 py-1">会社名</th>
        <th class="border-border-slate-300 border px-2 py-1">期間</th>
        <th class="border-border-slate-300 border px-2 py-1">職務</th>
      </tr>
    </thead>
    <tbody>
      <tr class="odd:bg-transparent even:bg-slate-100">
        <td class="border-border-slate-300 border px-2 py-1">株式会社システムズノエル</td>
        <td class="border-border-slate-300 border px-2 py-1">2008年2月～</td>
        <td class="border-border-slate-300 border px-2 py-1">システムエンジニア</td>
      </tr>
      <tr class="odd:bg-transparent even:bg-slate-100">
        <td class="border-border-slate-300 border px-2 py-1">株式会社クロスネット</td>
        <td class="border-border-slate-300 border px-2 py-1">1997年6月～2008年1月</td>
        <td class="border-border-slate-300 border px-2 py-1">システムエンジニア</td>
      </tr>
    </tbody>
  </table>

  <div class="mt-2">
    <H3>ソフトウェア開発</H3>
    <Ul>
      <LiDisk>
        Webアプリケーション開発
        <Ul>
          <LiDisk>TypeScript(SvelteKit/Nuxt): 4年</LiDisk>
          <LiDisk>Python(Django REST Framework/Django/Pyramid): 10年以上</LiDisk>
          <LiDisk>Ruby(Rails): 5年</LiDisk>
        </Ul>
      </LiDisk>
      <LiDisk>
        クライアント/サーバ型システム開発
        <Ul>
          <LiDisk>Oracle Developer R6: 10年以上</LiDisk>
        </Ul>
      </LiDisk>
    </Ul>
  </div>
</section>
