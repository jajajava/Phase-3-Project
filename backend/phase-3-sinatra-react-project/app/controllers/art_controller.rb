class ArtController < Sinatra::Base
    set :default_content_type, 'application/json'
    

    get '/arts' do
        arts = Art.all.to_json
    end

    get '/arts/:id' do
        artsid = Art.find(params[:id]).to_json
    end

    get '/arts/:id/user' do
        artsuser = Art.find(params[:id]).user.to_json
    end

    # get '/arts/title/:title' do
    #     artstitle = Art.find(params[:title]).to_json
    # end

    # get '/arts/medium/:medium' do
    #     artsmedium = Art.find(params[:medium]).to_json
    # end


    post '/arts' do
        createarts = Art.create(title: params[:title], medium: params[:medium], description: params[:description], image: params[:image], size: params[:size], price: params[:price], timestamp: params[:timestamp], tags: params[:tags], user_id: params[:user_id]).to_json
    end

    patch '/arts/:id' do
        changearts = Art.find(params[:id]).to_json
        changearts.update(title: params[:title], medium: params[:medium], description: params[:description], image: params[:image], size: params[:size], price: params[:price], timestamp: params[:timestamp], tags: params[:tags], user_id: params[:user_id]).to_json
    end

    delete '/arts/:id' do
        deletearts = Art.find(params[:id]).destroy
    end
  
  end