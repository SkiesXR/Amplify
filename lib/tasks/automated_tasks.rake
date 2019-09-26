namespace :automated_tasks do
    desc "Clear Demo User Playlists"
    task :clear_demo_playlists => :environment do 
        puts " #{Time.now} - Clearing Demo User playlists..."

        # Determine Demo User
        demo_user = User.find(1)

        # Delete PlaylistItem records that contain Demo User's playlist ids
        demo_playlists = demo_user.playlists
        demo_playlists.each do |playlist|
            PlaylistItem.where("playlist_id = #{playlist.id}").delete_all
            playlist.destroy
        end

        # Delete Demo User playlists
        # demo_playlists.destroy

        puts "#{Time.now} - Success!"
    end
end
