<script lang="ts">
  import { base } from '$app/paths'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'
</script>

<div class="mb-8 bg-green-100 p-6 shadow-md">
  <h1 class="mb-2 text-3xl font-bold">moochannel.github.io</h1>
</div>

<SectionTitle>コンテンツ</SectionTitle>
<section>
  <Ul>
    <LiDisk><a href="{base}/resume">職務経歴書</a></LiDisk>
  </Ul>
</section>
