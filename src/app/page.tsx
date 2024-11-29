import Link from "next/link";

import { Akronim, Ga_Maamli } from "next/font/google";


const gaMaamli = Ga_Maamli({ weight: "400", subsets: ["latin"] });
const satisfy = Akronim({ weight: "400", subsets: ["latin"] });


export default async function Home() {
  interface IData {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

  let res = await fetch(`https://simple-books-api.glitch.me/books`);

  const data: IData[] = await res.json();
  console.log(data);
  return (
    <>
      <h1
        className={`${gaMaamli.className} text-8xl text-center text-red-600 p-2 `} 
      >
       API Data Fetching

      </h1>
      <div className="grid grid-cols-2 p-4 mt-12 gap-4 max-w-[100%] ">
        { data.map( (IData ) => {
          return (
            <div key={ IData.id }>
              <Link href={`/books/${IData.id}`} >
                <h1
                  className={` ${satisfy.className} text-3xl text-center border-2 border-teal-300 rounded-2xl py-10 p-2 bg-gradient-to-bl to-black via-slate-900 from-black  hover:bg-gradient-to-bl hover:to-red-900  hover:text-[2rem] `}
                >
                  {" "}
                  {IData.name}{" "}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
