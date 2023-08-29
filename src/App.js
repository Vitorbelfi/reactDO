import { useEffect, useState } from "react";

function App() {

  const [listatarefas, setListaTarefas] = useState ([]);
  const [tarefa, setTarefas] = useState ({id:'', texto:""});

  function addTarefa()
  {
    if( tarefa.texto !== ""){
      setListaTarefas([...listatarefas, tarefa])
    }
  }

  useEffect(() => {
    setTarefas({id:"", texto:""});
  }, [ listatarefas])

  function excluirTarefa(id)
  {
     const novaLista = listatarefas.filter((tarefa)=> tarefa.id !== id);  
     setListaTarefas(novaLista);
    
    }


  return (
    <>
      <header>
        <h1>React DO</h1>
      </header>
      <div>
      <input type="text" name="tarefa" placeholder="Digite Sua Tarefa " value={tarefa.texto} onChange={(e)=> setTarefas({id: Math.random(),texto:e.target.value })}></input>
        <button onClick={addTarefa}>Adicionar</button>
        
      </div>
        <div>
            <ul>
                {listatarefas.map((item,index) => (
                    <li key={index}>{item.texto} <button onClick={() => excluirTarefa(item.id)} >Excluir</button></li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default App;
