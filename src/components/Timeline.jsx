// src/components/Timeline.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <section className="bg-white dark:bg-slate-900 py-20 px-4 scroll-snap-y">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">📈 My Journey</h2>

      <VerticalTimeline lineColor="#3b82f6">

        {/* 🧑‍💼 Experience */}
        <VerticalTimelineElement
          contentStyle={{
            background: 'linear-gradient(to right, #3b82f6, #6366f1)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
          date={<span className="outlined-text">{'2023 - Present'}</span>}
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
          icon={
            <img
              src="/icons/briefcase.png"
              alt="Work Icon"
              className="w-full h-full object-contain p-1"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">IT Associate</h3>
          <h4 className="vertical-timeline-element-subtitle">Aisshpra Gems & Jewels</h4>
          <p>Leading digital signage implementation and IT support operations.</p>
        </VerticalTimelineElement>

        {/* 🎓 MCA */}
        <VerticalTimelineElement
          contentStyle={{
            background: '#6366f1',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid #6366f1' }}
          date={<span className="outlined-text">{'2021 - 2023'}</span>}
          iconStyle={{ background: '#6366f1', color: '#fff' }}
          icon={
            <img
              src="/icons/graduation.png"
              alt="MCA Icon"
              className="w-full h-full object-contain p-1"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">MCA - Master of Computer Applications</h3>
          <h4 className="vertical-timeline-element-subtitle">Narula Institute of Technology, MAKAUT</h4>
          <p>Specialized in Software Development, Analysis & Design.</p>
        </VerticalTimelineElement>

        {/* 🎓 BCA */}
        <VerticalTimelineElement
          contentStyle={{
            background: '#6366f1',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid #6366f1' }}
          date={<span className="outlined-text">{'2018 - 2021'}</span>}
          iconStyle={{ background: '#6366f1', color: '#fff' }}
          icon={
            <img
              src="/icons/book.png"
              alt="BCA Icon"
              className="w-full h-full object-contain p-1"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">BCA - Bachelor of Computer Applications</h3>
          <h4 className="vertical-timeline-element-subtitle">Narula Institute of Technology, MAKAUT</h4>
          <p>Focused on Programming, DBMS & Web Technologies.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  );
}
