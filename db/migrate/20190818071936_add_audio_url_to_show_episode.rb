class AddAudioUrlToShowEpisode < ActiveRecord::Migration[5.2]
  def change
    add_column :show_episodes, :episode_audio, :string
  end
end
