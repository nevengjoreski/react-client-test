import {v4 as uuid} from "uuid";

export const json_data = {
    name: "/root",
    id: uuid(),
    subchildren: [
        {
            name: "music",
            id: uuid(),
            subchildren: [
                {
                    name: "Bellyache.mp3",
                    id: uuid()
                },
                {
                    name: "Mamma Mia.mp3",
                    id: uuid()
                },
                {
                    name: "After Dark.mp3",
                    id: uuid()
                },
                {
                    name: "Two Steps From Hell",
                    id: uuid(),
                    subchildren: [
                        {
                            name: "hero.mp3",
                            id: uuid()
                        },
                        {
                            name: "victory.mp3",
                            id: uuid()
                        }
                    ]
                }
            ]
        },
        {
            name: "movies",
            id: uuid(),
            subchildren: [
                {
                    name: "Lord Of The Rings.avi",
                    id: uuid()
                },
                {
                    name: "Mamma Mia.avi",
                    id: uuid()
                }
            ]
        },
        {
            name: "series",
            id: uuid(),
            subchildren: [
                {
                    name: "Gossip Girl.avi",
                    id: uuid()
                },
                {
                    name: "Narcos.avi",
                    id: uuid()
                },
                {
                    name: "Game of Thrones.avi",
                    id: uuid()
                },
                {
                    name: "Favourites",
                    id: uuid(),
                    subchildren: [
                        {
                            name: "Stranger Things.avi",
                            id: uuid()
                        },
                        {
                            name: "La Casa De Papel.avi",
                            id: uuid()
                        }
                    ]
                }
            ]
        }
    ]
}