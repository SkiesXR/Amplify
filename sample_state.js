{
  entities: {
        users: {
            1: {
                id: 1,
                username: 'HAPPYbanana',
                email: 'happybanana4@gmail.com',
                image_url: 'http://www.google.com/images/profile_img.jpg'
            }
        },

        genres: {
            1: {
                id: 1,
                category: Pop
            },
            2: {
                id: 2,
                category: Hip-Hop
            },
            3: {
                id: 3,
                category: Rock
            },
            4: {
                id: 4,
                category: Post-Rock
            },
            5: {
                id: 5,
                category: Metal
            },
        },

        artists: {
            1: {
                id: 1,
                name: 'Radiohead',
                about: "At some point in the early 21st century, Radiohead became something more than a band...",
                image_url: 'http://www.google.com/images/artist1_img.jpg'
            },
            2: {
                id: 2,
                name: 'Depeche Mode',
                about: "Originally a product of Britain's new romantic movement, Depeche Mode went on to become the quintessential electro pop band of the 1980s. ...",
                image_url: 'http://www.google.com/images/artist1_img.jpg'
            }
        },

        albums: {
            56438: {
                id: 56438,
                title: "Kid A",
                type: "album",
                artist_id: 1,
                release_date: 2000,
                image_url: 'http://www.google.com/images/album1_img.jpg'
            },

            74219: {
                id: 74219,
                title: "Hail to the Thief",
                type: "album",
                artist_id: 1,
                release_date: 2003,
                image_url: 'http://www.google.com/images/album2_img.jpg'
            },

            354890: {
                id: 354890,
                title: "Ultra",
                type: "album",
                artist_id: 2,
                release_date: 1997,
                image_url: 'http://www.google.com/images/album3_img.jpg'
            },

            790341: {
                id: 790341,
                title: "Ultra",
                type: "album",
                artist_id: 2,
                release_date: 1997,
                image_url: 'http://www.google.com/images/album4_img.jpg'
            }
        },

        tracks {
            4: {
                id: 4,
                title: "It's No Good",
                length: 5:58,
                artist_id: 2,
                album_id: 790341
            },

            1: {
                id: 1,
                title: "2 + 2 = 5",
                length: 3:16,
                artist_id: 1,
                album_id: 74219
            }
        },

        playlists {
            1: {
                id: 1,
                title: "Breakfast Jamz",
                description: "Best way to start the day!",
                user_id: 454789,
            },

            2: {
                id: 2,
                title: "A M B I A N C E",
                description: "Chilllll music after a long day",
                user_id: 454789,
            }
        },
        
        playlist_items {
            1: {
                playlist_id: 12,
                track_id: 3458372,
                position: 4
            },

            2: {
                playlist_id: 477292,
                track_id: 13842,
                position: 64
            }
        },

        shows {
            1: {
                id: 1,
                title: "id10t with Chris Hardwick",
                author: "Chris Hardwick",
                description: "I am Chris Hardwick. This podcast used to be called Nerdist. Now it is not. It is still basically just me talking about stuff and things with my two nerdy friends Jonah Ray and Matt Mira when they’re available, and usually someone more famous and smarter than all of us...",
                image_url: 'http://www.google.com/images/show1_img.jpg'
            },

            2: {
                id: 2,
                title: "Beyond the Screenplay",
                author: "Michael Tucker",
                description: "“Lessons from the Screenplay” creator Michael Tucker and the LFTS team do deeper dives into the storytelling of individual movies and chat with the creatives behind those films.",
                image_url: 'http://www.google.com/images/show2_img.jpg'
            }
        },

        show_episodes {
            5:  {
                id: 5,
                title: "Episode 5: Good Will Hunting",
                description: "The LFTS team discusses the importance of considering the psychological journey of a character, the lengthy development process of Good Will Hunting, and the MPAA rating system.",
                release_date: 03/01/2019,
                show_id: 2,
                length: 73:18
            },

            8:  {
                id: 8,
                title: "David Tenant Returns",
                description: "David Tennant (Doctor Who, Jessica Jones) talks with Chris and Jonah about the perils of social media, how playing Doctor Who has shaped his career...",
                release_date: 05/05/2018,
                show_id: 1,
                length: 45:34
            }
        }
    },

    session: {
        currentUser: username
    },

    errors: {
        sessionErrors: ["Invalid Username or Password", "Password must be at least 8 characters", "Username has already been taken", "Email is already registered"]
        playlistsErrors: ["Playlist name cannot be blank"]
    }
}