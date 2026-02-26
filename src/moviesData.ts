export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
}

export const movies: Movie[] = [
  // الأكثر شهرة
  {
    id: 278,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    vote_average: 8.7,
    genre_ids: [18, 80],
    release_date: "1994-09-23"
  },
  {
    id: 238,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    vote_average: 8.7,
    genre_ids: [18, 80],
    release_date: "1972-03-14"
  },
  {
    id: 240,
    title: "The Godfather Part II",
    overview: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    poster_path: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
    vote_average: 8.6,
    genre_ids: [18, 80],
    release_date: "1974-12-20"
  },
  {
    id: 424,
    title: "Schindler's List",
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    poster_path: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/ipVop1qV6M9uQpSqYQbWcN9nKz.jpg",
    vote_average: 8.6,
    genre_ids: [18, 36, 10752],
    release_date: "1993-12-15"
  },
  {
    id: 389,
    title: "12 Angry Men",
    overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    poster_path: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/rpU6O5Zvx3Z5HjZ0rX9zF5xXQ8z.jpg",
    vote_average: 8.5,
    genre_ids: [18],
    release_date: "1957-04-10"
  },
  {
    id: 129,
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster_path: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/bSXfU4dwZygo1L0e5yqFvC9Vn4.jpg",
    vote_average: 8.5,
    genre_ids: [16, 14, 12],
    release_date: "2001-07-20"
  },
  {
    id: 497,
    title: "The Green Mile",
    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    poster_path: "https://image.tmdb.org/t/p/w500/8VG8f47iy5v2q3bR8T5qYg9GmO.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    vote_average: 8.5,
    genre_ids: [14, 18, 80],
    release_date: "1999-12-10"
  },
  {
    id: 6820,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    vote_average: 8.5,
    genre_ids: [53, 80],
    release_date: "1994-09-10"
  },
  {
    id: 122,
    title: "The Lord of the Rings: The Return of the King",
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    poster_path: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/xxoAV6r3U4jZzKXa4o7T7p9X4W.jpg",
    vote_average: 8.5,
    genre_ids: [12, 14, 28],
    release_date: "2003-12-01"
  },
  {
    id: 1255,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/hqkIcbrOHL86Un3HISNuW3N81uN.jpg",
    vote_average: 8.5,
    genre_ids: [18, 28, 80, 53],
    release_date: "2008-07-16"
  },
  {
    id: 13,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/ctOEhQiFIHWuL3pmNwzA86P98o.jpg",
    vote_average: 8.5,
    genre_ids: [35, 18, 10749],
    release_date: "1994-06-23"
  },
  {
    id: 11216,
    title: "Cinema Paradiso",
    overview: "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    poster_path: "https://image.tmdb.org/t/p/w500/8SRUfRUi6x4O68n0VCbDNRa6i29.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/xyNnPhdC8GxGp1kF1p9KkE7l9z.jpg",
    vote_average: 8.5,
    genre_ids: [18, 10749],
    release_date: "1988-11-17"
  },
  {
    id: 372058,
    title: "Your Name.",
    overview: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing keeping them apart?",
    poster_path: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/5K7ycRA6N8v5jYFkX0T6WQxQ2c.jpg",
    vote_average: 8.5,
    genre_ids: [16, 18, 10749],
    release_date: "2016-08-26"
  },
  {
    id: 335983,
    title: "The Father",
    overview: "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
    poster_path: "https://image.tmdb.org/t/p/w500/9pqwR0F3u0eO0j0Yp3g7r6xG0z.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/3R8j6xPz7Qy9yLg7z0H9Y5f8Wx.jpg",
    vote_average: 8.2,
    genre_ids: [18],
    release_date: "2020-12-23"
  },
  {
    id: 284052,
    title: "Hamilton",
    overview: "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
    poster_path: "https://image.tmdb.org/t/p/w500/h1B7tW0t399VDjAcQJ8N7w0z0oY.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/f6gCqdsK2V7Y9zQ5Z2gLQ6Z8vY.jpg",
    vote_average: 8.2,
    genre_ids: [10402, 18, 36],
    release_date: "2020-07-03"
  },
  {
    id: 122906,
    title: "Lights Out",
    overview: "A woman is haunted by a creature that only appears when she turns off the light. But when she discovers the truth about the entity, she must find a way to stop it.",
    poster_path: "https://image.tmdb.org/t/p/w500/8Gxv8S7HaU0STq9v3uH9gnpS6mR.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/h8gH9uSqzI9vProRk7YvY1iLYda.jpg",
    vote_average: 6.3,
    genre_ids: [27, 53],
    release_date: "2016-07-22"
  },
  // أكشن وخيال علمي
  {
    id: 603,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/7u3pxc0Kjwxv7xM9STzY3YtG6g.jpg",
    vote_average: 8.2,
    genre_ids: [28, 878],
    release_date: "1999-03-30"
  },
  {
    id: 27205,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    vote_average: 8.4,
    genre_ids: [28, 878, 12],
    release_date: "2010-07-15"
  },
  {
    id: 1573336,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    vote_average: 8.4,
    genre_ids: [12, 18, 878],
    release_date: "2014-11-05"
  },
  {
    id: 76341,
    title: "Mad Max: Fury Road",
    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    poster_path: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroIpir.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/3t5xhM8t4k7nP6v5Y8p2eC1L8d.jpg",
    vote_average: 7.6,
    genre_ids: [28, 12, 878],
    release_date: "2015-05-13"
  },
  {
    id: 299536,
    title: "Avengers: Infinity War",
    overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    poster_path: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    vote_average: 8.3,
    genre_ids: [12, 28, 878],
    release_date: "2018-04-25"
  },
  {
    id: 299534,
    title: "Avengers: Endgame",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    vote_average: 8.3,
    genre_ids: [12, 28, 878],
    release_date: "2019-04-24"
  },
  {
    id: 315635,
    title: "Spider-Man: Homecoming",
    overview: "Following the events of Captain America: Civil War, Peter Parker attempts to balance his life in high school with his career as the web-slinging superhero Spider-Man.",
    poster_path: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/kcga7xHLQVm3aV8F2j9h2zMZ5b.jpg",
    vote_average: 7.4,
    genre_ids: [28, 12, 878],
    release_date: "2017-07-05"
  },
  {
    id: 429617,
    title: "Spider-Man: Far From Home",
    overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    poster_path: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/5p3aTxtUtZHCHjKf1l5zI8D6jH.jpg",
    vote_average: 7.5,
    genre_ids: [28, 12, 878],
    release_date: "2019-06-28"
  },
  {
    id: 634649,
    title: "Spider-Man: No Way Home",
    overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a superhero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    poster_path: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    vote_average: 8.0,
    genre_ids: [28, 12, 878],
    release_date: "2021-12-15"
  },
  {
    id: 524434,
    title: "Eternals",
    overview: "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind's most ancient enemy, the Deviants.",
    poster_path: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3aklHnKGjl6L7m2.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
    vote_average: 7.0,
    genre_ids: [28, 12, 14, 878],
    release_date: "2021-11-03"
  },
  // دراما
  {
    id: 194,
    title: "Amélie",
    overview: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
    poster_path: "https://image.tmdb.org/t/p/w500/f0uorE7K7ggHfr8r7p0I2rUYhN.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/9wSbe4CwObACCW1uYpZ5wT9gM6.jpg",
    vote_average: 8.3,
    genre_ids: [35, 10749],
    release_date: "2001-04-25"
  },
  {
    id: 73,
    title: "American History X",
    overview: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    poster_path: "https://image.tmdb.org/t/p/w500/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/8y4Q1xJwZ3FmR0Y8p2Z9F8V7Zb.jpg",
    vote_average: 8.3,
    genre_ids: [18],
    release_date: "1998-10-30"
  },
  {
    id: 769,
    title: "GoodFellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    poster_path: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
    vote_average: 8.5,
    genre_ids: [18, 80],
    release_date: "1990-09-12"
  },
  {
    id: 598,
    title: "City of God",
    overview: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    poster_path: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/6VU1R9wqDlS3R8w2R1fY7kQ6cL.jpg",
    vote_average: 8.4,
    genre_ids: [18, 80],
    release_date: "2002-02-05"
  },
  {
    id: 637,
    title: "Life Is Beautiful",
    overview: "A Jewish man and his son are sent to a concentration camp. He tries to protect his son's innocence by pretending that it is a game.",
    poster_path: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6es6aeF2rJr.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/6VU1R9wqDlS3R8w2R1fY7kQ6cL.jpg",
    vote_average: 8.5,
    genre_ids: [35, 18],
    release_date: "1997-12-20"
  },
  {
    id: 207,
    title: "Dead Poets Society",
    overview: "An English teacher uses poetry to encourage his students to break free from convention and seize the day.",
    poster_path: "https://image.tmdb.org/t/p/w500/hmTl6DZRVfT9iQN2zJfY7qB6v1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/8y4Q1xJwZ3FmR0Y8p2Z9F8V7Zb.jpg",
    vote_average: 8.3,
    genre_ids: [18],
    release_date: "1989-06-02"
  },
  {
    id: 453,
    title: "A Beautiful Mind",
    overview: "A mathematical genius, John Nash, made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery.",
    poster_path: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5EQya5.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/3R8j6xPzQ7y9yLg7z0H9Y5f8Wx.jpg",
    vote_average: 7.9,
    genre_ids: [18, 10749],
    release_date: "2001-12-11"
  },
  {
    id: 98,
    title: "Gladiator",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster_path: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    vote_average: 8.2,
    genre_ids: [28, 18, 12],
    release_date: "2000-05-01"
  },
  {
    id: 1572,
    title: "Die Welle",
    overview: "A high school teacher's experiment to demonstrate to his students what life is like under a dictatorship spins horribly out of control when he forms a social unit with a life of its own.",
    poster_path: "https://image.tmdb.org/t/p/w500/3jCB6mLEGz0kqL5Xp5z5o5z5o5.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/3jCB6mLEGz0kqL5Xp5z5o5z5o5.jpg",
    vote_average: 7.5,
    genre_ids: [18],
    release_date: "2008-03-13"
  },
  // كوميديا
  {
    id: 496243,
    title: "Parasite",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path: "https://image.tmdb.org/t/p/w500/7IiTTj0nS21Z2u9YnSfsS7Ciozd.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/7IiTTj0nS21Z2u9YnSfsS7Ciozd.jpg",
    vote_average: 8.5,
    genre_ids: [35, 18, 53],
    release_date: "2019-05-30"
  },
  {
    id: 284053,
    title: "The Grand Budapest Hotel",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    poster_path: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/7h5F5s3d2Z2F2wZ2Z2Z2Z2Z2Z2.jpg",
    vote_average: 8.1,
    genre_ids: [35, 18, 12],
    release_date: "2014-02-26"
  },
  {
    id: 19404,
    title: "Dilwale Dulhania Le Jayenge",
    overview: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
    poster_path: "https://image.tmdb.org/t/p/w500/2gvbZMtV1Zsl7FedJa5ysbpBx2G.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/2gvbZMtV1Zsl7FedJa5ysbpBx2G.jpg",
    vote_average: 8.6,
    genre_ids: [35, 18, 10749],
    release_date: "1995-10-20"
  },
  {
    id: 773,
    title: "Little Miss Sunshine",
    overview: "A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.",
    poster_path: "https://image.tmdb.org/t/p/w500/5s9N6n9QfF7WQ1y6n9QfF7WQ1y6.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/5s9N6n9QfF7WQ1y6n9QfF7WQ1y6.jpg",
    vote_average: 7.8,
    genre_ids: [35, 18],
    release_date: "2006-07-26"
  },
  {
    id: 153,
    title: "Lost in Translation",
    overview: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    poster_path: "https://image.tmdb.org/t/p/w500/wkSzJ7oJP8f0yU7sF0yU7sF0yU7.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/wkSzJ7oJP8f0yU7sF0yU7sF0yU7.jpg",
    vote_average: 7.4,
    genre_ids: [18, 35],
    release_date: "2003-09-18"
  },
  // رعب
  {
    id: 493922,
    title: "Hereditary",
    overview: "After the death of her secretive grandmother, a woman begins to uncover dark secrets about her family's lineage, which leads to terrifying consequences.",
    poster_path: "https://image.tmdb.org/t/p/w500/3kztmbt8m7r7Q6p8Q6p8Q6p8Q6p.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/3kztmbt8m7r7Q6p8Q6p8Q6p8Q6p.jpg",
    vote_average: 7.3,
    genre_ids: [27, 53],
    release_date: "2018-06-07"
  },
  {
    id: 505192,
    title: "The Conjuring",
    overview: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    poster_path: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmzrQj0E2sM7y7Q.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/wVYREutTvI2tmzrQj0E2sM7y7Q.jpg",
    vote_average: 7.5,
    genre_ids: [27, 53],
    release_date: "2013-07-19"
  },
  {
    id: 447332,
    title: "A Quiet Place",
    overview: "A family lives in a world inhabited by blind but noise-sensitive creatures who are attracted to sound. They must communicate in sign language to stay alive.",
    poster_path: "https://image.tmdb.org/t/p/w500/nAU74GX9G4yF5T9Z5T9Z5T9Z5T9.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/nAU74GX9G4yF5T9Z5T9Z5T9Z5T9.jpg",
    vote_average: 7.4,
    genre_ids: [18, 27, 53],
    release_date: "2018-04-03"
  },
  {
    id: 419430,
    title: "Get Out",
    overview: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster_path: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3l3z8W6nY5z8W6nY.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/tFXcEccSQMf3l3z8W6nY5z8W6nY.jpg",
    vote_average: 7.6,
    genre_ids: [27, 53, 9648],
    release_date: "2017-02-24"
  },
  // أنيميشن
  {
    id: 8587,
    title: "The Lion King",
    overview: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the savanna, waiting for the day when he can return and claim his rightful place.",
    poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdXtN8k7YJ5f8YJ5f8YJ5f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/2bXbqYdXtN8k7YJ5f8YJ5f8YJ5f.jpg",
    vote_average: 8.2,
    genre_ids: [16, 12, 18, 10751],
    release_date: "1994-06-24"
  },
  {
    id: 1293,
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster_path: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/bSXfU4dwZygo1L0e5yqFvC9Vn4.jpg",
    vote_average: 8.5,
    genre_ids: [16, 14, 12],
    release_date: "2001-07-20"
  },
  {
    id: 4935,
    title: "Howl's Moving Castle",
    overview: "A young woman named Sophie is cursed by a witch and turned into an old woman. She ends up working for a mysterious wizard named Howl in his moving castle.",
    poster_path: "https://image.tmdb.org/t/p/w500/6pZgH10jHp2l6cLhY6cLhY6cLhY.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/6pZgH10jHp2l6cLhY6cLhY6cLhY.jpg",
    vote_average: 8.4,
    genre_ids: [16, 14, 12, 10749],
    release_date: "2004-09-09"
  },
  {
    id: 315162,
    title: "Spider-Man: Into the Spider-Verse",
    overview: "Miles Morales becomes the Spider-Man of his reality and crosses paths with his counterparts from other dimensions to stop a threat to all reality.",
    poster_path: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8ac7lmL3H5nS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/iiZZdoQBEYBv6id8ac7lmL3H5nS.jpg",
    vote_average: 8.4,
    genre_ids: [16, 28, 12, 878],
    release_date: "2018-12-06"
  },
  {
    id: 508947,
    title: "Turning Red",
    overview: "A thirteen-year-old girl named Mei Lee turns into a giant red panda whenever she gets too excited.",
    poster_path: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5PyfhqO4G.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/qsdjk9oAKSQMWs0Vt5PyfhqO4G.jpg",
    vote_average: 7.5,
    genre_ids: [16, 12, 35, 10751],
    release_date: "2022-03-10"
  },
  // أفلام عربية شهيرة
  {
    id: 260346,
    title: "The Message",
    overview: "This epic historical drama chronicles the life and times of Prophet Muhammad and serves as an introduction to early Islamic history.",
    poster_path: "https://image.tmdb.org/t/p/w500/eLfX8f8f8f8f8f8f8f8f8f8f8f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/eLfX8f8f8f8f8f8f8f8f8f8f8f.jpg",
    vote_average: 8.1,
    genre_ids: [18, 36, 12],
    release_date: "1976-07-09"
  },
  {
    id: 34016,
    title: "The Yacoubian Building",
    overview: "A multi-generational story exploring life in a downtown Cairo apartment building, touching on themes of corruption, sexuality, and political change.",
    poster_path: "https://image.tmdb.org/t/p/w500/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    vote_average: 7.2,
    genre_ids: [18],
    release_date: "2006-06-21"
  },
  {
    id: 273477,
    title: "Clash",
    overview: "A group of diverse individuals are locked in a police truck during the 2013 Egyptian political unrest, forcing them to confront their differences.",
    poster_path: "https://image.tmdb.org/t/p/w500/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    vote_average: 7.1,
    genre_ids: [18, 53],
    release_date: "2016-10-27"
  },
  {
    id: 360814,
    title: "Sheikh Jackson",
    overview: "A young imam struggles with his faith after the death of Michael Jackson, his childhood idol.",
    poster_path: "https://image.tmdb.org/t/p/w500/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/8f8f8f8f8f8f8f8f8f8f8f8f8f.jpg",
    vote_average: 6.8,
    genre_ids: [18, 35],
    release_date: "2017-09-08"
  },
  // المزيد من الأفلام الشهيرة
  {
    id: 550,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    vote_average: 8.4,
    genre_ids: [18],
    release_date: "1999-10-15"
  },
  {
    id: 680,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    vote_average: 8.5,
    genre_ids: [53, 80],
    release_date: "1994-09-10"
  },
  {
    id: 155,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/hqkIcbrOHL86Un3HISNuW3N81uN.jpg",
    vote_average: 8.5,
    genre_ids: [18, 28, 80, 53],
    release_date: "2008-07-16"
  },
  {
    id: 157336,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    vote_average: 8.4,
    genre_ids: [12, 18, 878],
    release_date: "2014-11-05"
  },
  {
    id: 2227205,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    vote_average: 8.4,
    genre_ids: [28, 878, 12],
    release_date: "2010-07-15"
  }
];

export const genreMap: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};