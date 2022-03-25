class QuizQuestion < ApplicationRecord
validates :question_text, presence: true, length: {maximum: 500}

end
