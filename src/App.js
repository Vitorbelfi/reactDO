import { useEffect, useState } from "react";

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
      <header>
        <h1>React DO</h1>
      </header>
      <div>
      <input type="text" name="tarefa" placeholder="Digite Sua Tarefa " value={tarefa.texto} onChange={(e)=> setTarefas({id: Math.random(),texto:e.target.value, status: false })}></input>
        <button onClick={addTarefa}>Adicionar</button> 
      </div>
        <div>
            <ul>
                {listatarefas.map((item,index) => (
                    <li key={index}>{item.texto}<button onClick={() => statusTarefa(item.id, item.status)}>{item.status ? 'Concluida' : 'Não concluida'}</button> <button onClick={() => excluirTarefa(item.id)} >Excluir</button></li>
                ))}
            </ul>
        </div>
    </>
  );
}
export default App;


