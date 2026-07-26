import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import FAQ from "../components/FAQ.jsx";
import CardLink from "../components/CardLink.jsx";
import FormulaCard from "../components/FormulaCard.jsx";
import CalculatorCTA from "../components/CalculatorCTA.jsx";
import KeyTakeaways from "../components/KeyTakeaways.jsx";
import ProTip from "../components/ProTip.jsx";
import WarningBox from "../components/WarningBox.jsx";
import BenchmarkTable from "../components/BenchmarkTable.jsx";
import ComparisonTable from "../components/ComparisonTable.jsx";
import DefinitionCard from "../components/DefinitionCard.jsx";
import RelatedMetrics from "../components/RelatedMetrics.jsx";
import ExpertInsight from "../components/ExpertInsight.jsx";
import RealityCheck from "../components/RealityCheck.jsx";
import FounderNote from "../components/FounderNote.jsx";
import DecisionFramework from "../components/DecisionFramework.jsx";
import PracticalChecklist from "../components/PracticalChecklist.jsx";
import CaseStudy from "../components/CaseStudy.jsx";
import CommonMisconception from "../components/CommonMisconception.jsx";
import Timeline from "../components/Timeline.jsx";
import Methodology from "../components/Methodology.jsx";
import OfficialSources from "../components/OfficialSources.jsx";
import GeminiHero from "../components/GeminiHero.jsx";
import ClaudeHero from "../components/ClaudeHero.jsx";
import ClaudeModelCards from "../components/ClaudeModelCards.jsx";
import ComparisonCards from "../components/ComparisonCards.jsx";
import ComparisonHubHero from "../components/ComparisonHubHero.jsx";
import QuickRecommendations from "../components/QuickRecommendations.jsx";
import DecisionTree from "../components/DecisionTree.jsx";
import Scorecards from "../components/Scorecards.jsx";
import WorkloadMatrix from "../components/WorkloadMatrix.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import IconRow from "../components/IconRow.jsx";
import SaaSMetricsPyramid from "../components/SaaSMetricsPyramid.jsx";
import MetricDependencyFlow from "../components/MetricDependencyFlow.jsx";
import StageRoadmap from "../components/StageRoadmap.jsx";
import KPIMatrix from "../components/KPIMatrix.jsx";
import DashboardToolsGrid from "../components/DashboardToolsGrid.jsx";
import FounderCaseStudies from "../components/FounderCaseStudies.jsx";
import GlossaryTable from "../components/GlossaryTable.jsx";
import { ICON_MAP } from "../components/SectionIcons.jsx";
import { getPost, getPublishedPosts, getPublishedPostsByCategory, getPublishedRelatedPosts } from "../data/blogs.js";
import { calculators, calculatorsByCategory } from "../data/calculators.js";
import { articleSchema, faqSchema } from "../utils/schema.js";

const entityLinks = [
  ...calculators.map((c) => ({ name: c.title, to: `/calculator/${c.slug}` })),
  ...getPublishedPosts().map((p) => ({ name: p.title, to: `/blog/${p.slug}` })),
];

const sortedEntities = entityLinks
  .filter((e, i, a) => a.findIndex((x) => x.name === e.name) === i)
  .sort((a, b) => b.name.length - a.name.length);

function SmartText({ text }) {
  const parts = useMemo(() => {
    const result = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      let earliest = null;
      let matched = null;

      for (const entity of sortedEntities) {
        const idx = remaining.indexOf(entity.name);
        if (idx !== -1 && (earliest === null || idx < earliest)) {
          earliest = idx;
          matched = entity;
        }
      }

      if (earliest === null) {
        result.push(remaining);
        break;
      }

      if (earliest > 0) {
        result.push(remaining.slice(0, earliest));
      }

      result.push(
        <Link key={key++} to={matched.to} className="text-mint underline underline-offset-2 hover:brightness-110 decoration-mint/40">
          {matched.name}
        </Link>
      );

      remaining = remaining.slice(earliest + matched.name.length);
    }

    return result;
  }, [text]);

  return <>{parts}</>;
}

const sectionRenderers = {
  heading(s, i) {
    const id = s.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return <h2 key={i} id={id} className="mt-10 scroll-mt-24 text-2xl font-black text-white">{s.content}</h2>;
  },
  text(s, i) {
    return <p key={i} className="mt-4 leading-8 text-slate-300"><SmartText text={s.content} /></p>;
  },
  takeaways(s, i) {
    return <KeyTakeaways key={i} items={s.items} />;
  },
  formula(s, i) {
    return <FormulaCard key={i} label={s.label} formula={s.formula} note={s.note} />;
  },
  cta(s, i) {
    return <CalculatorCTA key={i} slug={s.slug} title={s.title} description={s.description} />;
  },
  benchmark(s, i) {
    return <BenchmarkTable key={i} caption={s.caption} headers={s.headers} rows={s.rows} />;
  },
  comparison(s, i) {
    return <ComparisonTable key={i} caption={s.caption} headers={s.headers} rows={s.rows} />;
  },
  warning(s, i) {
    return <WarningBox key={i}>{s.content}</WarningBox>;
  },
  proTip(s, i) {
    return <ProTip key={i}>{s.content}</ProTip>;
  },
  definition(s, i) {
    return <DefinitionCard key={i} term={s.term} definition={s.definition} />;
  },
  relatedMetrics(s, i) {
    return <RelatedMetrics key={i} items={s.items} />;
  },
  expertInsight(s, i) {
    return <ExpertInsight key={i} title={s.title} content={s.content} />;
  },
  realityCheck(s, i) {
    return <RealityCheck key={i} title={s.title} content={s.content} />;
  },
  founderNote(s, i) {
    return <FounderNote key={i} content={s.content} author={s.author} />;
  },
  decisionFramework(s, i) {
    return <DecisionFramework key={i} title={s.title} options={s.options} />;
  },
  practicalChecklist(s, i) {
    return <PracticalChecklist key={i} title={s.title} items={s.items} />;
  },
  caseStudy(s, i) {
    return <CaseStudy key={i} company={s.company} situation={s.situation} numbers={s.numbers} decision={s.decision} outcome={s.outcome} lesson={s.lesson} />;
  },
  commonMisconception(s, i) {
    return <CommonMisconception key={i} myth={s.myth} reality={s.reality} explanation={s.explanation} />;
  },
  timeline(s, i) {
    return <Timeline key={i} title={s.title} events={s.events} />;
  },
  methodology(s, i) {
    return <Methodology key={i} title={s.title} approach={s.approach} source={s.source} date={s.date} />;
  },
  officialSources(s, i) {
    return <OfficialSources key={i} title={s.title} sources={s.sources} />;
  },
  headingIcon(s, i) {
    const id = s.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const IconComp = ICON_MAP[s.icon];
    return (
      <h2 key={i} id={id} className="mt-10 scroll-mt-24 text-2xl font-black text-white flex items-center gap-3">
        {IconComp ? <IconComp /> : null}
        {s.content}
      </h2>
    );
  },
  heroIllustration(s, i) {
    return <GeminiHero key={i} />;
  },
  comparisonCards(s, i) {
    return <ComparisonCards key={i} />;
  },
  iconRow(s, i) {
    return <IconRow key={i} />;
  },
  divider(s, i) {
    return <hr key={i} className="my-12 border-t border-line" />;
  },
  geminiLogo(s, i) {
    return (
      <div key={i} className="flex justify-center py-4" aria-label="Google Gemini logo">
        <svg viewBox="0 0 65 65" className="h-14 w-14" aria-hidden="true">
          <path d="M32.4473 0C33.1278 0 33.7197 0.464783 33.8857 1.125C34.3947 3.14441 35.0586 5.11414 35.8848 7.03027C38.0369 12.0299 40.99 16.406 44.7393 20.1553C48.4903 23.9045 52.8647 26.8576 57.8643 29.0098C59.7821 29.8359 61.7502 30.4998 63.7695 31.0088C64.4297 31.1748 64.8944 31.7668 64.8945 32.4473C64.8945 33.1278 64.4298 33.7198 63.7695 33.8857C61.7502 34.3947 59.7803 35.0586 57.8643 35.8848C52.8646 38.037 48.4885 40.99 44.7393 44.7393C40.99 48.4904 38.037 52.8646 35.8848 57.8643C35.0586 59.7822 34.3947 61.7502 33.8857 63.7695C33.7198 64.4298 33.1278 64.8945 32.4473 64.8945C31.7668 64.8944 31.1748 64.4297 31.0088 63.7695C30.4998 61.7502 29.8359 59.7803 29.0098 57.8643C26.8576 52.8647 23.9063 48.4885 20.1553 44.7393C16.4041 40.99 12.0299 38.0369 7.03027 35.8848C5.1123 35.0586 3.14441 34.3947 1.125 33.8857C0.464783 33.7197 0 33.1278 0 32.4473C8.67651e-05 31.7668 0.464826 31.1748 1.125 31.0088C3.14442 30.4998 5.11413 29.836 7.03027 29.0098C12.03 26.8575 16.406 23.9046 20.1553 20.1553C23.9046 16.406 26.8575 12.03 29.0098 7.03027C29.836 5.11229 30.4998 3.14442 31.0088 1.125C31.1748 0.464826 31.7668 8.67651e-05 32.4473 0Z" fill="url(#g-blog)"/>
          <defs>
            <linearGradient id="g-blog" x1="18.4474" y1="43.4202" x2="52.1528" y2="15.0035" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4893FC"/>
              <stop offset="0.27" stop-color="#4893FC"/>
              <stop offset="0.777" stop-color="#969DFF"/>
              <stop offset="1" stop-color="#BD99FE"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  },
  mistakeCards(s, i) {
    const iconMap = {
      warning: <path d="M12.5 2L2 22h21L12.5 2zM12.5 8v6M12.5 18v0.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    };
    return (
      <div key={i} className="my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {s.cards.map((card, idx) => (
          <div key={idx} className="rounded-lg border border-amber/20 bg-amber/5 p-4 flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true">{iconMap[card.icon] || iconMap.warning}</svg>
            <div>
              <p className="text-sm font-bold text-white">{card.title}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  },
  claudeHero(s, i) {
    return <ClaudeHero key={i} />;
  },
  claudeLogo(s, i) {
    return (
      <div key={i} className="flex justify-center py-4" aria-label="Claude AI logo">
        <svg viewBox="0 0 689.97997 148.17999" className="h-14 w-auto" aria-hidden="true">
          <path fill="#d97757" d="m 105.01,322.07 29.14,-16.35 0.49,-1.42 -0.49,-0.79 h -1.42 l -4.87,-0.3 -16.65,-0.45 -14.44,-0.6 -13.99,-0.75 -3.52,-0.75 -3.3,-4.35 0.34,-2.17 2.96,-1.99 4.24,0.37 9.37,0.64 14.06,0.97 10.2,0.6 15.11,1.57 h 2.4 l 0.34,-0.97 -0.82,-0.6 -0.64,-0.6 -14.55,-9.86 -15.75,-10.42 -8.25,-6 -4.46,-3.04 -2.25,-2.85 -0.97,-6.22 4.05,-4.46 5.44,0.37 1.39,0.37 5.51,4.24 11.77,9.11 15.37,11.32 2.25,1.87 0.9,-0.64 0.11,-0.45 -1.01,-1.69 -8.36,-15.11 -8.92,-15.37 -3.97,-6.37 -1.05,-3.82 c -0.37,-1.57 -0.64,-2.89 -0.64,-4.5 l 4.61,-6.26 2.55,-0.82 6.15,0.82 2.59,2.25 3.82,8.74 6.19,13.76 9.6,18.71 2.81,5.55 1.5,5.14 0.56,1.57 h 0.97 v -0.9 l 0.79,-10.54 1.46,-12.94 1.42,-16.65 0.49,-4.69 2.32,-5.62 4.61,-3.04 3.6,1.72 2.96,4.24 -0.41,2.74 -1.76,11.44 -3.45,17.92 -2.25,12 h 1.31 l 1.5,-1.5 6.07,-8.06 10.2,-12.75 4.5,-5.06 5.25,-5.59 3.37,-2.66 h 6.37 l 4.69,6.97 -2.1,7.2 -6.56,8.32 -5.44,7.05 -7.8,10.5 -4.87,8.4 0.45,0.67 1.16,-0.11 17.62,-3.75 9.52,-1.72 11.36,-1.95 5.14,2.4 0.56,2.44 -2.02,4.99 -12.15,3 -14.25,2.85 -21.22,5.02 -0.26,0.19 0.3,0.37 9.56,0.9 4.09,0.22 h 10.01 l 18.64,1.39 4.87,3.22 2.92,3.94 -0.49,3 -7.5,3.82 -10.12,-2.4 -23.62,-5.62 -8.1,-2.02 h -1.12 v 0.67 l 6.75,6.6 12.37,11.17 15.49,14.4 0.79,3.56 -1.99,2.81 -2.1,-0.3 -13.61,-10.24 -5.25,-4.61 -11.89,-10.01 h -0.79 v 1.05 l 2.74,4.01 14.47,21.75 0.75,6.67 -1.05,2.17 -3.75,1.31 -4.12,-0.75 -8.47,-11.89 -8.74,-13.39 -7.05,-12 -0.86,0.49 -4.16,44.81 -1.95,2.29 -4.5,1.72 -3.75,-2.85 -1.99,-4.61 1.99,-9.11 2.4,-11.89 1.95,-9.45 1.76,-11.74 1.05,-3.9 -0.07,-0.26 -0.86,0.11 -8.85,12.15 -13.46,18.19 -10.65,11.4 -2.55,1.01 -4.42,-2.29 0.41,-4.09 2.47,-3.64 14.74,-18.75 8.89,-11.62 5.74,-6.71 -0.04,-0.97 h -0.34 l -39.15,25.42 -6.97,0.9 -3,-2.81 0.37,-4.61 1.42,-1.5 11.77,-8.1 -0.04,0.04 z" transform="translate(-75.96,-223.53)"/>
          <path fill="#0f0f0d" d="m 317.73,349.33 c -18.82,0 -31.69,-10.5 -37.76,-26.66 -3.17,-8.42 -4.74,-17.36 -4.61,-26.36 0,-27.11 12.15,-45.94 39,-45.94 18.04,0 29.17,7.87 35.51,26.66 h 7.72 l -1.05,-25.91 c -10.8,-6.97 -24.3,-10.5 -40.72,-10.5 -23.14,0 -42.82,10.35 -53.77,29.02 -5.66,9.86 -8.53,21.07 -8.32,32.44 0,20.74 9.79,39.11 28.16,49.31 10.06,5.37 21.34,8.04 32.74,7.72 17.92,0 32.14,-3.41 44.74,-9.37 l 3.26,-28.57 h -7.87 c -4.72,13.05 -10.35,20.89 -19.69,25.05 -4.57,2.06 -10.35,3.11 -17.32,3.11 z" transform="translate(-75.96,-223.53)"/>
        </svg>
      </div>
    );
  },
  claudeModelCards(s, i) {
    return <ClaudeModelCards key={i} title={s.title} cards={s.cards} />;
  },
  providerComparison(s, i) {
    const providerIcons = {
      claude: (
        <svg viewBox="0 0 689.97997 148.17999" className="h-7 w-auto" aria-hidden="true">
          <path fill="#d97757" d="m 105.01,322.07 29.14,-16.35 0.49,-1.42 -0.49,-0.79 h -1.42 l -4.87,-0.3 -16.65,-0.45 -14.44,-0.6 -13.99,-0.75 -3.52,-0.75 -3.3,-4.35 0.34,-2.17 2.96,-1.99 4.24,0.37 9.37,0.64 14.06,0.97 10.2,0.6 15.11,1.57 h 2.4 l 0.34,-0.97 -0.82,-0.6 -0.64,-0.6 -14.55,-9.86 -15.75,-10.42 -8.25,-6 -4.46,-3.04 -2.25,-2.85 -0.97,-6.22 4.05,-4.46 5.44,0.37 1.39,0.37 5.51,4.24 11.77,9.11 15.37,11.32 2.25,1.87 0.9,-0.64 0.11,-0.45 -1.01,-1.69 -8.36,-15.11 -8.92,-15.37 -3.97,-6.37 -1.05,-3.82 c -0.37,-1.57 -0.64,-2.89 -0.64,-4.5 l 4.61,-6.26 2.55,-0.82 6.15,0.82 2.59,2.25 3.82,8.74 6.19,13.76 9.6,18.71 2.81,5.55 1.5,5.14 0.56,1.57 h 0.97 v -0.9 l 0.79,-10.54 1.46,-12.94 1.42,-16.65 0.49,-4.69 2.32,-5.62 4.61,-3.04 3.6,1.72 2.96,4.24 -0.41,2.74 -1.76,11.44 -3.45,17.92 -2.25,12 h 1.31 l 1.5,-1.5 6.07,-8.06 10.2,-12.75 4.5,-5.06 5.25,-5.59 3.37,-2.66 h 6.37 l 4.69,6.97 -2.1,7.2 -6.56,8.32 -5.44,7.05 -7.8,10.5 -4.87,8.4 0.45,0.67 1.16,-0.11 17.62,-3.75 9.52,-1.72 11.36,-1.95 5.14,2.4 0.56,2.44 -2.02,4.99 -12.15,3 -14.25,2.85 -21.22,5.02 -0.26,0.19 0.3,0.37 9.56,0.9 4.09,0.22 h 10.01 l 18.64,1.39 4.87,3.22 2.92,3.94 -0.49,3 -7.5,3.82 -10.12,-2.4 -23.62,-5.62 -8.1,-2.02 h -1.12 v 0.67 l 6.75,6.6 12.37,11.17 15.49,14.4 0.79,3.56 -1.99,2.81 -2.1,-0.3 -13.61,-10.24 -5.25,-4.61 -11.89,-10.01 h -0.79 v 1.05 l 2.74,4.01 14.47,21.75 0.75,6.67 -1.05,2.17 -3.75,1.31 -4.12,-0.75 -8.47,-11.89 -8.74,-13.39 -7.05,-12 -0.86,0.49 -4.16,44.81 -1.95,2.29 -4.5,1.72 -3.75,-2.85 -1.99,-4.61 1.99,-9.11 2.4,-11.89 1.95,-9.45 1.76,-11.74 1.05,-3.9 -0.07,-0.26 -0.86,0.11 -8.85,12.15 -13.46,18.19 -10.65,11.4 -2.55,1.01 -4.42,-2.29 0.41,-4.09 2.47,-3.64 14.74,-18.75 8.89,-11.62 5.74,-6.71 -0.04,-0.97 h -0.34 l -39.15,25.42 -6.97,0.9 -3,-2.81 0.37,-4.61 1.42,-1.5 11.77,-8.1 -0.04,0.04 z" transform="translate(-75.96,-223.53)"/>
        </svg>
      ),
      openai: (
        <svg viewBox="0 0 158.7128 157.296" className="h-8 w-8 fill-white" aria-hidden="true">
          <path d="M60.8734 57.2556v-14.9432c0-1.2586.4722-2.2029 1.5728-2.8314l30.0443-17.3023c4.0899-2.3593 8.9662-3.4599 13.9988-3.4599 18.8759 0 30.8307 14.6289 30.8307 30.2006 0 1.1007 0 2.3593-.158 3.6178l-31.1446-18.2467c-1.8872-1.1006-3.7754-1.1006-5.6629 0l-39.4812 22.9651ZM131.0276 115.4561v-35.7074c0-2.2028-.9446-3.7756-2.8318-4.8763l-39.481-22.9651 12.8982-7.3934c1.1007-.6285 2.0453-.6285 3.1458 0l30.0441 17.3024c8.6523 5.0341 14.4708 15.7296 14.4708 26.1107 0 11.9539-7.0769 22.965-18.2461 27.527v.0021ZM51.593 83.9964l-12.8982-7.5497c-1.1007-.6285-1.5728-1.5728-1.5728-2.8314v-34.6048c0-16.8303 12.8982-29.5722 30.3585-29.5722 6.607 0 12.7403 2.2029 17.9324 6.1349l-30.987 17.9324c-1.8871 1.1007-2.8314 2.6735-2.8314 4.8764v45.6159l-.0014-.0015ZM79.3562 100.0403l-18.4829-10.3811v-22.0209l18.4829-10.3811 18.4812 10.3811v22.0209l-18.4812 10.3811ZM91.2319 147.8591c-6.607 0-12.7403-2.2031-17.9324-6.1344l30.9866-17.9333c1.8872-1.1005 2.8318-2.6728 2.8318-4.8759v-45.616l13.0564 7.5498c1.1005.6285 1.5723 1.5728 1.5723 2.8314v34.6051c0 16.8297-13.0564 29.5723-30.5147 29.5723v.001ZM53.9522 112.7822l-30.0443-17.3024c-8.652-5.0343-14.471-15.7296-14.471-26.1107 0-12.1119 7.2356-22.9652 18.403-27.5272v35.8634c0 2.2028.9443 3.7756 2.8314 4.8763l39.3248 22.8068-12.8982 7.3938c-1.1007.6287-2.045.6287-3.1456 0ZM52.2229 138.5791c-17.7745 0-30.8306-13.3713-30.8306-29.8871 0-1.2585.1578-2.5169.3143-3.7754l30.987 17.9323c1.8871 1.1005 3.7757 1.1005 5.6628 0l39.4811-22.807v14.9435c0 1.2585-.4721 2.2021-1.5728 2.8308l-30.0443 17.3025c-4.0898 2.359-8.9662 3.4605-13.9989 3.4605h.0014ZM91.2319 157.296c19.0327 0 34.9188-13.5272 38.5383-31.4594 17.6164-4.562 28.9425-21.0779 28.9425-37.908 0-11.0112-4.719-21.7066-13.2133-29.4143.7867-3.3035 1.2595-6.607 1.2595-9.909 0-22.4929-18.2471-39.3247-39.3251-39.3247-4.2461 0-8.3363.6285-12.4262 2.045-7.0792-6.9213-16.8318-11.3254-27.5271-11.3254-19.0331 0-34.9191 13.5268-38.5384 31.4591C11.3255 36.0212 0 52.5373 0 69.3675c0 11.0112 4.7184 21.7066 13.2133 29.4143-.7867 3.3035-1.2595 6.607-1.2595 9.909 0 22.4929 18.2471 39.3247 39.3251 39.3247 4.2461 0 8.3363-.6285 12.4262-2.045 7.0792 6.9213 16.8318 11.3254 27.5271 11.3254Z"/>
        </svg>
      ),
      gemini: (
        <svg viewBox="0 0 65 65" className="h-8 w-8" aria-hidden="true">
          <path d="M32.4473 0C33.1278 0 33.7197 0.464783 33.8857 1.125C34.3947 3.14441 35.0586 5.11414 35.8848 7.03027C38.0369 12.0299 40.99 16.406 44.7393 20.1553C48.4903 23.9045 52.8647 26.8576 57.8643 29.0098C59.7821 29.8359 61.7502 30.4998 63.7695 31.0088C64.4297 31.1748 64.8944 31.7668 64.8945 32.4473C64.8945 33.1278 64.4298 33.7198 63.7695 33.8857C61.7502 34.3947 59.7803 35.0586 57.8643 35.8848C52.8646 38.037 48.4885 40.99 44.7393 44.7393C40.99 48.4904 38.037 52.8646 35.8848 57.8643C35.0586 59.7822 34.3947 61.7502 33.8857 63.7695C33.7198 64.4298 33.1278 64.8945 32.4473 64.8945C31.7668 64.8944 31.1748 64.4297 31.0088 63.7695C30.4998 61.7502 29.8359 59.7803 29.0098 57.8643C26.8576 52.8647 23.9063 48.4885 20.1553 44.7393C16.4041 40.99 12.0299 38.0369 7.03027 35.8848C5.1123 35.0586 3.14441 34.3947 1.125 33.8857C0.464783 33.7197 0 33.1278 0 32.4473C8.67651e-05 31.7668 0.464826 31.1748 1.125 31.0088C3.14442 30.4998 5.11413 29.836 7.03027 29.0098C12.03 26.8575 16.406 23.9046 20.1553 20.1553C23.9046 16.406 26.8575 12.03 29.0098 7.03027C29.836 5.11229 30.4998 3.14442 31.0088 1.125C31.1748 0.464826 31.7668 8.67651e-05 32.4473 0Z" fill="url(#g-compare)"/>
          <defs>
            <linearGradient id="g-compare" x1="18.4474" y1="43.4202" x2="52.1528" y2="15.0035" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4893FC"/>
              <stop offset="0.27" stop-color="#4893FC"/>
              <stop offset="0.777" stop-color="#969DFF"/>
              <stop offset="1" stop-color="#BD99FE"/>
            </linearGradient>
          </defs>
        </svg>
      )
    };
    const cards = s.cards.map(card => ({
      ...card,
      icon: providerIcons[card.provider]
    }));
    return <ComparisonCards key={i} title={s.title} cards={cards} />;
  },
  comparisonHubHero(s, i) {
    return <ComparisonHubHero key={i} />;
  },
  quickRecommendation(s, i) {
    return <QuickRecommendations key={i} title={s.title} items={s.items} />;
  },
  decisionTree(s, i) {
    return <DecisionTree key={i} title={s.title} steps={s.steps} />;
  },
  scorecards(s, i) {
    return <Scorecards key={i} title={s.title} categories={s.categories} />;
  },
  workloadMatrix(s, i) {
    return <WorkloadMatrix key={i} title={s.title} rows={s.rows} />;
  },
  summaryCard(s, i) {
    return <SummaryCard key={i} title={s.title} summaries={s.summaries} />;
  },
  cacheIllustration(s, i) {
    return (
      <figure key={i} className="my-6 flex justify-center" aria-label="Prompt caching illustration">
        <svg viewBox="0 0 120 100" className="h-24 w-auto" aria-hidden="true">
          <rect x="10" y="15" width="100" height="70" rx="6" fill="none" stroke="#d97757" strokeWidth="1.5"/>
          <rect x="10" y="15" width="100" height="20" rx="6" fill="#d97757" opacity="0.15"/>
          <rect x="10" y="15" width="100" height="20" rx="6" fill="none" stroke="#d97757" strokeWidth="1.5"/>
          <text x="60" y="29" textAnchor="middle" fill="#d97757" fontSize="8" fontWeight="bold">CACHE</text>
          <path d="M30 50 h60" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <path d="M30 60 h40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <path d="M30 70 h50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <circle cx="85" cy="65" r="12" fill="none" stroke="#67d8ff" strokeWidth="1.5"/>
          <path d="M85 59 v12 M79 65 h12" stroke="#67d8ff" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </figure>
    );
  },
  batchIllustration(s, i) {
    return (
      <figure key={i} className="my-6 flex justify-center" aria-label="Batch processing illustration">
        <svg viewBox="0 0 120 100" className="h-24 w-auto" aria-hidden="true">
          <rect x="5" y="10" width="25" height="18" rx="3" fill="none" stroke="#67d8ff" strokeWidth="1.2"/>
          <rect x="5" y="38" width="25" height="18" rx="3" fill="none" stroke="#67d8ff" strokeWidth="1.2"/>
          <rect x="5" y="66" width="25" height="18" rx="3" fill="none" stroke="#67d8ff" strokeWidth="1.2"/>
          <line x1="30" y1="19" x2="48" y2="19" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <line x1="30" y1="47" x2="48" y2="47" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <line x1="30" y1="75" x2="48" y2="75" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <rect x="48" y="10" width="25" height="18" rx="3" fill="none" stroke="#d97757" strokeWidth="1.2"/>
          <rect x="48" y="38" width="25" height="18" rx="3" fill="none" stroke="#d97757" strokeWidth="1.2"/>
          <rect x="48" y="66" width="25" height="18" rx="3" fill="none" stroke="#d97757" strokeWidth="1.2"/>
          <path d="M83 35 l10 10 l-10 10" stroke="#52f0b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M83 55 l10 10 l-10 10" stroke="#52f0b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="93" y="25" width="22" height="40" rx="4" fill="none" stroke="#52f0b8" strokeWidth="1.5" strokeDasharray="3 2"/>
          <text x="104" y="52" textAnchor="middle" fill="#52f0b8" fontSize="7" fontWeight="bold">API</text>
        </svg>
      </figure>
    );
  },
  contextVisual(s, i) {
    return (
      <figure key={i} className="my-6 flex justify-center" aria-label="Context window comparison">
        <svg viewBox="0 0 200 80" className="h-24 w-auto" aria-hidden="true">
          <text x="10" y="22" fill="#67d8ff" fontSize="7" fontWeight="bold">Traditional Models</text>
          <rect x="10" y="28" width="40" height="14" rx="3" fill="none" stroke="#67d8ff" strokeWidth="1.5" opacity="0.5"/>
          <rect x="50" y="28" width="30" height="14" rx="3" fill="none" stroke="#67d8ff" strokeWidth="1.5" opacity="0.7"/>
          <text x="80" y="39" fill="#67d8ff" fontSize="6" opacity="0.8">8K-128K tokens</text>

          <text x="10" y="62" fill="#d97757" fontSize="7" fontWeight="bold">Claude Long Context</text>
          <rect x="10" y="68" width="160" height="14" rx="3" fill="#d97757" opacity="0.12" stroke="#d97757" strokeWidth="1.5"/>
          <text x="90" y="79" textAnchor="middle" fill="#d97757" fontSize="6" fontWeight="bold">200K-1M tokens (standard pricing)</text>
        </svg>
      </figure>
    );
  },
  costStack(s, i) {
    const layers = s.layers || [
      "Base API Cost", "Long Outputs", "Repeated Context", "Retries", "Premium Models"
    ];
    const colors = ["#52f0b8", "#67d8ff", "#4893fc", "#969dff", "#d97757"];
    const boxW = 36;
    const boxH = 14;
    const gap = 6;
    const arrowGap = 3;
    const svgW = layers.length * (boxW + gap) + 60;
    return (
      <figure key={i} className="my-6 flex justify-center" aria-label="Hidden costs flow">
        <svg viewBox={`0 0 ${svgW} 56`} className="h-14 w-auto" aria-hidden="true">
          {layers.map((layer, idx) => {
            const x = idx * (boxW + gap);
            return (
              <g key={idx}>
                <rect x={x} y="8" width={boxW} height={boxH} rx="3" fill={colors[idx]} opacity="0.15" stroke={colors[idx]} strokeWidth="1"/>
                <text x={x + boxW / 2} y={18} textAnchor="middle" fill={colors[idx]} fontSize="5" fontWeight="bold">{layer}</text>
                {idx < layers.length - 1 && (
                  <path d={`M${x + boxW + 1} 15 l${arrowGap} -4 l0 8 z`} fill={colors[idx]} opacity="0.6"/>
                )}
              </g>
            );
          })}
          <path d={`M${layers.length * (boxW + gap)} 15 l10 -6 l0 12 z`} fill="#52f0b8" opacity="0.7"/>
          <text x={layers.length * (boxW + gap) + 18} y="19" fill="#52f0b8" fontSize="7" fontWeight="bold">= Final Cost</text>
        </svg>
      </figure>
    );
  },
  saasMetricsPyramid(s, i) {
    return <SaaSMetricsPyramid key={i} layers={s.layers} />;
  },
  metricDependencyFlow(s, i) {
    return <MetricDependencyFlow key={i} title={s.title} steps={s.steps} />;
  },
  stageRoadmap(s, i) {
    return <StageRoadmap key={i} caption={s.caption} stages={s.stages} />;
  },
  kpiMatrix(s, i) {
    return <KPIMatrix key={i} caption={s.caption} rows={s.rows} />;
  },
  dashboardToolsGrid(s, i) {
    return <DashboardToolsGrid key={i} title={s.title} tools={s.tools} />;
  },
  founderCaseStudies(s, i) {
    return <FounderCaseStudies key={i} title={s.title} studies={s.studies} />;
  },
  glossaryTable(s, i) {
    return <GlossaryTable key={i} title={s.title} entries={s.entries} />;
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/404" replace />;
  const related = getPublishedRelatedPosts(post);

  const calcCategoryMap = { "ai-finance": "ai", "startup-metrics": "startup", "growth-analytics": "marketing" };
  const relatedCalcs = calculatorsByCategory(calcCategoryMap[post.category] || "startup").slice(0, 3);
  const relatedGuides = getPublishedPostsByCategory(post.category).filter((p) => p.slug !== post.slug).slice(0, 3);

  const hasSections = Array.isArray(post.sections);
  const sections = post.sections || [];
  const body = post.body || [];

  const tocItems = useMemo(() => {
    if (hasSections) {
      return sections
        .filter((s) => s.type === "heading" || s.type === "headingIcon")
        .map((s) => ({ label: s.content, id: s.content.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") }));
    }
    return [];
  }, [hasSections, sections]);

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id]");
    if (headings.length === 0) return;

    const visibleIds = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        const firstMatch = Array.from(headings).find((h) => visibleIds.has(h.id));
        if (firstMatch) {
          setActiveId(firstMatch.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    setActiveId(headings[0].id);

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-line/40">
        <div className="h-full bg-mint transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>
      <SEO title={post.metaTitle || post.title} description={post.description} path={`/blog/${post.slug}`} type="article" schema={[articleSchema(post), faqSchema(post.faq)]} noindex={!post.published} />
      <article className="container-page grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="panel h-fit p-5 lg:sticky lg:top-[100px]">
          <p className="eyebrow">{post.readingTime} min read</p>
          {tocItems.length > 0 && (
            <>
              <h2 className="mt-4 font-black text-white">Table of contents</h2>
              <nav className="mt-4 grid gap-2 text-sm">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`transition-colors ${activeId === item.id ? "font-semibold text-mint" : "text-slate-300 hover:text-mint"}`}
                  >
                    {activeId === item.id ? "\u2713 " : "\u25CB "}{item.label}
                  </a>
                ))}
              </nav>
            </>
          )}
        </aside>
        <div>
          <p className="eyebrow">{post.categoryTitle}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400">
            <span>By {post.author}</span>
            <span>Published {new Date(post.publishedDate || post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            {(post.updatedDate && post.updatedDate !== (post.publishedDate || post.date)) && <span className="rounded border border-mint/20 bg-mint/5 px-2 py-0.5 font-medium text-mint">Updated {new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>}
            <span>{post.readingTime} min read</span>
          </div>

          {(relatedGuides.length > 0 || relatedCalcs.length > 0) && (
            <section className="mt-8 rounded-lg border border-line bg-panel/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Continue Exploring</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {relatedGuides.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Guides</p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {relatedGuides.map((guide) => (
                        <Link key={guide.slug} to={`/blog/${guide.slug}`} className="text-sm text-slate-300 hover:text-mint transition-colors">{guide.title}</Link>
                      ))}
                      <Link to="/blog" className="text-sm font-semibold text-mint hover:brightness-110">View all guides</Link>
                    </div>
                  </div>
                )}
                {relatedCalcs.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Calculators</p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {relatedCalcs.map((calc) => (
                        <Link key={calc.slug} to={`/calculator/${calc.slug}`} className="text-sm text-slate-300 hover:text-mint transition-colors">{calc.title}</Link>
                      ))}
                      <Link to={`/calculators/${calcCategoryMap[post.category] || "startup"}`} className="text-sm font-semibold text-mint hover:brightness-110">View all calculators</Link>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {hasSections
            ? sections.map((s, i) => {
                const render = sectionRenderers[s.type];
                return render ? render(s, i) : null;
              })
            : <div className="mt-10">{body.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-slate-300"><SmartText text={paragraph} /></p>)}</div>
          }

          <section className="mt-10">
            <h2 className="text-2xl font-black text-white">Related Calculators</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {relatedCalcs.map((item) => (
                <CardLink key={item.slug} to={`/calculator/${item.slug}`} title={item.title} description={item.description} />
              ))}
            </div>
          </section>
        </div>
      </article>
      <FAQ faqs={post.faq} />
      <section className="container-page py-10">
        <h2 className="text-2xl font-black text-white">Related posts</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {related.map((item) => <CardLink key={item.slug} to={`/blog/${item.slug}`} title={item.title} description={item.description} meta={`${item.readingTime} min read`} />)}
        </div>
      </section>
    </>
  );
}
