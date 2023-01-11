import { Survey } from '../survey-module/survey.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base-entity';

@Entity()
export class SurveyQuestion extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'smallint' })
  order: number;

  @Column({ type: 'smallint' })
  score: number;

  @Column({ type: 'text', default: null })
  example: string;

  @Column()
  survey_id: number;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;
}
