class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render "api/tasks/index"
  end

  def create
    @task = Task.new(task_params)
    @task.assigner_id = current_user.id

    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find(params[:id])
    render "api/tasks/show"
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      render "api/tasks/show"
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def task_params
    params.require(:task).permit(:assigner_id, :assignee_id, :title, :due_date, :completion_status, :title, :description, :parent_task_id)
  end
end
