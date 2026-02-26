import { useState } from "react";

import { movies } from "../moviesData";
import type { Movie } from '../moviesData';

import { Card } from "../componants/Card";

export function CardPage() {

    const [Cards, setCards] = useState<Movie[]>(movies);

    return (
        <div className="h-screen bg-indigo-200 grid place-items-center">

            {
                Cards.map((card) => {

                    return <Card key={card.id} {...card} setCards={setCards} Cards={Cards}/>
                })
            }

            {/* <div className="min-h-screen bg-slate-900 text-white p-10">
            <h1 className="text-4xl font-bold text-cyan-400">Tailwind is Working!</h1>
        </div> */}

        </div>
    );
}