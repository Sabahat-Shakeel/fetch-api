import {Courgette} from  "next/font/google";
const courgette =Courgette( {weight: "400" ,subsets: ["latin"]});

interface Params {
    params:{
        name :string
    }
}

const Page =  async ( { params } : Params ) => {

return (
    <div className="grid place-content-center h-screen bg-black/30">

        <h1 className={`${courgette.className} text-7xl `} > Fetching data id : { params.name}
    </h1>
          <div className="w-[100%] bg-orange-500 mt-3 p-2"></div>
      
        
    </div>
)

   
}

export default Page;

