import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import {
  ABOUT,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  STACK,
  STATS,
} from './data/portfolio.data';

interface ProfileLine {
  key: string;
  value?: string;
  values?: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly profile = PROFILE;
  readonly about = ABOUT;
  readonly stats = STATS;
  readonly stack = STACK;
  readonly experiences = EXPERIENCES;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;

  readonly nav = [
    { id: 'sobre', label: 'sobre' },
    { id: 'experiencia', label: 'experiência' },
    { id: 'projetos', label: 'projetos' },
    { id: 'formacao', label: 'formação' },
    { id: 'contato', label: 'contato' },
  ];

  // Linhas do cartão "perfil.json" no hero
  readonly profileLines: ProfileLine[] = [
    { key: 'nome', value: PROFILE.name },
    { key: 'cargo', value: PROFILE.role },
    { key: 'local', value: PROFILE.location },
    { key: 'experiencia', value: PROFILE.experience },
    { key: 'foco', values: PROFILE.focus },
    { key: 'trajetoria', value: PROFILE.trajectory },
    { key: 'idiomas', values: PROFILE.languages },
  ];

  readonly projects = PROJECTS.map((project) => {
    const doneCount = project.roadmap.filter((step) => step.done).length;
    return {
      ...project,
      doneCount,
      progress: Math.round((doneCount / project.roadmap.length) * 100),
    };
  });

  readonly githubHandle = PROFILE.github.replace(/^https?:\/\//, '').replace(/\/$/, '');
  readonly year = new Date().getFullYear();
}
