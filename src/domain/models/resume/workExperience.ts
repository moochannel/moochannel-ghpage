export type WorkExperience = {
  company: string
  employeeSize: number
  tenure: string
  employment: string
  projects: {
    title: string
    termFrom: number
    termTo: number | null
    teamSize: number
    roles: string[]
    responsibilities: string
    techStacks: {
      genre: string
      stacks: string[]
    }[]
  }[]
}
