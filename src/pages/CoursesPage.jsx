// /pages/CoursesPage.jsx
import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Courses from '../components/Courses';

export default function CoursesPage() {
  return (
    <PageTemplate title="Courses & Learning Updates">
      <Courses />
    </PageTemplate>
  );
}
