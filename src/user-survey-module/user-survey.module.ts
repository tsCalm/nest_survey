import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from '../survey-module/survey.entity';
import { SurveyService } from '../survey-module/survey.service';
import { UserResponse } from './entity/user-response.entity';
import { UserSurvey } from './entity/user-survey.entity';
import { UserSurveyResolver } from './resolver/user-survey.resolver';
import { UserSurveyService } from './service/user-survey.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSurvey, Survey, UserResponse])],
  providers: [UserSurveyResolver, UserSurveyService, SurveyService],
})
export class UserSurveyModule {}
