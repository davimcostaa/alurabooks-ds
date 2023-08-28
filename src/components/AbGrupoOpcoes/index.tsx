import React, { useState } from 'react'
import styled from 'styled-components'

export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[]
  valorPadrao?: AbGrupoOpcao | null
  onChange?: (opcao: AbGrupoOpcao) => null
}

const SectionEstilizada = styled.section<{selecionado: boolean}>`
    width: 194px;
    height: 88px;
    border-radius: 8px;
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    background: ${props => props.selecionado ? 'linear-gradient(160deg, #002F52 0%, #326589 100%)' : 'FFFFFF' };
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
      color: ${props => props.selecionado ? '#FFFFFF' : '#EB9B00'};
      font-size: 12px;
      font-weight: 400;
    }
    strong {
      color: ${props => props.selecionado ? '#FFFFFF' : '#EB9B00'};
      font-size: 16px;
      font-weight: 700;
    }
    footer {
      color: ${props => props.selecionado ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'};;
      font-size: 12px;
      font-weight: 400;
    }

`

const AbGrupoOpcoes = ({opcoes, onChange, valorPadrao}: AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null)

  const aoSelecionar = (opcao: AbGrupoOpcao): void => {
      setSelecao(opcao)
      if (onChange) {
        onChange(opcao)
      }
  }

  return (
      <>
        {opcoes.map(opcao =>  
        <SectionEstilizada 
              key={opcao.id} 
              onClick={() => aoSelecionar(opcao)}
              selecionado={selecao?.id == opcao.id}> 
            <header>
              {opcao.titulo}
            </header>
            <div>
              <strong>{opcao.corpo}</strong>        
            </div>
            <footer>
              {opcao.rodape}
            </footer>
        </SectionEstilizada>)}
      </>
  )
}

export default AbGrupoOpcoes