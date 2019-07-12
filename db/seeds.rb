# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "open-uri"

Genre.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
Playlist.destroy_all
Show.destroy_all
Show_Episode.destroy_all

# Artists 
Artist.create!(id: 1, name: "Visceral Skies", bio: "4-piece instrumental project focusing on cinematic post-rock, ambient trip-hop and warm jazzy melodies.", image_url: "", genre_id: 1)
Artist.create!(id: 2, name: "Animalfirepower", bio: "Electronic music producer in Oakland, California. Affiliate of JK/47.", image_url: "", genre_id: 4)
Artist.create!(id: 3, name: "A Thousand Dead", bio: "Hailing from Oakland, Ca, A Thousand Dead blend pulse-pounding progressive death metal technicality with the instrumental diversity of jazz and the dynamic contrast of post-rock.", image_url: "", genre_id: 2)
Artist.create!(id: 4, name: "Secrets of the Third Planet", bio: "Secrets of the Third Planet band (S3P)- electronic-shoegaze band from Moscow.", image_url: "", genre_id: 1)
Artist.create!(id: 5, name: "Vandella", bio: "SF's Vandella is an indie-rock/soul outfit in the vein of Fleetwood Mac, Alabama Shakes, and Jenny Lewis. Fronted by the dynamic male + female duo of vocalist Tracey Holland and guitarist Chris Tye, the two distinct songwriters tie their complementary signatures together for a sound that feels both exciting yet effortlessly vibey - evocative of that hazy sheen of their native California.", image_url: "", genre_id: 1)
Artist.create!(id: 6, name: "Awaken the Echoes", bio: " ", image_url: "", genre_id: 1)
Artist.create!(id: 7, name: "Lost Anyway", bio: "Mary and Jane make up the Los Angeles girl band, Lost Anyway. The duo developed a musical bond in their high school orchestra and they just completed their self titled sophomore album, 'Lost Anyway.' Not your typical Cali kids, they showed serious effort in creating a niche all their own. After a decade of growth, there is no telling where this adventure will lead them!", image_url: "", genre_id: 3)
Artist.create!(id: 8, name: "JK47", bio: "Electronic music producer. Affiliate of Animal FirePower, Rotheads, Ghostwolf, and The Radar Cinema", image_url: "", genre_id: 5)

# Albums

a1 = Album.create!(title: "Visceral Skies", album_type: "EP", artist_id: Artist.first.id, release_date: ("2014-7-8"), image_url: "temp")
a2 = Album.create!(title: "Wormhole Karma", album_type: "Album", artist_id: Artist.first.id, release_date: ("2016-9-30"), image_url: "temp")
a3 = Album.create!(title: "Inferno Room", album_type: "Album", artist_id: Artist.first.id, release_date: ("2018-12-25"), image_url: "temp")
a4 = Album.create!(title: "Luna", album_type: "EP", artist_id: Artist.second.id, release_date: ("2014-03-04"), image_url: "temp")
a5 = Album.create!(title: "Skylines", album_type: "Album", artist_id: Artist.second.id, release_date: ("2017-01-17"), image_url: "temp")
a6 = Album.create!(title: "Paragon", album_type: "EP", artist_id: Artist.second.id, release_date: ("2017-06-16"), image_url: "temp")
a7 = Album.create!(title: "Coma Sessions", album_type: "EP", artist_id: Artist.second.id, release_date: ("2016-10-13"), image_url: "temp")
a8 = Album.create!(title: "Lost Anyway", album_type: "Album", artist_id: Artist.all[6], release_date: ("2012-12-22"), image_url: "temp")
a9 = Album.create!(title: "Portals", album_type: "EP", artist_id: Artist.third, release_date: ("2013-06-30"), image_url: "temp")
a10 = Album.create!(title: "Chasing Goats", album_type: "Single", Artist.third, release_date: ("2015-01-20"), image_url: "temp")
a11 = Album.create!(title: "Travels", album_type: "Album", artist_id: Artist.all[5], release_date: ("2013-05-17"), image_url: "temp")
a12 = Album.create!(title: "Shine You Up", album_type: "EP", artist_id: Artist.fifth, release_date: ("2013-10-01"), image_url: "temp")
a13 = Album.create!(title: "Растаял", album_type: "EP", artist_id: Artist.fourth, release_date: ("2014-12-14"), image_url: "temp")
a14 = Album.create!(title: "CYBERPUNK", album_type: "Album", artist_id: Artist.all[7], release_date: ("2014-8-20"), image_url: "temp ")

# Tracks

# Visceral Skies - Visceral Skies
Track.create!(title: "Shadow", length: "04:12", artist_id: Artist.first, album_id: a1.id)
Track.create!(title: "Save the Clocktower", length: "03:08", artist_id: Artist.first, album_id: a1.id)
Track.create!(title: "Man Under Palette", length: "03:59", artist_id: Artist.first, album_id: a1.id)
Track.create!(title: "Amber Lamps", length: "04:15", artist_id: Artist.first, album_id: a1.id)
Track.create!(title: "We Are All Plugged In", length: "03:33", artist_id: Artist.first, album_id: a1.id)

# Visceral Skies - Wormhole Karma
Track.create!(title: "Cybernaut", length: "04:10", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "EightyEight", length: "03:40", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Throwing Gravity", length: "04:17", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Silent Colors", length: "01:13", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Let Yourself In", length: "04:47", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Fractures", length: "03:55", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Halcyon", length: "01:32", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "No Fate", length: "03:55", artist_id: Artist.first.id, album_id: a2.id)
Track.create!(title: "Palms to Heaven", length: "03:56", artist_id: Artist.first.id, album_id: a2.id)

# Visceral Skies - Inferno Room
Track.create!(title: "Catching Fire", length: "04:00", artist_id: Artist.first.id, album_id: a3.id)
Track.create!(title: "Into the Feathers", length: "04:10", artist_id: Artist.first.id, album_id: a3.id)
Track.create!(title: "Skeleton Key", length: "04:05", artist_id: Artist.first.id, album_id: a3.id)
Track.create!(title: "Paul's Interlude", length: "02:10", artist_id: Artist.first.id, album_id: a3.id)
Track.create!(title: "Tracewinds", length: "04:01", artist_id: Artist.first.id, album_id: a3.id)
Track.create!(title: "Axis Chemicals", length: "04:54", artist_id: Artist.first.id, album_id: a3.id)

# Animalfirepower - Luna
Track.create!(title: "East End", length: "04:05", artist_id: Artist.second.id, album_id: a4.id)
Track.create!(title: "7series", length: "04:10", artist_id: Artist.second.id, album_id: a4.id)
Track.create!(title: "Nylons", length: "04:41", artist_id: Artist.second.id, album_id: a4.id)
Track.create!(title: "1314", length: "01:46", artist_id: Artist.second.id, album_id: a4.id)
Track.create!(title: "Harbor Lanterns", length: "04:31", artist_id: Artist.second.id, album_id: a4.id)
Track.create!(title: "Koshiro", length: "04:28", artist_id: Artist.second.id, album_id: a4.id)

# Animalfirepower - Skylines
Track.create!(title: "Answers", length: "02:01", artist_id: Artist.second.id, album_id: a5.id)
Track.create!(title: "Titan", length: "03:1", artist_id: Artist.second.id, album_id: a5.id)
Track.create!(title: "Antenna", length: "03:45", artist_id: Artist.second.id, album_id: a5.id)
Track.create!(title: "Skylines", length: "03:09", artist_id: Artist.second.id, album_id: a5.id)
Track.create!(title: "1314", length: "01:26", artist_id: Artist.second.id, album_id: a5.id)
Track.create!(title: "Ascend", length: "03:21", artist_id: Artist.second.id, album_id: a5.id)

# Animalfirepower - Paragon
Track.create!(title: "Atlas", length: "03:14", artist_id: Artist.second.id, album_id: a6.id)
Track.create!(title: "Nova", length: "03:07", artist_id: Artist.second.id, album_id: a6.id)
Track.create!(title: "1314", length: "01:06", artist_id: Artist.second.id, album_id: a6.id)
Track.create!(title: "Cascade", length: "02:59", artist_id: Artist.second.id, album_id: a6.id)

# Animalfirepower - CoMa Sessions
Track.create!(title: "The Ventriloquist", length: "03:09", artist_id: Artist.second.id, album_id: a7.id)
Track.create!(title: "Mynah Metamorphose", length: "03:34", artist_id: Artist.second.id, album_id: a7.id)

# A Thousand Dead - Portals EP
Track.create!(title: "A Chronic Fabrication", length: "04:32", artist_id: Artist.third.id, album_id: a9.id)
Track.create!(title: "Decomission the Flesh", length: "03:15", artist_id: Artist.third.id, album_id: a9.id)
Track.create!(title: "Skywatcher", length: "04:25", artist_id: Artist.third.id, album_id: a9.id)
Track.create!(title: "Calculating Existence", length: "04:57", artist_id: Artist.third.id, album_id: a9.id)

# A Thousand Dead - Chasing Goats
Track.create!(title: "Chasing Goats", length: "05:51", artist_id: Artist.third.id, album_id: a10.id)

# Secrets of the Third Planet - Растаял Ep
Track.create!(title: "India", length: "05:55", artist_id: Artist.fourth.id, album_id: a13.id)
Track.create!(title: "Растаял", length: "05:15", artist_id: Artist.fourth.id, album_id: a13.id)
Track.create!(title: "Scary Under", length: "03:22", artist_id: Artist.fourth.id, album_id: a13.id)
Track.create!(title: "Твой сон", length: "04:23", artist_id: Artist.fourth.id, album_id: a13.id)

# JK-47 - CYBERPUNK
Track.create!(title: "DEXADRINE 医学", length: "03:06", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "COWBOY カウボーイ", length: "04:45", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "ONO-SENDAI 小野仙台", length: "03:23", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "SPR4WL I スプロール1", length: "03:19", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "M0LLYM1LL10N$ モリーの何百万人", length: "04:54", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "HOSAKA 保坂", length: "02:09", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "AI 人工知能", length: "04:01", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "W1NT3RMUT3 冬のミュート ", length: "03:47", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "Z10N 聖なる山", length: "03:01", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "1CE アイス", length: "03:47", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "CASE ケース", length: "05:02", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "R4Z0R61RLZ かみそりの女の子", length: "02:25", artist_id: Artist.all[7].id, album_id:a14.id)
Track.create!(title: "SPR4WL II スプロール2", length: "04:17", artist_id: Artist.all[7].id, album_id:a14.id)

# Genres

Genre.create!(category: "Rock" )
Genre.create!(category: "Metal" )
Genre.create!(category: "Indie" )
Genre.create!(category: "Chill" )

# Podcasts

Show.create!(title: "The freeCodeCamp Podcast", author: "freeCodeCamp.org", description: "The official podcast of the freeCodeCamp open source community. Learn to code with free online courses, programming projects, and interview preparation for developer jobs.", image_url: "temp")
Show.create!(title: "Make Me Smart with Kai and Molly", author: "Marketplace", description: "Hosted by Kai Ryssdal and Molly Wood, 'Make Me Smart with Kai & Molly' is a weekly podcast about the economy, technology and culture. In a time when the world is moving faster than ever, this podcast is where we unpack complex topics, together. Because none of us is as smart as all of us.", image_url: "temp")
Show.create!(title: "David Tennant Does a Podcast With...", author: "Somethin' Else & No Mystery", description: "David Tennant gets talking with the biggest names from TV, movies, comedy and elsewhere. Revealing conversation, surprise stories and lots of laughs. A Somethin' Else and No Mystery production.", image_url: "temp")
Show.create!(title: "Radiolab", author: "New York Public Radio", description: "Radiolab is a show about wonder, curiosity and big ideas. Hailed by critics as 'best radio show,' Radiolab presents a potent elixir of science and philosophy, first-person storytelling and radio theatre, all woven together with the most innovative sound design to ever spill out of the radio. Hosted by Jad Abumrad and Robert Krulwich and produced by WNYC, the show is heard on more than 300 public radio stations around the country.", image_url: "temp")
Show.create!(title: "The Daily", author: "The New York Times", description: "This is how the news should sound. Twenty minutes a day, five days a week, hosted by Michael Barbaro and powered by New York Times journalism.", image_url: "temp")
Show.create!(title: "Hidden Brain", author: "NPR", description: "Shankar Vedantam uses science and storytelling to reveal the unconscious patterns that drive human behavior, shape our choices and direct our relationships.", image_url: "temp")















