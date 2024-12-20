import { inject, injectable } from 'inversify'
import type { ResultAsync } from 'neverthrow'

import { TYPES } from '../../../di/types'
import type { IWorkExperienceRepository } from '../../models/resume/iWorkExperienceRepository'
import type { WorkExperience } from '../../models/resume/workExperience'

@injectable()
export class FetchWorkExperiencesUseCase {
  constructor(
    @inject(TYPES.IWorkExperience)
    private workExperienceRepository: IWorkExperienceRepository,
  ) {}

  public execute(): ResultAsync<WorkExperience[], Error> {
    return this.workExperienceRepository.list().map((exps) => {
      const copyExps = [...exps].reverse()
      const reversedExps = copyExps.map((exps) => {
        const projects = exps.projects.reverse()
        return { ...exps, projects }
      })
      return reversedExps
    })
  }
}
