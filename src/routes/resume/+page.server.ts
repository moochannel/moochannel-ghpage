import { container } from '../../di/container'
import { FetchWorkExperiencesUseCase } from '../../domain/usecases/resume/fetchWorkExperiences'
import type { PageServerLoad } from './$types'

export const load = (async () => {
  const workExperiences = await container
    .resolve(FetchWorkExperiencesUseCase)
    .execute()
    .match(
      (exps) => exps,
      () => [],
    )

  return {
    workExperiences,
  }
}) satisfies PageServerLoad
