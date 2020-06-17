import { AddSurveyModel } from '@/domain/usecases/add-survey'

export interface AddSurveyRepository {
  add (survayData: AddSurveyModel): Promise<void>
}
