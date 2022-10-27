puts "👨🏼‍🎤 Seeding users..."
User.create(id: 1, name: "Vincent Van Gogh", username: "StarryNightGuy", password: "ArtBeCoolAndStuff", email: "starrynightguy@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 2, name: "Salvador Dali", username: "ThatClockDude", password: "ArtBeCoolAndStuff", email: "thatclockdood@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 3, name: "Donato di Niccolo di Betto Bardi", username: "NotATurtle", password: "ArtBeCoolAndStuff", email: "wrongdonatello@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 4, name: "Jusepe de Ribera", username: "Mag31", password: "ArtBeCoolAndStuff", email: "magduch@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 5, name: "Julia Margaret Cameron", username: "ThatPhotoChick", password: "ArtBeCoolAndStuff", email: "thatphotochick@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 6, name: "Sarah Biffen", username: "PaintPotato", password: "ArtBeCoolAndStuff", email: "iampotato@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 7, name: "Marion K. Wachtel", username: "EnchantedWaters", password: "ArtBeCoolAndStuff", email: "enchantedwaters@gmail.com", isArtist: true, profile_picture: "tbd", artist_bio: "tbd")
User.create(id: 8, name: "William Sooter", username: "Qfwfq", password: "ArtBeCoolAndStuff", email: "SpaceSigns@gmail.com", isArtist: false, profile_picture: "tbd", artist_bio: "")
User.create(id: 9, name: "Steven Rosario", username: "TallGonkTroll", password: "ArtBeCoolAndStuff", email: "TorterraBoberra@gmail.com", isArtist: false, profile_picture: "tbd", artist_bio: "")
User.create(id: 10, name: "Siobhan McCaffrey", username: "BirkinBae", password: "ArtBeCoolAndStuff", email: "TotesNotBatman@gmail.com", isArtist: false, profile_picture: "tbd", artist_bio: "")
User.create(id: 11, name: "David Stepanov", username: "NotDavid_David", password: "ArtBeCoolAndStuff", email: "IHateArt@gmail.com", isArtist: false, profile_picture: "tbd", artist_bio: "")


puts "🖼 Seeing arts..."
Art.create(id: 1, title: "Starry Night", medium: "Oil on canvas", year_created: 1889, size: "73.7 cm x 92.1 cm", description: "tbd", price: 10000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 1)
Art.create(id: 2, title: "The Bedroom", medium: "Oil on canvas", year_created: 1888, size: "72.4 cm x 91.3 cm", description: "tbd", price: 25000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 1)
Art.create(id: 3, title: "The Persistence of Memory", medium: "Oil on canvas", year_created: 1931, size: "24.1 cm x 33 cm", description: "tbd", price: 1300, art_url: "tbd", tags: "tbd", negotiable: true, user_id: 2)
Art.create(id: 4, title: "The Temptation of St. Anthony", medium: "Oil on canvas", year_created: 1946, size: "90 cm x 119.5 cm", description: 50000, price: "tbd", art_url: "tbd", tags: "tbd", negotiable: "tbd", user_id: 2)
Art.create(id: 5, title: "Metamorphosis of Narcissus", medium: "Oil on canvas", year_created: 1937, size: "51.2 cm x 78.1 cm", description: 55000, price: "tbd", art_url: "tbd", tags: "tbd", negotiable: "tbd", user_id: 2)
Art.create(id: 6, title: "The Potato Eaters", medium: "Oil on canvas", year_created: 1885, size: "82 cm x 114 cm", description: "tbd", price: 3000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 1)
Art.create(id: 7, title: "David", medium: "Bronze", year_created: 1440, size: "158 cm" description: "Superior to Mike's.", price: 5000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 3)
Art.create(id: 8, title: "Saint Mark", medium: "Marble", year_created: 1413, size: "236 cm", description: "tbd", price: "tbd", art_url: 5000, tags: "tbd", negotiable: false, user_id: 3)
Art.create(id: 9, title: "Magdalena Ventura with her Husband and Son", medium: "Oil on canvas", year_created: 1631, size: "212 cm x 144 cm", description: 1000, price: "tbd", art_url: "tbd", tags: "tbd", negotiable: true, user_id: 4)
Art.create(id: 10, title: "Sarah Biffen", medium: "Watercolor and graphite", year_created: 1820, size: 100mm, description: "tbd", price: 25, art_url: "tbd", tags: "tbd", negotiable: true, user_id: 6)
Art.create(id: 11, title: "Study of feathers", medium: "Watercolor and graphite", year_created: 1812, size: "10.16 cm x 13.97 cm", description: 25, price: "tbd", art_url: "tbd", tags: "tbd", negotiable: true, user_id: 6)
Art.create(id: 12, title: "Mrs. Herbert Duckworth", medium: "Albumen silver print from glass negative", year_created: 1867, size: "12 15/16 cm x 9 5/16 cm", description: "tbd", price: 125, art_url: "tbd", tags: "tbd", negotiable: true, user_id: 5)
Art.create(id: 13, title: "Paul and Virginia", medium: "Albumen silver print from glass negative", year_created: 1864, size: "26.7 cm x 21.1 cm", description: "tbd", price: 150, art_url: "tbd", tags: "tbd", negotiable: true, user_id: 5)
Art.create(id: 14, title: "Parting of Sir Lancelot and Queen Guinevere", medium: "Albumen silver print from glass negative", year_created: 1874, size: "33.8 cm x 28.1 cm", description: 125, price: "tbd", art_url: "tbd", tags: "tbd", negotiable: true, user_id: 5)
Art.create(id: 15, title: "Pomona", medium: "Albumen silver print from glass negative", year_created: 1872, size: "36.4 cm x 26.3 cm", description: "tbd", price: "tbd", art_url: "tbd", tags: 125, negotiable: true, user_id: 5)
Art.create(id: 16, title: "Starry Night Over the Rhone", medium: "Oil paint on canvas", year_created: 1888, size: "72.5 cm x 92 cm", description: "tbd", price: "tbd", art_url: "tbd", tags: 30000, negotiable: false, user_id: 1)
Art.create(id: 17, title: "Saint Paul the Hermit", medium: "Oil on canvas", year_created: 1638, size: "132.7 cm x 106.7 cm", description: "tbd", price: 25000, art_url: "tbd", tags: "tbd", negotiable: true, user_id: 2)
Art.create(id: 18, title: "From Sunland Looking Across Valley to Big Tujunga", medium: "Watercolor on paper", year_created: 1925, size: "35.56 cm x 50cm", description: "tbd", price: 8000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 7)
Art.create(id: 19, title: "The Enchanted Isle", medium: "Watercolor on paper", year_created: 1922, size: "35.56 cm x 50cm", description: "tbd", price: 8000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 7)
Art.create(id: 20, title: "Cafe Terrace at Night", medium: "Oil on canvas", year_created: 1888, description: "tbd", price: 25000, art_url: "tbd", tags: "tbd", negotiable: false, user_id: 1)


puts "Creating bids..."
Bid.create(id: 1, bid_name: "TallGonkTroll", bid_email: "TorterraBoberra@gmail.com", bid_amount: 5000, bid_comments: "", art_id: 1)
Bid.create(id: 2, bid_name: "BirkinBae", bid_email: "TotesNotBatman@gmail.com", bid_amount: 5000, bid_comments: "", art_id: 2)
Bid.create(id: 3, bid_name: "NotDavid_David", bid_email: "IHateArt@gmail.com", bid_amount: 5000, bid_comments: "Love your work", art_id: 3)
Bid.create(id: 4, bid_name: "Qfwfq", bid_email: "SpaceSigns@gmail.com", bid_amount: 5000, bid_comments: "Hi", art_id: 4)
Bid.create(id: 5, bid_name: "TallGonkTroll", bid_email: "TorterraBoberra@gmail.com", bid_amount: 5000, bid_comments: "", art_id: 5)


puts "🍄 OMG seeding done!"
