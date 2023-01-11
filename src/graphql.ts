
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateOptionInput {
    text: string;
    order: number;
    question_id: number;
}

export interface UpdateOptionInput {
    text?: Nullable<string>;
    order?: Nullable<number>;
}

export interface CreateQuestionInput {
    title: string;
    order: number;
    score: number;
    example?: Nullable<string>;
    survey_id: number;
}

export interface UpdateQuestionInput {
    title?: Nullable<string>;
    order?: Nullable<number>;
    score?: Nullable<number>;
    example?: Nullable<string>;
}

export interface CreateSurveyInput {
    title: string;
    sub_title: string;
    description: string;
}

export interface UpdateSurveyInput {
    title?: Nullable<string>;
    sub_title?: Nullable<string>;
    description?: Nullable<string>;
}

export interface SurveyQuestionOption {
    id?: Nullable<number>;
    text?: Nullable<string>;
    order?: Nullable<number>;
    question_id?: Nullable<number>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
}

export interface IQuery {
    optionList(): Nullable<Nullable<SurveyQuestionOption>[]> | Promise<Nullable<Nullable<SurveyQuestionOption>[]>>;
    option(id: number): Nullable<SurveyQuestionOption> | Promise<Nullable<SurveyQuestionOption>>;
    questionList(): Nullable<Nullable<SurveyQuestion>[]> | Promise<Nullable<Nullable<SurveyQuestion>[]>>;
    question(id: number): Nullable<SurveyQuestion> | Promise<Nullable<SurveyQuestion>>;
    surveyList(): Nullable<Nullable<Survey>[]> | Promise<Nullable<Nullable<Survey>[]>>;
    survey(id: number): Nullable<Survey> | Promise<Nullable<Survey>>;
}

export interface IMutation {
    createOption(createOptionInput?: Nullable<CreateOptionInput>): Nullable<SurveyQuestionOption> | Promise<Nullable<SurveyQuestionOption>>;
    updateOption(id: number, updateOptionInput?: Nullable<UpdateOptionInput>): Nullable<SurveyQuestionOption> | Promise<Nullable<SurveyQuestionOption>>;
    createQuestion(createQuestionInput?: Nullable<CreateQuestionInput>): Nullable<SurveyQuestion> | Promise<Nullable<SurveyQuestion>>;
    updateQuestion(id: number, updateQuestionInput?: Nullable<UpdateQuestionInput>): Nullable<SurveyQuestion> | Promise<Nullable<SurveyQuestion>>;
    createSurvey(createSurveyInput?: Nullable<CreateSurveyInput>): Nullable<Survey> | Promise<Nullable<Survey>>;
    updateSurvey(id: number, updateSurveyInput?: Nullable<UpdateSurveyInput>): Nullable<Survey> | Promise<Nullable<Survey>>;
}

export interface SurveyQuestion {
    id?: Nullable<number>;
    title?: Nullable<string>;
    order?: Nullable<number>;
    score?: Nullable<number>;
    example?: Nullable<string>;
    survey_id?: Nullable<number>;
    options?: Nullable<Nullable<SurveyQuestionOption>[]>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
}

export interface Survey {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    questions?: Nullable<Nullable<SurveyQuestion>[]>;
    created_at: DateTime;
    updated_at: DateTime;
}

export interface UserResponse {
    user_survey_id?: Nullable<number>;
    question_id?: Nullable<number>;
    user_answer?: Nullable<string>;
}

export interface UserSurvey {
    survey_id?: Nullable<number>;
    ip?: Nullable<string>;
    isComplete?: Nullable<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
