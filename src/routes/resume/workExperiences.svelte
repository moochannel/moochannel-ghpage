<script lang="ts">
  import H3 from '$lib/components/resume/h3.svelte'
  import LiDisk from '$lib/components/resume/liDisk.svelte'
  import SectionTitle from '$lib/components/resume/sectionTitle.svelte'
  import Ul from '$lib/components/resume/ul.svelte'
  import Markdown from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'

  import type { WorkExperience } from '../../domain/models/resume/workExperience'

  const plugins = [gfmPlugin()]

  let {
    workExperiences,
  }: {
    workExperiences: WorkExperience[]
  } = $props()
</script>

<SectionTitle>職務経歴</SectionTitle>
<section class="px-4 py-2">
  {#each workExperiences as exp}
    <section class="mb-4 last:mb-0">
      <H3>{exp.company} ({exp.tenure})</H3>
      <section class="pl-4">
        <ul>
          <li>従業員数: {exp.employeeSize}名</li>
          <li>雇用形態: {exp.employment}</li>
        </ul>
        <h4>プロジェクト:</h4>
        <section class="pl-4">
          {#each exp.projects as project}
            <h5 class="mt-4 border-b font-bold first:mt-0">
              {project.title} ({project.termFrom}～{project.termTo || '継続中'})
            </h5>
            <section class="pl-4">
              <h6>担当業務</h6>
              <div class="markdown pl-4">
                <Markdown md={project.responsibilities} {plugins} />
              </div>
              <h6>使用した技術</h6>
              {#each project.techStacks as techStack}
                <section class="pl-4">
                  <p>{techStack.genre}</p>
                  <Ul>
                    {#each techStack.stacks as tech}
                      <LiDisk>{tech}</LiDisk>
                    {/each}
                  </Ul>
                </section>
              {/each}
            </section>
          {/each}
        </section>
      </section>
    </section>
  {/each}
</section>

<style>
  .markdown :global(ul) {
    @apply pl-4;
  }
  .markdown :global(ul li) {
    @apply ml-4 list-outside list-disc;
  }
</style>
