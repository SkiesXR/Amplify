
require 'open-uri'

# Users

User.create!(username: "DemoUser", password: "password", email: "demouser@demo.com", image_url: nil)

# Genres

g1 = Genre.create!({category: "Rock"})
g1.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Rock.jpg'), filename: 'genre-rock.jpg')

g2 = Genre.create!({category: "Metal"})
g2.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Metal.jpg'), filename: 'genre-metal.jpg')
  
g3 = Genre.create!({category: "Indie"})
g3.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Indie.jpeg'), filename: 'genre-indie.jpg')

g4 = Genre.create!({category: "Chill"})
g4.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Chill.jpg'), filename: 'genre-chill.jpg')

g5 = Genre.create!({category: "Electronic"})
g5.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Chill.jpg'), filename: 'genre-electronic.jpg')

g6 = Genre.create!({category: "R&B"})
g6.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-RB.jpg'), filename: 'genre-rb.jpg')

g7 = Genre.create!({category: "Pop"})
g7.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Pop.jpg'), filename: 'genre-pop.jpg')

g8 = Genre.create!({category: "Soul"})
g8.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-Soul.jpg'), filename: 'genre-soul.jpg')

g9 = Genre.create!({category: "Hip Hop"})
g9.genre_image.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Genre+Photos/Genre-HipHop.jpg'), filename: 'genre-hiphop.jpg')

# Artists

a1 = Artist.create!(name: "Visceral Skies", bio: "4-piece instrumental project focusing on cinematic post-rock, ambient trip-hop and warm jazzy melodies.", image_url: "", genre_id: g1.id)
a1.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/Visceral+Skies.jpg'), filename: 'visceralskies.jpg')

a2 = Artist.create!(name: "Animalfirepower", bio: "Electronic music producer in Oakland, California. Affiliate of JK/47.", image_url: "", genre_id: g4.id)
a2.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/Animalfirepower.jpg'), filename: 'afp.jpg')

a3 = Artist.create!(name: "A Thousand Dead", bio: "Hailing from Oakland, Ca, A Thousand Dead blend pulse-pounding progressive death metal technicality with the instrumental diversity of jazz and the dynamic contrast of post-rock.", image_url: "", genre_id: g2.id)
a3.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/A+Thousand+Dead.jpg'), filename: 'atd.jpg')

a4 = Artist.create!(name: "Lost Anyway", bio: "Mary and Jane make up the Los Angeles girl band, Lost Anyway. The duo developed a musical bond in their high school orchestra and they just completed their self titled sophomore album, 'Lost Anyway.' Not your typical Cali kids, they showed serious effort in creating a niche all their own. After a decade of growth, there is no telling where this adventure will lead them!", image_url: "", genre_id: g3.id)
a4.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/LostAnyway.jpg'), filename: 'lostanyway.jpg')

a5 = Artist.create!(name: "Awaken the Echoes", bio: " ", image_url: "", genre_id: g1.id)
a5.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/AwakenTheEchoes.jpg'), filename: 'awakentheechoes.jpg')

a6 = Artist.create!(name: "JK47", bio: "Electronic music producer. Affiliate of Animal FirePower, Rotheads, Ghostwolf, and The Radar Cinema", image_url: "", genre_id: g5.id)
a6.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/Jk47.jpg'), filename: 'jk47.jpg')

a7 = Artist.create!(name: "Vandella", bio: "SF's Vandella is an indie-rock/soul outfit in the vein of Fleetwood Mac, Alabama Shakes, and Jenny Lewis. Fronted by the dynamic male + female duo of vocalist Tracey Holland and guitarist Chris Tye, the two distinct songwriters tie their complementary signatures together for a sound that feels both exciting yet effortlessly vibey - evocative of that hazy sheen of their native California.", image_url: "", genre_id: g1.id)
a7.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/Vandella.jpg'), filename: 'vandella.jpg')

a8 = Artist.create!(name: "Secrets of the Third Planet", bio: "Secrets of the Third Planet band (S3P)- electronic-shoegaze band from Moscow.", image_url: "", genre_id: g1.id)
a8.artist_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Artist+Photos/S3P.jpg'), filename: 's3p.jpg')

# Albums

al1 = Album.create!(title: "Visceral Skies", album_type: "EP", artist_id: a1.id, release_date: "2014-07-08", image_url: "temp")
al1.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Visceral+Skies+-+Visceral+Skies.jpg'), filename: 'visceralskies - vs.jpg')

al2 = Album.create!(title: "Chasing Goats", album_type: "Single", artist_id: a3.id, release_date: "2015-01-20", image_url: "temp")
al2.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/A+Thousand+Dead+-+Chasing+Goats.jpg'), filename: 'atd - cg.jpg')

al3 = Album.create!(title: "Portals", album_type: "EP", artist_id: a3.id, release_date: "2013-06-30", image_url: "temp")
al3.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/A+Thousand+Dead+-+Portals.jpg'), filename: 'atd - portals.jpg')

al4 = Album.create!(title: "Coma Sessions", album_type: "EP", artist_id: a2.id, release_date: "2016-10-13", image_url: "temp")
al4.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+CoMa+Sessions.jpg'), filename: 'afp - comasessions.jpg')

al5 = Album.create!(title: "Luna", album_type: "EP", artist_id: a2.id, release_date: "2014-03-04", image_url: "temp")
al5.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Luna.jpg'), filename: 'afp - luna.jpg')

al6 = Album.create!(title: "Paragon", album_type: "EP", artist_id: a2.id, release_date: "2017-06-16", image_url: "temp")
al6.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Paragon.jpg'), filename: 'afp - paragon.jpg')

al7 = Album.create!(title: "Skylines", album_type: "Album", artist_id: a2.id, release_date: "2017-01-17", image_url: "temp")
al7.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg'), filename: 'afp - skylines.jpg')

al8 = Album.create!(title: "Travels", album_type: "Album", artist_id: a5.id, release_date: "2013-05-17", image_url: "temp")
al8.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Awaken+the+Echoes+-+Travels.jpg'), filename: 'ate - travels.jpg')

al9 = Album.create!(title: "CYBERPUNK", album_type: "Album", artist_id: a6.id, release_date: "2014-08-20", image_url: "temp")
al9.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/JK47+-+Cyberpunk.jpg'), filename: 'jk47 - cyberpunk.jpg')

al10 = Album.create!(title: "Lost Anyway", album_type: "Album", artist_id: a4.id, release_date: "2012-12-22", image_url: "temp")
al10.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Lost+Anyway+-+Lost+Anyway.jpg'), filename: 'lostanyway - st.jpg')

al11 = Album.create!(title: "Растаял", album_type: "EP", artist_id: a8.id, release_date: "2014-12-14", image_url: "temp")
al11.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Secrets+of+the+Third+Planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB.jpg'), filename: 's3p - rastayl.jpg')

al12 = Album.create!(title: "Shine You Up", album_type: "EP", artist_id: a7.id, release_date: "2013-10-01", image_url: "temp")
al12.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Vandella+-+Shine+You+Up.jpg'), filename: 'vandella - shineyouup.jpg')

al13 = Album.create!(title: "Inferno Room", album_type: "Album", artist_id: a1.id, release_date: "2018-12-25", image_url: "temp")
al13.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Visceral+Skies+-+Inferno+Room.jpg'), filename: 'vs - infernoroom.jpg')

al14 = Album.create!(title: "Wormhole Karma", album_type: "Album", artist_id: a1.id, release_date: "2016-09-30", image_url: "temp")
al14.album_art.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/Visceral+Skies+-+Wormhole+Karma.jpg'), filename: 'vs - wormholekarma.jpg')

# Tracks
  
t1 = Track.create!(title: "Shadow", length: "04:12", artist_id: a1.id, album_id: al1.id)
t1.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Visceral+Skies/Visceral+Skies+-+Visceral+Skies+-+01+Shadow.mp3'), filename: 'vs - vs - shadow.mp3')

t2 = Track.create!(title: "Save the Clocktower", length: "03:08", artist_id: a1.id, album_id: al1.id)
t2.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Visceral+Skies/Visceral+Skies+-+Visceral+Skies+-+02+Save+the+Clocktower.mp3'), filename: 'vs - vs - save_the_clocktower.mp3')

t3 = Track.create!(title: "Man Under Palette", length: "03:59", artist_id: a1.id, album_id: al1.id)
t3.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Visceral+Skies/Visceral+Skies+-+Visceral+Skies+-+03+Man+Under+Palette.mp3'), filename: 'vs - vs - man_under_palette.mp3')

t4 = Track.create!(title: "Amber Lamps", length: "04:15", artist_id: a1.id, album_id: al1.id)
t4.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Visceral+Skies/Visceral+Skies+-+Visceral+Skies+-+04+Amber+Lamps.mp3'), filename: 'vs - vs - amber_lamps.mp3')

t5 = Track.create!(title: "We Are All Plugged In", length: "03:33", artist_id: a1.id, album_id: al1.id)
t5.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Visceral+Skies/Visceral+Skies+-+Visceral+Skies+-+05+We+are+all+Plugged+In.mp3'), filename: 'vs - vs - we_are_all_plugged_in.mp3')

t6 = Track.create!(title: "Cybernaut", length: "04:10", artist_id: a1.id, album_id: al2.id)
t6.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+01+Cybernaut.mp3'), filename: 'vs - wormhole_karma - cybernaut.mp3')

t7 = Track.create!(title: "EightyEight", length: "03:40", artist_id: a1.id, album_id: al2.id)
t7.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+02+EightyEight.mp3'), filename: 'vs - wormhole_karma - eightyeight.mp3')

t8 = Track.create!(title: "Throwing Gravity", length: "04:17", artist_id: a1.id, album_id: al2.id)
t8.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+03+Throwing+Gravity.mp3'), filename: 'vs - wormhole_karma - throwing_gravity.mp3')

t9 = Track.create!(title: "Silent Colors", length: "01:13", artist_id: a1.id, album_id: al2.id)
t9.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+04+Silent+Colors.mp3'), filename: 'vs - wormhole_karma - silent_colors.mp3')

t10 = Track.create!(title: "Let Yourself In", length: "04:47", artist_id: a1.id, album_id: al2.id)
t10.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+05+Let+Yourself+In.mp3'), filename: 'vs - wormhole_karma - let_yourself_in.mp3')

t11 = Track.create!(title: "Fractures", length: "03:55", artist_id: a1.id, album_id: al2.id)
t11.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+06+Fractures.mp3'), filename: 'vs - wormhole_karma - fractures.mp3')

t12 = Track.create!(title: "Halcyon", length: "01:32", artist_id: a1.id, album_id: al2.id)
t12.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+07+Halcyon.mp3'), filename: 'vs - wormhole_karma - halcyon.mp3')

t13 = Track.create!(title: "No Fate", length: "03:55", artist_id: a1.id, album_id: al2.id)
t13.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+08+No+Fate.mp3'), filename: 'vs - wormhole_karma - no_fate.mp3')

t14 = Track.create!(title: "Palms to Heaven", length: "03:56", artist_id: a1.id, album_id: al2.id)
t14.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Wormhole+Karma/Visceral+Skies+-+Wormhole+Karma+-+09+Palms+to+Heaven.mp3'), filename: 'vs - wormhole_karma - palms_to_heaven.mp3')

t15 = Track.create!(title: "Catching Fire", length: "04:00", artist_id: a1.id, album_id: al3.id)
t15.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+01+Catching+Fire.mp3'), filename: 'vs - inferno_room - catching_fire.mp3')

t16 = Track.create!(title: "Into the Feathers", length: "04:10", artist_id: a1.id, album_id: al3.id)
t16.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+02+Into+the+Feathers.mp3'), filename: 'vs - inferno_room - into_the_feathers.mp3')

t17 = Track.create!(title: "Skeleton Key", length: "04:05", artist_id: a1.id, album_id: al3.id)
t17.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+03+Skeleton+Key.mp3'), filename: 'vs - inferno_room - skeleton_key.mp3')

t18 = Track.create!(title: "Paul's Interlude", length: "02:10", artist_id: a1.id, album_id: al3.id)
t18.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+04+Pauls+Interlude.mp3'), filename: 'vs - inferno_room - pauls_interlud.mp3')

t19 = Track.create!(title: "Tracewinds", length: "04:01", artist_id: a1.id, album_id: al3.id)
t19.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+05+Tracewinds.mp3'), filename: 'vs - inferno_room - tracewinds.mp3')

t20 = Track.create!(title: "Axis Chemicals", length: "04:54", artist_id: a1.id, album_id: al3.id)
t20.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Visceral+Skies+-+Inferno+Room/Visceral+Skies+-+Inferno+Room+-+06+Axis+Chemicals.mp3'), filename: 'vs - inferno_room - axis_chemicals.mp3')

t21 = Track.create!(title: "East End", length: "04:05", artist_id: a2.id, album_id: al4.id)
t21.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+01+East+End.mp3'), filename: 'afp - luna - east_end.mp3')

t22 = Track.create!(title: "7series", length: "04:10", artist_id: a2.id, album_id: al4.id)
t22.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+02+7series.mp3'), filename: 'afp - luna - 7series.mp3')

t23 = Track.create!(title: "Nylons", length: "04:41", artist_id: a2.id, album_id: al4.id)
t23.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+03+Nylons.mp3'), filename: 'afp - luna - nylons.mp3')

t24 = Track.create!(title: "1314", length: "01:26", artist_id: a2.id, album_id: al5.id)
t24.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+04+1314.mp3'), filename: 'afp - luna - 1314.mp3')

t25 = Track.create!(title: "Harbor Lanterns", length: "04:31", artist_id: a2.id, album_id: al4.id)
t25.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+05+Harbor+Lanterns.mp3'), filename: 'afp - luna - harbor_lanterns.mp3')

t26 = Track.create!(title: "Koshiro", length: "04:28", artist_id: a2.id, album_id: al4.id)
t26.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Luna+EP/Animal+Firepower+-+Luna+EP+-+06+Koshiro.mp3'), filename: 'afp - luna - koshiro.mp3')

t27 = Track.create!(title: "Atlas", length: "03:14", artist_id: a2.id, album_id: al6.id)
t27.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Paragon/Animal+Firepower+-+Paragon+-+01+Atlas.mp3'), filename: 'afp - paragon - atlas.mp3')

t28 = Track.create!(title: "Nova", length: "03:07", artist_id: a2.id, album_id: al6.id)
t28.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Paragon/Animal+Firepower+-+Paragon+-+02+Nova.mp3'), filename: 'afp - paragon - nova.mp3')

t29 = Track.create!(title: "1314", length: "01:06", artist_id: a2.id, album_id: al6.id)
t29.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Paragon/Animal+Firepower+-+Paragon+-+03+1314.mp3'), filename: 'afp - paragon - 1314.mp3')

t30 = Track.create!(title: "Cascade", length: "02:59", artist_id: a2.id, album_id: al6.id)
t30.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Paragon/Animal+Firepower+-+Paragon+-+04+Cascade.mp3'), filename: 'afp - paragon - cascade.mp3')

t31 = Track.create!(title: "The Ventriloquist", length: "03:09", artist_id: a2.id, album_id: al7.id)
t31.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+CoMa+Sessions/Animal+Firepower+-+CoMa+Sessions+-+01+The+Ventriloquist.mp3'), filename: 'afp - coMa_sessions - the_ventriloquist.mp3')

t32 = Track.create!(title: "Mynah Metamorphose", length: "03:34", artist_id: a2.id, album_id: al7.id)
t32.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+CoMa+Sessions/Animal+Firepower+-+CoMa+Sessions+-+02+Mynah+Metamorphose.mp3'), filename: 'afp - coMa_sessions - mynah_metamorphose.mp3')

t33 = Track.create!(title: "A Chronic Fabrication", length: "04:32", artist_id: a3.id, album_id: al9.id)
t33.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/A+Thousand+Dead+-+Portals/A+Thousand+Dead+-+Portals+-+01+A+Chronic+Fabrication.mp3'), filename: 'atd - portals - a_chronic_fabrication.mp3')

t34 = Track.create!(title: "Decomission the Flesh", length: "03:15", artist_id: a3.id, album_id: al9.id)
t34.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/A+Thousand+Dead+-+Portals/A+Thousand+Dead+-+Portals+-+02+Decommission+the+Flesh.mp3'), filename: 'atd - portals - decomission_the_flesh.mp3')

t35 = Track.create!(title: "Skywatcher", length: "04:25", artist_id: a3.id, album_id: al9.id)
t35.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/A+Thousand+Dead+-+Portals/A+Thousand+Dead+-+Portals+-+03+Skywatcher.mp3'), filename: 'atd - portals - skywatcher.mp3')

t36 = Track.create!(title: "Calculating Existence", length: "04:57", artist_id: a3.id, album_id: al9.id)
t36.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/A+Thousand+Dead+-+Portals/A+Thousand+Dead+-+Portals+-+04+Calculating+Existence.mp3'), filename: 'atd - portals - calculating_existence.mp3')

t37 = Track.create!(title: "Chasing Goats", length: "05:51", artist_id: a3.id, album_id: al10.id)
t37.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/A+Thousand+Dead+-+Chasing+Goats/Chasing+Goats'), filename: 'atd - portals - chasing_goats.mp3')

t38 = Track.create!(title: "India", length: "05:55", artist_id: a4.id, album_id: al13.id)
t38.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep+-+01+India.mp3'), filename: 's3p - rastayl - india.mp3')

t39 = Track.create!(title: "Растаял", length: "05:15", artist_id: a4.id, album_id: al13.id)
t39.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep+-+02+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB.mp3'), filename: 's3p - rastayl - rastayl.mp3')

t40 = Track.create!(title: "Scary Under", length: "03:22", artist_id: a4.id, album_id: al13.id)
t40.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep+-+03+Scary+Under.mp3'), filename: 's3p - rastayl - scary_under.mp3')

t41 = Track.create!(title: "Твой сон", length: "04:23", artist_id: a4.id, album_id: al13.id)
t41.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep/Secrets+of+the+third+planet+-+%D0%A0%D0%B0%D1%81%D1%82%D0%B0%D1%8F%D0%BB+Ep+-+04+%D0%A2%D0%B2%D0%BE%D0%B9+%D1%81%D0%BE%D0%BD.mp3'), filename: 's3p - rastayl - your_son.mp3')

t42 = Track.create!(title: "DEXADRINE 医学", length: "03:06", artist_id: a8.id, album_id: al14.id)
t42.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+01+DEXADRINE+%E5%8C%BB%E5%AD%A6.mp3'), filename: 'jk47 - cyberpunk - dexadrine.mp3')

t43 = Track.create!(title: "COWBOY カウボーイ", length: "04:45", artist_id: a8.id, album_id: al14.id)
t43.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+02+COWBOY+%E3%82%AB%E3%82%A6%E3%83%9C%E3%83%BC%E3%82%A4.mp3'), filename: 'jk47 - cyberpunk - cowboy.mp3')

t44 = Track.create!(title: "ONO-SENDAI 小野仙台", length: "03:23", artist_id: a8.id, album_id: al14.id)
t44.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+03+ONO-SENDAI+%E5%B0%8F%E9%87%8E%E4%BB%99%E5%8F%B0.mp3'), filename: 'jk47 - cyberpunk - ono_sendai.mp3')

t45 = Track.create!(title: "SPR4WL I スプロール1", length: "03:19", artist_id: a8.id, album_id: al14.id)
t45.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+04+SPR4WL+I+%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%AB1.mp3'), filename: 'jk47 - cyberpunk - spr4wl.mp3')

t46 = Track.create!(title: "M0LLYM1LL10N$ モリーの何百万人", length: "04:54", artist_id: a8.id, album_id: al14.id)
t46.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+05+M0LLYM1LL10N%24+%E3%83%A2%E3%83%AA%E3%83%BC%E3%81%AE%E4%BD%95%E7%99%BE%E4%B8%87%E4%BA%BA.mp3'), filename: 'jk47 - cyberpunk - mollym1ll10ns.mp3')

t47 = Track.create!(title: "HOSAKA 保坂", length: "02:09", artist_id: a8.id, album_id: al14.id)
t47.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+06+HOSAKA+%E4%BF%9D%E5%9D%82.mp3'), filename: 'jk47 - cyberpunk - hosaka.mp3')

t48 = Track.create!(title: "AI 人工知能", length: "04:01", artist_id: a8.id, album_id: al14.id)
t48.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+07+AI+%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD.mp3'), filename: 'jk47 - cyberpunk - ai.mp3')

t49 = Track.create!(title: "W1NT3RMUT3 冬のミュート ", length: "03:47", artist_id: a8.id, album_id: al14.id)
t49.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+08+W1NT3RMUT3+%E5%86%AC%E3%81%AE%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%88.mp3'), filename: 'jk47 - cyberpunk - w1nt3rmut3.mp3')

t50 = Track.create!(title: "Z10N 聖なる山", length: "03:01", artist_id: a8.id, album_id: al14.id)
t50.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+09+Z10N+%E8%81%96%E3%81%AA%E3%82%8B%E5%B1%B1.mp3'), filename: 'jk47 - cyberpunk - z10n.mp3')

t51 = Track.create!(title: "1CE アイス", length: "03:47", artist_id: a8.id, album_id: al14.id)
t51.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+10+1CE+%E3%82%A2%E3%82%A4%E3%82%B9.mp3'), filename: 'jk47 - cyberpunk - 1ce.mp3')

t52 = Track.create!(title: "CASE ケース", length: "05:02", artist_id: a8.id, album_id: al14.id)
t52.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+11+CASE+%E3%82%B1%E3%83%BC%E3%82%B9.mp3'), filename: 'jk47 - cyberpunk - case.mp3')

t53 = Track.create!(title: "R4Z0R61RLZ かみそりの女の子", length: "02:25", artist_id: a8.id, album_id: al14.id)
t53.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+12+R4Z0R61RLZ+%E3%81%8B%E3%81%BF%E3%81%9D%E3%82%8A%E3%81%AE%E5%A5%B3%E3%81%AE%E5%AD%90.mp3'), filename: 'jk47 - cyberpunk - r4z0r61rlz.mp3')

t54 = Track.create!(title: "SPR4WL II スプロール2", length: "04:17", artist_id: a8.id, album_id: al14.id)
t54.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/JK-47+-+CYBERPUNK/JK-47+-+CYBERPUNK+-+13+SPR4WL+II+%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%AB2.mp3'), filename: 'jk47 - cyberpunk - spr4wl2.mp3')

t55 = Track.create!(title: "Answers", length: "02:01", artist_id: a2.id, album_id: al5.id)
t55.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+01+Answers.mp3'), filename: 'afp - skylines - answers.mp3')

t56 = Track.create!(title: "Titan", length: "03:11", artist_id: a2.id, album_id: al5.id)
t56.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+02+Titan.mp3'), filename: 'afp - skylines - titan.mp3')

t57 = Track.create!(title: "Antenna", length: "03:45", artist_id: a2.id, album_id: al5.id)
t57.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+03+Antenna.mp3'), filename: 'afp - skylines - antenna.mp3')

t58 = Track.create!(title: "Skylines", length: "03:09", artist_id: a2.id, album_id: al5.id)
t58.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+04+Skylines.mp3'), filename: 'afp - skylines - skylines.mp3')

t59 = Track.create!(title: "1314", length: "01:46", artist_id: a2.id, album_id: al4.id)
t59.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+05+1314.mp3'), filename: 'afp - skylines - 1314.mp3')

t60 = Track.create!(title: "Ascend", length: "03:21", artist_id: a2.id, album_id: al5.id)
t60.audio_file.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/Animal+Firepower+-+Skylines/Animal+Firepower+-+Skylines+-+06+Ascend.mp3'), filename: 'afp - skylines - ascend.mp3')

# Podcasts

s1 = Show.create!(title: "Inside Marvel", author: "New Rockstars", description: "New Rockstars bring you breakdowns, theories and commentary on what is happening right now and what is coming next in the Marvel Cinematic Universe.", image_url: "temp")
s1.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/NR-InsideMarvel.jpg'), filename: 'podcast - inside_marvel.jpg')

s2 = Show.create!(title: "Beyond the Screenplay", author: "Michael Tucker", description: "'Lessons from the Screenplay' creator Michael Tucker and the LFTS team do deeper dives into the storytelling of individual movies and chat with the creatives behind those films.", image_url: "temp")
s2.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/bts.jpg'), filename: 'podcast - beyond_the_screenplay.jpg')

s3 = Show.create!(title: "ID10T with Chris Hardwick", author: "Chris Hardwick", description: "I am Chris Hardwick. This podcast used to be called Nerdist. Now it is not. It is still basically just me talking about stuff and things with my two nerdy friends Jonah Ray and Matt Mira when they’re available, and usually someone more famous and smarter than all of us. Swearing is still fun, so we still do that occasionally. I hope you like this new iteration which is the same as before, but if a name hangs you up unhealthily I’m sure you will not hesitate to unfurl your rage not only in the ‘reviews’ section but also now on all the various social media platforms that have popped up since we started in 2010, effectively murdering blogs.", image_url: "temp ")
s3.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/id10t.jpg'), filename: 'podcast - id10t.jpg')

s4 = Show.create!(title: "The freeCodeCamp Podcast", author: "freeCodeCamp.org", description: "The official podcast of the freeCodeCamp open source community. Learn to code with free online courses, programming projects, and interview preparation for developer jobs.", image_url: "temp")
s4.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/freecodecamp.jpeg'), filename: 'podcast - free_code_camp.jpg')

s5 = Show.create!(title: "Make Me Smart with Kai and Molly", author: "Marketplace", description: "Hosted by Kai Ryssdal and Molly Wood, 'Make Me Smart with Kai & Molly' is a weekly podcast about the economy, technology and culture. In a time when the world is moving faster than ever, this podcast is where we unpack complex topics, together. Because none of us is as smart as all of us.", image_url: "temp")
s5.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/makemesmart.jpg'), filename: 'podcast - make_me_smart.jpg')

s6 = Show.create!(title: "David Tennant Does a Podcast With...", author: "Somethin' Else & No Mystery", description: "David Tennant gets talking with the biggest names from TV, movies, comedy and elsewhere. Revealing conversation, surprise stories and lots of laughs. A Somethin' Else and No Mystery production.", image_url: "temp")
s6.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/davidtennant.jpeg'), filename: 'podcast - david_tennant.jpg')

s7 = Show.create!(title: "Radiolab", author: "New York Public Radio", description: "Radiolab is a show about wonder, curiosity and big ideas. Hailed by critics as 'best radio show,' Radiolab presents a potent elixir of science and philosophy, first-person storytelling and radio theatre, all woven together with the most innovative sound design to ever spill out of the radio. Hosted by Jad Abumrad and Robert Krulwich and produced by WNYC, the show is heard on more than 300 public radio stations around the country.", image_url: "temp")
s7.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/radiolab.png'), filename: 'podcast - radiolab.jpg')

s8 = Show.create!(title: "The Daily", author: "The New York Times", description: "This is how the news should sound. Twenty minutes a day, five days a week, hosted by Michael Barbaro and powered by New York Times journalism.", image_url: "temp")
s8.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/thedaily.png'), filename: 'podcast - the_daily.jpg')

s9 = Show.create!(title: "Hidden Brain", author: "NPR", description: "Shankar Vedantam uses science and storytelling to reveal the unconscious patterns that drive human behavior, shape our choices and direct our relationships.", image_url: "temp")
s9.show_photo.attach(io: open('https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Podcast+Photos/hiddenbrain.jpeg'), filename: 'podcast - hidden_brain.jpg')


