class UserController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  get "/users" do
    users = User.all.to_json
  end

  get '/users/:id' do
    usersid = User.find(params[:id]).to_json
  end

  # get '/users/:id/name' do
  #   artsusername= User.find(params[:id]).name
  # end

  get '/users/:id/arts' do
    usersidarts = User.find(params[:id]).arts.to_json
  end

  # post '/users' do
  #   createusers = User.create(params).to_json
  # end

  # patch '/users' do
  #   changeusers = User.find(params[:id]).to_json
  #   User.create(name: params[:name], username: [:username], email: params[:email], password: params[:password], bio: params[:bio], image:  params[:image]).to_json
  # end

  delete '/users' do
    deleteusers = User.find(params[:id]).destroy
  end

end
