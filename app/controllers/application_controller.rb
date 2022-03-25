class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

private

  def render_record_not_found
    render json: { error: "Record Not Found" }, status: :not_found
  end
end
