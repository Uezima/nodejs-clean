import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add (survayData: AddSurveyParams): Promise<void>
}
