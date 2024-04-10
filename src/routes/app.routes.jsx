import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DirectionDetails } from '../pages/DirectionDetails'
import { Direction } from '../pages/Direction'
import { DirectionCreate } from '../pages/DirectionCreate'
import { Teachers } from '../pages/Teachers'
import { TeachersCreate } from '../pages/TeachersCreate'
import { TeachersUpdate } from '../pages/TeachersUpdate'
import { Students } from '../pages/Students'
import { StudentsCreate } from '../pages/StudentsCreate'
import { StudentsUpdate } from '../pages/StudentsUpdate'
import { Subjects } from '../pages/Subjects'
import { SubjectCreate } from '../pages/SubjectCreate'
import { SubjectUpdate } from '../pages/SubjectUpdate'
import { Class } from '../pages/Class'
import { ClassCreate } from '../pages/ClassCreate'
import { ClassUpdate } from '../pages/ClassUpdate'
import { ReportCard } from '../pages/ReportCard'

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directiondetails/:id" element={<DirectionDetails />} />
      <Route path="/direction" element={<Direction />} />
      <Route path="/directioncreate" element={<DirectionCreate />} />
      <Route path="/students" element={<Students />} />
      <Route path="/studentscreate" element={<StudentsCreate />} />
      <Route path="/studentsupdate/:id" element={<StudentsUpdate />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/subjectcreate" element={<SubjectCreate />} />
      <Route path="/subjectupdate/:id" element={<SubjectUpdate />} />
      <Route path="/class" element={<Class />} />
      <Route path="/classcreate" element={<ClassCreate />} />
      <Route path="/classupdate/:id" element={<ClassUpdate />} />
      <Route path="/reportcard/:id/:class_id" element={<ReportCard />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/teacherscreate" element={<TeachersCreate />} />
      <Route path="/teachersupdate/:id" element={<TeachersUpdate />} />
    </Routes>
  )
}