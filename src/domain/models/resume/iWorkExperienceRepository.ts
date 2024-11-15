import type { ResultAsync } from 'neverthrow'

import type { WorkExperience } from './workExperience'

export interface IWorkExperienceRepository {
  list(): ResultAsync<WorkExperience[], Error>
}
