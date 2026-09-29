import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BookPhysioCTA from "@/components/shared/BookPhysioCTA";
import JsonLd from "@/components/seo/JsonLd";
import { getWhatsappUrl } from "@/config/site";

const title = "Knee Pain Explained: Causes, Exercise, Scans & Physiotherapy in Singapore";
const description =
  "Knee pain when walking, squatting or running? Learn about common causes, exercise, scans, osteoarthritis and physiotherapy at NXS Collective Singapore.";
const canonical = "/blog/knee-pain-physiotherapy-singapore";
const image = "/images/blog/knee-pain/knee-pain-anatomy-nxs-collective.webp";

export const metadata: Metadata = {
  title: "Knee Pain Physiotherapy Singapore | Causes, Exercise & Treatment",
  description,
  keywords: [
    "knee pain physiotherapy Singapore",
    "knee pain treatment Singapore",
    "knee physiotherapy Singapore",
    "physiotherapy for knee pain",
    "anterior knee pain Singapore",
    "patellofemoral pain Singapore",
    "runner's knee Singapore",
    "knee osteoarthritis physiotherapy Singapore",
    "knee pain when going downstairs",
    "knee pain when squatting",
    "knee pain when running",
    "knee rehabilitation Singapore",
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
        alt: "Front-view knee anatomy highlighting the general knee pain region",
      },
    ],
  },
};

const loadChanges = [
  "Suddenly start running more",
  "Increase your tennis or pickleball frequency",
  "Add heavier squats to your gym programme",
  "Return to exercise after a long break",
  "Increase the number of hills or stairs you are doing",
  "Spend much more time walking while travelling",
];

const patellofemoralTriggers = [
  "Going upstairs or downstairs",
  "Squatting",
  "Running",
  "Jumping",
  "Prolonged sitting",
  "Kneeling",
];

const painResponseFactors = [
  "How severe the pain is",
  "Whether your movement changes significantly",
  "Whether symptoms settle afterwards",
  "How the knee responds later that day",
  "How it feels the following morning",
];

const osteoarthritisFeatures = [
  "Pain related to activity",
  "Stiffness after sitting or resting",
  "Reduced knee movement",
  "Difficulty with stairs",
  "Difficulty walking longer distances",
  "Reduced confidence with physical activity",
];

const osteoarthritisExercises = [
  "Quadriceps strengthening",
  "Hip strengthening",
  "Sit-to-stand exercises",
  "Squats",
  "Step exercises",
  "Walking",
  "Cycling",
  "Aerobic conditioning",
];

const meniscusAssessment = [
  "How the injury occurred",
  "Where the pain is located",
  "Whether the knee swelled",
  "Whether you experience catching or locking",
  "Your knee movement and strength",
  "How the knee behaves during functional activities",
];

const kneeNoises = ["Clicking", "Cracking", "Popping", "Grinding", "Creaking"];

const noiseConcerns = [
  "Pain",
  "Swelling",
  "Locking",
  "Instability",
  "Loss of movement",
  "Recent significant trauma",
];

const treatmentOptions = [
  "Manual therapy and joint mobilisation",
  "Massage and soft-tissue treatment",
  "Dry needling",
  "Taping",
  "Shockwave therapy",
];

const recoveryFactors = [
  "What is causing the pain",
  "How long symptoms have been present",
  "Whether there was a traumatic injury",
  "Your current strength",
  "Your activity level",
  "Your work or sport demands",
  "How irritable the knee currently is",
  "How consistently rehabilitation can be progressed",
];

const returnDemands = [
  "Running",
  "Hiking",
  "Squatting",
  "Climbing stairs",
  "Lifting",
  "Padel",
  "Pickleball",
  "Returning to the gym",
];

const urgentAssessment = [
  "Significant trauma",
  "Inability to bear weight following an injury",
  "Major swelling soon after injury",
  "Obvious deformity",
  "A knee that is genuinely locked and cannot straighten",
  "Significant instability after trauma",
  "Fever, redness or marked warmth around the joint",
  "Severe or rapidly worsening symptoms",
];

const references = [
  "Willy RW, Hoglund LT, Barton CJ, et al. Patellofemoral Pain. Journal of Orthopaedic & Sports Physical Therapy. 2019;49(9). doi:10.2519/jospt.2019.0302.",
  "Neal BS, Lack SD, Bartholomew C, Morrissey D. Best practice guide for patellofemoral pain based on synthesis of a systematic review, the patient voice and expert clinical reasoning. British Journal of Sports Medicine. 2024;58(24):1486–1495.",
  "Manojlović D, Kozinc Ž, Šarabon N. Trunk, Hip and Knee Exercise Programs for Pain Relief, Functional Performance and Muscle Strength in Patellofemoral Pain: Systematic Review and Meta-Analysis. Journal of Pain Research. 2021;14:1431–1449.",
  "Lawford BJ, Hall M, Hinman RS, et al. Exercise for osteoarthritis of the knee. Cochrane Database of Systematic Reviews. 2024;12.",
  "National Institute for Health and Care Excellence (NICE). Osteoarthritis in over 16s: diagnosis and management. NICE Guideline NG226. 2022.",
  "Culvenor AG, Øiestad BE, Hart HF, Stefanik JJ, Guermazi A, Crossley KM. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. British Journal of Sports Medicine. 2019;53:1268–1278.",
  "French HP, Abbott JH, Galvin R. Adjunctive therapies in addition to land-based exercise therapy for osteoarthritis of the hip or knee. Cochrane Database of Systematic Reviews. 2022;10.",
  "Arias-Buría JL, et al. The Effectiveness of Dry Needling in Patients with Hip or Knee Osteoarthritis: A Systematic Review and Meta-Analysis. 2022.",
  "Charles R, Fang L, Zhu R, Wang J. The effectiveness of shockwave therapy on patellar tendinopathy, Achilles tendinopathy, and plantar fasciitis: a systematic review and meta-analysis. Frontiers in Immunology. 2023;14:1193835.",
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
    "Knee pain",
    "Patellofemoral pain",
    "Knee osteoarthritis",
    "Physiotherapy",
    "Rehabilitation",
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
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-mist md:text-base">
          <Check size={16} strokeWidth={1.7} className="mt-1.5 shrink-0 text-sand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function KneePainArticlePage() {
  const phoneConsultUrl = getWhatsappUrl(
    "Hi NXS Collective, I would like to request a complimentary phone consultation with Samuel regarding my condition."
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
              <p className="eyebrow mb-5">Physiotherapy · Knee · Exercise</p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-bone md:text-6xl">
                Knee Pain Explained
                <span className="mt-4 block text-xl font-medium leading-relaxed text-sand md:text-2xl">
                  Causes, Exercise, Scans &amp; Physiotherapy in Singapore
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-mist md:text-lg">
                Knee pain when walking downstairs? Pain during squats? An ache after running,
                tennis or pickleball? Or stiffness that makes you wonder whether your knee is
                starting to “wear out”?
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
                Knee pain is extremely common, but the cause can vary considerably from person
                to person. Symptoms may relate to the area around the kneecap, osteoarthritis,
                a tendon, a meniscus or simply a sudden increase in activity that the knee is
                not currently prepared to tolerate.
              </p>
              <p className="mt-6 text-base leading-8 text-mist">
                The important point is that <strong className="font-medium text-bone">knee pain does not automatically mean your knee is damaged, nor does it automatically mean you need to stop exercising.</strong>
                {" "}In many cases, appropriate activity modification and progressive exercise
                are important parts of recovery.
              </p>
              <p className="mt-6 text-base leading-8 text-mist">
                At <strong className="font-medium text-bone">NXS Collective in Clarke Quay, Singapore</strong>,
                {" "}our approach is to understand what your knee is struggling to tolerate,
                what may be contributing to your symptoms and what you need the knee to be able
                to do again.
              </p>

              <section className={lightArticleBand} id="why-knee-hurts">
                <p className="eyebrow mb-3">Load &amp; capacity</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Why does my knee hurt?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  The knee is exposed to substantial forces during everyday activities.
                  Walking, climbing stairs, running, squatting, jumping and changing direction
                  all require the muscles around your hip, knee and ankle to work together.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Knee pain can develop when the amount of load placed on the knee exceeds what
                  it is currently prepared to tolerate. For example, you might:
                </p>
                <BulletList items={loadChanges} />
                <p className="text-base leading-8 text-mist">
                  This does not necessarily mean you have damaged the knee. Sometimes it simply
                  means that your current workload has exceeded your current capacity.
                </p>

                <figure className="my-10 overflow-hidden border border-black/15 bg-ink">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt="Front-view knee anatomy highlighting the general knee pain region"
                      fill
                      priority
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-hairline px-5 py-4 text-xs leading-6 text-mist">
                    Knee pain can arise from several different structures and loading patterns,
                    which is why the clinical context matters.
                  </figcaption>
                </figure>

                <p className="text-base leading-8 text-mist">
                  Other knee problems can have clearer structural causes, particularly after
                  significant trauma. This is why understanding <strong className="font-medium text-bone">how the pain started, where it hurts and what activities aggravate it</strong>
                  {" "}is such an important part of assessment.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="downstairs">
                <p className="eyebrow mb-3">A common presentation</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Why does my knee hurt when going downstairs?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Pain when going downstairs is one of the most common knee complaints. A
                  common cause is <strong className="font-medium text-bone">patellofemoral pain</strong>,
                  {" "}sometimes called anterior knee pain or “runner&apos;s knee”.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Patellofemoral pain usually presents as pain around or behind the kneecap and
                  is commonly aggravated by activities that load the knee while it is bent:
                </p>
                <BulletList items={patellofemoralTriggers} />
                <p className="text-base leading-8 text-mist">
                  When you walk downstairs, the quadriceps muscles have to control your body
                  weight as the knee bends. This increases the demand on both the quadriceps and
                  the patellofemoral joint. If the knee currently has reduced capacity to
                  tolerate that demand, pain may appear.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  The solution is therefore not necessarily to avoid stairs forever. It is
                  often to gradually improve the knee&apos;s ability to tolerate them again.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="exercise">
                <p className="eyebrow mb-3">Staying active</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Should I exercise if my knee hurts?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  In many cases, yes. Exercise is one of the best-supported treatments for
                  several common knee conditions.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  For <strong className="font-medium text-bone">patellofemoral pain</strong>,
                  {" "}current best-practice guidance recommends education combined with
                  knee-targeted exercise, with additional treatment selected according to the
                  individual presentation. For <strong className="font-medium text-bone">knee osteoarthritis</strong>,
                  {" "}exercise is also considered a core treatment.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Large reviews of exercise for knee osteoarthritis have found improvements in
                  pain and physical function compared with no treatment, usual care or limited
                  education, although the size of the benefit varies between individuals.
                </p>

                <div className="my-9 border-l-2 border-sand bg-graphite px-6 py-7 md:px-8">
                  <p className="font-display text-xl font-semibold leading-8 text-bone">
                    Pain does not automatically mean “stop exercising”. Often it means finding
                    an appropriate level of exercise and progressively building from there.
                  </p>
                </div>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone" id="pain-during-exercise">
                  Is pain during exercise bad for my knee?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  Not always. It is possible to experience some discomfort during
                  rehabilitation without causing further damage. This is particularly relevant
                  in conditions such as patellofemoral pain and knee osteoarthritis.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  However, this does not mean you should ignore all pain and push through
                  everything. We also consider:
                </p>
                <BulletList items={painResponseFactors} />
                <p className="text-base leading-8 text-mist">
                  This helps determine whether the current exercise dose is appropriate or
                  needs adjusting.
                </p>
              </section>

              <section className={lightArticleBand} id="osteoarthritis">
                <p className="eyebrow mb-3">Understanding arthritis</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Do I have knee osteoarthritis?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Osteoarthritis becomes more common as we get older, but knee pain does not
                  automatically mean you have arthritis. Typical features can include:
                </p>
                <BulletList items={osteoarthritisFeatures} />
                <p className="text-base leading-8 text-mist">
                  Osteoarthritis is not simply a story of the knee progressively “wearing
                  away”. Symptoms and function can change considerably even when structural
                  changes are present.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  This is one reason treatment focuses heavily on <strong className="font-medium text-bone">what you can do, how strong you are and what activities you need to return to</strong>,
                  {" "}rather than simply what an X-ray looks like.
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  If I have osteoarthritis, should I avoid exercise?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  No. This is one of the biggest misconceptions surrounding knee arthritis.
                  People sometimes become worried that exercise will “wear the knee out
                  faster”, but current clinical guidelines recommend exercise as a core
                  treatment for knee osteoarthritis.
                </p>
                <BulletList items={osteoarthritisExercises} />
                <p className="text-base leading-8 text-mist">
                  The appropriate starting point depends on your current symptoms and ability.
                  Someone with severe pain walking 100 metres requires a very different
                  programme from someone with mild knee osteoarthritis who wants to continue
                  playing tennis.
                </p>
              </section>

              <section className={graphiteArticleBand} id="scans">
                <p className="eyebrow mb-3">Scans &amp; structural findings</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Do I need an X-ray or MRI for knee pain?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Not always. Scans can be extremely useful when there is a clear reason for
                  them, but they are not automatically required for every painful knee.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Knee osteoarthritis can often be diagnosed clinically, and imaging is not
                  routinely required unless there are unusual features or another diagnosis is
                  suspected. MRI scans also frequently show structural findings in people who
                  have no knee pain at all.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  This does not mean MRI findings should be ignored. It means that a scan
                  result needs to be interpreted alongside your <strong className="font-medium text-bone">symptoms, history and physical examination</strong>.
                  {" "}Seeing terms such as “meniscus tear” or “cartilage damage” on a scan
                  does not automatically tell us why your knee hurts or whether surgery is
                  required.
                </p>

                <div className="mt-12 border-t border-hairline pt-10" id="meniscus">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    Does knee pain mean my meniscus is torn?
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Not necessarily. Meniscal injuries can cause knee pain, particularly after
                    twisting injuries. However, meniscal changes can also appear on MRI in
                    people who have no pain. A clinician will also consider:
                  </p>
                  <BulletList items={meniscusAssessment} />
                  <p className="text-base leading-8 text-mist">
                    This allows the scan — if one is required — to be interpreted within the
                    bigger clinical picture.
                  </p>
                </div>

                <div className="mt-12 border-t border-hairline pt-10" id="knee-noises">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    What about clicking, cracking or popping in the knee?
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Knees commonly make noise. You may notice:
                  </p>
                  <BulletList items={kneeNoises} />
                  <p className="text-base leading-8 text-mist">
                    Noise by itself does not automatically mean there is a serious problem.
                    What matters more is whether the noise is accompanied by:
                  </p>
                  <BulletList items={noiseConcerns} />
                  <p className="text-base leading-8 text-mist">
                    A completely painless knee that occasionally cracks is very different from
                    a knee that suddenly locks after a twisting injury.
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="treatment-options">
                <p className="eyebrow mb-3">Treatment options</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Where do dry needling, manual therapy, taping and shockwave fit?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Exercise and progressive strengthening are important parts of rehabilitation
                  for many types of knee pain, but other treatments can sometimes be useful for
                  reducing symptoms and helping you participate more comfortably in
                  rehabilitation.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Depending on the cause of your knee pain, this may include:
                </p>
                <BulletList items={treatmentOptions} />
                <p className="text-base leading-8 text-mist">
                  For patellofemoral pain, current best-practice guidance recommends exercise
                  and education as the foundation of treatment, while additional treatments
                  such as manual therapy and taping may be considered depending on the
                  individual presentation.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Dry needling may be used to help manage pain and muscle sensitivity around
                  the knee. Research in knee osteoarthritis suggests that it may provide
                  short-term improvements in pain and physical function, although longer-term
                  benefits remain less clear.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Shockwave therapy is more relevant to certain tendon-related knee conditions,
                  such as <strong className="font-medium text-bone">persistent patellar tendinopathy</strong>,
                  {" "}rather than being a treatment for all knee pain.
                </p>

                <div className="mt-10 border border-hairline bg-graphite p-7 md:p-8">
                  <p className="text-base leading-8 text-mist">
                    These treatments are <strong className="font-medium text-bone">not interchangeable and are not necessary for everyone</strong>.
                    {" "}Hands-on treatments and modalities may help reduce symptoms and make
                    rehabilitation easier. Strengthening and progressive loading are what
                    ultimately help rebuild the capacity of the knee.
                  </p>
                </div>
              </section>

              <section className={lightArticleBand} id="recovery">
                <p className="eyebrow mb-3">Recovery &amp; recurrence</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  How long does knee pain take to recover?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  There is no single timeline. Recovery depends on factors such as:
                </p>
                <BulletList items={recoveryFactors} />
                <p className="text-base leading-8 text-mist">
                  Someone with mild patellofemoral pain after suddenly doubling their running
                  mileage may progress very differently from someone with longstanding
                  osteoarthritis and significant strength loss. This is why rehabilitation
                  needs to be individualised.
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold text-bone">
                  Why does my knee pain keep coming back?
                </h3>
                <p className="mt-5 text-base leading-8 text-mist">
                  Often, the important question is not simply “How do we make the pain
                  disappear?” It is <strong className="font-medium text-bone">“What does your knee need to be capable of doing?”</strong>
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  If your knee feels better after two weeks of rest but becomes painful every
                  time you return to tennis, the knee may not yet have regained the capacity
                  required for tennis. The same principle applies to:
                </p>
                <BulletList items={returnDemands} />
                <p className="text-base leading-8 text-mist">
                  Rehabilitation should eventually resemble the demands you want your knee to
                  tolerate.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="urgent-assessment">
                <p className="eyebrow mb-3">When to seek care</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  When should knee pain be assessed urgently?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Most knee pain does not require emergency treatment. However, medical
                  assessment may be appropriate when there is:
                </p>
                <BulletList items={urgentAssessment} />
                <p className="text-base leading-8 text-mist">
                  If you are uncertain, an appropriate healthcare professional can help
                  determine whether further investigation is required.
                </p>
              </section>

              <section className={graphiteArticleBand} id="nxs-assessment">
                <p className="eyebrow mb-3">NXS Collective</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Knee pain physiotherapy at NXS Collective Singapore
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  At NXS Collective, we do not want to simply tell you that your knee is “weak”
                  or that you should stop doing the activity that hurts. We want to understand
                  <strong className="font-medium text-bone"> what your knee currently struggles to tolerate and what needs to improve</strong>.
                </p>

                <div className="mt-9 grid gap-4">
                  {[
                    ["01", "Understanding your symptoms", "We look at where your knee hurts, how it started, what movements aggravate it and how your symptoms respond to activity."],
                    ["02", "Assessing your knee", "We assess relevant knee movement, joint structures and clinical tests to determine what may be contributing to your symptoms."],
                    ["03", "Objective strength testing", "Where appropriate, we may assess quadriceps, hamstring and hip strength, compare the results side-to-side and track measurable progress over time."],
                    ["04", "Looking at how you move", "If your knee hurts during stairs, squats, running or sport, we may assess those movements — including step-downs, balance, hopping or sport-specific tasks."],
                    ["05", "Building your rehabilitation plan", "Treatment may combine education, activity modification, progressive strengthening, movement retraining and selected hands-on or modality-based treatment."],
                  ].map(([number, heading, copy]) => (
                    <div key={number} className="grid gap-3 border border-hairline bg-ink p-6 sm:grid-cols-[48px_1fr]">
                      <p className="eyebrow !text-mist">{number}</p>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-bone">{heading}</h3>
                        <p className="mt-2 text-sm leading-7 text-mist">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-base leading-8 text-mist">
                  <strong className="font-medium text-bone">Rehabilitation is what prepares your knee for life outside the treatment room.</strong>
                </p>
                <p className="mt-5 text-sm leading-7 text-mist">
                  Learn more about our <Link href="/physiotherapy" className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-bone">physiotherapy approach</Link>
                  {" "}and <Link href="/physiotherapy/samuel-mak" className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-bone">meet Samuel</Link>.
                </p>
              </section>

              <section className="mt-16 border border-sand/35 bg-graphite p-7 md:p-10">
                <p className="eyebrow mb-3">Knee pain stopping you?</p>
                <h2 className="font-display text-2xl font-semibold text-bone md:text-3xl">
                  Understand what is limiting your knee. Build it back stronger.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
                  If knee pain is making you avoid stairs, squats, running, tennis or other
                  activities you enjoy, an assessment can help you understand what is actually
                  limiting you. Rather than simply being told to “rest your knee”, we can assess
                  your strength, movement and symptoms and build a rehabilitation plan around
                  the activities you want to return to.
                </p>
                <div className="mt-8">
                  <BookPhysioCTA
                    label="Book a Knee Pain Physiotherapy Assessment"
                    buttonClassName="max-w-full !whitespace-normal text-center sm:!whitespace-nowrap"
                  />
                </div>
                <p className="mt-5 text-sm leading-7 text-mist">
                  NXS Collective provides individualised physiotherapy and rehabilitation for
                  kneecap pain, knee osteoarthritis, sports-related knee conditions and return
                  to exercise in Clarke Quay, Singapore.
                </p>
                <div className="mt-7 border-t border-hairline pt-7">
                  <p className="mb-3 text-sm leading-6 text-mist">
                    Not sure if physiotherapy is the right next step? Speak with Samuel through
                    a complimentary physiotherapy phone consultation.
                  </p>
                  <Button href={phoneConsultUrl} external variant="secondary">
                    Request a Complimentary Call
                  </Button>
                  <p className="mt-3 text-xs leading-5 text-mist/80">
                    The phone consultation is intended for initial guidance only and does not
                    replace an in-person physiotherapy assessment or medical diagnosis.
                  </p>
                </div>
              </section>

              <section className="mt-16 border-t border-hairline pt-10" id="references">
                <p className="eyebrow mb-3">Evidence base</p>
                <h2 className="font-display text-2xl font-semibold text-bone">References</h2>
                <ol className="mt-6 space-y-3 pl-5 text-xs leading-6 text-mist md:text-sm">
                  {references.map((reference) => (
                    <li key={reference} className="list-decimal pl-2">
                      {reference}
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-xs leading-6 text-mist/80">
                  This article is intended for general educational purposes and does not
                  replace an individual medical or physiotherapy assessment.
                </p>
              </section>
            </div>

            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="border border-hairline bg-graphite p-6">
                <p className="eyebrow mb-4">In this guide</p>
                <nav aria-label="Article contents" className="space-y-3">
                  {[
                    ["#why-knee-hurts", "Why knees hurt"],
                    ["#downstairs", "Pain on stairs"],
                    ["#exercise", "Exercise & pain"],
                    ["#osteoarthritis", "Osteoarthritis"],
                    ["#scans", "X-ray, MRI & meniscus"],
                    ["#treatment-options", "Treatment options"],
                    ["#recovery", "Recovery & recurrence"],
                    ["#urgent-assessment", "When to seek care"],
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
                  Individualised assessment and rehabilitation for knee pain, sports injuries
                  and musculoskeletal conditions.
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
                <Link
                  href="/blog/tennis-elbow-physiotherapy-singapore"
                  className="group block font-display text-lg font-semibold leading-7 text-bone"
                >
                  Tennis Elbow Explained
                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                    className="ml-2 inline text-sand transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </aside>
          </Container>
        </section>
      </article>
    </>
  );
}
