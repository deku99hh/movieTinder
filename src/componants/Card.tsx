import { motion, useMotionValue, useTransform } from "framer-motion";


export function Card({ id, title, poster_path, setCards, Cards}: { id: number, title: string, poster_path: string , setCards: any, Cards: any }) {

    const x = useMotionValue(0);

    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18])

    const isfornt = id ===Cards[Cards.length-1].id

    const rotate= useTransform(()=>{
        const offset = isfornt ? 1 : id % 2 ? 6 : -6;

        return `${rotateRaw.get() + offset}deg`;
    })
    // const filter = useTransform(
    //     x, 
    //     [-100, 0, 100],
    //     ["sepia(1) saturate(250%) hue-rotate(90deg)", "", "sepia(1) saturate(250%) hue-rotate(90deg)"]
    // )

    const dragEnd= ()=>{
        if (Math.abs(x.get()) > 50) {
            setCards((pv: any) => pv.filter((v: any) => v.id !== id));
        }
    }

    return (
        <motion.div className="h-96 w-64 rounded-2xl bg-white overflow-hidden flex items-start flex-col hover:cursor-grab focus:cursor-grabbing origin-bottom" style={{
            gridRow: 1,
            gridColumn: 1,

            // backgroundColor: `red`,
            // background: `url(${poster_path})`,
            // backgroundSize: `cover`
            x,
            opacity,
            rotate,
            // filter,
            transition: "0.125s ",
        }}
        animate={{
            scale: isfornt? 1 :0.98,
        }}
        
        key={id}
            drag="x"
            dragConstraints={{
                right: 0,
                left: 0,
            }}
            onDragEnd={dragEnd}
        >
            <img src={poster_path} alt="alt" className=" h-80 w-64 object-cover pointer-events-none" />

            <p className="pl-4 pt-3 text-black text-2xl font-bold mb-24">{title}</p>
            {/* <img src={poster_path} alt="alt" /> */}

        </motion.div>

    );
}