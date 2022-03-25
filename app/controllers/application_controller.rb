class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

private

  def render_record_not_found
    render json: { error: "Record Not Found" }, status: :not_found
  end
  def render_record_invalid(invalid)
    # byebug
    render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
