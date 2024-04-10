import { ContainerOne, ContainerTwo, Main, TableComponent } from './styles'
import { useStatePage } from '../../hooks/statePage'
import { FaPrint } from "react-icons/fa";
import { Button } from '../../components/Button';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function ReportCard() {
  const { statePage } = useStatePage()
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [date, setDate] = useState("")
  const [teachers, setTeachers] = useState([])

  const { id, class_id } = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/students/${id}`)
      setName(response.data.student[0].name)
      setCpf(response.data.student[0].cpf)
      setDate(response.data.student[0].birth)

      const response2 = await api.get(`/classAndTeachers/${class_id}`)
      setTeachers(response2.data.relationsReturn)
    }

    fetchData()
  }, [])

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <div style={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: statePage ? "1px solid #00111A" : "1px solid #FFFAF1", 
          color: statePage ? "#00111A" : "#FFFAF1", 
          paddingBottom: "16px",
          paddingInline: "36px",
          paddingTop: "16px"
        }}>
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "start", 
            gap: "8px",
          }}>
            <h3 style={{ borderBottom: statePage ? "1px solid #00111A" : "1px solid #FFFAF1", width: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Edu Station
            </h3>
            <p>Nome aluno: {name}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <p>cpf: {cpf}</p>
              <p>Data de nascimento: {date}</p>
            </div>
          </div>
          <FaPrint size={70} />
        </div>
        <Main className={statePage ? "light" : "dark"}>
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            gap: "8px",
            color: statePage ? "#00111A" : "#FFFAF1", 
            marginTop: "8px",
            marginBottom: "8px",
          }}>
            <p>Boletim</p>
            <p>{teachers[0]?.class_name} - {teachers[0]?.class_year}</p>
          </div>
          <TableComponent>
            <thead className={statePage ? "tableLight" : "tableDark"}>
              <tr>
                <th class="subject">Disciplina</th>
                <th class="assessment_one">Nota 1</th>
                <th class="assessment_two">Nota 2</th>
                <th class="recovery">Recuperação</th>
                <th class="final-media">Média final</th>
                <th class="situation">Situação</th>
              </tr>
            </thead>
            <tbody className={statePage ? "tableLight" : "tableDark"}>
              {
                teachers.map((item) => (
                  <tr class="rows">
                    <td class="subject-row">{item.subject_name}</td>
                    <td class="assessment_one-row">7.5</td>
                    <td class="assessment_two-row">7.5</td>
                    <td class="recovery-row">
                      -
                    </td>
                    <td class="final-media-row">
                      7.5
                    </td>
                    <td class="situation-row">
                      Aprovado
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </TableComponent>
          <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginTop: "30px", marginBottom: "90px" }}>
            <Button onClick={() => window.print()}>Imprimir</Button>
          </div>
        </Main>
      </ContainerTwo>
    </ContainerOne >
  )
}


