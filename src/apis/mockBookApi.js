import delay from './delay';

const books = [
  {
    ISBN: 9788129115300,
    title: "2 States",
    authors: [
      "Chetan Bhagat"
    ],
    rating: 4,
    ratingCount: 57,
    categories: [
      " Indic fiction (English)"
    ],
    imageLink: "http://books.google.com/books/content?id=AsNSz-1gUcMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description: "Fourth book by the bestselling author Chetan Bhagat. 2 States is a story about Krish and Ananya. They are from two different states of India, deeply in love and want to get married. Of course, their parents don't agree. To convert their love story into a love marriage, the couple have a tough battle in front of them."
  },
  {
    ISBN: 9781603093699,
    title: "Apocrypha Now",
    authors: [
      "Mark Russell", "Shannon Wheeler"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: [
      "Apocryphal books"
    ],
    imageLink: "http://books.google.com/books/content?id=UowRjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "Mark Russell & Shannon Wheeler's faithful-yet-irreverent approach to the Bible made their book GOD IS DISAPPOINTED IN YOU a modern cult classic. Now, by popular demand, they turn their attention to the best parts left out of the canonical Bible, including the Midrash, the Apocrypha, Gnostic Gospels, and more! And if you thought the BIBLE had some weird stuff in it..."
  },
  {
    ISBN: 9781603090636,
    title: "The Bojeffries Saga",
    authors: [
      "Alan Moore"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: [
      "Comics & Graphic Novels"
    ],
    imageLink: "http://books.google.com/books/content?id=7N2IngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "Jobremus Bojeffries tries to keep the peace in a household populated with werewolves, vampires, and a radioactive baby."
  },
  {
    ISBN: 9781603094276,
    title: "Coin-Op Comics Anthology: 1997-2017",
    authors: [
      "Maria Hoey",
      "Peter Hoey"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: [
      "Comics & Graphic Novels"
    ],
    imageLink: "http://books.google.com/books/content?id=ZY2GtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "This first-ever collection by the award-winning team of siblings Peter and Maria Hoey encompasses the very best of their inventive and mysterious comics. Welcome to the first-ever collection by the award-winning team of siblings Peter and Maria Hoey, encompassing the very best of their inventive and mysterious comics. This compilation ranges from the Hoeys' early comics in Blab! Magazine to their groundbreaking Coin-Op series. All in all, it's more than twenty short stories and vignettes -- about music and film, the comic and the absurd, the past and the future -- all sparkling with innovative storytelling and design."
  },
  {
    ISBN: 9781603094252,
    title: "Cloud Hotel",
    authors: [
      "Julian Hanshaw"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: [
      "Comics & Graphic Novels"
    ],
    imageLink: "http://books.google.com/books/content?id=SMjnswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "A haunting, mind-bending new graphic novel from LA Times Book Prize finalist Julian Hanshaw. Remco knows he is special. He was chosen. God took a shine to him, after a bright light in a clear northern sky brought Remco to the incredible Cloud Hotel, a wondrous place that he never wants to leave. But Remco has outstayed his welcome... and it's time to check out. LA Times Book Prize finalist Julian Hanshaw (Tim Ginger) returns with a new feast of visual imagination and emotional intensity that will haunt readers' dreams long after the book is closed."
  },
  {
    ISBN: 9781603090537,
    title: "Fingerprints",
    authors: [
      "Will Dinski"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: [
      "Comics & Graphic Novels"
    ],
    imageLink: "http://books.google.com/books/content?id=rAb4mAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "As a plastic surgeon tries to convince his most famous client to do one more surgery, his neglected wife starts to break down and his assistant becomes famous for inventing a face lift machine that lets anyone looks like a celebrity."
  },
  {
    ISBN: 9781603094535,
    title: "Why Did We Trust Him?",
    authors: [
      "Shannon Wheeler"
    ],
    rating: undefined,
    ratingCount: undefined,
    categories: undefined,
    imageLink: "http://books.google.com/books/content?id=-1z1vgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap",
    description: "The Eisner-Award-winning wit of Shannon Wheeler breaks hilarious new ground in a handsome new collection. Hot off Sh*t My President Says: The Illustrated Tweets of Donald J. Trump, Shannon Wheeler unloads a new set of top notch cartoons in this premium collection. Instead of lampooning the president Wheeler demonstrates what won him a couple of Eisner Awards with a more personal set of single panel comics. Relationships, social norms, cats, dogs, food, and himself, are all targets of his urbane wit. It's a gem of a book."
  },
  {
    ISBN: 9781847497765,
    title: "Ulysses",
    authors: ["James Joyce"],
    categories: ["Dublin (Ireland)"],
    imageLink: "https://books.google.com/books/content?id=4_y6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description: "Controversial, scandalous, erudite and funny, Ulysses is undisputedly a landmark of twentieth-century modernism. It charts one day 16th June 1904 in the lives of three inhabitants of Dublin- the advertising salesman Leopold Bloom, the artist Stephen Dedalus and Bloom 's wife Molly. Their peregrinations, thoughts and encounters form the basis of the narrative, which becomes a celebration of all human experience through the lives of specific individuals in a specific place at a specific time. Ulysses is both an experimental novel and a book intimately concerned with the events of modern life. A lively repository of literary allusion and colloquial realism, this dazzlingly innovative, ambitious novel is here presented in its 1939 Odyssey Press version, which is regarded as the most accurate text published in Joyce 's lifetime. This edition also includes over 9,000 notes by Joyce scholars Sam Slote, Marc A. Mamigonian and John Turner.",
    rating: 3.5,
    ratingCount: 96
  },
  {
    ISBN: 9781597226769,
    authors: ["Francis Scott Fitzgerald"],
    categories: ["Fiction"],
    description: "On Long Island in the early 1920s the mysterious Jay Gatsby tries to rekindle his romance with Daisy, a young woman who has married another man, the wealthy and cruel Tom Buchanan.",
    imageLink: "http://books.google.com/books/content?id=fKE7PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 3.5,
    ratingCount: 2986,
    title: "The Great Gatsby"
  },
  {
    ISBN: 9780718186876,
    authors: ["Scott Reintgen"],
    categories: ["Thriller"],
    description: "Emmett Atwater isn't just leaving Detroit; he's leaving Earth. Why Babel recruited himis a mystery, but the number of zeroes on his contract has him boarding their lightship and hoping to return to Earth with enough money to take care of his family, forever. As he and nine other teenagers wormhole their way through space, Emmett discovers that each recruit must earn the right to travel down to Eden. There, Babel will use them to mine a substance that's quietly become the most valuable in the world. For the chosen ten, every training session is measured, every point matters, and Emmett will do anything to win. But Babel's ship is full of secrets. And as Emmett uncovers the truth, he realizes he's not fighting for wealth or glory. He's fighting for his life.",
    imageLink: "http://books.google.com/books/content?id=UCBHvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 13,
    title: "Nyxia"
  },
  {
    ISBN: 9788173711466,
    authors: ["Avul Pakir Jainulabdeen Abdul Kalam", "Arun Tiwari"],
    categories: ["Aerospace engineers"],
    description: "Avul Pakir Jainulabdeen Abdul Kalam, The Son Of A Little-Educated Boat-Owner In Rameswaram, Tamil Nadu, Had An Unparalled Career As A Defence Scientist, Culminating In The Highest Civilian Award Of India, The Bharat Ratna. As Chief Of The Country`S Defence Research And Development Programme, Kalam Demonstrated The Great Potential For Dynamism And Innovation That Existed In Seemingly Moribund Research Establishments. This Is The Story Of Kalam`S Rise From Obscurity And His Personal And Professional Struggles, As Well As The Story Of Agni, Prithvi, Akash, Trishul And Nag--Missiles That Have Become Household Names In India And That Have Raised The Nation To The Level Of A Missile Power Of International Reckoning.",
    imageLink: "http://books.google.com/books/content?id=c3qmIZtWUjAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4.5,
    ratingCount: 171,
    title: "Wings of Fire"
  },
  {
    ISBN: 9781441407818,
    authors: ["Emily Bronte"],
    categories: ["Fiction"],
    description: "This is a beautifully designed, 6\"x9\" large edition of Emily Brontë's classic WUTHERING HEIGHTS.",
    imageLink: "http://books.google.com/books/content?id=lA7utgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 3.5,
    ratingCount: 53,
    title: "Wuthering Heights"
  },
  {
    ISBN: 9781984887238,
    authors: ["Philip Pullman"],
    categories: undefined,
    description: "\"The book is full of wonder. . . . Truly thrilling.\" --The New York Times More than twenty years after the publication of the groundbreaking The Golden Compass, Philip Pullman returns to that parallel world to expand on the story of Lyra, \"one of fantasy's most indelible characters.\" (The New York Times Magazine) Malcolm Polstead is the kind of boy who notices everything but is not much noticed himself. And so perhaps it was inevitable that he would become a spy.... Malcolm\'s parents run an inn called the Trout, on the banks of the river Thames, and all of Oxford passes through its doors. Malcolm and his daemon, Asta, routinely overhear news and gossip, and the occasional scandal, but during a winter of unceasing rain, Malcolm catches wind of something new: intrigue. He finds a secret message inquiring about a dangerous substance called Dust--and the spy it was intended for finds him. When she asks Malcolm to keep his eyes open, he sees suspicious characters everywhere: the explorer Lord Asriel, clearly on the run; enforcement agents from the Magisterium; a gyptian named Coram with warnings just for Malcolm; and a beautiful woman with an evil monkey for a daemon. All are asking about the same thing: a girl--just a baby--named Lyra. Lyra is the kind of person who draws people in like magnets. And Malcolm will brave any danger, and make shocking sacrifices, to bring her safely through the storm. \"Too few things in our world are worth a seventeen year wait: The Book of Dust is one of them.\" --The Washington Post \"People will love the first volume of Philip Pullman's new trilogy with the same helpless vehemence that stole over them when The Golden Compass came out.\" --Slate",
    imageLink: "http://books.google.com/books/content?id=xGRftAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "The Book of Dust: la Belle Sauvage (Book of Dust, Volume 1)",
  },
  {
    ISBN: 9780605039070,
    authors: ["J. K. Rowling"],
    categories: ["England"],
    description: "'His hand closed automatically around the fake Horcrux, but in spite of everything, in spite of the dark and twisting path he saw stretching ahead for himself, in spite of the final meeting with Voldemort he knew must come, whether in a month, in a year, or in ten, he felt his heart lift at the thought that there was still one last golden day of peace left to enjoy with Ron and Hermione.' With these words Harry Potter and the Half-Blood Prince draws to a close. And here, in this seventh and final book, Harry discovers what fate truly has in store for him as he inexorably makes his way to that final meeting with Voldemort. In this thrilling climax to the phenomenally bestselling series, J.K. Rowling will reveal all to her eagerly waiting readers.",
    imageLink: "http://books.google.com/books/content?id=qmJGwgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.5,
    ratingCount: 3405,
    title: "Harry Potter and the Deathly Hallows"
  },
  {
    ISBN: 9781784707668,
    authors: ["Fatima Farheen Mirza"],
    categories: undefined,
    description: "** The New York Times bestseller ** 'To be taken hostage by Fatima Mirza's heartrending and timely story is a gutting pleasure... She captures your mind and heart with an urgency that defies you to stop reading. I guarantee you will be different when you close the book' Sarah Jessica Parker A Place for Us catches an Indian Muslim family as they prepare for their eldest daughter's wedding. But as Hadia's marriage -- one chosen of love, not tradition -- gathers the family back together, there is only one thing on their minds- can Amar, the estranged younger brother of the bride, be trusted to behave himself after three years away? A Place for Us tells the story of one family, but all family life is here. Rafiq and Layla must come to terms with the choices their children have made, while Hadia, Huda and Amar must reconcile their present culture with their parents' world, treading a path between old and new. And they must all learn how the smallest decisions can lead to the deepest betrayals. This is a novel for our times- a deeply moving examination of love, identity and belonging that turns our preconceptions over one by one. It announces Fatima Farheen Mirza as a major new literary talent.",
    imageLink: "http://books.google.com/books/content?id=2lrQuwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 26,
    title: "A Place for Us"
  },
  {
    ISBN: 9789380658742,
    authors: ["Amish Tripathi"],
    categories: ["Fiction"],
    description: "1900 BC: the once-proud Suryavanshi rulers of the Meluha Empire are in dire peril. The empire's primary river, the Saraswathi, is slowly drying up. There are devastating terrorist attacks from the east, the land of the Chandravanshis - and to make matters worse, the Chandravanshis appear to have allied with the Nagas, an ostracised race of deformed humans with astonishing martial skills. The only hope for the Suryavanshis is an ancient prophecy: when evil reaches epic proportions and all seems lost, a hero will emerge...",
    imageLink: "http://books.google.com/books/content?id=Ye5gBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
    ratingCount: 19,
    title: "The Immortals of Meluha",
  },
  {
    ISBN: 9781780874067,
    authors: ["Amish Tripathi"],
    categories: ["Fiction"],
    description: "The hunt is on. Shiva, the man believed to be the prophesied Neelkanth - the destroyer of evil - will not rest until he finds his demonic adversary; the Naga warrior that killed his closest friend and now stalks his wife. But the rise of evil is everywhere and Shiva's own philosopher guides have betrayed his unquestioning faith by accepting aid from the dark side. Even the perfect empire of Meluha hides a terrible secret. Shiva's search for truth takes him across the length and breadth of ancient India: a land of deadly mysteries where nothing is what it seems.",
    imageLink: "http://books.google.com/books/content?id=P-9gBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
    ratingCount: 2,
    title: "The Secret of the Nagas"
  },
  {
    ISBN: 9781780874104,
    authors: ["Amish Tripathi"],
    categories: ["Fiction"],
    description: "Today, Shiva is a god. But four thousand years ago, he was just a man - until he brought his people to Meluha, a near-perfect empire founded by the great king Lord Ram. There he discovered he was the Neelkanth, a barbarian long prophesied to be Meluha's saviour. But in his hour of victory fighting the Chandravanshis - Meluha's enemy - he discovered they had their own prophecy. Now he must fight to uncover the treachery within his inner circle, and unmask those who are about to destroy all that he has fought for. Shiva is about to learn that good and evil are two sides of the same coin...",
    imageLink: "http://books.google.com/books/content?id=ZO9gBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 3,
    ratingCount: 1753,
    title: "The Oath of the Vayuputras"
  },
  {
    ISBN: 9780141942025,
    authors: ["Arthur Conan Doyle"],
    categories: ["Fiction"],
    description: "When Dr John Watson takes rooms in Baker Street with amateur detective Sherlock Holmes, he has no idea that he is about to enter a shadowy world of criminality and violence. Accompanying Holmes to an ill-omened house in south London, Watson is startled to find a dead man whose face is contorted in a rictus of horror. There is no mark of violence on the body yet a single word is written on the wall in blood. Dr Watson is as baffled as the police, but Holmes’s brilliant analytical skills soon uncover a trail of murder, revenge and lost love ...",
    imageLink: "http://books.google.com/books/content?id=yuqZCF0SNHIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "A Study in Scarlet"
  },
  {
    ISBN: 9781849311380,
    authors: ["Arthur Conan Doyle", "Worth Press"],
    categories: ["Detective and mystery stories"],
    description: "CLASSIC FICTION (PRE C 1945). This stylish new series of the best-loved classics by Jane Austen, Charlotte Bronte, Emily Bronte, Charles Dickens, Edgar Allan Poe and Sir Arthur Conan Doyle are sure to appeal to all book lovers. From students to adults, to those of us who enjoy rereading our favourite classics and to the newest enthusiasts who have been introduced to these classics through film and TV, there is always something more to discover in these books and the new designs will make them even more irresistible. With their fine attention to detail - including cloth covers, gold foil detail, coloured edges and illustrated endpapers - these volumes will make a highly collectable addition to everyone's bookshelves.",
    imageLink: "http://books.google.com/books/content?id=o_SvswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 2548,
    title: "The Hound of the Baskervilles"
  },
  {
    ISBN: 9780099536017,
    authors: ["Joseph Heller"],
    categories: ["Fiction"],
    description: "Set during World War II in 1943, the novel follows Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier, and a number of other characters.",
    imageLink: "http://books.google.com/books/content?id=AZVXPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 225,
    title: "Catch-22"
  },
  {
    ISBN: 9780230031050,
    authors: ["Margaret Tarner", "John Steinbeck"],
    categories: ["English language"],
    description: "Reading Level: Upper IntermediateSteinbecks most powerful novel describes the lives of a homeless farming family as they travel across America in the Great Depression of the 1930s. When the Joad family loses its farm in Oklahoma, they join thousands of other families on the journey to a new life in California where they have heard there is work picking fruit. Every step of the way, the family face hardship and hostility as they struggle to survive in a country where kindness no longer exists.",
    imageLink: "http://books.google.com/books/content?id=DONiPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 197,
    title: "The Grapes of Wrath"
  },
  {
    ISBN: 9780375415012,
    authors: ["Raymond Chandler"],
    categories: ["Fiction"],
    description: "Three early mystery novels--The Big Sleep, Farewell, My Lovely, and The High Window--introduce the world of harboiled 1930s private detective Philip Marlow, in an omnibus edition. 15,000 first printing.",
    imageLink: "http://books.google.com/books/content?id=UNPWG-zyqN4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.5,
    ratingCount: 7,
    title: "The Big Sleep"
  },
  {
    ISBN: 9781721131495,
    authors: ["Henry James"],
    categories: undefined,
    description: "Lambert Strether, a middle-aged, yet not broadly experienced, man from Woollett, Massachusetts, agrees to assume a mission for his wealthy fiancée: go to Paris and rescue her son, Chad Newsome, from the clutches of a presumably wicked woman. On his journey, Strether stops in England and there meets Maria Gostrey, an American who has lived in Paris for years. Her cynical wit and worldly opinions start to rattle Strether's preconceived view of the situation. In Paris, Strether meets Chad and is impressed by the much greater sophistication Chad seems to have gained during his years in Europe. Chad takes him to a garden party, where Strether meets Marie de Vionnet, a lovely woman of impeccable manners, separated from her reportedly unpleasant husband, and Jeanne, her exquisite daughter. Strether is confused as to whether Chad is more attracted to the mother or the daughter. At the same time, Strether, himself, feels an overwhelming attraction to Marie de Vionnet, which he suspects she might requite, and so begins questioning his commitment to return to Woollett and marry Chad's mother, despite his admiration for her.",
    imageLink: "http://books.google.com/books/content?id=oO6JuAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 2,
    title: "The Ambassadors"
  },
  {
    ISBN: 9780099479314,
    authors: ["William Faulkner"],
    categories: ["Burial"],
    description: "The death and burial of Addie Bundren is told by members of her family, as they cart the coffin to Jefferson, Mississippi, to bury her among her people. And as the intense desires, fears and rivalries of the family are revealed in the vernacular of the Deep South, Faulkner presents a portrait of extraordinary power - as epic as the Old Testament, as American as Huckleberry Finn.",
    imageLink: "http://books.google.com/books/content?id=p-vks-gKmlEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 3.5,
    ratingCount: 84,
    title: "As I Lay Dying"
  },
  {
    ISBN: 9780345806550,
    authors: ["James Baldwin"],
    categories: ["Fiction"],
    description: "“Mountain,” Baldwin said, “is the book I had to write if I was ever going to write anything else.” Go Tell It On The Mountain, first published in 1953, is Baldwin's first major work, a novel that has established itself as an American classic. With lyrical precision, psychological directness, resonating symbolic power, and a rage that is at once unrelenting and compassionate, Baldwin chronicles a fourteen-year-old boy’s discovery of the terms of his identity as the stepson of the minister of a storefront Pentecostal church in Harlem one Saturday in March of 1935. Baldwin’s rendering of his protagonist’s spiritual, sexual, and moral struggle of self-invention opened new possibilities in the American language and in the way Americans understand themselves.",
    imageLink: "http://books.google.com/books/content?id=8RYwAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 3.5,
    ratingCount: 43,
    title: "Go Tell It on the Mountain"
  },
  {
    ISBN: 9780307805225,
    authors: ["Willa Cather"],
    categories: ["Fiction"],
    description: "Willa Cather's best known novel is an epic--almost mythic--story of a single human life lived simply in the silence of the southwestern desert. In 1851 Father Jean Marie Latour comes to serve as the Apostolic Vicar to New Mexico. What he finds is a vast territory of red hills and tortuous arroyos, American by law but Mexican and Indian in custom and belief. In the almost forty years that follow, Latour spreads his faith in the only way he knows--gently, all the while contending with an unforgiving landscape, derelict and sometimes openly rebellious priests, and his own loneliness. Out of these events, Cather gives us an indelible vision of life unfolding in a place where time itself seems suspended. BONUS: The edition includes an excerpt from The Selected Letters of Willa Cather.",
    imageLink: "http://books.google.com/books/content?id=rLYoR4dkIU4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.5,
    ratingCount: 5,
    title: "Death Comes for the Archbishop"
  },
  {
    ISBN: 9780393089134,
    authors: ["Anthony Burgess", "Andrew Biswell"],
    categories: ["Fiction"],
    description: "This 50th anniversary edition of the modern classic draws from three different published versions of the work as well as the original typescript to recreate the novel as the author originally envisioned it. 25,000 first printing.",
    imageLink: "http://books.google.com/books/content?id=op-t1o7KSkQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "A Clockwork Orange (Restored Text)"
  },
  {
    ISBN: 9780141181264,
    authors: ["James Joyce"],
    categories: ["Fiction"],
    description: "Presents an experimental novel depicting a dream of world history, with characters from literature and history appearing and disappearing, written in a dream language that is a comical mixture of all the languages of Europe.",
    imageLink: "http://books.google.com/books/content?id=cnQBqlqrU8MC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 23,
    title: "Finnegans Wake"
  },
  {
    ISBN: 9781077409477,
    authors: ["Rudyard Kipling"],
    categories: undefined,
    description: "Kim is set in an imperialistic world; a world strikingly masculine, dominated by travel, trade and adventure, a world in which there is no question of the division between white and non-white.",
    imageLink: "http://books.google.com/books/content?id=vYD8xgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "Kim"
  },
  {
    ISBN: 9780140182415,
    authors: ["Evelyn Waugh"],
    categories: ["Catholics"],
    description: "(Book Jacket Status: Jacketed) Evelyn Waugh's most celebrated novel is a memory drama about the intense entanglement of the narrator, Charles Ryder, with a great Anglo-Catholic family. Written during World War II, the novel mourns the passing of the aristocratic world Waugh knew in his youth and vividly recalls the sensuous plea?sures denied him by wartime austerities; in so doing it also provides a profound study of the conflict between the demands of religion and the desires of the flesh. At once romantic, sensuous, comic, and somber, \"Brideshead Revisited\" transcends Waugh's familiar satiric exploration of his cast of lords and ladies, Catholics and eccentrics, artists and misfits, revealing him to be an elegiac, lyrical novelist of the utmost feeling and lucidity. The edition reprinted here contains Waugh's revisions, made in 1959, and his preface to the revised edition.",
    imageLink: "http://books.google.com/books/content?id=1DJgQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 108,
    title: "Brideshead Revisited"
  },
  {
    ISBN: 9781101665923,
    authors: ["William Kennedy"],
    categories: ["Fiction"],
    description: "Winner of The Pulitzer Prize and the National Book Critics Circle Award for Fiction In this Pulitzer Prize-winning novel, the third in Kennedy’s Albany cycle, Francis Phelan, ex-ballplayer, part-time gravedigger, and full-time bum with the gift of gab, has hit bottom. Years earlier he’d left Albany after he dropped his infant son accidentally, and the boy died. Now, in 1938, Francis is back in town, roaming the old familiar streets with his hobo pal, Helen, trying to make peace with the ghosts of the past and present.",
    imageLink: "http://books.google.com/books/content?id=whaxDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
    ratingCount: 22,
    title: "Ironweed"
  },
  {
    ISBN: 9780440351627,
    authors: ["John Fowles"],
    categories: ["Fiction"],
    description: "A man trapped in a millionare's deadly game of political and sexual betrayal. Filled with shocks and chilling surprises, The Magus is a masterwork of contemporary literature. In it, a young Englishman, Nicholas Urfe, accepts a teaching position on a Greek island where his friendship with the owner of the islands most magnificent estate leads him into a nightmare. As reality and fantasy are deliberately confused by staged deaths, erotic encounters, and terrifying violence, Urfe becomes a desperate man fighting for his sanity and his life. A work rich with symbols, conundrums and labrinthine twists of event, The Magus is as thought-provoking as it is entertaining, a work that ranks with the best novels of modern times.",
    imageLink: "http://books.google.com/books/content?id=hJtSH5huINEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 51,
    title: "The Magus"
  },
  {
    ISBN: 9780099470441,
    authors: ["William Styron"],
    categories: ["Fiction"],
    description: "In this extraordinary novel, Stingo, an inexperienced twenty-two year old Southerner, takes us back to the summer of 1947 and a boarding house in a leafy Brooklyn suburb. There he meets Nathan, a fiery Jewish intellectual; and Sophie, a beautiful and fragile Polish Catholic. Stingo is drawn into the heart of their passionate and destructive relationship as witness, confidant and supplicant. Ultimately, he arrives at the dark core of Sophie's past- her memories of pre-war Poland, the concentration camp and - the essence of her terrible secret - her choice.",
    imageLink: "http://books.google.com/books/content?id=Xg9h6Q7BrgEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "Sophie's Choice"
  },
  {
    ISBN: 9780802198167,
    authors: ["J. P. Donleavy"],
    categories: ["Fiction"],
    description: "“A picaresque novel to stop them all. Lusty, violent, wildly funny, it is a rigadoon of rascality, a bawled-out comic song of sex.” (Dorothy Parker, Esquire) First published in Paris in 1955, and originally banned in the United States and Ireland, J. P. Donleavy’s debut novel has since been recognized around the world as the masterful portrait of a charming and shameless American abroad. Meet Sebastian Dangerfield: husband, father, and American law student at Trinity College in Dublin. Awaiting news of his father’s death and the substantial inheritance to follow, Sebastian barely has time for his studies as he chases women, avoids bill collectors, and tries to survive without having to descend into the bottomless pit of steady work. In the words of Sean O’Reilly, “this man has granted himself the appalling right to say and think whatever the hell he likes. Silver-tongued seducer, hoaxer, thief, violent marauder, fantasist and drunk, he’s a Yank into the bargain, the rank outsider and ‘great gas’ altogether. You cannot help yourself enjoying his outrageous company” (The Irish Times).",
    imageLink: "http://books.google.com/books/content?id=Rfvp2v7-nE8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 3,
    ratingCount: 9,
    title: "The Ginger Man"
  },
  {
    ISBN: 9781405662178,
    authors: ["Michael Lawrence"],
    categories: ["Children's stories"],
    description: "This time, Jiggy and his pals are under threat from the brain of Bryan Ryan, one of their classmates. Bryan's brain is out of control and threatening to take over the world Only Jiggy, Pete and Angie, the Three Musketeers, can stop it.",
    imageLink: "http://books.google.com/books/content?id=YyVXGQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "Ryan's Brain"
  },
  {
    ISBN: 9780062692894,
    authors: ["Sean D. Young"],
    categories: ["Business & Economics"],
    description: "#1 Wall Street Journal Bestseller An award-winning psychologist and director of the UCLA Center for Digital Behavior shows everyone how to make real, lasting change in their lives in this exciting work of popular psychology that goes beyond The Power of Habit with science and practical strategies that can alter their problem behaviors—forever. Whether it’s absent-minded mistakes at work, a weakness for junk food, a smart phone addiction, or a lack of exercise, everyone has some bad habit or behavior that they’d like to change. But wanting to change and actually doing it—and sticking with it—are two very different things. Dr. Sean Young, an authoritative new voice in the field of behavioral science, knows a great deal about our habits—how we make them and how we can break them. Stick with It is his fascinating look at the science of behavior, filled with crucial knowledge and practical advice to help everyone successfully alter their actions and improve their lives. As Dr. Young explains, you don’t change behavior by changing the person, you do it by changing the process. Drawing on his own scientific research and that of other leading experts in the field, he explains why change can be difficult and identifies the crucial forces that combine to make transformation permanent, from the right way to create new habits to how to harness emotional meaning to motivate change. He also helps us understand how the mind often interferes with creating lasting change and how we can outsmart it, including using \"neurohacks\" to shortcut the brain’s counterproductive instincts. In addition he provides a powerful corrective to the decades old science of habits, offering a next generation discussion of how habits can change behavior with the right approach. Packed with pragmatic exercises and stories of real people who have used them successfully, Stick with It shows that it is possible to control spending, stick to a diet, become more social, exercise regularly, stop compulsively checking e-mail, and overcome problem behaviors—forever.",
    imageLink: "http://books.google.com/books/content?id=R7TnDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 5,
    ratingCount: 1,
    title: "Stick with It"
  },
  {
    ISBN: 9780470067369,
    authors: ["Taylor Larimore", "Mel Lindauer", "Michael LeBoeuf"],
    categories: ["Business & Economics"],
    description: "The Bogleheads’ Guide to Investing is a slightly irreverent, straightforward guide to investing for everyone. The book offers sound, practical advice, no matter what your age or net worth. Bottomline, become a Boglehead and prosper! Originally just the chat-line ruminations of Boglehead founder Taylor Larimore, and Morningstar forum leading cohorts Mel Lindauer and Michael LeBoeuf, their trusted advice has been brewed and distilled into an easy-to-use, need-to-know, no frills guide to building up your own financial well-being – so you can worry less and profit more from the investments you make. Invest like a Boglehead, and let their grassroots investment wisdom guide you down the path of long-term wealth creation and happiness, without all the worries and fuss of stock pickers and day traders. If you face a financial crisis or problem, or simply want to know what is prudent to do with the money you save, the Bogleheads will have the answers you need to help you gain your financial footing and keep it.",
    imageLink: "http://books.google.com/books/content?id=2iipPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4,
    ratingCount: 1,
    title: "The Bogleheads' Guide to Investing"
  },
  {
    ISBN: 9789353051136,
    authors: ["Sangeeta Talwar"],
    categories: ["Literary Collections"],
    description: "Unlike usual business books, The Two-Minute Revolution provokes you to think big-about innovation as well as excellence in on-the-ground execution. Sangeeta Talwar, the first woman executive in the FMCG industry, who established one of the most beloved and enduring brands of India-Maggi Noodles-shares creative and strategic lessons which can help you grow and add value to your business. Drawing from decades of first-hand experience in Nestle, Tata Tea and Mattel, she prescribes a plan of action that includes tactics such as keeping all the balls in the air, executing to perfection, being consumer obsessed and pivoting on profitability. Insightful and packed with fascinating examples-from creating and launching Maggi Noodles to spearheading the highly effective Jaago Re campaign for Tata Tea-this book suggests tried and trusted strategies for building extraordinary brands.",
    imageLink: "http://books.google.com/books/content?id=tV5gDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "The Two-Minute Revolution"
  },
  {
    ISBN: 9783644004054,
    authors: ["Daniel Suarez"],
    categories: ["Fiction"],
    description: "James Tighe, kurz JT, ist ein Glücksritter und der beste Höhlentaucher der Welt. Eines Tages lädt ihn der Milliardär Nathan Joyce auf seine private Insel, um ihm ein Angebot zu machen. Es geht um ein so visionäres wie hochgeheimes Projekt: Von einer Station im All soll ein riesiger Asteroid wirtschaftlich erschlossen werden. Denn die Menschheit des Jahres 2030 ist für ihr Überleben auf Rohstoffe angewiesen. Zusammen mit Ex-Soldaten, Astronauten, Wissenschaftlern soll JT zu einem Team verwachsen, das extreme Situationen bestehen muss. Ungeheure Reichtümer locken. Es droht auch jederzeit der Tod. Und sehr spät erst begreifen die Mitglieder von Delta-V, dass Nathan Joyce ein doppeltes Spiel treibt ...",
    imageLink: "http://books.google.com/books/content?id=1kaXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: undefined,
    ratingCount: undefined,
    title: "Delta-V"
  },
  {
    ISBN: 9780316395489,
    authors: ["James Patterson"],
    categories: ["Fiction"],
    description: "When Jacob and Megan Brandeis plan to expose a secretive and evil corporation, the fallout threatens to destroy them. Jacob and Megan Brandeis have gotten jobs with the mega-successful, ultra-secretive Store. Seems perfect. Seems safe. But their lives are about to become anything but perfect, anything but safe. Especially since Jacob and Megan have a dark secret of their own. They're writing a book that will expose the Store-a forbidden book, a dangerous book. And if the Store finds out, there's only one thing Jacob, Megan and their kids can do: run for their bloody lives. Which is probably impossible, because the Store is always watching . . .",
    imageLink: "http://books.google.com/books/content?id=tFScAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 3.5,
    ratingCount: 8,
    title: "The Store"
  },
  {
    ISBN: 9780470823132,
authors: ["Omar Khan", "Paul B. Brown"],
categories: ["Business & Economics"],
description: "I've long believed that market need and competency must have the catalyst of passion if a company is to have a competitive advantage. Omar Khan and Paul B. Brown practice what they preach and tear into the liberation of passion with raw gusto and exhilarating energy. Reading this book gives leaders the opportunity to improve the power of their assets several-fold without a penny of capital investment. If that doesn't impassion you, nothing will. Alan Weiss, Ph.D. Author, Million Dollar Consulting Finally, a solid business book with practical advice to produce life-changing and profit-making results. Liberating passion by strengthening relationships throughout an organization has been one of the most neglected areas in business literature. But no more! As the authors state, passion IS natural and when it is liberated, outstanding results soon follow. The business world today is so thoroughly global, you need ideas and inspiration from vast global experience. Omar Khan and Sensei International are world-class in helping leaders and teams emotionally engage each other, releasing productive passion and focusing it for powerful results. If you want to upgrade your leadership and uplift your team, this is the book to show you how. Ron Kaufman Author, UP Your Service! Chairman, UP Your Service! College Omar Khan and Paul B. Brown bring clarity and focus to the issue that many businesses overlook--people. Any business without its people would cease to exist. Time and again, I have seen otherwise great leaders brought down by poor leadership development skills. Here Omar draws on his experience in engaging leaders and teams across the world and in collaboration with the ever insightful Paul Brown distills the essence of the real value behind great teams, great talent and great leadership. In an otherwise abstract genre, they bring transformative and skillfully applicable ideas straight into the executive and management suite. Sam Moon CEO, DNMstrategies Limited Managing Director, Asia Pacific, BusinessWeek Events The tools described in this timely book create powerful impact for global teams. You'll read here about fostering appropriate intimacy and emotional maturity through removing unhelpful defensiveness, about the creative capacity of dialogues conducted in a World Cafe format, of brave conversations, of creating \"bold courageous steps\" to bring strategy vividly to life, and to giving future-based requests to each other that simultaneously affirm and challenge our potential as leaders. I heartily recommend that you not only read about these methodologies, but then passionately apply them. You'll be very glad you did! Shonaid Jemmett-Page Global Senior Vice-President, Home and Personal Care, Finance and Information Unilever People and organizations can be dramatically transformed by authentic conversations, a true sense of common purpose and community and removing the \"masks\" that hide real feelings and beliefs. If the leader can show the courage to liberate the suppressed passion of his team and unleash the often hidden energy, it can deliver incredibly powerful results. It is only through genuine engagement with all stakeholders that this process can start. Removing the \"passion killers\" is a great beginning. I hope that reading Liberating Passion will be a catalyst for many of you to move your teams from first into fifth gear. Fred Combe Managing Director, NATUS",
imageLink: "http://books.google.com/books/content?id=H9FEAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
rating: undefined,
ratingCount: undefined,
title: "Liberating Passion"
  },
  {
    ISBN: 9780072119763,
authors: ["Herbert Schildt Patrick Naughton"],
categories: ["Computers"],
description: "Take JAVA to the max with expert help Beginning, intermediate, and advanced JAVA programmers alike take note: everything you need to get the best performance out of your applets and servlets is packed into JAVA 2.0: The Complete Reference. World- renowned authors, Patrick Naughton (ESPN's Sportszone, Disney, and ABC News Web sites), Herb Schildt, the world's leading programming author, and Joseph OÆNeil add 30% more material to their hugely successful past editions of this best seller. They show you exactly how to develop, compile, debug, and run Java applications and applets quickly and confidently. Plus you'll become expert on all of Java's new features including: *Servlets used to build powerful, scalable, robust Web applications *The Swing component set, a GUI toolkit that simplifies the development of visual components such as menus, tool bars, dialogs *Utility class updates *Java2-D, which enables you to build advanced 2D graphics and images",
imageLink: "http://books.google.com/books/content?id=a4UumQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
rating: undefined,
ratingCount: undefined,
title: "Java 2: The Complete Reference, Third Edition"
  },
{
  ISBN: 9780132017572,
authors: ["Maurice J. Bach"],
categories: ["Operating systems (Computers)"],
description: "This book describes the internal algorithms and the structures that form the basis of the UNIX operating system and their relationship to the programmer interface. The system description is based on UNIX System V Release 2 supported by AT&T, with some features from Release 3.",
imageLink: "http://books.google.com/books/content?id=BxZpQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
rating: 4.5,
ratingCount: 4,
title: "The Design of the UNIX Operating System"
},
{
  ISBN: 9780131615304,
authors: ["Donald Hearn", "M. Pauline Baker"],
categories: ["Computers"],
description: "A complete update of a bestselling introduction to computer graphics, this volume explores current computer graphics hardware and software systems, current graphics techniques, and current graphics applications. Includes expanded coverage of algorithms, applications, 3-D modeling and rendering, and new topics such as distributed ray tracing, radiosity, physically based modeling, and visualization techniques.",
imageLink: "http://books.google.com/books/content?id=WJiYQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
rating: 4.5,
ratingCount: 2,
title: "Computer Graphics"
},
{
  ISBN: 9780072822946,
authors: ["Behrouz A. Forouzan", "Catherine Ann Coombs", "Sophia Chung Fegan"],
categories: ["Computers"],
description: "\"Data Communications and Networking, 3/e\" provides a comprehensive and current introduction to networking technologies. The book is accessible to students from all backgrounds and uses hundreds of figures to visually represent concepts. The new edition has been completely updated to reflect the constantly changing world of network technologies. Enhanced coverage of bluetooth, wireless, satellites, as well as four new chapters on security have been added. The third edition has transitioned from using the 7-layer OSI model to the 5-layer Internet Model. More time is spent on TCP/IP in the new organization. Forouzan's book continues to be supported by an On-line Learning Center (OLC) that contains many extra resources for students and instructors. Some of the features include PowerPoints, solutions, self-quizzing, and Flash animations that illustrate concepts.",
imageLink: "http://books.google.com/books/content?id=xvZSAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
rating: 3.5,
ratingCount: 8,
title: "Data communications and networking"
}
];


class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    })
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        books.push(book);
        resolve(book);
      }, delay);
    });
  }
}

export default BookApi;