class Api::ShowEpisodesController < ApplicationController

    def index
        debugger
        @show_episodes = ShowEpisode.all
        if @show_episodes
            render :index
        else
            render json: @show_episodes.errors.full_messages, status: 422
        end
    end

    def show
        @show_episode = ShowEpisode.find(params[:id])
        if @show_episode
            render :show
        else
            render json: ['Podcast episode does not exist.'], status: 422
        end
    end

end
