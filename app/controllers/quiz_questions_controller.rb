class QuizQuestionsController < ApplicationController


    def show
        question = find_question
        render json: question
    end

    def index
        questions = QuizQuestion.all
        render json: questions, status: :ok
    end

    private

    def find_question
        QuizQuestion.find_by!(id: params[:id])
    end
    
end
