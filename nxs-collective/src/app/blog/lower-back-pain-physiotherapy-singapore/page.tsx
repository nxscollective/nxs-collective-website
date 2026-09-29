import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import BookPhysioCTA from "@/components/shared/BookPhysioCTA";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsappUrl } from "@/config/site";

const title =
  "Lower Back Pain Explained: Causes, Exercise, Sciatica & Physiotherapy in Singapore";
const description =
  "Lower back pain after sitting, bending or training? Learn about common causes, sciatica, exercise, MRI scans and physiotherapy at NXS Collective Singapore.";
const canonical = "/blog/lower-back-pain-physiotherapy-singapore";
const image =
  "/images/blog/lower-back-pain/lower-back-pain-anatomy-nxs-collective.webp";

export const metadata: Metadata = {
  title:
    "Lower Back Pain Physiotherapy Singapore | Sciatica, Exercise & Rehab | NXS Collective",
  description,
  keywords: [
    "lower back pain physiotherapy Singapore",
    "back pain treatment Singapore",
    "sciatica physiotherapy Singapore",
    "physiotherapy for lower back pain",
    "back pain after sitting",
    "back pain when bending",
    "back pain when lifting",
    "exercise for lower back pain",
    "lower back rehabilitation Singapore",
    "sports physiotherapy Singapore",
    "Clarke Quay physiotherapy",
  ],
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "en_SG",
    url: canonical,
    title,
    description,
    siteName: "NXS Collective",
    images: [
      {
        url: image,
        width: 1448,
        height: 1086,
        alt: "Rear-view lower back anatomy highlighting the lumbar pain region",
      },
    ],
  },
};

const commonTriggers = [
  "Lifting something heavy",
  "Increasing your gym training",
  "Performing an unfamiliar exercise",
  "Spending much longer sitting than usual",
  "Playing more sport",
  "Travelling for hours in a plane or car",
  "Repeatedly bending or lifting at work",
];

const exerciseApproaches = [
  "General strengthening",
  "Trunk strengthening and endurance exercises",
  "Aerobic exercise",
  "Movement-control exercises",
  "Mobility exercises",
  "Aquatic exercise",
  "Multimodal exercise programmes",
];

const broaderRehab = [
  "Hip and leg strengthening",
  "Improving tolerance to bending and lifting",
  "Cardiovascular exercise",
  "Progressive return to running or sport",
  "Gradual exposure to activities that currently provoke symptoms",
];

const sciaticaSymptoms = [
  "Shooting or burning leg pain",
  "Pins and needles",
  "Numbness",
  "Altered sensation",
  "Weakness",
  "Pain extending below the knee",
];

const urgentSymptoms = [
  "New difficulty controlling your bladder or bowels",
  "Numbness around the groin, genital or saddle region",
  "Significant or rapidly progressing weakness in the legs",
  "Severe symptoms following significant trauma",
  "Fever or feeling systemically unwell alongside significant back pain",
];

const recoveryFactors = [
  "How long you have had symptoms",
  "Whether you have experienced previous episodes",
  "Your work and physical demands",
  "Your current activity levels",
  "Sleep and recovery",
  "Your confidence in movement",
  "How much symptoms affect normal activity",
  "Other medical and psychosocial factors",
];

const returnGoals = [
  "Sitting comfortably at work",
  "Squatting",
  "Running",
  "Playing tennis",
  "Lifting your children",
  "Travelling",
  "Waking up without worrying about your back",
];

const assessmentSteps = [
  {
    number: "01",
    title: "Understanding your symptoms",
    text: "We look at when your pain started, what aggravates or relieves it, whether symptoms travel into your leg and how your back pain affects daily life.",
  },
  {
    number: "02",
    title: "Screening your back and nervous system",
    text: "Where appropriate, we assess spinal movement, strength, sensation, reflexes and other neurological signs to determine whether nerve involvement may be present.",
  },
  {
    number: "03",
    title: "Assessing how you move",
    text: "If pain occurs during squatting, bending, lifting or sport, we can assess those movements rather than only looking at your back on a treatment bed.",
  },
  {
    number: "04",
    title: "Objective strength and movement testing",
    text: "Depending on your needs, we may assess trunk and lower-limb strength and use objective testing to identify relevant deficits and track progress.",
  },
  {
    number: "05",
    title: "Building your rehabilitation plan",
    text: "Once we understand what you are currently struggling to tolerate, we progressively rebuild capacity around the activities that matter to you.",
  },
];

const references = [
  "George SZ, Fritz JM, Silfies SP, et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021. Journal of Orthopaedic & Sports Physical Therapy. 2021;51(11). doi:10.2519/jospt.2021.0304.",
  "National Institute for Health and Care Excellence (NICE). Low back pain and sciatica in over 16s: assessment and management. NICE Guideline NG59.",
  "Hayden JA, Ellis J, Ogilvie R, Malmivaara A, van Tulder MW. Exercise therapy for chronic low back pain. Cochrane Database of Systematic Reviews. 2021;9. doi:10.1002/14651858.CD009790.pub2.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: `https://nxscollective.net${image}`,
  datePublished: "2026-09-29",
  dateModified: "2026-09-29",
  author: {
    "@type": "Organization",
    name: "NXS Collective",
    url: "https://nxscollective.net",
  },
  publisher: {
    "@type": "Organization",
    name: "NXS Collective",
    url: "https://nxscollective.net",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://nxscollective.net${canonical}`,
  },
  about: [
    "Lower back pain",
    "Sciatica",
    "Exercise rehabilitation",
    "Physiotherapy",
  ],
};

const lightArticleBand =
  "relative isolate mt-16 scroll-mt-28 py-14 before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:-z-10 before:-ml-[50vw] before:-mr-[50vw] before:border-y before:border-black/10 before:bg-[#f1efe9] [&_.eyebrow]:!text-[#8a6f50] [&_h2]:!text-ink [&_h3]:!text-ink [&_li]:!text-ink/75 [&_p]:!text-ink/75 [&_strong]:!text-ink [&_svg]:!text-[#8a6f50]";

const graphiteArticleBand =
  "relative isolate mt-16 scroll-mt-28 py-14 before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:-z-10 before:-ml-[50vw] before:-mr-[50vw] before:border-y before:border-hairline before:bg-graphite";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-7 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7 text-mist md:text-base"
        >
          <Check
            size={16}
            strokeWidth={1.7}
            className="mt-1.5 shrink-0 text-sand"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LowerBackPainArticlePage() {
  const phoneConsultUrl = getWhatsappUrl(
    "Hi NXS Collective, I would like to request a complimentary phone consultation with Samuel regarding my condition.",
  );

  return (
    <>
      <JsonLd data={articleSchema} />

      <article>
        <header className="border-b border-hairline bg-graphite">
          <Container className="py-12 md:py-20">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-mist transition-colors hover:text-bone"
            >
              <ArrowLeft size={14} strokeWidth={1.7} />
              NXS Journal
            </Link>

            <div className="max-w-5xl">
              <p className="eyebrow mb-5">
                Physiotherapy · Lower Back · Exercise
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-bone md:text-6xl">
                Lower Back Pain Explained
                <span className="mt-4 block text-xl font-medium leading-relaxed text-sand md:text-2xl">
                  Causes, Exercise, Sciatica &amp; Physiotherapy in Singapore
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-mist md:text-lg">
                Lower back pain after sitting all day? A sharp pain when you
                bend forward? Or an ache that keeps returning every time you go
                back to the gym?
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-5 text-xs uppercase tracking-widest2 text-mist">
                <span>NXS Collective</span>
                <span>29 September 2026</span>
                <span>Evidence-informed guide</span>
              </div>
            </div>
          </Container>
        </header>

        <section className="bg-ink py-14 md:py-20">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-lg leading-9 text-bone/90">
                Lower back pain is extremely common. While it can feel alarming,
                having back pain does{" "}
                <strong className="font-medium text-bone">
                  not automatically mean that something in your spine is
                  seriously damaged
                </strong>
                .
              </p>
              <p className="mt-6 text-base leading-8 text-mist">
                Many episodes can be managed without surgery or extensive
                investigations. At
                <strong className="font-medium text-bone">
                  {" "}
                  NXS Collective in Clarke Quay, Singapore
                </strong>
                , our approach is to understand how your symptoms behave, what
                your back is currently struggling to tolerate and what needs to
                improve for you to return to normal activity with confidence.
              </p>

              <section className={lightArticleBand} id="causes">
                <p className="eyebrow mb-3">Understanding symptoms</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  What causes lower back pain?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  One of the frustrating things about back pain is that there is
                  not always one structure that can be identified as “the
                  problem”. Your lower back contains muscles, joints, ligaments,
                  discs, nerves and other structures that can contribute to
                  symptoms.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Sometimes there is a clearer diagnosis, such as irritation of
                  a nerve root producing sciatica. However, a large proportion
                  is classified as
                  <strong className="font-medium text-bone">
                    {" "}
                    non-specific low back pain
                  </strong>
                  , meaning the symptoms cannot reliably be attributed to one
                  specific structure.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  That does not mean your pain is not real. It means finding the
                  exact tissue responsible is not always necessary for
                  successful treatment. How symptoms behave, which movements
                  provoke them and what changed before they started can often be
                  more useful.
                </p>

                <figure className="my-10 overflow-hidden border border-black/15 bg-ink">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt="Rear-view lower back anatomy highlighting the lumbar pain region"
                      fill
                      priority
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-hairline px-5 py-4 text-xs leading-6 text-mist">
                    Lower back pain can be influenced by several structures and
                    loading patterns, so the broader clinical context matters.
                  </figcaption>
                </figure>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  Why did my back suddenly start hurting?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  Sometimes there is an obvious trigger. You might have:
                </p>
                <BulletList items={commonTriggers} />
                <p className="text-base leading-8 text-mist">
                  Sometimes there is no dramatic event at all. Back pain can be
                  influenced by physical loading, activity levels, previous
                  pain, sleep, stress and other individual factors.
                </p>
                <div className="my-9 border-l-2 border-sand bg-graphite px-6 py-7 md:px-8">
                  <p className="font-display text-xl font-semibold leading-8 text-bone">
                    Instead of only asking “What did I damage?”, it can be more
                    useful to ask “What changed recently, and what is my back
                    struggling to tolerate?”
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="sitting-rest">
                <p className="eyebrow mb-3">Movement &amp; activity</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Does sitting cause lower back pain?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Many people become uncomfortable after sitting for prolonged
                  periods, particularly during long desk-based workdays. This
                  does not necessarily mean sitting is damaging your spine, and
                  there is no single perfect posture that guarantees you will
                  never experience back pain.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Changing positions, getting up periodically and incorporating
                  more movement throughout the day can be useful. For some
                  people, the bigger issue is not necessarily{" "}
                  <strong className="font-medium text-bone">how</strong> they
                  sit, but{" "}
                  <strong className="font-medium text-bone">
                    how long they stay in one position
                  </strong>
                  .
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  Should I rest if I have lower back pain?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  Usually, prolonged rest is not the answer. Temporarily
                  modifying activities that significantly aggravate symptoms can
                  be sensible, but that is very different from avoiding movement
                  altogether.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Major clinical guidelines encourage people with lower back
                  pain to continue normal activities where possible and use
                  exercise and self-management as part of recovery.
                </p>
                <div className="mt-9 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
                  <div className="bg-graphite p-6">
                    <p className="eyebrow mb-3">The unhelpful cycle</p>
                    <p className="text-sm leading-7 text-mist">
                      Pain → stop everything → wait until pain completely
                      disappears
                    </p>
                  </div>
                  <div className="bg-graphite p-6">
                    <p className="eyebrow mb-3">A progressive approach</p>
                    <p className="text-sm leading-7 text-bone">
                      Pain → modify activity → keep moving → rebuild capacity
                    </p>
                  </div>
                </div>
              </section>

              <section className={lightArticleBand} id="exercise-core">
                <p className="eyebrow mb-3">Building capacity</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Should I exercise with lower back pain?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  In many cases, yes. Exercise is one of the most consistently
                  recommended treatments for persistent lower back pain.
                  Clinical guidance supports a range of approaches:
                </p>
                <BulletList items={exerciseApproaches} />
                <p className="text-base leading-8 text-mist">
                  A large Cochrane review concluded that exercise probably
                  reduces pain in people with chronic lower back pain compared
                  with no treatment, usual care or placebo. There does not
                  appear to be one universally superior exercise for everyone.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  The best programme is appropriate for your current symptoms,
                  progressively challenges your capacity and helps you return to
                  the activities you want to do.
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  Do I need to strengthen my core?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  Possibly — but your core is not the whole story. The idea that
                  back pain simply means you have a “weak core” is an
                  oversimplification. Trunk exercises can be useful, but so can
                  general exercise, aerobic work and progressive physical
                  activity.
                </p>
                <BulletList items={broaderRehab} />
                <p className="text-base leading-8 text-mist">
                  Someone returning to deadlifting needs a different programme
                  from someone whose main goal is to sit comfortably through a
                  workday. We do not simply want to make your core stronger. We
                  want to make you more capable of doing the things that matter
                  to you.
                </p>
              </section>

              <section className={graphiteArticleBand} id="bending-lifting">
                <p className="eyebrow mb-3">Movement confidence</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Is bending bad for your back?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  It is common to become worried about bending forward,
                  particularly if it is currently painful. But bending is a
                  normal movement used to pick something up, tie your shoes,
                  sit, exercise and play many sports.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  During an acute episode, certain movements may need temporary
                  modification. For many people, however, the longer-term goal
                  is not permanent avoidance. It is to gradually restore
                  confidence and capacity in the movements they need.
                </p>

                <div className="mt-12 border-t border-hairline pt-10">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    What about lifting with a rounded back?
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    You may have heard “never lift with your back” or “keep your
                    spine perfectly neutral”. In reality, lifting is more
                    nuanced. Technique affects how forces are distributed and
                    changing it may make a painful movement more comfortable,
                    but avoiding movement indefinitely is generally not the
                    goal.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    We may temporarily modify a lifting strategy, then
                    progressively reintroduce load and movement as tolerance
                    improves. The goal is not to make someone afraid of their
                    spine. It is to develop a back capable of handling the
                    demands placed on it.
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="sciatica">
                <p className="eyebrow mb-3">Nerve symptoms</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Is lower back pain the same as sciatica?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  No. Sciatica generally describes leg symptoms associated with
                  irritation or compression of a spinal nerve root contributing
                  to the sciatic nerve. Symptoms can travel from the lower back
                  or buttock into the leg.
                </p>
                <BulletList items={sciaticaSymptoms} />
                <p className="text-base leading-8 text-mist">
                  Pain in the buttock or leg does not automatically mean
                  sciatica. Several conditions can cause referred leg pain. A
                  physiotherapy or medical assessment can help determine whether
                  symptoms are consistent with nerve-root involvement or another
                  problem.
                </p>
              </section>

              <section className={lightArticleBand} id="mri-urgent">
                <p className="eyebrow mb-3">Scans &amp; safety</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Do I need an MRI for lower back pain?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Not necessarily. Major clinical guidelines recommend against
                  routinely imaging uncomplicated lower back pain. NICE
                  recommends that imaging should not routinely be offered in a
                  non-specialist setting for lower back pain, with or without
                  sciatica.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Imaging is generally more useful when the result is likely to
                  change management. MRI findings need to be interpreted
                  alongside your symptoms, medical history and clinical
                  examination rather than viewed in isolation.
                </p>

                <div
                  className="mt-12 border-t border-black/10 pt-10"
                  id="urgent-signs"
                >
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    When should lower back pain be checked urgently?
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Most episodes are not medical emergencies. Seek urgent
                    medical attention if back pain is associated with symptoms
                    such as:
                  </p>
                  <BulletList items={urgentSymptoms} />
                  <p className="text-base leading-8 text-mist">
                    A history of cancer, significant trauma or other medical
                    conditions may also change how symptoms should be
                    investigated. If you are unsure, speak with an appropriate
                    healthcare professional.
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="manual-therapy">
                <p className="eyebrow mb-3">Hands-on treatment</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  What about massage and manual therapy?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Massage, joint mobilisation and other hands-on treatments can
                  sometimes help with symptom relief. Clinical guidance supports
                  both thrust and non-thrust joint mobilisation for reducing
                  pain and disability in acute and chronic lower back pain.
                  Massage and soft-tissue mobilisation may also offer short-term
                  relief for some people.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  We generally do not want your back to become dependent on
                  someone repeatedly “loosening” or “realigning” it. Manual
                  therapy is better viewed as part of a broader treatment
                  package that includes exercise.
                </p>
                <div className="my-9 border-l-2 border-sand bg-graphite px-6 py-7 md:px-8">
                  <p className="font-display text-xl font-semibold leading-8 text-bone">
                    Hands-on treatment may help you feel better. Rehabilitation
                    should also help you become more capable.
                  </p>
                </div>
              </section>

              <section className={lightArticleBand} id="recovery">
                <p className="eyebrow mb-3">Recovery &amp; recurrence</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  How long does lower back pain take to recover?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  There is no single recovery timeline. Many acute episodes
                  improve considerably over time, while some people develop
                  persistent or recurrent symptoms. Recovery can be influenced
                  by:
                </p>
                <BulletList items={recoveryFactors} />
                <p className="text-base leading-8 text-mist">
                  This is why two people with seemingly similar back pain may
                  require very different approaches.
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  Why does my back pain keep coming back?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  If your back settles every time you rest but returns when you
                  go back to the gym, tennis, golf or lifting, simply waiting
                  for the pain to disappear may not solve the problem. We want
                  to understand
                  <strong className="font-medium text-bone">
                    {" "}
                    what your back needs to tolerate
                  </strong>
                  .
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Returning to deadlifting means preparing for lifting.
                  Returning to tennis may mean preparing for repeated rotation,
                  acceleration and deceleration. If sitting at work is the
                  problem, we need to understand your work habits, activity
                  levels and physical capacity. Rehabilitation should be built
                  around your goals, not simply a diagnosis written on paper.
                </p>
              </section>

              <section className={graphiteArticleBand} id="nxs-assessment">
                <p className="eyebrow mb-3">Your assessment</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Lower back pain physiotherapy at NXS Collective Singapore
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Our goal is not simply to identify where it hurts. We want to
                  understand why your back is limiting you and what needs to
                  improve for you to return to the activities that matter.
                </p>
                <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
                  {assessmentSteps.map((step) => (
                    <div
                      key={step.number}
                      className="bg-ink p-7 last:sm:col-span-2 md:p-8"
                    >
                      <p className="eyebrow mb-3">{step.number}</p>
                      <h3 className="font-display text-xl font-semibold text-bone">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-mist">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-base leading-8 text-mist">
                  Depending on your goals, that rehabilitation might mean
                  getting you back to:
                </p>
                <BulletList items={returnGoals} />
                <p className="font-display text-2xl font-semibold leading-9 text-bone">
                  The goal is not just to make your back feel better
                  temporarily. It is to help you trust it again.
                </p>
              </section>

              <section
                className="mt-16 border border-hairline bg-graphite p-7 md:p-10"
                id="book"
              >
                <p className="eyebrow mb-3">A clear next step</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Back pain stopping you from doing what you enjoy?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  If your back pain keeps returning, is affecting training or
                  work, or you are unsure what you should and should not be
                  doing, an assessment can give you clarity. We can assess your
                  movement, strength and symptoms, then build a plan around the
                  activities you want to return to.
                </p>
                <p className="mt-8 font-display text-xl font-semibold text-sand">
                  Understand your back. Build it back stronger.
                </p>
                <div className="mt-7">
                  <BookPhysioCTA
                    label="Book a Lower Back Pain Physiotherapy Assessment"
                    buttonClassName="max-w-full !whitespace-normal text-center sm:!whitespace-nowrap"
                  />
                </div>
                <p className="mt-5 text-sm leading-7 text-mist">
                  NXS Collective provides individualised physiotherapy and
                  rehabilitation for lower back pain, sciatica and return to
                  exercise and sport in Clarke Quay, Singapore.
                </p>
                <div className="mt-7 border-t border-hairline pt-7">
                  <p className="mb-3 text-sm leading-6 text-mist">
                    Not sure if physiotherapy is the right next step? Speak with
                    Samuel through a complimentary physiotherapy phone
                    consultation.
                  </p>
                  <Button href={phoneConsultUrl} external variant="secondary">
                    Request a Complimentary Call
                  </Button>
                  <p className="mt-3 text-xs leading-5 text-mist/80">
                    The phone consultation is intended for initial guidance only
                    and does not replace an in-person physiotherapy assessment
                    or medical diagnosis.
                  </p>
                </div>
              </section>

              <section
                className="mt-16 border-t border-hairline pt-10"
                id="references"
              >
                <p className="eyebrow mb-3">Evidence base</p>
                <h2 className="font-display text-2xl font-semibold text-bone">
                  References
                </h2>
                <ol className="mt-6 space-y-3 pl-5 text-xs leading-6 text-mist md:text-sm">
                  {references.map((reference) => (
                    <li key={reference} className="list-decimal pl-2">
                      {reference}
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-xs leading-6 text-mist/80">
                  This article is intended for general educational purposes and
                  does not replace an individual medical or physiotherapy
                  assessment.
                </p>
              </section>
            </div>

            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="border border-hairline bg-graphite p-6">
                <p className="eyebrow mb-4">In this guide</p>
                <nav aria-label="Article contents" className="space-y-3">
                  {[
                    ["#causes", "Causes & triggers"],
                    ["#sitting-rest", "Sitting & rest"],
                    ["#exercise-core", "Exercise & core"],
                    ["#bending-lifting", "Bending & lifting"],
                    ["#sciatica", "Sciatica"],
                    ["#mri-urgent", "MRI & urgent signs"],
                    ["#manual-therapy", "Hands-on treatment"],
                    ["#recovery", "Recovery & recurrence"],
                    ["#nxs-assessment", "NXS assessment"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="block text-sm leading-6 text-mist transition-colors hover:text-bone"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-5 border border-hairline bg-ink p-6">
                <p className="font-display text-lg font-semibold text-bone">
                  Physiotherapy in Clarke Quay
                </p>
                <p className="mt-3 text-sm leading-6 text-mist">
                  Individualised assessment and rehabilitation for back pain,
                  sports injuries and musculoskeletal conditions.
                </p>
                <Link
                  href="/physiotherapy"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-sand"
                >
                  View Physiotherapy
                  <ArrowRight size={14} strokeWidth={1.7} />
                </Link>
              </div>

              <div className="mt-5 border border-hairline bg-graphite p-6">
                <p className="eyebrow mb-3">Further reading</p>
                <div className="space-y-4">
                  <Link
                    href="/blog/knee-pain-physiotherapy-singapore"
                    className="group block font-display text-lg font-semibold leading-7 text-bone"
                  >
                    Knee Pain Explained
                    <ArrowRight
                      size={14}
                      strokeWidth={1.7}
                      className="ml-2 inline text-sand transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    href="/blog/tennis-elbow-physiotherapy-singapore"
                    className="group block border-t border-hairline pt-4 font-display text-lg font-semibold leading-7 text-bone"
                  >
                    Tennis Elbow Explained
                    <ArrowRight
                      size={14}
                      strokeWidth={1.7}
                      className="ml-2 inline text-sand transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </aside>
          </Container>
        </section>
      </article>
    </>
  );
}
