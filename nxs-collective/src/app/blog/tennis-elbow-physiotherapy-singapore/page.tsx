import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BookPhysioCTA from "@/components/shared/BookPhysioCTA";
import JsonLd from "@/components/seo/JsonLd";
import { getWhatsappUrl } from "@/config/site";

const title = "Tennis Elbow Explained: Causes, Rehabilitation & Physiotherapy in Singapore";
const description =
  "Elbow pain when gripping, lifting or playing tennis? Learn about tennis elbow, rehabilitation, exercise, dry needling and shockwave treatment at NXS Collective Singapore.";
const canonical = "/blog/tennis-elbow-physiotherapy-singapore";

export const metadata: Metadata = {
  title: "Tennis Elbow Physiotherapy Singapore | Treatment & Rehab",
  description,
  keywords: [
    "tennis elbow physiotherapy Singapore",
    "tennis elbow treatment Singapore",
    "lateral elbow tendinopathy",
    "lateral epicondylitis Singapore",
    "physiotherapy for tennis elbow",
    "tennis elbow rehabilitation",
    "shockwave therapy tennis elbow Singapore",
    "dry needling tennis elbow Singapore",
    "tennis injury physiotherapy Singapore",
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
        url: "/images/logo-full.jpg",
        width: 1098,
        height: 706,
        alt: "NXS Collective",
      },
    ],
  },
};

const symptoms = [
  "Gripping or squeezing an object",
  "Carrying shopping bags",
  "Lifting a kettle or water bottle",
  "Opening a jar or turning a door handle",
  "Using a mouse or performing repetitive work",
  "Extending your wrist against resistance",
  "Gym exercises that involve gripping",
  "Hitting a tennis or other racket-sport shot",
];

const assessmentFactors = [
  "Shoulder strength",
  "Forearm and wrist strength",
  "Grip strength",
  "Shoulder and elbow movement",
  "Training volume",
  "Which strokes provoke symptoms",
  "Frequency of play",
  "Recent changes in training or equipment",
];

const recoveryFactors = [
  "How long you have experienced symptoms",
  "How irritable the elbow currently is",
  "The demands of your work or sport",
  "How frequently the elbow continues to be aggravated",
  "Your current strength and physical capacity",
  "Whether activity can be appropriately modified",
  "How consistently rehabilitation can be progressed",
];

const redFlags = [
  "Pain is persistent or progressively worsening",
  "Normal daily activities are becoming difficult",
  "Your grip has noticeably weakened",
  "Symptoms repeatedly return whenever you resume sport",
  "The pain is significant or does not behave like a typical overuse problem",
  "You experience numbness or tingling",
  "You are unsure whether the symptoms are actually coming from the elbow",
];

const references = [
  "Lucado AM, Day JM, Vincent JI, et al. Lateral Elbow Pain and Muscle Function Impairments: Clinical Practice Guidelines. Journal of Orthopaedic & Sports Physical Therapy. 2022;52(12). doi:10.2519/jospt.2022.0302.",
  "Karanasios S, Korakakis V, Moutzouri M, et al. Exercise interventions in lateral elbow tendinopathy have better outcomes than passive interventions, but the effects are small: a systematic review and meta-analysis of 2123 subjects in 30 trials. British Journal of Sports Medicine. 2021.",
  "Yoon SY, Kim YW, Shin IS, Kang S, Moon HI, Lee SC. The beneficial effects of eccentric exercise in the management of lateral elbow tendinopathy: a systematic review and meta-analysis. Journal of Clinical Medicine. 2021;10(17):3968.",
  "Heales LJ, Bout N, Dines B, et al. An investigation of maximal strength of the upper limb bilaterally in individuals with lateral elbow tendinopathy: a systematic review with meta-analysis. Physical Therapy. 2021;101(12).",
  "Ma X, Qiao Y, Wang J, Xu A, Rong J. Therapeutic Effects of Dry Needling on Lateral Epicondylitis: An Updated Systematic Review and Meta-analysis. Archives of Physical Medicine and Rehabilitation. 2024;105(11):2184–2197.",
  "Navarro-Santana MJ, Sanchez-Infante J, Fernández-de-Las-Peñas C, Cleland JA, Martín-Casas P, Plaza-Manzano G. Effects of trigger point dry needling on lateral epicondylalgia of musculoskeletal origin: a systematic review and meta-analysis. Clinical Rehabilitation. 2020.",
  "Yao G, Chen J, Duan Y, Chen X. Efficacy of Extracorporeal Shock Wave Therapy for Lateral Epicondylitis: A Systematic Review and Meta-Analysis. BioMed Research International. 2020;2020:2064781.",
  "Karanasios S, Tsamasiotis GK, Michopoulos K, Sakellari V, Gioftsos G. Clinical effectiveness of shockwave therapy in lateral elbow tendinopathy: systematic review and meta-analysis. Clinical Rehabilitation. 2021;35(10):1383–1398.",
  "Lucado AM, Dale RB, Vincent J, Day JM. Do joint mobilizations assist in the recovery of lateral elbow tendinopathy? A systematic review and meta-analysis. Journal of Hand Therapy. 2019;32(2):262–276.e1.",
  "Evaluating the Effectiveness of Deep Transverse Frictional Massage Combined with Conventional Physiotherapy for Tendinopathies: A Systematic Review and Meta-analysis. 2025.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
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
    "Tennis elbow",
    "Lateral elbow tendinopathy",
    "Physiotherapy",
    "Rehabilitation",
  ],
};

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

export default function TennisElbowArticlePage() {
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

            <div className="max-w-4xl">
              <p className="eyebrow mb-5">Physiotherapy · Elbow · Racket Sports</p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-bone md:text-6xl">
                Tennis Elbow Explained
              </h1>
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-sand md:text-2xl">
                Causes, Rehabilitation & Physiotherapy in Singapore
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-mist md:text-lg">
                Pain on the outside of your elbow whenever you grip your racket, carry a bag,
                lift a weight or even pick up a coffee cup? You may be experiencing tennis
                elbow — also known as lateral elbow tendinopathy or lateral epicondylalgia.
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
                Despite the name, you do not actually have to play tennis to develop tennis
                elbow. It commonly affects people whose work, sport, gym training or daily
                activities repeatedly load the muscles and tendons around the outside of the
                elbow.
              </p>
              <p className="mt-6 text-base leading-8 text-mist">
                At NXS Collective in Singapore, we approach tennis elbow rehabilitation by
                looking beyond the painful area alone. Strength, load tolerance, activity
                demands, training volume and the way your upper limb is functioning can all
                matter. The goal is not simply to make pain disappear — it is to understand
                why the elbow is painful, improve what it can tolerate and progressively build
                you back towards the activities you want to do.
              </p>

              <section className="mt-16 scroll-mt-28" id="what-is-tennis-elbow">
                <p className="eyebrow mb-3">Understanding the condition</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  What is tennis elbow?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Tennis elbow is a condition involving pain and reduced function around the
                  outside of the elbow, where several of the forearm extensor muscles attach.
                  These muscles play an important role whenever you grip, carry, lift, control
                  the wrist or use a racket.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Persistent tennis elbow is better understood as a <strong className="font-medium text-bone">tendinopathy</strong>
                  {" "}rather than simply an “inflamed tendon”. Changes in tendon structure,
                  muscle function, motor control and pain processing may all contribute to
                  symptoms. This is why the solution is not always to stop using the arm
                  completely.
                </p>

                <figure className="my-10 overflow-hidden border border-hairline bg-graphite">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/blog/tennis-elbow/tennis-elbow-lateral-epicondyle-anatomy-nxs-collective.webp"
                      alt="Lateral elbow anatomy showing the common area of pain associated with tennis elbow."
                      fill
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-hairline px-5 py-4 text-xs leading-6 text-mist">
                    The lateral elbow and common extensor tendon region commonly associated
                    with tennis elbow symptoms.
                  </figcaption>
                </figure>

                <p className="text-base leading-8 text-mist">
                  Rehabilitation often involves finding an appropriate level of activity while
                  progressively improving the elbow&apos;s ability to tolerate load.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="symptoms">
                <p className="eyebrow mb-3">Common presentation</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  What does tennis elbow feel like?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  The most common symptom is pain or tenderness around the bony prominence on
                  the outside of the elbow. Some people also notice that their grip feels
                  weaker on the painful side.
                </p>
                <BulletList items={symptoms} />
                <p className="text-base leading-8 text-mist">
                  Pain-free grip strength is one of the measures that may be assessed during an
                  evaluation of lateral elbow tendinopathy, alongside other measures of
                  strength and function.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="causes">
                <p className="eyebrow mb-3">Load & capacity</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  What causes tennis elbow?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  There usually is not one single cause. A useful way to think about tennis
                  elbow is a mismatch between <strong className="font-medium text-bone">how much load your elbow is currently exposed to</strong>
                  {" "}and <strong className="font-medium text-bone">how much load it is currently prepared to tolerate.</strong>
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Someone may normally play tennis once per week without any issue, then begin
                  playing three times per week, enter a tournament and increase gym training at
                  the same time. The elbow suddenly has to tolerate considerably more work than
                  it is accustomed to.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  The same can happen outside sport. Repetitive gripping, lifting, manual work
                  or a sudden increase in unfamiliar activity can increase the demand placed on
                  the forearm muscles and tendons. Treating tennis elbow is therefore not always
                  about identifying one “damaged” structure. Understanding what changed and how
                  the arm is responding to that load can be equally important.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="racket-sports">
                <p className="eyebrow mb-3">Tennis & racket sports</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Why is tennis elbow common in tennis and racket sports?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  During tennis, your hand, wrist, elbow, shoulder and trunk work together to
                  transfer force through the racket. The forearm muscles repeatedly stabilise
                  the wrist while you grip the racket and strike the ball.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  A sudden increase in playing volume, more intense training or repeatedly
                  performing movements that provoke symptoms can increase the demands placed
                  on the elbow. But the elbow does not work in isolation.
                </p>
                <BulletList items={assessmentFactors} />
                <p className="text-base leading-8 text-mist">
                  The intention is not to blame every case of tennis elbow on the shoulder or
                  your tennis technique. It is to understand why your particular elbow may be
                  overloaded.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="continue-playing">
                <p className="eyebrow mb-3">Activity modification</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Can I continue playing tennis with tennis elbow?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Not necessarily. Complete rest is not automatically required for everyone
                  with tennis elbow. How much tennis you can continue playing depends on how
                  irritable your symptoms are, how much pain you experience while playing, how
                  the elbow responds afterwards, your current playing volume and what else is
                  loading the arm.
                </p>
                <blockquote className="my-8 border-l-2 border-sand pl-6 font-display text-xl leading-8 text-bone">
                  The aim is not simply: “Don&apos;t use your arm until it stops hurting.”
                </blockquote>
                <p className="text-base leading-8 text-mist">
                  The aim is to find an amount of activity the elbow can currently tolerate
                  and then progressively build its capacity again.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="exercise">
                <p className="eyebrow mb-3">Rehabilitation</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Should you exercise with tennis elbow?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Exercise is commonly used in the management of tennis elbow. The 2022
                  clinical practice guideline for lateral elbow pain recommends resisted
                  isometric, concentric and/or eccentric wrist-extensor exercise for people
                  with subacute or chronic lateral elbow tendinopathy.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  Research has also found that exercise tends to perform better than passive
                  interventions, although the overall effects reported across studies are
                  relatively modest and the certainty of evidence varies. There is no single
                  magical “tennis elbow exercise”.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  A rehabilitation programme may begin with progressively strengthening the
                  wrist extensors and other forearm muscles. For someone returning to a racket
                  sport, rehabilitation may later progress towards stronger gripping under
                  load, faster movements, upper-limb strengthening and sport-specific demands.
                </p>

                <div className="mt-10 border border-hairline bg-graphite p-7 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-bone">
                    Is strengthening only the elbow enough?
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-mist md:text-base md:leading-8">
                    Not always. Someone who mainly needs to type comfortably at work has very
                    different requirements from someone aiming to return to competitive tennis.
                    This is one reason we assess the individual rather than simply give everyone
                    the same three tennis-elbow exercises. Shoulder and scapular strengthening
                    may also be incorporated when relevant impairments are identified.
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="treatment-options">
                <p className="eyebrow mb-3">Treatment options</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Where do dry needling, shockwave and manual therapy fit?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Exercise and progressive loading are important components of tennis elbow
                  rehabilitation, but they are not necessarily the only tools that may be used.
                  Depending on your symptoms, how irritable the elbow is and how long the
                  problem has been present, dry needling, shockwave therapy and manual therapy
                  may sometimes be incorporated alongside rehabilitation.
                </p>
                <p className="mt-5 text-base leading-8 text-mist">
                  An important distinction is that we do not view these treatments as
                  replacements for strengthening. They may be used to help manage symptoms and
                  improve function while progressively rebuilding the capacity of the elbow and
                  upper limb.
                </p>

                <div className="mt-10 border-t border-hairline pt-10">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    Dry needling for tennis elbow
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Dry needling involves inserting a thin, sterile needle into selected
                    muscles, trigger points or other targeted tissues without injecting
                    medication. For someone with tennis elbow, it may be directed towards
                    relevant muscles of the forearm depending on the assessment and technique
                    being used.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    A 2024 systematic review and meta-analysis involving 17 randomised
                    controlled trials and 979 participants reported improvements in pain,
                    elbow-related disability, grip strength and upper-limb function, with
                    short-term pain improvement particularly evident following treatment.
                    Earlier research has also reported improvements, while noting variability
                    in the certainty and consistency of the evidence.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Dry needling can therefore be a useful option for selected patients, but
                    it should not necessarily be viewed as a standalone cure.
                  </p>
                  <figure className="mt-8 overflow-hidden border border-hairline bg-graphite">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="block max-h-[720px] w-full bg-ink object-contain"
                    >
                      <source
                        src="/images/blog/tennis-elbow/tennis-elbow-dry-needling-nxs-collective.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support embedded video.
                    </video>
                    <figcaption className="border-t border-hairline px-5 py-4 text-xs leading-6 text-mist">
                      Dry needling may be incorporated into rehabilitation where clinically
                      appropriate. Treatment selection depends on the individual assessment.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-10 border-t border-hairline pt-10">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    Shockwave therapy for tennis elbow
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Shockwave therapy has been investigated for persistent lateral elbow
                    tendinopathy. Research has reported improvements in pain and grip strength
                    following extracorporeal shockwave therapy compared with some control
                    treatments.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    One review comparing shockwave therapy with corticosteroid injection
                    reported better short-term outcomes for corticosteroid injection at one
                    month, while shockwave therapy produced better pain, grip-strength and
                    functional outcomes at three and six months.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    This does not mean shockwave is necessary for everyone with tennis elbow.
                    Where appropriate, it may form part of a broader rehabilitation strategy
                    while strength and load tolerance continue to be rebuilt.
                  </p>
                  <figure className="mt-8 overflow-hidden border border-hairline bg-graphite">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="block max-h-[720px] w-full bg-ink object-contain"
                    >
                      <source
                        src="/images/blog/tennis-elbow/tennis-elbow-shockwave-nxs-collective.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support embedded video.
                    </video>
                    <figcaption className="border-t border-hairline px-5 py-4 text-xs leading-6 text-mist">
                      Shockwave therapy may be considered for selected presentations of
                      persistent lateral elbow tendinopathy as part of a broader rehabilitation
                      plan.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-10 border-t border-hairline pt-10">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    Manual therapy and soft-tissue treatment
                  </h3>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Manual therapy and soft-tissue techniques may also be used for short-term
                    symptom management. One approach studied in people with tennis elbow is
                    mobilisation with movement, where a physiotherapist applies a specific
                    joint mobilisation while the patient performs a movement such as gripping.
                  </p>
                  <p className="mt-5 text-base leading-8 text-mist">
                    Research has reported improvements in pain and grip strength following
                    mobilisation-with-movement approaches. The intention is not to rely on
                    passive treatment alone, but to use symptom-modifying treatment where
                    appropriate while progressively rebuilding function and capacity.
                  </p>
                </div>
              </section>

              <section className="mt-16 scroll-mt-28" id="recovery-time">
                <p className="eyebrow mb-3">Recovery</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  How long does tennis elbow take to recover?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  There is no single recovery timeline. Some cases settle relatively quickly,
                  while others can persist for months.
                </p>
                <BulletList items={recoveryFactors} />
                <p className="text-base leading-8 text-mist">
                  Two people can experience pain in almost exactly the same location but still
                  have very different rehabilitation requirements. The more useful question is
                  often whether the elbow is gradually becoming more capable of tolerating the
                  things you need it to do.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="when-to-see-physio">
                <p className="eyebrow mb-3">When to seek assessment</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  When should you see a physiotherapist for tennis elbow?
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Not every pain around the outside of the elbow is tennis elbow. Problems
                  involving other structures around the elbow, the neck or nerves can
                  sometimes produce similar symptoms.
                </p>
                <BulletList items={redFlags} />
                <p className="text-base leading-8 text-mist">
                  A physiotherapy assessment can help determine whether your symptoms are
                  consistent with tennis elbow and identify factors that may be contributing
                  to the problem.
                </p>
              </section>

              <section className="mt-16 scroll-mt-28" id="nxs-assessment">
                <p className="eyebrow mb-3">NXS Collective</p>
                <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                  Tennis elbow physiotherapy at NXS Collective Singapore
                </h2>
                <p className="mt-6 text-base leading-8 text-mist">
                  Our approach is not simply to tell you to rest your elbow and hand you a
                  generic sheet of exercises. We first want to understand why your elbow hurts,
                  what is loading it, what it can currently tolerate and what you eventually
                  need it to be able to do.
                </p>

                <div className="mt-9 grid gap-4">
                  {[
                    ["01", "Understanding your symptoms and activity", "When did the pain begin? What movements provoke it? Has your tennis, gym training or work volume recently changed?"],
                    ["02", "Elbow and forearm assessment", "We assess structures and movement around the elbow to determine whether the presentation is consistent with tennis elbow or whether another condition should be considered."],
                    ["03", "Objective strength testing", "Where appropriate, we may assess strength around the elbow, wrist and shoulder to identify meaningful deficits and side-to-side differences."],
                    ["04", "Looking beyond the elbow", "For racket-sport athletes, we may assess other parts of the upper limb involved in producing and transferring force during sport."],
                    ["05", "Building your return-to-sport plan", "Rather than simply waiting for pain to disappear, rehabilitation progressively rebuilds the strength and load tolerance needed for the activities that matter to you."],
                  ].map(([number, heading, copy]) => (
                    <div key={number} className="grid gap-3 border border-hairline bg-graphite p-6 sm:grid-cols-[48px_1fr]">
                      <p className="eyebrow !text-mist">{number}</p>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-bone">{heading}</h3>
                        <p className="mt-2 text-sm leading-7 text-mist">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16 border border-sand/35 bg-graphite p-7 md:p-10">
                <p className="eyebrow mb-3">Still playing through elbow pain?</p>
                <h2 className="font-display text-2xl font-semibold text-bone md:text-3xl">
                  Get your elbow properly assessed.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
                  If elbow pain is affecting your tennis, gym training, work or everyday
                  activities, you do not necessarily have to choose between “just rest it” and
                  “keep playing and hope it goes away”. A physiotherapy assessment can help
                  establish what may be contributing to the problem and build a structured plan
                  towards the activities you want to return to.
                </p>
                <div className="mt-8">
                  <BookPhysioCTA />
                </div>
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
                  {references.map((reference, index) => (
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
                    ["#what-is-tennis-elbow", "What is tennis elbow?"],
                    ["#symptoms", "Symptoms"],
                    ["#causes", "Causes"],
                    ["#racket-sports", "Racket sports"],
                    ["#continue-playing", "Can you keep playing?"],
                    ["#exercise", "Exercise & rehab"],
                    ["#treatment-options", "Dry needling & shockwave"],
                    ["#recovery-time", "Recovery time"],
                    ["#when-to-see-physio", "When to seek assessment"],
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
                  NXS Collective provides individualised physiotherapy and rehabilitation for
                  tennis elbow, racket-sport injuries and musculoskeletal conditions.
                </p>
                <Link
                  href="/physiotherapy"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-sand"
                >
                  View Physiotherapy
                  <ArrowRight size={14} strokeWidth={1.7} />
                </Link>
              </div>
            </aside>
          </Container>
        </section>
      </article>
    </>
  );
}
