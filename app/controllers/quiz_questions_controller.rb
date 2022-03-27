class QuizQuestionsController < ApplicationController


    def show
        question = find_question
        render json: question
    end

    def index
        questions = QuizQuestion.all
        render json: questions, status: :ok
    end

    def create
        new_entry = QuizQuestion.create!(question_params)
        render json: new_entry, status: :created
    end

    def update
        # byebug
        to_update = find_question
        to_update.update(question_params)
        render json: { "DELETED": to_update }, status: :ok
    end

    def destroy
        to_delete = find_question
        to_delete.delete
        render json: to_delete, status: :ok
    end
    private

    def find_question
        QuizQuestion.find_by!(id: params[:id])
    end

    def question_params
        params.permit(:question_text, :ao_1, :ao_2, :ao_3, :ao_4, :ao_5)
    end
end
