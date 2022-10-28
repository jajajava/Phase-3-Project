puts "🎨 Seeding arts..."
Art.create(id: 1, title: "Starry Night", medium: "Oil on canvas", description: "tbd", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", size: "73.7 × 92.1 cm", price: 10000, timestamp: "", tags: "", user_id: 1)
Art.create(id: 2, title: "The Bedroom", medium: "Oil on canvas", description: "tbd", image: "tbd", size: "72 x 90cm", price: 10000, timestamp: "", tags: "", user_id: 1)
Art.create(id: 3, title: "Study of feathers", medium: "Watercolor", description: "tbd", image: "tbd", size: "10.3 x 12cm", price: 25, timestamp: "", tags: "", user_id: 2)
Art.create(id: 4, title: "Portrait of a young woman", medium: "Gouache on paper", description: "tbd", image: "tbd", size: "39.4 x 33cm", price: 100, timestamp: "", tags: "", user_id: 2)
Art.create(id: 5, title: "The Ugly Duchess", medium: "Oil on canvas", description: "tbd", image: "tbd", size: "62.4 x 45.5cm", price: 20000, timestamp: "", tags: "", user_id: 3)
Art.create(id: 6, title: "Ill-Matched Lovers", medium: "Oil on panel", description: "tbd", image: "tbd", size: "43.2 x 63cm", price: 25000, timestamp: "", tags: "", user_id: 3)
Art.create(id: 7, title: "Le Regard oblique. Vitrine de Romi, Paris, 1948", medium: "6 Vintage gelatin silver prints", description: "tbd", image: "tbd", size: "19.7 x 17.9 cm", price: 125, timestamp: "", tags: "", user_id: 4)
Art.create(id: 8, title: "Man Looking at Painting of a Nude in Paris Shop Window, 1948", medium: "silver gelatin print, printed 1949", description: "tbd", image: "tbd", size: "20.3 x 17.8 cm", price: 125, timestamp: "", tags: "", user_id: 4)
Art.create(id: 9, title: "Woman with Dead Child (Frau mit totem Kind)", medium: "Etching with chine collé", description: "tbd", image: "tbd", size: "54.5 x 70.3 cm", price: 800, timestamp: "", tags: "", user_id: 5)
Art.create(id: 10, title: "Woman Entrusts Herself to Death (Frau vertraut sich dem Tode an) from the series Death (Tod)", medium: "Lithograph", description: "tbd", image: "tbd", size: "64.7 x 53.6 cm", price: 850, timestamp: "", tags: "", user_id: 5)




puts "👨🏼‍🎤 Seeding users..."
User.create(id: 1, name: "Vincent Van Gogh", username: "StarryNightGuy", email: "StarryNightGuy@gmail.com", password: "ArtIsCool", bio: "tbd", image: "tbd")
User.create(id: 2, name: "Sarah Biffen", username: "PaintPotato", email: "iispotato@gmail.com", password: "ArtIsCool", bio: "tbd", image: "tbd")
User.create(id: 3, name: "Quentin Matsys", username: "Mag1", email: "TheDuchess@gmail.com", password: "ArtIsCool", bio: "tbd", image: "tbd")
User.create(id: 4, name: "Robert Doisneau", username: "ThatPhotoGuy", email: "ParisPhotography@gmail.com", password: "ArtIsCool", bio: "tbd", image: "tbd")
User.create(id: 5, name: "Käthe Kollwitz", username: "DeadBabyArtist", email: "CharcoalLady@gmail.com", password: "ArtIsCool", bio: "tbd", image: "tbd")

puts "✅ Done seeding!"
