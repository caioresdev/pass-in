import {Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight} from "lucide-react"
export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 w-72 border border-white/10 flex items-center  rounded-lg text-sm gap-3 ">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none h-auto p-0 border-0 text-sm ring-0 "
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">

        <table className="w-full ">

          <thead>
            <tr className="border-b border-white/10">
              <th style={{width:48}} className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/>
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição{" "}
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in{" "}
              </th>

              <th style={{width:64}} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map(()=>{
              return(

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/>
                </td>

                <td className="py-3 px-4 text-sm text-zinc-300 ">12383</td>

                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibol text-white">Matheus Paigel </span>
                    <span>matheuspaigel2016@gmail.com</span>
                  </div>
                </td>

                <td className="py-3 px-4 text-sm text-zinc-300 "> 7 dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300 "> 3 dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300 ">
                  <button className="border boder-white/10 rounded-md p-1.5 bg-black/20">
                    <MoreHorizontal className="size-4 " />
                  </button></td>
              </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300 " colSpan={3}>Mostrando 10 de 228 itens</td>
              <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                
                <div className="inline-flex gap-8 items-center f">
                    
                    <span>Página 1 de 23</span>

                    <div className="flex gap-1.5">

                      <button className="border boder-white/10 rounded-md p-1.5 bg-white/10">
                        <ChevronsLeft className="size-4 " />
                      </button>
                      
                      <button className="border boder-white/10 rounded-md p-1.5 bg-white/10">
                        <ChevronLeft className="size-4 " />
                      </button>

                      <button className="border boder-white/10 rounded-md p-1.5 bg-white/10">
                        <ChevronRight className="size-4 " />
                      </button>

                      <button className="border boder-white/10 rounded-md p-1.5 bg-white/10">
                        <ChevronsRight className="size-4 " />
                      </button>

                    </div>
                 </div> 
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
}
