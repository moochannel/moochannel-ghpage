import { Container } from 'inversify'

import type { IWorkExperienceRepository } from '../domain/models/resume/iWorkExperienceRepository'
import { StubWorkExperienceRepository } from '../infrastructure/stub/resume/stubWorkExperienceRepository'
import { TYPES } from './types'

const container = new Container()

container.bind<IWorkExperienceRepository>(TYPES.IWorkExperience).toDynamicValue(() => {
  return new StubWorkExperienceRepository()
})

export { container }
