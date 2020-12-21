import React from 'react';
//image imports
import ProgressTracker from './TeacherBuilderIcons/small/Progressdark.png';
import StudentProfiles from './TeacherBuilderIcons/small/Iconawesome-user-graduate.png';
import ProjectSubmission from './TeacherBuilderIcons/small/submitproj.png';
import ProjectLibrary from './TeacherBuilderIcons/small/librarylight.png';
import HelpRequest from './TeacherBuilderIcons/small/Iconmaterial-live-help.png';
import TeacherProfile from './TeacherBuilderIcons/Ellipse38.png';
import TeacherBuilder from './TeacherBuilderIcons/small/new proj.png';

export const SidebarData = [
    {
        profile: <img
        class="TeacherProfile"
        src={TeacherProfile}
        alt="profileImage" />,
        cName: 'nav-image',
    },
    {
        title: 'PROGRESS TRACKER',
        path: "/teacherSide",
        icon: <img
        class="ProgressTracker"
        src={ProgressTracker}
        alt="icon-1"/>,
        cName: 'nav-text',
        altName: 'panel-text',
    },
    {
        title: 'STUDENT PROFILES',
        path: '/StudentProfiles',
        icon: <img
        class="StudentProfiles"
        src={StudentProfiles}
        alt="icon-2"/>,
        cName: 'nav-text',
        altName: 'panel-text'
        
    },
    {
        title: 'HELP REQUESTS',
        path: '/HelpRequest',
        icon: <img
        class="HelpRequests"
        src={HelpRequest}
        alt="icon-3"/>,
        cName: 'nav-text',
        altName: 'panel-text'
    },
    {
        title: 'PROJECT SUBMISSIONS',
        path: '/ProjectSubmissions',
        icon: <img
        class="ProjectSubmissions"
        src={ProjectSubmission}
        alt="icon-4"/>,
        cName: 'nav-text',
        altName: 'panel-text'
    },
    {
        title: 'PROJECT LIBRARY',
        path: '/teacherLibrary',
        icon: <img
        class="ProjectLibrary"
        src={ProjectLibrary}
        alt="icon-5"/>,
        cName: 'nav-text',
        altName: 'panel-text'
    },

    {
        title: 'TEACHER BUILDER',
        path: '/teacherBuilder',
        icon: <img
        class="TeacherBuilder"
        src={TeacherBuilder}
        alt="icon-6"/>,
        cName: 'nav-text',
        altName: 'panel-text'
    }
]