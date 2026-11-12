import { Treatment, Doctor, JourneyStep, Facility, Testimonial, ResourceArticle, FAQItem } from '../types/index.ts';
import { CLINIC_IMAGES } from '../assets/images.ts';

export const TREATMENTS: Treatment[] = [
  {
    id: 'ivf',
    name: 'In Vitro Fertilization (IVF)',
    shortName: 'IVF',
    tagline: 'Advanced assisted reproductive technology with individualized ovarian stimulation protocols.',
    category: 'core',
    overview: 'In Vitro Fertilization involves gently stimulating the ovaries to produce mature eggs, retrieving them via ultrasound guidance, fertilizing them in our state-of-the-art laboratory, and transferring a carefully selected embryo into the uterus.',
    indications: [
      'Tubal factor infertility or blocked fallopian tubes',
      'Ovulatory disorders including PCOS not responding to first-line therapy',
      'Unexplained infertility after unsuccessful IUI cycles',
      'Age-related decline in ovarian reserve or diminished response',
      'Patients undergoing pre-implantation genetic testing (PGT-A / PGT-M)'
    ],
    clinicalSteps: [
      'Comprehensive baseline hormonal and ovarian ultrasound assessment',
      'Individualized gonadotropin stimulation with regular blood and follicle tracking',
      'Mild sedation outpatient egg retrieval procedure (approx. 20-30 minutes)',
      'Fertilization in cleanroom incubator environment via conventional insemination or ICSI',
      'Blastocyst culture through Day 5 or 6 under controlled embryology monitoring',
      'Fresh or vitrified-thawed embryo transfer guided by transabdominal ultrasound'
    ],
    typicalTimeline: 'Approx. 4 to 6 weeks from cycle initiation to initial pregnancy blood test (hCG).',
    considerations: 'Treatment protocols are tailored strictly to individual anti-Müllerian hormone (AMH) levels, antral follicle counts, and prior reproductive history.',
    badge: 'Core Program'
  },
  {
    id: 'icsi',
    name: 'Intracytoplasmic Sperm Injection (ICSI)',
    shortName: 'ICSI',
    tagline: 'Specialized micromanipulation technique injecting a single high-quality sperm directly into the mature egg.',
    category: 'advanced-lab',
    overview: 'ICSI is a precision laboratory technique performed under high-power inverted microscopy where a single morphologically normal, motile sperm is gently injected into the cytoplasm of a mature oocyte to facilitate fertilization.',
    indications: [
      'Severe male factor infertility (low sperm count, motility, or morphology)',
      'Previous low or absent fertilization in conventional IVF cycles',
      'Surgically retrieved sperm (PESA / TESE procedures)',
      'Use of cryopreserved or donor oocytes',
      'Cases requiring pre-implantation genetic testing (PGT)'
    ],
    clinicalSteps: [
      'Controlled ovarian stimulation and oocyte retrieval identical to standard IVF',
      'Enzymatic denuding of the cumulus cells surrounding retrieved eggs to assess maturity',
      'Sperm preparation and selection using high-magnification micromanipulator optics',
      'Precision single-sperm injection into the polar-body aligned mature MII oocyte',
      'Overnight incubation and fertilization verification at 16–18 hours post-injection'
    ],
    typicalTimeline: 'Performed on the day of egg retrieval as part of the IVF cycle.',
    considerations: 'ICSI bypasses natural sperm barriers to enhance fertilization likelihood without compromising embryo developmental potential.',
    badge: 'Specialized Lab'
  },
  {
    id: 'iui',
    name: 'Intrauterine Insemination (IUI)',
    shortName: 'IUI',
    tagline: 'A gentle, minimally invasive first-line treatment placing concentrated sperm into the uterus.',
    category: 'core',
    overview: 'IUI is often the first step in fertility treatment for eligible couples. Concentrated, washed sperm from a partner or donor is placed directly inside the uterine cavity around the precise time of natural or mildly stimulated ovulation.',
    indications: [
      'Mild male factor infertility or borderline semen parameters',
      'Cervical mucus hostility or anatomical cervical factors',
      'Unexplained infertility in younger couples',
      'Use of donor sperm in single parents and female couples',
      'Mild ovulatory dysfunction alongside mild oral ovulation medication'
    ],
    clinicalSteps: [
      'Cycle monitoring with natural cycle tracking or mild oral medication (e.g. letrozole)',
      'Ultrasound monitoring to track dominant follicle growth and endometrial thickness',
      'Trigger injection (hCG) to time ovulation precisely 36 to 40 hours in advance',
      'Laboratory semen washing to isolate the highest-motility, clean sperm fraction',
      'Painless 5-minute outpatient catheter placement directly into the uterine cavity'
    ],
    typicalTimeline: 'Coincides with a single natural menstrual cycle (approx. 2 weeks to test).',
    considerations: 'Requires at least one confirmed open, healthy fallopian tube and adequate post-wash motile sperm count.'
  },
  {
    id: 'fertility-evaluation',
    name: 'Comprehensive Fertility Evaluation',
    shortName: 'Evaluation',
    tagline: 'In-depth medical diagnostics to understand both partners and establish clinical clarity.',
    category: 'evaluation',
    overview: 'A structured, evidence-based diagnostic assessment evaluating ovarian reserve, uterine cavity anatomy, tubal patency, endocrine balance, and male semen parameters to design a clear, rational care pathway.',
    indications: [
      'Couples trying to conceive for 12 months (or 6 months if female partner is $\\ge$ 35)',
      'Irregular or absent menstrual cycles',
      'History of pelvic inflammatory disease, endometriosis, or pelvic surgery',
      'Known male reproductive factors or history of testicular surgery/varicocele',
      'Individuals seeking fertility insight prior to family planning'
    ],
    clinicalSteps: [
      'Detailed multi-disciplinary consultation with a Reproductive Endocrinologist',
      'Female pelvic 3D ultrasound & antral follicle count (AFC)',
      'Ovarian reserve blood panel (AMH, FSH, Estradiol, TSH, Prolactin)',
      'Hysterosalpingo-contrast sonography (HyCoSy) or saline infusion sonogram',
      'Comprehensive computer-assisted semen analysis (CASA) including morphology and vitality'
    ],
    typicalTimeline: 'Completed within 1 to 2 menstrual cycles.',
    considerations: 'Investigating both partners simultaneously prevents unnecessary delays and ensures balanced clinical decisions.'
  },
  {
    id: 'male-infertility',
    name: 'Male Fertility Care & Andrology',
    shortName: 'Male Care',
    tagline: 'Specialized evaluation and clinical management of male reproductive health.',
    category: 'evaluation',
    overview: 'Male factors contribute to approximately 40–50% of all fertility challenges. Our dedicated andrology service offers thorough, non-judgmental evaluations, advanced semen diagnostic testing, and medical or surgical solutions.',
    indications: [
      'Oligospermia (low count), asthenospermia (low motility), or teratospermia (atypical shape)',
      'Azoospermia (absence of sperm in ejaculate)',
      'Clinical varicocele or testicular discomfort',
      'Elevated sperm DNA fragmentation index (DFI)',
      'Hormonal imbalances or hypogonadism'
    ],
    clinicalSteps: [
      'Comprehensive semen analysis following WHO 6th edition laboratory standards',
      'Sperm DNA fragmentation testing (SCSA / TUNEL assay)',
      'Reproductive hormone profiling (Total & Free Testosterone, LH, FSH, Prolactin)',
      'Urological ultrasound and physical examination when indicated',
      'Surgical sperm retrieval planning (PESA, TESE, or micro-TESE) with embryology coordination'
    ],
    typicalTimeline: 'Diagnostic results typically available within 3 to 5 business days.',
    considerations: 'Lifestyle optimization, antioxidant protocols, and targeted medical interventions often significantly enhance semen parameters.'
  },
  {
    id: 'female-infertility',
    name: 'Female Fertility Care & Endocrinology',
    shortName: 'Female Care',
    tagline: 'Tailored clinical management for ovulatory, anatomical, and hormonal concerns.',
    category: 'evaluation',
    overview: 'Focused medical care addressing conditions that influence ovulation, egg quality, and uterine receptivity—including PCOS, endometriosis, uterine fibroids, and diminished ovarian reserve.',
    indications: [
      'Polycystic Ovary Syndrome (PCOS) and metabolic ovulation disorders',
      'Endometriosis and adenomyosis requiring fertility-sparing management',
      'Uterine anomalies, endometrial polyps, or intrauterine adhesions',
      'Recurrent pregnancy loss (RPL) or unexplained implantation failure',
      'Luteal phase defect and progesterone support management'
    ],
    clinicalSteps: [
      'High-resolution 3D transvaginal pelvic ultrasound evaluation',
      'Endocrine and metabolic profiling with individualized ovulation induction plans',
      'Outpatient hysteroscopy for uterine cavity optimization when needed',
      'Personalized immune and thrombophilia evaluation for recurrent loss',
      'Ongoing luteal phase support and clinical monitoring'
    ],
    typicalTimeline: 'Varies based on diagnosis; ovulation induction cycles typically take 3 to 4 weeks.',
    considerations: 'Focuses on holistic hormonal balance and minimally invasive treatments before considering advanced reproductive techniques.'
  },
  {
    id: 'egg-freezing',
    name: 'Egg Freezing (Oocyte Vitrification)',
    shortName: 'Egg Freezing',
    tagline: 'Proactive fertility preservation using ultra-rapid vitrification technology.',
    category: 'preservation',
    overview: 'Egg freezing empowers women to preserve mature oocytes at their current biological age for future family planning. Using ultra-rapid flash freezing (vitrification), ice crystal formation is eliminated to protect cellular integrity.',
    indications: [
      'Women seeking proactive fertility preservation for personal or professional reasons',
      'Patients facing medical treatments that may compromise ovarian function (onco-fertility)',
      'Family history of premature ovarian insufficiency or early menopause',
      'Individuals wishing to preserve ovarian reserve before age 36 for optimal cell quality'
    ],
    clinicalSteps: [
      'Comprehensive ovarian reserve testing (AMH and antral follicle count)',
      'Tailored 10-12 day ovarian stimulation with daily subcutaneous injections',
      'Frequent ultrasound monitoring to optimize follicle maturation',
      'Gentle 20-minute outpatient retrieval under conscious sedation',
      'Immediate lab assessment and flash vitrification at -196°C in liquid nitrogen tanks'
    ],
    typicalTimeline: 'One cycle spans approximately 14 to 18 days from stimulation to recovery.',
    considerations: 'Vitrified eggs maintain their biological quality indefinitely without deterioration over time.',
    badge: 'Preservation'
  },
  {
    id: 'embryo-freezing',
    name: 'Embryo Vitrification & Frozen Transfer (FET)',
    shortName: 'Embryo Cryo',
    tagline: 'Long-term preservation of viable blastocysts for future frozen embryo transfer cycles.',
    category: 'preservation',
    overview: 'High-grade embryos cultured to the Day 5 or Day 6 blastocyst stage are vitrified using closed cryo-systems. This allows patients to plan frozen embryo transfers (FET) in future cycles when the uterine lining is hormonally optimized.',
    indications: [
      'Surplus viable blastocysts following an IVF or ICSI cycle',
      'Patients undergoing freeze-all strategies to prevent ovarian hyperstimulation (OHSS)',
      'Couples awaiting pre-implantation genetic testing (PGT) results',
      'Future sibling cycles without requiring additional ovarian stimulation'
    ],
    clinicalSteps: [
      'Blastocyst grading and laser-assisted biopsy (if PGT is elected)',
      'Controlled ultra-rapid vitrification by certified embryologists',
      'Secure storage in monitored, alarmed liquid nitrogen cryobanks',
      'Natural or hormonally prepared endometrial priming cycle for transfer',
      'Gentle thawing with high post-thaw survival rates followed by ultrasound transfer'
    ],
    typicalTimeline: 'Frozen transfers take approx. 3 to 4 weeks from cycle Day 1 to transfer.',
    considerations: 'Frozen embryo transfers often provide higher endometrial receptivity compared to transfers done in hyperstimulated fresh cycles.'
  },
  {
    id: 'donor-programs',
    name: 'Donor Programs & Third-Party Reproduction',
    shortName: 'Donor Care',
    tagline: 'Ethical, regulated donor-assisted options providing a path to parenthood.',
    category: 'advanced-lab',
    overview: 'Comprehensive medical, genetic, psychological, and legal coordination for patients requiring donor eggs, donor sperm, or gestational surrogacy support, conducted with strict confidentiality and clinical rigor.',
    indications: [
      'Premature ovarian failure or absence of viable oocytes',
      'Non-obstructive azoospermia where surgical sperm retrieval is unsuccessful',
      'Single parents by choice and LGBTQ+ couples building families',
      'Significant hereditary genetic conditions where gamete donation avoids disease transmission'
    ],
    clinicalSteps: [
      'Clinical consultation and personalized treatment route selection',
      'Rigorous medical, infectious disease, and genetic carrier screening of donors',
      'Mandatory independent reproductive psychological counseling for all parties',
      'Legal guidance and formal consent documentation adherence',
      'IVF cycle coordination and embryo transfer with our clinical team'
    ],
    typicalTimeline: 'Varies based on donor matching and regulatory compliance (typically 2 to 4 months).',
    considerations: 'All programs adhere strictly to national reproductive health guidelines and patient anonymity preferences.'
  },
  {
    id: 'fertility-preservation',
    name: 'Medical & Oncofertility Preservation',
    shortName: 'Preservation',
    tagline: 'Rapid-access fertility preservation for oncology patients and specialized medical indications.',
    category: 'preservation',
    overview: 'Expedited fertility preservation protocols for individuals diagnosed with cancer or medical conditions requiring chemotherapy, radiation, or gonadotoxic surgeries, initiated within 48 hours without delaying medical therapy.',
    indications: [
      'Newly diagnosed oncology patients prior to starting chemotherapy or pelvic radiation',
      'Patients facing bilateral oophorectomy, orchiectomy, or gonadectomy',
      'Autoimmune conditions requiring alkylating immunosuppressive agents',
      'Gender-affirming medical or surgical interventions'
    ],
    clinicalSteps: [
      'Priority rapid-access consultation within 24 to 48 hours of referral',
      'Multidisciplinary coordination directly with treating oncologist or surgeon',
      'Random-start ovarian stimulation protocols allowing immediate cycle initiation',
      'Rapid sperm banking or oocyte/embryo vitrification prior to cancer therapy',
      'Long-term cryobank custody with specialized fertility navigator support'
    ],
    typicalTimeline: 'Emergency stimulation completed in 10 to 14 days without cancer care delay.',
    considerations: 'Dedicated oncofertility coordinators assist with financial grants and compassionate support programs.'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'evelyn-vance',
    name: 'Dr. Evelyn Vance',
    title: 'Medical Director & Chief Reproductive Endocrinologist',
    qualifications: 'MD, FACOG, subspecialty certified in REI',
    experienceYears: 18,
    specialization: 'Reproductive Endocrinology & Infertility (REI)',
    bio: 'Dr. Evelyn Vance has dedicated nearly two decades to helping individuals and couples navigate the scientific and emotional nuances of fertility care. Trained at Johns Hopkins and Brigham and Women’s Hospital, she specializes in personalized ovarian stimulation, diminished ovarian reserve, and unexplained recurrent implantation failure.',
    memberships: [
      'American Society for Reproductive Medicine (ASRM)',
      'European Society of Human Reproduction and Embryology (ESHRE)',
      'Fellow of the American College of Obstetricians and Gynecologists (FACOG)',
      'Society for Reproductive Endocrinology and Infertility (SREI)'
    ],
    clinicalFocus: [
      'Individualized Low-Stimulation & High-Responder IVF Protocols',
      'Diminished Ovarian Reserve & Advanced Maternal Age Planning',
      'Recurrent Pregnancy Loss & Endometrial Receptivity',
      'Fertility Preservation & Oncofertility'
    ],
    education: [
      'MD, Johns Hopkins University School of Medicine',
      'Residency in Obstetrics & Gynecology, Johns Hopkins Hospital',
      'Fellowship in Reproductive Endocrinology & Infertility, Harvard / Brigham & Women’s Hospital'
    ],
    image: CLINIC_IMAGES.doctor
  },
  {
    id: 'marcus-sterling',
    name: 'Dr. Marcus Sterling',
    title: 'Director of Embryology & High-Complexity Laboratory',
    qualifications: 'PhD, HCLD (ABB), Certified Clinical Embryologist',
    experienceYears: 16,
    specialization: 'Clinical Embryology & Gamete Micromanipulation',
    bio: 'Dr. Sterling oversees Aura’s ISO Class 5 cleanroom embryology laboratory. With a PhD in Reproductive Physiology from Cambridge University, his scientific research focuses on non-invasive embryo viability biomarkers, closed time-lapse morphokinetic incubators, and ultra-rapid vitrification survivability.',
    memberships: [
      'American Board of Bioanalysis (ABB) - High Complexity Lab Director',
      'College of Reproductive Biology (CRB)',
      'International Society for Mild Approaches in Assisted Reproduction (ISMAAR)'
    ],
    clinicalFocus: [
      'Intracytoplasmic Sperm Injection (ICSI) & Piezo-ICSI',
      'Trophectoderm Biopsy for Pre-implantation Genetic Testing',
      'Time-Lapse Embryo Morphokinetic Selection (EmbryoScope)',
      'Gamete & Blastocyst Vitrification Quality Systems'
    ],
    education: [
      'PhD, Reproductive Physiology & Developmental Biology, University of Cambridge',
      'Postdoctoral Fellowship in Assisted Reproductive Technologies, Yale University',
      'Board Certified High-Complexity Clinical Laboratory Director (HCLD)'
    ],
    image: CLINIC_IMAGES.lab
  },
  {
    id: 'samantha-chen',
    name: 'Dr. Samantha Chen',
    title: 'Senior Fertility Specialist & Reproductive Geneticist',
    qualifications: 'MD, MPH, FACOG',
    experienceYears: 12,
    specialization: 'Reproductive Genetics & Polycystic Ovary Syndrome (PCOS)',
    bio: 'Dr. Chen integrates reproductive endocrinology with clinical genetics. She has published widely on metabolic endocrine disruptions affecting ovulation, including PCOS and insulin resistance, and guides patients through pre-implantation genetic testing for single-gene disorders.',
    memberships: [
      'American Society for Reproductive Medicine (ASRM)',
      'Androgen Excess and PCOS Society (AE-PCOS)',
      'American College of Medical Genetics and Genomics (ACMG)'
    ],
    clinicalFocus: [
      'PCOS, Ovulatory Disorders & Metabolic Health Optimization',
      'Pre-implantation Genetic Testing (PGT-A, PGT-M, PGT-SR)',
      'Oocyte Cryopreservation & Age-Related Reproductive Planning',
      'Third-Party Reproduction & Gestational Carrier Coordination'
    ],
    education: [
      'MD, Columbia University Vagelos College of Physicians and Surgeons',
      'MPH in Epidemiology & Biostatistics, Columbia Mailman School of Public Health',
      'Fellowship in REI, University of California, San Francisco (UCSF)'
    ],
    image: CLINIC_IMAGES.hero
  },
  {
    id: 'arthur-campbell',
    name: 'Dr. Arthur Campbell',
    title: 'Consultant Urologist & Male Infertility Specialist',
    qualifications: 'MD, FACS, Fellowship in Male Reproductive Medicine',
    experienceYears: 15,
    specialization: 'Andrology & Microsurgical Fertility Restoration',
    bio: 'Dr. Campbell brings dedicated microsurgical expertise to male reproductive health. He works in close coordination with our embryology team to perform microsurgical varicocelectomy, micro-TESE for non-obstructive azoospermia, and comprehensive semen diagnostic optimization.',
    memberships: [
      'Society for the Study of Male Reproduction (SSMR)',
      'American Urological Association (AUA)',
      'Society of Male Reproduction and Urology (SMRU)'
    ],
    clinicalFocus: [
      'Microdissection Testicular Sperm Extraction (micro-TESE)',
      'Microsurgical Subinguinal Varicocelectomy',
      'Sperm DNA Fragmentation Remediation & Antioxidant Optimization',
      'Endocrine Evaluation of Male Hypogonadism'
    ],
    education: [
      'MD, Stanford University School of Medicine',
      'Urology Residency, University of Washington Medical Center',
      'Fellowship in Male Infertility & Microsurgery, Cornell Weill Medical College'
    ],
    image: CLINIC_IMAGES.clinic
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Initial Consultation & Medical Discovery',
    duration: '60 minutes',
    description: 'A compassionate, in-depth conversation with your designated Reproductive Endocrinologist to review your medical history, family aspirations, and prior reproductive investigations.',
    clinicalDetails: [
      'Review of past fertility treatments, menstrual history, or surgical history',
      'Initial discussion of timeline, lifestyle factors, and immediate queries',
      'Non-invasive transvaginal baseline scan if scheduled during cycle day 2-5',
      'Introduction to your primary Fertility Nurse Coordinator'
    ],
    patientTips: 'Bring any previous lab results, semen analyses, or surgical notes so our team can perform a complete, unhurried review.'
  },
  {
    number: '02',
    title: 'Diagnostic Fertility Assessment',
    duration: '2 to 3 weeks',
    description: 'Targeted diagnostics for both partners to establish a precise biological picture of ovarian reserve, uterine architecture, tubal patency, and sperm health.',
    clinicalDetails: [
      'Ovarian reserve profiling: AMH, basal FSH, estradiol, and antral follicle count (AFC)',
      'Advanced computer-assisted semen analysis (count, motility, morphology, and vitality)',
      'Pelvic ultrasound / HyCoSy to confirm fallopian tube patency and uterine lining symmetry',
      'General reproductive wellness and infectious disease compliance panels'
    ],
    patientTips: 'All tests are synchronized with your natural cycle to minimize clinic visits and deliver clear diagnostic answers without unnecessary delay.'
  },
  {
    number: '03',
    title: 'Personalized Treatment Protocol',
    duration: '1 consultation',
    description: 'Together with your specialist, review your diagnostic findings and select the clinical pathway—whether lifestyle optimization, IUI, IVF, or fertility preservation—that aligns with your medical parameters.',
    clinicalDetails: [
      'Collaborative discussion of individualized medication protocols and dosages',
      'Detailed schedule mapping with your nurse coordinator',
      'Comprehensive medication injection training session with one-on-one demonstration',
      'Transparent discussion of expected follicle ranges and laboratory expectations'
    ],
    patientTips: 'We encourage both partners to attend so all questions regarding medications, schedules, and emotional support can be addressed together.'
  },
  {
    number: '04',
    title: 'Ovarian Stimulation & Clinical Tracking',
    duration: '9 to 12 days',
    description: 'Carefully monitored hormonal stimulation designed to encourage the safe, synchronized growth of multiple follicles while prioritizing patient comfort.',
    clinicalDetails: [
      'Gentle daily subcutaneous injections self-administered at home',
      '3 to 4 short morning clinic visits for transvaginal ultrasound and rapid hormone assays',
      'Dynamic dosage adjustments to optimize follicular response and prevent hyperstimulation (OHSS)',
      'Precision hCG or GnRH agonist trigger injection scheduled 36 hours before retrieval'
    ],
    patientTips: 'Morning monitoring appointments are structured efficiently between 7:30 AM and 9:30 AM so you can continue your daily commitments with minimal disruption.'
  },
  {
    number: '05',
    title: 'Egg Retrieval & Embryology Care',
    duration: 'Day of retrieval + 5 days lab culture',
    description: 'Gentle outpatient egg retrieval followed by precision fertilization (standard IVF or ICSI) and meticulous culture in our ISO cleanroom incubators.',
    clinicalDetails: [
      'Pain-free 20-minute procedure under light intravenous sedation in our private suite',
      'Partner semen collection or thawed donor sperm preparation in the andrology lab',
      'Fertilization performed within 4 to 6 hours by senior embryologists',
      'Continuous morphokinetic monitoring through Day 5 or Day 6 blastocyst stage',
      'Optional trophectoderm biopsy for PGT-A genetic screening'
    ],
    patientTips: 'You will rest in our private recovery lounge for approximately 1 hour post-procedure, and receive a direct embryology update the following morning.'
  },
  {
    number: '06',
    title: 'Embryo Transfer & Supportive Follow-Up',
    duration: 'Transfer day + 10-12 days to blood test',
    description: 'A gentle, ultrasound-guided transfer of the selected embryo into the uterine cavity, followed by tailored luteal support and compassionate clinical check-ins.',
    clinicalDetails: [
      'Non-surgical, painless 15-minute procedure resembling a standard cervical smear',
      'Transabdominal ultrasound visualization allowing you to watch the embryo catheter placement',
      'Customized progesterone and estrogen support regimen designed for your endometrial lining',
      'Quantitative serum beta-hCG pregnancy blood test scheduled 10 to 12 days post-transfer',
      'Immediate medical consultation and caring emotional guidance regardless of result'
    ],
    patientTips: 'No bed rest is medically necessary following modern transfers; gentle normal daily activities can be resumed immediately with peace of mind.'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'cleanroom-lab',
    name: 'ISO Class 5 Embryology Cleanroom',
    headline: 'Pristine Air Filtration & Environmental Precision',
    description: 'Our embryology laboratory operates with medical-grade positive pressure, HEPA and activated carbon VOC filtration systems, and zero-VOC materials to recreate the optimal microenvironment for gametes and developing embryos.',
    specifications: [
      'ISO 14644-1 Class 5 laminar airflow workstations',
      'Continuous 24/7 environmental telemetry monitoring VOCs, temperature, and CO2',
      'Medical-grade uninterrupted power systems with dual emergency backup generators',
      'Strict cleanroom gowning protocols eliminating synthetic perfumes and contaminants'
    ],
    image: CLINIC_IMAGES.lab
  },
  {
    id: 'incubation-suite',
    name: 'Time-Lapse Morphokinetic Incubation',
    headline: 'Continuous Embryo Observation Without Disturbance',
    description: 'State-of-the-art multi-chamber benchtop incubators equipped with high-resolution time-lapse imaging take photographs every 10 minutes, allowing our embryology team to analyze cellular division kinetics without removing embryos from their controlled gas environment.',
    specifications: [
      'Individual closed chambers minimizing thermal and gas fluctuations during access',
      'Time-lapse imaging tracking exact division milestones (t2, t3, t5, compaction)',
      'Artificial intelligence-assisted morphokinetic grading algorithms (AI-supported annotation)',
      'Reduced cellular stress compared to traditional daily manual microscope inspection'
    ],
    image: CLINIC_IMAGES.lab
  },
  {
    id: 'micromanipulation',
    name: 'Precision ICSI & Laser Biopsy Stations',
    headline: 'Sub-Micron Gamete Handling Technology',
    description: 'Equipped with inverted research-grade microscopes, anti-vibration air tables, and non-contact diode lasers, our micromanipulation stations facilitate intracytoplasmic sperm injection and safe trophectoderm biopsy for genetic screening.',
    specifications: [
      'Research-grade inverted optics with relief contrast and motorized focus',
      'Active pneumatic anti-vibration tables dampening external building vibrations',
      'Focused infrared diode laser for zona pellucida micro-opening and assisted hatching',
      'High-resolution digital camera output for real-time procedural documentation'
    ],
    image: CLINIC_IMAGES.lab
  },
  {
    id: 'cryobank',
    name: 'Monitored Cryopreservation Bank',
    headline: 'Continuous Nitrogen Vapor Storage & Alarmed Security',
    description: 'Our on-site cryostorage facility houses vitrified oocytes, embryos, and sperm in specialized liquid nitrogen tanks equipped with ultrasonic level sensors and automatic telemetry alerts connected to on-call embryology personnel 24/7.',
    specifications: [
      'Vacuum-jacketed liquid nitrogen storage vessels maintained at -196°C',
      'Redundant thermocouple and liquid level sensors connected to dual alert networks',
      'Electronic RFID and barcoding patient identity matching systems',
      'Comprehensive disaster resilience infrastructure with dedicated bulk refill reserves'
    ],
    image: CLINIC_IMAGES.clinic
  },
  {
    id: 'consultation-suites',
    name: 'Serene Consultation & Recovery Suites',
    headline: 'Dignified, Private Spaces Designed for Comfort',
    description: 'We believe clinical excellence must be paired with emotional comfort. Our private recovery suites feature sound-dampened architectural design, natural materials, warm ambient lighting, and dedicated en-suite amenities.',
    specifications: [
      'Acoustically insulated private recovery rooms with comfortable automated reclining beds',
      'Soothing natural timber and neutral textile interiors with botanical garden outlooks',
      'Private pre-procedure and post-procedure check-in ensuring complete patient privacy',
      'Dedicated family hospitality lounge with refreshments and quiet Wi-Fi connectivity'
    ],
    image: CLINIC_IMAGES.clinic
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    initials: 'E. & D. M.',
    patientName: 'Elena & David M.',
    treatment: 'IVF with ICSI & PGT-A',
    quote: 'From our very first consultation, the clinical team treated us with clarity, dignity, and unwavering warmth.',
    story: 'After two difficult years of unexplained infertility and confusing consultations elsewhere, Dr. Vance sat with us for over an hour, broke down our lab results with scientific clarity, and designed a personalized stimulation protocol. The nursing team answered every question within hours. We always felt seen as people, not statistics.',
    verifiedYear: 'Patient Care Experience'
  },
  {
    id: 'test-2',
    initials: 'C. W.',
    patientName: 'Claire W.',
    treatment: 'Proactive Egg Freezing',
    quote: 'The team made the entire preservation cycle completely transparent, comfortable, and empowering.',
    story: 'Deciding to freeze my eggs at 33 felt daunting at first. The transparency of Aura’s clinical team changed everything. The one-on-one injection training with Nurse Sarah was so gentle, the morning monitoring was fast, and the embryologist called me personally to explain the number of mature vitrified eggs stored.',
    verifiedYear: 'Patient Care Experience'
  },
  {
    id: 'test-3',
    initials: 'S. & R. K.',
    patientName: 'Sunita & Rahul K.',
    treatment: 'Male Factor & IVF Care',
    quote: 'Dr. Campbell and the andrology lab approached male fertility with tremendous sensitivity and zero blame.',
    story: 'Male fertility can carry a lot of unsaid stress. Dr. Campbell took time to investigate the underlying causes with advanced semen diagnostics and lifestyle support before recommending ICSI. Having both male and female specialists under one roof made all the difference in feeling supported as a team.',
    verifiedYear: 'Patient Care Experience'
  },
  {
    id: 'test-4',
    initials: 'M. T.',
    patientName: 'Maya T.',
    treatment: 'IUI Treatment & Ovulation Induction',
    quote: 'They never pushed us toward the most expensive procedure; they recommended what was clinically right for us.',
    story: 'What stood out most was their medical integrity. Dr. Chen reviewed our diagnostic scans and recommended starting with a mild ovulation induction and IUI rather than rushing into advanced surgery. That honesty built our complete trust in Aura.',
    verifiedYear: 'Patient Care Experience'
  }
];

export const ARTICLES: ResourceArticle[] = [
  {
    id: 'understanding-ivf-cycle',
    title: 'Understanding the IVF Cycle: A Clinician’s Step-by-Step Guide',
    category: 'Treatment Guides',
    readTime: '6 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Dr. Evelyn Vance, MD, FACOG',
    summary: 'A clear, medically grounded walkthrough of what occurs biologically during ovarian stimulation, egg retrieval, fertilization, and embryo transfer.',
    content: [
      'In Vitro Fertilization (IVF) is one of the most reliable and thoroughly researched assisted reproductive technologies available today. Despite its clinical prevalence, starting a treatment cycle can feel overwhelming without a clear roadmap.',
      'The biological foundation of IVF rests on controlled ovarian stimulation. In a typical menstrual cycle, the body recruits a cohort of follicles, but natural hormonal feedback allows only one dominant follicle to ovulate while the remainder undergo atresia. By introducing natural follicle-stimulating hormones (FSH and LH), we encourage this entire existing monthly cohort to mature synchronously.',
      'Monitoring is central to safety and efficacy. Regular transvaginal ultrasound scans measure the diameter of each growing follicle, while rapid blood tests track estradiol and progesterone concentrations. This dynamic data allows your reproductive endocrinologist to tailor medication dosages daily.',
      'Once the leading follicles achieve mature dimensions (typically 17–20 mm in diameter), a precision trigger injection induces final oocyte meiosis. Retrieval takes place 36 hours later under gentle conscious sedation in our outpatient suite, followed by fertilization in our cleanroom embryology lab.',
      'Understanding each stage reduces anxiety and empowers patients to take an active, informed role in their reproductive health decisions.'
    ]
  },
  {
    id: 'ivf-vs-iui-differences',
    title: 'IVF vs. IUI: Key Clinical Differences, Protocols, and When to Choose',
    category: 'Comparative Analysis',
    readTime: '5 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Dr. Samantha Chen, MD, MPH',
    summary: 'Comparing Intrauterine Insemination (IUI) and In Vitro Fertilization (IVF) across indications, timeframes, invasiveness, and clinical suitability.',
    content: [
      'When couples begin investigating fertility care, distinguishing between IUI and IVF is one of the most common initial clinical questions. While both facilitate fertilization, they differ fundamentally in mechanism, invasiveness, and clinical indications.',
      'Intrauterine Insemination (IUI) is a minimally invasive, low-intervention therapy. It works by timing the introduction of concentrated, washed motile sperm directly into the uterus at the exact moment of natural or mildly assisted ovulation. Fertilization itself takes place internally inside the woman’s fallopian tube.',
      'In Vitro Fertilization (IVF), by contrast, takes place outside the body. Multiple eggs are retrieved and fertilized in an environmentally controlled laboratory. This makes IVF particularly indicated when fallopian tubes are damaged, when severe male factor infertility exists, or when previous IUI cycles have not succeeded.',
      'Neither approach is universally "better"—the clinically sound choice depends on your specific diagnostic profile, age, tubal patency, semen parameters, and personal timeline.',
      'During your diagnostic evaluation, your physician will present an objective, evidence-based appraisal of both approaches tailored to your biological data.'
    ]
  },
  {
    id: 'egg-freezing-guide',
    title: 'Egg Freezing Explained: Biology, Optimal Timing, and What to Expect',
    category: 'Fertility Preservation',
    readTime: '7 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Dr. Evelyn Vance, MD, FACOG',
    summary: 'A comprehensive medical perspective on oocyte cryopreservation, AMH evaluations, age considerations, and vitrification survival rates.',
    content: [
      'Elective and medical oocyte cryopreservation (egg freezing) has evolved from an experimental procedure into an established, highly standardized reproductive technology.',
      'A female is born with all the oocytes she will ever have. Over time, both the quantitative reserve (measured clinically via AMH and antral follicle count) and chromosomal normality of eggs naturally decline. Freezing eggs effectively locks their biological age at the time of retrieval.',
      'Modern vitrification technology uses ultra-rapid flash cooling (-196°C at thousands of degrees per minute) with specialized cryoprotectants. This prevents the formation of damaging intracellular ice crystals, resulting in post-thaw survival rates typically exceeding 90% in accredited laboratories.',
      'The optimal chronological age for proactive egg freezing is generally between 28 and 35, when egg quality and quantity are favorable, though women in their late thirties frequently benefit after personalized counseling.',
      'A single cycle requires roughly 10–12 days of subcutaneous hormone stimulation, followed by an outpatient retrieval. It offers tangible peace of mind and reproductive autonomy.'
    ]
  },
  {
    id: 'understanding-male-fertility',
    title: 'Understanding Male Infertility: Semen Analysis and Beyond',
    category: 'Male Reproductive Health',
    readTime: '5 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Dr. Arthur Campbell, MD, FACS',
    summary: 'Why male reproductive evaluations are critical, what WHO semen parameters mean, and how lifestyle and clinical interventions improve outcomes.',
    content: [
      'Infertility has historically been viewed through an exclusively maternal lens, yet clinical data shows male reproductive factors contribute to roughly half of all conception challenges.',
      'A standard semen analysis evaluates three core parameters: sperm concentration (count per milliliter), motility (percentage moving with progressive forward momentum), and morphology (percentage with typical oval head and tail structures) in accordance with World Health Organization (WHO) benchmarks.',
      'Beyond standard counts, advanced diagnostics such as Sperm DNA Fragmentation (DFI) measure structural breaks within the sperm genetic code. Elevated fragmentation may contribute to lower fertilization rates, compromised blastocyst development, or recurrent early losses.',
      'Because spermatogenesis (sperm production) operates on an approximate 72-to-90-day biological cycle, focused interventions—such as resolving clinical varicoceles, treating subclinical infections, balancing hormones, and reducing oxidative stress through tailored nutraceuticals—can yield significant measurable improvements.',
      'A proactive, respectful male evaluation ensures that neither partner carries an undue burden and opens clear clinical pathways to conception.'
    ]
  },
  {
    id: 'preparing-first-consultation',
    title: 'Preparing for Your First Fertility Consultation: What to Expect',
    category: 'Patient Guidance',
    readTime: '4 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Dr. Samantha Chen, MD, MPH',
    summary: 'Helpful recommendations on what documents to gather, questions to consider, and how to approach your initial clinical visit with confidence.',
    content: [
      'Taking the step to schedule a fertility consultation is an empowering decision. Our clinic environment is specifically designed to provide a calm, reassuring, and unhurried space for conversation.',
      'Your initial 60-minute visit is primarily a diagnostic conversation. You and your specialist will review your full medical history, discuss any prior pregnancy or cycle patterns, and examine any past medical records you bring along.',
      'Helpful items to prepare include any previous blood work (such as thyroid or reproductive hormones), prior semen analysis reports, operative reports from pelvic surgeries, and an approximate timeline of how long you have been actively trying to conceive.',
      'We also encourage you to write down your personal questions in advance. Whether you want to understand the time commitment, inquire about genetic testing, or discuss emotional support services, no question is too small or inconsequential.',
      'Remember: an initial consultation is an exploration of options, not an immediate commitment to invasive procedures. Our goal is to provide diagnostic clarity and compassionate guidance.'
    ]
  },
  {
    id: 'emotional-wellness-fertility',
    title: 'Emotional Wellbeing and Psychological Support During Treatment',
    category: 'Patient Care & Support',
    readTime: '5 min read',
    publishedDate: 'Medically Reviewed 2026',
    reviewedBy: 'Aura Patient Care & Counselling Team',
    summary: 'Navigating the emotional peaks and valleys of fertility treatment with self-compassion, relational resilience, and dedicated professional support.',
    content: [
      'The journey through fertility evaluations and treatments is as much an emotional experience as it is a medical one. Feeling moments of anxiety, anticipation, grief, or fatigue is a completely natural response to a deeply personal hope.',
      'At Aura, psychological care is not an optional afterthought; it is integrated directly into our treatment model. Our dedicated reproductive counselors understand the unique emotional cadences of stimulation cycles, the "two-week wait," and decision-making around embryo genetic results.',
      'We emphasize clear, consistent communication from your clinical care coordinator to minimize the anxiety of the unknown. Knowing what step comes next and who to call with urgent questions provides immense comfort.',
      'Couples are also supported with strategies to sustain open communication, protect their partnership, and set healthy boundaries with well-meaning family and friends.',
      'You are never expected to navigate this journey alone. Our multidisciplinary care team walks beside you with empathy, confidentiality, and steady reassurance at every milestone.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is IVF treatment and how does it work?',
    answer: 'In Vitro Fertilization (IVF) is an assisted reproductive procedure where mature eggs are retrieved from the ovaries and fertilized with sperm in a specialized embryology laboratory. The resulting fertilized embryos are cultured for 5 to 6 days until they reach the blastocyst stage. One carefully evaluated embryo is then transferred into the uterus to establish a healthy pregnancy.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'When should someone consider scheduling a fertility consultation?',
    answer: 'Medical guidelines recommend scheduling a consultation if you have been trying to conceive for 12 months (if the female partner is under 35 years of age) or for 6 months (if 35 or older). You should also consider an earlier consultation if you have irregular or absent periods, known endometriosis, PCOS, a history of pelvic surgeries, or known male reproductive factors.'
  },
  {
    id: 'faq-3',
    category: 'Procedures',
    question: 'What is the primary difference between IVF and IUI?',
    answer: 'In IUI (Intrauterine Insemination), prepared sperm is placed directly into the uterus around the time of ovulation, and fertilization takes place naturally inside the woman’s fallopian tube. In IVF, eggs are retrieved from the ovaries, fertilized with sperm in our embryology laboratory, and an embryo is placed in the uterus. IVF is generally recommended for blocked tubes, severe male factor, or after unsuccessful IUI cycles.'
  },
  {
    id: 'faq-4',
    category: 'Procedures',
    question: 'What is ICSI and when is it recommended?',
    answer: 'Intracytoplasmic Sperm Injection (ICSI) is a specialized laboratory technique where a single high-quality sperm is injected directly into each mature egg using high-magnification micromanipulators. It is primarily recommended for low sperm count, low motility, atypical morphology, surgically retrieved sperm, or in cases with prior poor fertilization with standard IVF.'
  },
  {
    id: 'faq-5',
    category: 'Logistics',
    question: 'How long does a typical IVF treatment cycle take?',
    answer: 'A standard IVF cycle typically takes approximately 4 to 6 weeks from the start of ovarian stimulation to the initial pregnancy blood test. Ovarian stimulation and clinical monitoring take about 9 to 12 days, followed by egg retrieval, 5 to 6 days of laboratory embryo culture, and either a fresh embryo transfer or vitrification for a future frozen transfer cycle.'
  },
  {
    id: 'faq-6',
    category: 'Evaluation',
    question: 'What tests are required prior to initiating IVF?',
    answer: 'Pre-treatment evaluation typically includes female hormonal assays (AMH, basal FSH, estradiol, thyroid panel), a 3D transvaginal pelvic ultrasound to assess antral follicle count and uterine cavity health, a tubal evaluation (HyCoSy), standard infectious disease screenings, and a comprehensive semen analysis for the male partner.'
  },
  {
    id: 'faq-7',
    category: 'Procedures',
    question: 'What is egg freezing and who is it suitable for?',
    answer: 'Egg freezing (oocyte vitrification) involves stimulating the ovaries, retrieving mature eggs, and flash-freezing them at -196°C in liquid nitrogen for future family planning. It is suitable for individuals who wish to preserve their current biological fertility before age-related decline or for oncology patients prior to gonadotoxic treatments.'
  },
  {
    id: 'faq-8',
    category: 'Evaluation',
    question: 'Does the centre provide evaluations and care for male fertility?',
    answer: 'Yes, absolutely. Male reproductive health contributes to nearly half of all fertility challenges. Our clinic has dedicated andrology laboratory facilities and consultant urologists providing comprehensive semen analysis, sperm DNA fragmentation testing, hormonal workups, and surgical sperm retrieval procedures (PESA / micro-TESE).'
  },
  {
    id: 'faq-9',
    category: 'Logistics',
    question: 'How do I book my first fertility consultation?',
    answer: 'You can book your initial consultation by completing our online appointment booking form, calling our dedicated patient coordinators directly, or messaging our team via WhatsApp. Our coordinators will assist you in selecting a convenient time with your preferred specialist.'
  },
  {
    id: 'faq-10',
    category: 'Logistics',
    question: 'What should I bring to my initial appointment?',
    answer: 'Please bring any previous medical records related to fertility, such as prior hormonal blood tests, pelvic ultrasounds, semen analysis reports, surgical summaries, and a list of current medications or supplements. A photo ID and insurance information (if applicable) are also helpful.'
  },
  {
    id: 'faq-11',
    category: 'Logistics',
    question: 'Are virtual / telehealth consultations available?',
    answer: 'Yes, we provide secure, HIPAA-compliant telehealth consultations for initial discussions, second opinions, and follow-up medical reviews. This allows patients to meet their fertility specialist from the comfort of their home before visiting the clinic for in-person scans or lab tests.'
  },
  {
    id: 'faq-12',
    category: 'General',
    question: 'Is IVF suitable for everyone facing difficulty conceiving?',
    answer: 'Not every patient requires IVF. Many individuals and couples achieve healthy pregnancies through simpler first-line therapies such as cycle tracking, oral ovulation induction, or IUI. Our clinical philosophy is to always recommend the least invasive, medically sound approach suited to your individual diagnostic findings.'
  }
];

export const CLINIC_INFO = {
  name: 'Aura Fertility & Reproductive Medicine',
  tagline: 'Modern IVF & Reproductive Healthcare Centre',
  phone: '+1 (800) 414-AURA',
  phoneDirect: '+1 (800) 414-2872',
  emergencyNurseLine: '+1 (800) 414-9911',
  email: 'care@aurafertility.org',
  whatsapp: '+18004142872',
  address: {
    line1: '450 Reproductive Science Boulevard, Suite 500',
    city: 'San Francisco',
    state: 'CA',
    zip: '94158',
    region: 'Mission Bay Medical District'
  },
  hours: [
    { days: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
    { days: 'Saturday (Monitoring & Procedures)', hours: '7:30 AM – 1:30 PM' },
    { days: 'Sunday (Scheduled Procedures Only)', hours: '8:00 AM – 12:00 PM' }
  ],
  accreditations: [
    'SART Member Clinic (Society for Assisted Reproductive Technology)',
    'CAP Accredited Reproductive Laboratory (College of American Pathologists)',
    'CLIA Certified High-Complexity Testing Facility',
    'FDA Registered Tissue Bank & Cryostorage Facility'
  ]
};
