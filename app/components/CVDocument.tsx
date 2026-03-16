import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import path from 'path';
import { highestSkills, managingSkills, languageSkills } from '@/app/data/skills';
import skMessages from '@/messages/sk.json';
import enMessages from '@/messages/en.json';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: path.join(process.cwd(), 'public/fonts/Roboto-Regular.ttf'), fontWeight: 400 },
    { src: path.join(process.cwd(), 'public/fonts/Roboto-Bold.ttf'), fontWeight: 700 },
  ],
});

type Locale = 'sk' | 'en';

const messages = { sk: skMessages, en: enMessages };

const C = {
  primary: '#3b82f6',
  text: '#1f2937',
  muted: '#6b7280',
  border: '#e5e7eb',
  bgCard: '#f9fafb',
  journey: '#3b82f6',
  motivation: '#10b981',
  vision: '#f59e0b',
  hobby: '#ec4899',
} as const;

const s = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontFamily: 'Roboto',
    backgroundColor: '#ffffff',
    fontSize: 10,
    color: C.text,
  },
  header: {
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: C.primary,
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: C.primary,
    marginBottom: 3,
  },
  headerSubtitle: {
    fontSize: 11,
    color: C.muted,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 8.5,
    color: C.muted,
    marginRight: 16,
  },
  body: {
    flexDirection: 'row',
    gap: 20,
  },
  sidebar: {
    width: 155,
    flexShrink: 0,
  },
  main: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: C.primary,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    borderBottomStyle: 'solid',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  subsectionLabel: {
    fontSize: 8.5,
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: C.text,
    marginBottom: 5,
    marginTop: 8,
  },
  skillRow: {
    marginBottom: 5,
  },
  skillLabel: {
    fontSize: 8.5,
    marginBottom: 2.5,
    color: C.text,
  },
  barBg: {
    height: 4,
    backgroundColor: C.border,
    borderRadius: 2,
  },
  barFill: {
    height: 4,
    backgroundColor: C.primary,
    borderRadius: 2,
  },
  intro: {
    fontSize: 9,
    color: C.muted,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  card: {
    marginBottom: 9,
    padding: 9,
    backgroundColor: C.bgCard,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftStyle: 'solid',
    borderLeftColor: C.primary,
  },
  cardTitle: {
    fontSize: 10,
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginBottom: 3,
  },
  cardContent: {
    fontSize: 8.5,
    color: C.muted,
    lineHeight: 1.55,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: C.border,
    borderTopStyle: 'solid',
    textAlign: 'center',
    fontSize: 7.5,
    color: C.muted,
  },
  projectCard: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: C.bgCard,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftStyle: 'solid',
    borderLeftColor: C.primary,
  },
  projectTitle: {
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginBottom: 4,
    color: C.text,
  },
  projectDesc: {
    fontSize: 8.5,
    color: C.muted,
    lineHeight: 1.55,
    marginBottom: 6,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  techChip: {
    fontSize: 7.5,
    color: C.primary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: C.primary,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  featuredBadge: {
    fontSize: 7.5,
    color: '#ffffff',
    backgroundColor: C.primary,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 6,
  },
  projectTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});

const aboutColors: Record<string, string> = {
  journey: C.journey,
  motivation: C.motivation,
  vision: C.vision,
  hobby: C.hobby,
};

const aboutIds = ['journey', 'motivation', 'vision', 'hobby'] as const;

type Project = {
  id: string;
  title: string;
  titleEn: string | null;
  description: string;
  descriptionEn: string | null;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  isFeatured: boolean;
};

type Props = { locale: Locale; projects?: Project[] };

export default function CVDocument({ locale, projects = [] }: Props) {
  const t = messages[locale];

  return (
    <Document
      title="Jaroslav Pecha — CV"
      author="Jaroslav Pecha"
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>Jaroslav Pecha</Text>
          <Text style={s.headerSubtitle}>{t.footer.subtitle}</Text>
          <View style={s.contactRow}>
            <Text style={s.contactItem}>jarocha75@gmail.com</Text>
            <Text style={s.contactItem}>0949 433 262</Text>
            <Text style={s.contactItem}>linkedin.com/in/jaroslav-pecha-525b4a39b</Text>
            <Text style={s.contactItem}>github.com/Jarocha75</Text>
          </View>
        </View>

        {/* Body */}
        <View style={s.body}>
          {/* Sidebar — Skills */}
          <View style={s.sidebar}>
            <Text style={s.sectionTitle}>{t.sidebar.skillset}</Text>

            <Text style={s.subsectionLabel}>{t.sidebar.highestSkills}</Text>
            {highestSkills.map((skill) => (
              <View key={skill.name} style={s.skillRow}>
                <Text style={s.skillLabel}>{skill.name}</Text>
                <View style={s.barBg}>
                  <View style={[s.barFill, { width: `${skill.level}%` }]} />
                </View>
              </View>
            ))}

            <Text style={s.subsectionLabel}>{t.sidebar.managingSkills}</Text>
            {managingSkills.map((skill) => (
              <View key={skill.name} style={s.skillRow}>
                <Text style={s.skillLabel}>{skill.name}</Text>
                <View style={s.barBg}>
                  <View style={[s.barFill, { width: `${skill.level}%` }]} />
                </View>
              </View>
            ))}

            <Text style={s.subsectionLabel}>{t.sidebar.languageSkills}</Text>
            {languageSkills.map((skill) => (
              <View key={skill.name} style={s.skillRow}>
                <Text style={s.skillLabel}>{skill.name}</Text>
                <View style={s.barBg}>
                  <View style={[s.barFill, { width: `${skill.level}%` }]} />
                </View>
              </View>
            ))}
          </View>

          {/* Main — About */}
          <View style={s.main}>
            <Text style={s.sectionTitle}>{t.home.heading}</Text>
            <Text style={s.intro}>{t.home.intro}</Text>

            {aboutIds.map((id) => (
              <View
                key={id}
                style={[s.card, { borderLeftColor: aboutColors[id] }]}
              >
                <Text style={[s.cardTitle, { color: aboutColors[id] }]}>
                  {t.about[id].title}
                </Text>
                <Text style={s.cardContent}>{t.about[id].content}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text>{t.footer.description}</Text>
        </View>
      </Page>

      {/* Page 2 — Projects */}
      {projects.length > 0 && (
        <Page size="A4" style={s.page}>
          <View style={s.header}>
            <Text style={s.name}>Jaroslav Pecha</Text>
            <Text style={s.headerSubtitle}>{t.footer.subtitle}</Text>
          </View>

          <Text style={s.sectionTitle}>{t.projects.pageTitle}</Text>

          {projects.map((project) => {
            const title = locale === 'en' ? (project.titleEn ?? project.title) : project.title;
            const desc = locale === 'en' ? (project.descriptionEn ?? project.description) : project.description;
            return (
              <View key={project.id} style={s.projectCard}>
                <View style={s.projectTitleRow}>
                  <Text style={s.projectTitle}>{title}</Text>
                  {project.isFeatured && (
                    <Text style={s.featuredBadge}>Featured</Text>
                  )}
                </View>
                <Text style={s.projectDesc}>{desc}</Text>
                <View style={s.techRow}>
                  {project.techStack.map((tech) => (
                    <Text key={tech} style={s.techChip}>{tech}</Text>
                  ))}
                </View>
              </View>
            );
          })}

          <View style={s.footer}>
            <Text>{t.footer.description}</Text>
          </View>
        </Page>
      )}
    </Document>
  );
}
