// /pages/AdminCoursesPage.jsx
import React from 'react';
import PageTemplate from '../components/PageTemplate';
import AdminCourses from '../components/AdminCourses';

export default function AdminCoursesPage() {
  return (
    <PageTemplate title="Admin - Manage Courses">
      <AdminCourses />
    </PageTemplate>
  );
}
