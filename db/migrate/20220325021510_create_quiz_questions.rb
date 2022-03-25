class CreateQuizQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_questions do |t|
      t.string :question_text
      t.string :ao_1
      t.string :ao_2
      t.string :ao_3
      t.string :ao_4
      t.string :ao_5

      t.timestamps
    end
  end
end
