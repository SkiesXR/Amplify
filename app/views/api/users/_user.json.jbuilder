json.extract! user, :id, :username, :email, :image_url
if user.profile.attached?
    json.photoUrl url_for(user.profile)
else
    json.photoUrl ""
end

