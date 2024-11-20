<script lang="ts">
  import type { PageData } from './$types'
  import Personal from './personal.svelte'
  import Skills from './skills.svelte'
  import Strengths from './strengths.svelte'
  import TechStacks from './techStacks.svelte'
  import WorkExperiences from './workExperiences.svelte'
  import WorkOverview from './workOverview.svelte'

  let { data }: { data: PageData } = $props()
</script>

<div class="mb-8 bg-green-100 p-6 shadow-md">
  <h1 class="mb-2 text-3xl font-bold">職務経歴書</h1>
</div>

<section class="mt-4">
  <Personal />
</section>

<section class="mt-4">
  <Skills />
</section>

<section class="mt-4">
  <TechStacks />
</section>

<section class="mt-4">
  <Strengths />
</section>

<section class="mt-4">
  <WorkOverview />
</section>

<section class="mt-4">
  <WorkExperiences workExperiences={data.workExperiences} />
</section>
