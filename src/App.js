import { useEffect, useState } from "react";
import "./App.css"
import img from "./Tachinha sem fundo.png"

function App() {

  const [listatarefas, setListaTarefas] = useState ([]);
  const [tarefa, setTarefas] = useState ({id:'', texto:"", status:""});

  function addTarefa()
  {
    if( tarefa.texto !== ""){
      setListaTarefas([...listatarefas, tarefa])
    }
  }

  function excluirTarefa(id)
  {
     const novaLista = listatarefas.filter((tarefa)=> tarefa.id !== id);  
     setListaTarefas(novaLista);
    }

    function statusTarefa(id, status)
    {
      const index = listatarefas.findIndex((tarefa)=> tarefa.id === id);
      const novoStatus = status;
      listatarefas[index].status = !status;
      setListaTarefas([...listatarefas]);
    }

    useEffect(() => {
      setTarefas({id:"", texto:"", status:""});
    }, [ listatarefas])

  return (
    <>
    <div  className="todastarefas">



        <header >
          <h1>Suas Tarefas</h1>
        </header>
        <div>
        
          <div className="inputbutton">
              <input className="inputinteiro" type="text" name="tarefa" placeholder="Digite Sua Tarefa " value={tarefa.texto} onChange={(e)=> setTarefas({id: Math.random(),texto:e.target.value, status: false })}></input>
              <button className="botaoadd" onClick={addTarefa}>Add</button>
          </div>
          <div className="inputdata">
            <h3>Prazo Final:</h3>
            <label for="start"></label>
            <input type="date" id="start" name="trip-start"   />
          </div>
          

         
        </div>
          <div className="listaul">
          <ul>
              <h3>CONTROLE:</h3>
                        {listatarefas.map((item,index) => (
                            <li key={index}>{item.texto}<button className="botaoreativo" onClick={() => statusTarefa(item.id, item.status)}>{item.status ? <i class="fa-solid fa-square-check" ></i> : <i class="fa-thin fa-square-check" ></i>}</button> <button onClick={() => excluirTarefa(item.id)} ><i class="fa-solid fa-trash"></i></button> </li>
                        ))}
                    </ul>
            <div className="divdetalhe2">
           
              </div>
                    
          </div>
          <div className="divdetalhe"></div>
      </div>
    </>
  );
}
export default App;


