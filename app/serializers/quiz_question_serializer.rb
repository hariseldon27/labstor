class QuizQuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :ao_1, :ao_2, :ao_3, :ao_4, :ao_5
end
