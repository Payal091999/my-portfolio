import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Timeline() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Education & Experience</h2>
      <VerticalTimeline lineColor="#3b82f6">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#e0f2fe', color: '#1e3a8a' }}
          contentArrowStyle={{ borderRight: '7px solid #e0f2fe' }}
          date="2022 - 2024"
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">MCA</h3>
          <h4 className="vertical-timeline-element-subtitle">Narula Institute of Technology</h4>
          <p>Master of Computer Applications</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fef9c3', color: '#92400e' }}
          contentArrowStyle={{ borderRight: '7px solid #fef9c3' }}
          date="2019 - 2022"
          iconStyle={{ background: '#f59e0b', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">BCA</h3>
          <h4 className="vertical-timeline-element-subtitle">Narula Institute of Technology</h4>
          <p>Bachelor of Computer Applications</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#dcfce7', color: '#065f46' }}
          contentArrowStyle={{ borderRight: '7px solid #dcfce7' }}
          date="2024 - Present"
          iconStyle={{ background: '#10b981', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">IT Associate</h3>
          <h4 className="vertical-timeline-element-subtitle">Aisshpra Gems & Jewels</h4>
          <p>Maintaining IT systems and developing internal tools</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
