puts "Seeding users..."
User.create(id: 1, name: "Vincent Van Gogh", email: "vangoghsvroom@gmail.com", username: "StarryNightGuy", password: "ArtIsCool", bio: "Prolific Dutch post-impressionist artist.")
User.create(id: 2, name: "Sarah Biffen", email: "sarahbiffing@gmail.com", username: "PaintPotato", password: "ArtIsCool", bio: "Painter, woman, starving potato.")
User.create(id: 3, name: "Quentin Matsys", email: "quentintarantinomatsus@gmail.com", username: "Mag1", password: "ArtIsCool", bio: "Creating new schools of painting.")
User.create(id: 4, name: "Robert Doisneau", email: "robertnoisdeau@gmail.com", username: "ThatPhotoGuy", password: "ArtIsCool", bio: "Photographer, photojournalist, humanist.")
User.create(id: 5, name: "Käthe Kollwitz", email: "kathywhatsitcalled@gmail.com", username: "AnArtistNamedKat", password: "ArtIsCool", bio: "Painter of life and all of its despairs.")
User.create(id: 10, name: "Test User", email: "test11235813idk@gmail.com", username: "phase3proj", password: "ArtIsCool", bio: "Not a real artist")

puts "Seeding arts..."
Art.create(id: 1, title: "Starry Night", medium: "Oil on canvas", description: "A view of Saint-Rémy-de-Provence just before sunrise, with an imaginary picturesque village.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",price: 10000, user_id: 1)
Art.create(id: 2, title: "The Bedroom", medium: "Oil on canvas", description: "A depiction of a quaint, restful room meant to put the mind at rest.", image: "https://iiif.micr.io/ZKSPH/full/1280,/0/default.jpg", price: 10000, user_id: 1)
Art.create(id: 3, title: "Study of feathers", medium: "Watercolor", description: "A study of feathers.", image: "https://sothebys-md.brightspotcdn.com/dims4/default/ef4dc93/2147483647/strip/true/crop/2000x1356+0+0/resize/2048x1389!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F00%2F6d%2F6b794c4541b1bb13ab6c97f3d4ec%2Fl21040-bxj29-01-group-01.jpg", price: 25, user_id: 2)
Art.create(id: 4, title: "Portrait of a young woman", medium: "Gouache on paper", description: "Portrait of a young woman.", image: "https://image.invaluable.com/housePhotos/bonhamsarchive/49/276149/H0267-L13363685.jpg", price: 100, user_id: 2)
Art.create(id: 5, title: "The Ugly Duchess", medium: "Oil on canvas", description: "A fine woman woman, dressed in the finest clothes and holding the prettiest flower.", image: "https://www≈.zbrushcentral.com/uploads/default/original/4X/4/2/3/4232fa367c1e26f78a83c1280a6c2e5652a5ad9b.jpeg", price: 20000, user_id: 3)
Art.create(id: 6, title: "Ill-Matched Lovers", medium: "Oil on panel", description: "A depiction of time making fools of us all, either by having too much or not enough.", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Quentin_Massys_-_Ill-Matched_Lovers%2C_c._1520-25.jpg", price: 25000, user_id: 3)
Art.create(id: 7, title: "Le Regard oblique", medium: "6 Vintage gelatin silver prints", description: "Taken in a Paris shop window in 1948.", image: "https://www.art.salon/images/robert-doisneau_le-regard-oblique-vitrine-de-romi-paris_AID526798.jpg?f=grey", price: 125, user_id: 4)
Art.create(id: 8, title: "Lord Foog the 2st", medium: "real life", description: "Real, this is real.", image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/47e45547bca943d1f14b998872d33fe2.jpg", price: 2000, user_id: 5)

puts "✅ Done seeding!"