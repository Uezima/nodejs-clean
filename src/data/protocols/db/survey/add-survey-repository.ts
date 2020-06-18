import { AddSurveyModel } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add (survayData: AddSurveyModel): Promise<void>
}
