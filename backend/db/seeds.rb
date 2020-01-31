# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(first_name: 'Peter', last_name: 'Ayeni', email: Faker::Internet.email)
       

Content.create([
    {
        title: '25 Mistakes Tourists Make While Visiting London',
        url: 'https://www.huffingtonpost.co.uk/entry/mistakes-tourists-london_l_5e13ccdae4b0b2520d26a1d0?guccounter=1&guce_referrer=aHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8&guce_referrer_sig=AQAAAGIQ8E4Q6e_i9Xa11YKNo3s-wQ53iYiHu5HEQ5wNyamqQVT35zhQKHL4ELbPspyMJzo5p8mOyzLYXCcqq0iDXujD08Z4a_Q9-Jg8sTYozjSqwz3tHlxBnrw83KMIlxBHs7A3NuA4E120NRKO4grFFbYyDscPJJObuJlzsFQNVaj6',
        description: 'The London Bridge that still stands today dates from 1973. So, despite the fact London Bridge has existed here the longest, the actual bridge standing today is one of the more modern bridges over the Thames in London. Tower Bridge – Tower Bridge was opened in 1894 making this a purely Victorian bridge. - Wikipedia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/London_Bridge_Illuminated.jpg/800px-London_Bridge_Illuminated.jpg',
        user_id: User.first.id

    },
    {
        title: 'Eiffel Tower History',
        url: 'https://www.pariscityvision.com/en/paris/landmarks/eiffel-tower/history', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
        description: 'The Eiffel Tower French: tour Eiffel is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. - Wikipedia', 
        user_id: User.first.id
    },
    
    {
        title: 'The Great Wall of China', 
        url: 'https://www.chinahighlights.com/greatwall/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
        description: 'The Great Wall of China (Chinese: 萬里長城; pinyin: Wànlǐ Chángchéng) is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities. - Wikipedia', 
        user_id: User.first.id
    },

    {
        title: 'Victoria Falls', 
        url: 'https://victoriafallstourism.org/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_07.jpg/1280px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_07.jpg',
        description: 'David Livingstone, the Scottish missionary and explorer, is believed to have been the first European to view Victoria Falls on 16 November 1855, from what is now known as Livingstone Island, one of two land masses in the middle of the river, immediately upstream from the falls near the Zambian shore. - Wikipedia', 
        user_id: User.first.id
    }
    
])

Comment.create(
    user_id: User.first.id,
    content_id: Content.all.sample.id,
    content: Faker::Quote.yoda

            )