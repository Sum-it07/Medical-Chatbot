// Medicine data structure
const medicalData = {
  medications: {
    acyclovir: {
      description:
        "Acyclovir is an antiviral medication used to treat infections caused by viruses, particularly herpes simplex virus.",
      uses: [
        "treats herpes simplex virus infections",
        "treats varicella zoster (shingles)",
      ],
      sideEffects: ["nausea", "diarrhea", "headache"],
      precautions: [
        "Drink plenty of fluids to prevent kidney problems.",
        "Consult with a doctor if you have kidney issues.",
      ],
      commonDosage:
        "200mg to 400mg, 3-5 times daily, depending on the condition.",
    },
    aspirin: {
      description:
        "Aspirin is an anti-inflammatory drug used to relieve pain, inflammation, and reduce fever. It also helps in preventing blood clots.",
      uses: [
        "relieves pain",
        "reduces inflammation",
        "lowers fever",
        "prevents strokes and heart attacks",
      ],
      sideEffects: ["stomach ulcers", "gastrointestinal bleeding", "nausea"],
      precautions: [
        "Avoid in people with stomach ulcers, bleeding disorders, or asthma.",
      ],
      commonDosage: "81mg to 325mg daily for heart conditions, 500mg for pain.",
    },
    alprazolam: {
      description:
        "Alprazolam is a medication used to treat anxiety and panic disorders.",
      uses: [
        "treats anxiety disorders",
        "treats panic attacks",
        "generalized anxiety disorder (GAD)",
      ],
      sideEffects: ["drowsiness", "dizziness", "memory problems"],
      precautions: [
        "Avoid alcohol and use cautiously in people with a history of addiction.",
      ],
      commonDosage: "0.25mg to 0.5mg, 3 times daily.",
    },
    amoxicillin: {
      description:
        "Amoxicillin is an antibiotic used to treat bacterial infections.",
      uses: [
        "treats ear infections",
        "respiratory infections",
        "urinary tract infections (UTIs)",
        "pneumonia",
      ],
      sideEffects: ["rash", "diarrhea", "nausea"],
      precautions: [
        "Take the full course of treatment.",
        "Avoid if allergic to penicillin.",
      ],
      commonDosage: "250mg to 500mg every 8 hours.",
    },
    atorvastatin: {
      description:
        "Atorvastatin is a statin medication used to lower cholesterol and triglyceride levels.",
      uses: [
        "lowers cholesterol",
        "reduces the risk of heart attacks",
        "reduces stroke risk",
      ],
      sideEffects: ["muscle pain", "liver damage", "digestive issues"],
      precautions: [
        "Regular liver function tests are recommended.",
        "Avoid alcohol.",
      ],
      commonDosage: "10mg to 80mg daily, depending on cholesterol levels.",
    },
    azithromycin: {
      description:
        "Azithromycin is a broad-spectrum antibiotic used to treat bacterial infections.",
      uses: [
        "treats respiratory infections",
        "skin infections",
        "ear infections",
        "sexually transmitted infections (STIs)",
      ],
      sideEffects: ["diarrhea", "nausea", "abdominal pain"],
      precautions: [
        "Use cautiously if you have liver problems or a history of heart issues.",
      ],
      commonDosage: "500mg on the first day, then 250mg daily for 4 more days.",
    },
    amitriptyline: {
      description:
        "Amitriptyline is a tricyclic antidepressant used to treat depression and certain anxiety disorders.",
      uses: [
        "treats depression",
        "treats anxiety disorders",
        "used for nerve pain",
      ],
      sideEffects: [
        "dry mouth",
        "drowsiness",
        "blurred vision",
        "constipation",
      ],
      precautions: [
        "Do not stop suddenly without consulting your doctor.",
        "Use cautiously in elderly individuals.",
      ],
      commonDosage: "25mg to 150mg daily, taken at bedtime.",
    },
    albuterol: {
      description:
        "Albuterol is a bronchodilator used to treat asthma and chronic obstructive pulmonary disease (COPD).",
      uses: ["relieves bronchospasm", "treats asthma", "treats COPD"],
      sideEffects: ["tremors", "palpitations", "headache"],
      precautions: [
        "Use cautiously in individuals with heart disease.",
        "Follow prescribed dosage to avoid overuse.",
      ],
      commonDosage: "2 puffs every 4 to 6 hours as needed.",
    },
    antihistamines: {
      description:
        "Antihistamines are medications that block histamines to reduce allergy symptoms.",
      uses: [
        "relieves allergy symptoms",
        "reduces runny nose",
        "relieves sneezing",
      ],
      sideEffects: ["drowsiness", "dry mouth", "dizziness"],
      precautions: [
        "Avoid alcohol while using antihistamines.",
        "Use with caution if you have glaucoma or prostate problems.",
      ],
      commonDosage: "10mg to 50mg daily, depending on the medication.",
    },
    azathioprine: {
      description:
        "Azathioprine is an immunosuppressive drug used to prevent organ rejection in transplant patients.",
      uses: [
        "prevents organ rejection",
        "treats autoimmune diseases like rheumatoid arthritis",
      ],
      sideEffects: ["nausea", "liver toxicity", "bone marrow suppression"],
      precautions: [
        "Regular blood tests are necessary to monitor for side effects.",
        "Avoid contact with infected individuals.",
      ],
      commonDosage: "1mg to 3mg per kilogram of body weight daily.",
    },

    baclofen: {
      description:
        "Baclofen is a muscle relaxant used to treat spasticity caused by conditions like multiple sclerosis or spinal cord injury.",
      uses: ["treats muscle spasticity", "relieves muscle stiffness"],
      sideEffects: ["drowsiness", "dizziness", "weakness"],
      precautions: [
        "Avoid alcohol while using baclofen.",
        "Use cautiously in people with kidney problems.",
      ],
      commonDosage: "5mg to 20mg, 3 times a day, gradually increased.",
    },
    bupropion: {
      description:
        "Bupropion is an antidepressant and smoking cessation aid that affects chemicals in the brain to improve mood and decrease cravings.",
      uses: ["treats depression", "treats anxiety", "helps quit smoking"],
      sideEffects: ["insomnia", "weight loss", "dry mouth"],
      precautions: [
        "Do not use if you have a history of seizures or eating disorders.",
        "Consult with a doctor before use in pregnancy.",
      ],
      commonDosage: "100mg to 400mg daily, depending on condition.",
    },
    benazepril: {
      description:
        "Benazepril is an ACE inhibitor used to treat high blood pressure and heart failure.",
      uses: [
        "lowers blood pressure",
        "treats heart failure",
        "reduces the risk of stroke and kidney problems",
      ],
      sideEffects: ["cough", "dizziness", "fatigue"],
      precautions: ["Avoid if pregnant.", "Monitor kidney function regularly."],
      commonDosage: "10mg to 40mg daily.",
    },
    benadryl: {
      description:
        "Benadryl (Diphenhydramine) is an antihistamine used to relieve allergy symptoms, motion sickness, and induce sleep.",
      uses: [
        "relieves allergy symptoms",
        "treats insomnia",
        "relieves nausea and vomiting from motion sickness",
      ],
      sideEffects: ["drowsiness", "dry mouth", "blurred vision"],
      precautions: [
        "Avoid alcohol.",
        "Do not use in children under 6 years old without a doctor's approval.",
      ],
      commonDosage: "25mg to 50mg, every 4-6 hours as needed.",
    },
    bisoprolol: {
      description:
        "Bisoprolol is a beta-blocker used to treat high blood pressure, heart failure, and arrhythmias.",
      uses: [
        "lowers blood pressure",
        "treats heart failure",
        "treats arrhythmias",
      ],
      sideEffects: ["fatigue", "dizziness", "slow heart rate"],
      precautions: [
        "Do not stop suddenly without consulting your doctor.",
        "Monitor heart rate regularly.",
      ],
      commonDosage: "2.5mg to 10mg daily.",
    },
    Warfarin: {
      description:
        "Warfarin is an anticoagulant used to prevent and treat blood clots.",
      uses: [
        "prevents blood clots",
        "reduces risk of stroke",
        "prevents deep vein thrombosis (DVT)",
      ],
      sideEffects: ["bleeding", "bruising", "nausea"],
      precautions: [
        "Monitor blood clotting regularly with INR tests.",
        "Avoid food rich in vitamin K.",
      ],
      commonDosage: "2mg to 10mg daily, adjusted based on INR levels.",
    },
    buprenorphine: {
      description:
        "Buprenorphine is a medication used to treat opioid addiction and pain management.",
      uses: ["treats opioid addiction", "pain management"],
      sideEffects: ["nausea", "constipation", "drowsiness"],
      precautions: [
        "Use cautiously in people with liver problems.",
        "Avoid alcohol and benzodiazepines.",
      ],
      commonDosage: "16mg to 24mg daily for addiction treatment.",
    },
    bromhexine: {
      description:
        "Bromhexine is a mucolytic agent used to treat respiratory conditions by thinning mucus.",
      uses: [
        "treats respiratory conditions",
        "thins mucus in lungs",
        "relieves cough",
      ],
      sideEffects: ["nausea", "stomach upset", "headache"],
      precautions: [
        "Consult a doctor if you have a history of gastric ulcers.",
      ],
      commonDosage: "8mg to 16mg, 3 times a day.",
    },
    Botox: {
      description:
        "Botulinum toxin is a neurotoxin used to treat muscle spasms, migraines, and cosmetic wrinkles.",
      uses: [
        "treats muscle spasms",
        "relieves chronic migraines",
        "reduces wrinkles",
      ],
      sideEffects: ["pain at injection site", "muscle weakness", "headache"],
      precautions: [
        "Consult with a doctor if you have a history of neuromuscular disorders.",
        "Do not use during pregnancy.",
      ],
      commonDosage:
        "Varies based on condition; administered by a healthcare provider.",
    },
    budesonide: {
      description:
        "Budesonide is a corticosteroid used to treat asthma, allergic rhinitis, and inflammatory bowel disease.",
      uses: [
        "treats asthma",
        "reduces inflammation in the gut",
        "treats allergic rhinitis",
      ],
      sideEffects: ["headache", "nausea", "cough"],
      precautions: [
        "Do not stop suddenly without medical supervision.",
        "Monitor for signs of adrenal insufficiency.",
      ],
      commonDosage: "200mcg to 400mcg daily for asthma.",
    },

    calcium_carbonate: {
      description:
        "Calcium carbonate is a mineral supplement used to prevent or treat calcium deficiencies, and it is also used as an antacid.",
      uses: [
        "prevents calcium deficiency",
        "treats heartburn",
        "relieves indigestion",
      ],
      sideEffects: ["constipation", "gas", "bloating"],
      precautions: [
        "Do not take with certain antibiotics (e.g., tetracyclines, quinolones).",
        "Consult your doctor before using if you have kidney issues.",
      ],
      commonDosage: "500mg to 1000mg daily, depending on calcium needs.",
    },
    ciprofloxacin: {
      description:
        "Ciprofloxacin is an antibiotic used to treat various bacterial infections, including urinary tract infections, respiratory infections, and skin infections.",
      uses: [
        "treats bacterial infections",
        "treats urinary tract infections",
        "treats respiratory infections",
      ],
      sideEffects: ["nausea", "dizziness", "diarrhea"],
      precautions: [
        "Avoid in children under 18 due to possible tendon issues.",
        "May increase the risk of tendon rupture in older adults.",
      ],
      commonDosage: "250mg to 750mg every 12 hours, based on infection type.",
    },
    clindamycin: {
      description:
        "Clindamycin is an antibiotic used to treat serious bacterial infections, including respiratory and skin infections.",
      uses: [
        "treats bacterial infections",
        "treats skin infections",
        "treats respiratory infections",
      ],
      sideEffects: ["diarrhea", "nausea", "skin rash"],
      precautions: [
        "Do not use if allergic to clindamycin or lincomycin.",
        "May cause severe gastrointestinal issues, such as colitis.",
      ],
      commonDosage: "150mg to 450mg every 6 to 8 hours.",
    },
    captopril: {
      description:
        "Captopril is an ACE inhibitor used to treat high blood pressure, heart failure, and diabetic kidney disease.",
      uses: [
        "lowers blood pressure",
        "treats heart failure",
        "treats kidney disease related to diabetes",
      ],
      sideEffects: ["cough", "dizziness", "fatigue"],
      precautions: [
        "Avoid if pregnant.",
        "Monitor kidney function and electrolytes regularly.",
      ],
      commonDosage: "25mg to 50mg, 2-3 times daily.",
    },
    clonazepam: {
      description:
        "Clonazepam is a benzodiazepine used to treat anxiety, panic disorders, and seizure disorders.",
      uses: ["treats anxiety", "treats panic disorders", "prevents seizures"],
      sideEffects: ["drowsiness", "dizziness", "memory problems"],
      precautions: [
        "Avoid alcohol.",
        "May cause dependence, use only as prescribed.",
      ],
      commonDosage: "0.25mg to 2mg, taken 1-3 times daily, based on condition.",
    },
    chlorpheniramine: {
      description:
        "Chlorpheniramine is an antihistamine used to treat allergy symptoms such as runny nose, sneezing, and itching.",
      uses: [
        "relieves allergy symptoms",
        "treats hay fever",
        "treats allergic rhinitis",
      ],
      sideEffects: ["drowsiness", "dry mouth", "dizziness"],
      precautions: [
        "May cause drowsiness, avoid operating heavy machinery.",
        "Avoid in children under 2 years of age without a doctor's guidance.",
      ],
      commonDosage: "4mg every 4-6 hours, not exceeding 24mg per day.",
    },
    cyclosporine: {
      description:
        "Cyclosporine is an immunosuppressant used to prevent organ rejection following transplant surgeries and to treat autoimmune diseases.",
      uses: [
        "prevents organ rejection",
        "treats autoimmune diseases",
        "manages psoriasis",
      ],
      sideEffects: ["high blood pressure", "kidney dysfunction", "tremors"],
      precautions: [
        "Monitor kidney and liver function regularly.",
        "Avoid live vaccines during treatment.",
      ],
      commonDosage: "3mg to 5mg per kilogram of body weight daily.",
    },
    cipralex: {
      description:
        "Cipralex (Escitalopram) is a selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and panic disorders.",
      uses: ["treats depression", "treats anxiety", "treats panic disorder"],
      sideEffects: ["nausea", "sleep disturbances", "sexual dysfunction"],
      precautions: [
        "Use cautiously in patients with a history of suicidal thoughts.",
        "Avoid alcohol while taking this medication.",
      ],
      commonDosage: "10mg to 20mg daily.",
    },
    cimetidine: {
      description:
        "Cimetidine is a histamine H2-receptor antagonist used to treat conditions like acid reflux, ulcers, and heartburn.",
      uses: [
        "reduces stomach acid",
        "treats acid reflux",
        "prevents stomach ulcers",
      ],
      sideEffects: ["headache", "dizziness", "gastrointestinal discomfort"],
      precautions: [
        "May interact with other medications, especially those metabolized by the liver.",
        "Avoid in people with kidney or liver issues.",
      ],
      commonDosage: "200mg to 400mg, 2-4 times daily.",
    },
    cyproheptadine: {
      description:
        "Cyproheptadine is an antihistamine used to treat allergic conditions and to stimulate appetite in underweight patients.",
      uses: [
        "relieves allergy symptoms",
        "stimulates appetite",
        "treats itching",
      ],
      sideEffects: ["drowsiness", "dry mouth", "blurred vision"],
      precautions: [
        "Avoid alcohol.",
        "Consult with a doctor before use in people with glaucoma or asthma.",
      ],
      commonDosage: "4mg to 12mg daily, in divided doses.",
    },

    diphenhydramine: {
      description:
        "Diphenhydramine is an antihistamine used to treat allergy symptoms, motion sickness, and sleep issues.",
      uses: ["relieves allergy symptoms", "prevents nausea", "treats insomnia"],
      sideEffects: ["drowsiness", "dry mouth", "dizziness"],
      precautions: [
        "Avoid alcohol while using this medication.",
        "Not recommended for children under 2 years of age.",
      ],
      commonDosage:
        "25mg to 50mg every 4-6 hours, not exceeding 300mg per day.",
    },
    doxycycline: {
      description:
        "Doxycycline is an antibiotic used to treat a variety of bacterial infections, including acne, urinary tract infections, and Lyme disease.",
      uses: [
        "treats bacterial infections",
        "treats acne",
        "treats Lyme disease",
      ],
      sideEffects: ["nausea", "vomiting", "sensitivity to sunlight"],
      precautions: [
        "Avoid excessive sun exposure while taking doxycycline.",
        "Take with a full glass of water to avoid esophageal irritation.",
      ],
      commonDosage:
        "100mg every 12 hours for 7-14 days, depending on infection.",
    },
    diazepam: {
      description:
        "Diazepam is a benzodiazepine used to treat anxiety, alcohol withdrawal symptoms, and seizures.",
      uses: [
        "relieves anxiety",
        "manages alcohol withdrawal",
        "prevents seizures",
      ],
      sideEffects: ["drowsiness", "dizziness", "muscle weakness"],
      precautions: [
        "May cause dependence with prolonged use.",
        "Avoid alcohol and other sedatives.",
      ],
      commonDosage:
        "2mg to 10mg, taken 2-4 times per day, depending on the condition.",
    },
    docusate_sodium: {
      description:
        "Docusate sodium is a stool softener used to relieve constipation by making bowel movements easier.",
      uses: ["relieves constipation", "softens stools"],
      sideEffects: ["stomach cramps", "diarrhea", "nausea"],
      precautions: [
        "Use only short-term for constipation.",
        "Avoid in individuals with intestinal blockage.",
      ],
      commonDosage:
        "50mg to 400mg daily, depending on the severity of constipation.",
    },
    dexamethasone: {
      description:
        "Dexamethasone is a corticosteroid used to reduce inflammation in conditions such as allergies, arthritis, and skin disorders.",
      uses: ["reduces inflammation", "treats allergies", "treats arthritis"],
      sideEffects: ["weight gain", "fluid retention", "increased blood sugar"],
      precautions: [
        "May weaken the immune system.",
        "Use cautiously in individuals with diabetes.",
      ],
      commonDosage:
        "0.75mg to 9mg per day, depending on condition and severity.",
    },
    domperidone: {
      description:
        "Domperidone is a medication used to treat nausea, vomiting, and gastrointestinal motility disorders.",
      uses: ["treats nausea", "improves stomach motility", "prevents vomiting"],
      sideEffects: ["dry mouth", "headache", "dizziness"],
      precautions: [
        "Avoid if you have a history of heart problems.",
        "May cause irregular heartbeat in some individuals.",
      ],
      commonDosage: "10mg to 20mg, taken 3-4 times daily before meals.",
    },
    diclofenac: {
      description:
        "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammation.",
      uses: ["relieves pain", "reduces inflammation", "treats arthritis"],
      sideEffects: ["stomach upset", "headache", "dizziness"],
      precautions: [
        "Avoid in individuals with a history of stomach ulcers.",
        "Use the lowest effective dose for the shortest time.",
      ],
      commonDosage: "50mg to 75mg, 2-3 times daily.",
    },
    dexmethylphenidate: {
      description:
        "Dexmethylphenidate is a central nervous system stimulant used to treat attention deficit hyperactivity disorder (ADHD).",
      uses: ["treats ADHD", "improves concentration"],
      sideEffects: ["insomnia", "nervousness", "appetite loss"],
      precautions: [
        "May increase blood pressure and heart rate.",
        "Use cautiously in individuals with a history of heart problems.",
      ],
      commonDosage:
        "5mg to 20mg once or twice daily, depending on the response.",
    },
    dolutegravir: {
      description:
        "Dolutegravir is an antiretroviral drug used in the treatment of HIV infection.",
      uses: ["treats HIV infection", "reduces viral load"],
      sideEffects: ["insomnia", "headache", "nausea"],
      precautions: [
        "Use in combination with other antiretroviral medications.",
        "Monitor for liver problems during treatment.",
      ],
      commonDosage:
        "50mg once daily, often combined with other antiretrovirals.",
    },
    desmopressin: {
      description:
        "Desmopressin is a synthetic hormone used to treat conditions like diabetes insipidus, bedwetting, and bleeding disorders.",
      uses: [
        "treats diabetes insipidus",
        "prevents bedwetting",
        "treats bleeding disorders",
      ],
      sideEffects: ["headache", "nausea", "high blood pressure"],
      precautions: [
        "Monitor sodium levels during treatment.",
        "Avoid in individuals with kidney problems.",
      ],
      commonDosage: "0.2mg to 0.4mg daily, depending on the condition.",
    },

    escitalopram: {
      description:
        "Escitalopram is an antidepressant in the selective serotonin reuptake inhibitor (SSRI) class, used to treat depression and anxiety disorders.",
      uses: [
        "treats depression",
        "treats generalized anxiety disorder",
        "improves mood",
      ],
      sideEffects: ["nausea", "insomnia", "sexual dysfunction"],
      precautions: [
        "Use cautiously in individuals with a history of bipolar disorder.",
        "May increase the risk of suicidal thoughts in young adults.",
      ],
      commonDosage:
        "10mg to 20mg daily, depending on the condition and response.",
    },
    esomeprazole: {
      description:
        "Esomeprazole is a proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD) and stomach ulcers.",
      uses: ["treats GERD", "treats stomach ulcers", "reduces stomach acid"],
      sideEffects: ["headache", "nausea", "diarrhea"],
      precautions: [
        "Use with caution in individuals with liver disease.",
        "Long-term use may increase the risk of bone fractures.",
      ],
      commonDosage: "20mg to 40mg daily, depending on condition and severity.",
    },
    enalapril: {
      description:
        "Enalapril is an ACE inhibitor used to treat high blood pressure and heart failure.",
      uses: [
        "lowers blood pressure",
        "treats heart failure",
        "prevents kidney damage",
      ],
      sideEffects: ["dizziness", "cough", "high potassium levels"],
      precautions: [
        "Monitor kidney function during treatment.",
        "Avoid if pregnant, especially in the second and third trimesters.",
      ],
      commonDosage: "5mg to 20mg daily, depending on the condition.",
    },
    erythromycin: {
      description:
        "Erythromycin is an antibiotic used to treat bacterial infections such as respiratory infections, skin infections, and sexually transmitted diseases.",
      uses: [
        "treats bacterial infections",
        "treats respiratory infections",
        "treats skin infections",
      ],
      sideEffects: ["nausea", "vomiting", "stomach cramps"],
      precautions: [
        "Avoid in individuals with liver disease.",
        "May interact with certain medications, including blood thinners.",
      ],
      commonDosage: "250mg to 500mg every 6-12 hours, depending on infection.",
    },
    epinephrine: {
      description:
        "Epinephrine is a hormone and medication used to treat severe allergic reactions (anaphylaxis), asthma attacks, and heart problems.",
      uses: [
        "treats anaphylaxis",
        "relieves severe allergic reactions",
        "treats asthma attacks",
      ],
      sideEffects: ["palpitations", "nausea", "headache"],
      precautions: [
        "Use with caution in individuals with heart disease.",
        "Do not use if allergic to epinephrine.",
      ],
      commonDosage:
        "0.3mg to 0.5mg injected intramuscularly during an allergic reaction.",
    },
    erlotinib: {
      description:
        "Erlotinib is an epidermal growth factor receptor (EGFR) inhibitor used to treat non-small cell lung cancer and pancreatic cancer.",
      uses: [
        "treats non-small cell lung cancer",
        "treats pancreatic cancer",
        "inhibits tumor growth",
      ],
      sideEffects: ["rash", "diarrhea", "loss of appetite"],
      precautions: [
        "Monitor liver function during treatment.",
        "Avoid during pregnancy due to potential harm to the fetus.",
      ],
      commonDosage: "150mg once daily, depending on the condition.",
    },
    efavirenz: {
      description:
        "Efavirenz is an antiretroviral medication used to treat HIV infection, often in combination with other HIV medications.",
      uses: [
        "treats HIV",
        "reduces viral load",
        "improves immune system function",
      ],
      sideEffects: ["dizziness", "insomnia", "rash"],
      precautions: [
        "May cause birth defects if taken during pregnancy.",
        "Monitor liver and kidney function during treatment.",
      ],
      commonDosage: "600mg once daily, usually taken at bedtime.",
    },
    etoricoxib: {
      description:
        "Etoricoxib is a selective COX-2 inhibitor used to treat pain and inflammation from conditions like arthritis and gout.",
      uses: [
        "relieves pain",
        "reduces inflammation",
        "treats osteoarthritis and gout",
      ],
      sideEffects: ["headache", "dizziness", "stomach upset"],
      precautions: [
        "Avoid in individuals with a history of heart disease or stroke.",
        "Use the lowest effective dose for the shortest period of time.",
      ],
      commonDosage: "60mg to 120mg daily, depending on the condition.",
    },
    ethinylestradiol: {
      description:
        "Ethinylestradiol is a synthetic estrogen used in combination with progestin in oral contraceptives.",
      uses: [
        "prevents pregnancy",
        "treats menstrual disorders",
        "controls hormone-related symptoms",
      ],
      sideEffects: ["nausea", "headache", "weight gain"],
      precautions: [
        "Not recommended for women with a history of blood clots.",
        "Monitor blood pressure regularly during treatment.",
      ],
      commonDosage:
        "0.02mg to 0.05mg daily as part of combination contraceptive pills.",
    },
    eplerenone: {
      description:
        "Eplerenone is a mineralocorticoid receptor antagonist used to treat high blood pressure and heart failure.",
      uses: [
        "lowers blood pressure",
        "reduces heart failure symptoms",
        "prevents kidney damage",
      ],
      sideEffects: ["high potassium levels", "dizziness", "fatigue"],
      precautions: [
        "Avoid in individuals with kidney problems.",
        "Monitor potassium levels regularly during treatment.",
      ],
      commonDosage: "25mg to 50mg daily, depending on the condition.",
    },
    erythropoietin: {
      description:
        "Erythropoietin is a hormone used to stimulate red blood cell production in conditions like anemia, particularly in patients undergoing chemotherapy or dialysis.",
      uses: [
        "treats anemia",
        "stimulates red blood cell production",
        "used in dialysis patients",
      ],
      sideEffects: ["headache", "high blood pressure", "joint pain"],
      precautions: [
        "Monitor blood pressure during treatment.",
        "Use cautiously in individuals with a history of blood clots.",
      ],
      commonDosage:
        "50 to 100 units per kilogram of body weight, injected three times per week.",
    },

    fexofenadine: {
      description:
        "Fexofenadine is an antihistamine used to treat allergies, including hay fever and hives.",
      uses: ["relieves allergy symptoms", "reduces itching from hives"],
      sideEffects: ["headache", "drowsiness", "dry mouth"],
      precautions: [
        "Avoid if allergic to fexofenadine.",
        "Consult a doctor if you have kidney problems.",
      ],
      commonDosage:
        "60mg twice a day or 180mg once daily, depending on severity.",
    },
    fluoxetine: {
      description:
        "Fluoxetine is an SSRI antidepressant used to treat depression, anxiety, and obsessive-compulsive disorder (OCD).",
      uses: ["treats depression", "treats OCD", "improves mood"],
      sideEffects: ["nausea", "sleep disturbances", "sexual dysfunction"],
      precautions: [
        "Use with caution in individuals with bipolar disorder.",
        "May increase the risk of suicidal thoughts in young adults.",
      ],
      commonDosage: "20mg to 40mg daily, depending on condition.",
    },
    fluticasone: {
      description:
        "Fluticasone is a corticosteroid used for treating asthma, allergic rhinitis, and skin conditions.",
      uses: ["treats asthma", "reduces inflammation", "treats allergies"],
      sideEffects: ["throat irritation", "hoarseness", "headache"],
      precautions: [
        "Avoid if allergic to fluticasone.",
        "Use a spacer when using an inhaler to avoid side effects.",
      ],
      commonDosage: "50mcg to 500mcg, depending on the condition.",
    },
    fentanyl: {
      description:
        "Fentanyl is a strong synthetic opioid used to treat severe pain, particularly after surgery or in cancer patients.",
      uses: [
        "treats severe pain",
        "used in anesthesia",
        "manages chronic pain",
      ],
      sideEffects: ["drowsiness", "nausea", "respiratory depression"],
      precautions: [
        "Use with caution due to the risk of addiction.",
        "Not recommended for use in opioid-naive individuals.",
      ],
      commonDosage:
        "25mcg to 100mcg per hour, depending on the patient's pain level.",
    },
    famotidine: {
      description:
        "Famotidine is an H2 blocker used to reduce stomach acid production and treat conditions like GERD and ulcers.",
      uses: ["treats GERD", "reduces stomach acid", "treats ulcers"],
      sideEffects: ["headache", "dizziness", "constipation"],
      precautions: [
        "Consult a doctor if you have kidney problems.",
        "Avoid in patients with a history of liver disease.",
      ],
      commonDosage: "20mg to 40mg once or twice daily.",
    },
    fluvastatin: {
      description:
        "Fluvastatin is a statin used to lower cholesterol levels and reduce the risk of heart disease.",
      uses: [
        "lowers cholesterol",
        "prevents heart disease",
        "reduces stroke risk",
      ],
      sideEffects: ["muscle pain", "headache", "dizziness"],
      precautions: [
        "Use with caution in individuals with liver problems.",
        "Monitor for muscle pain or weakness.",
      ],
      commonDosage: "20mg to 80mg daily, depending on cholesterol levels.",
    },
    fluconazole: {
      description:
        "Fluconazole is an antifungal used to treat fungal infections, including thrush, athlete's foot, and systemic fungal infections.",
      uses: [
        "treats fungal infections",
        "prevents fungal infections",
        "treats candidiasis",
      ],
      sideEffects: ["nausea", "headache", "liver enzyme changes"],
      precautions: [
        "Avoid if allergic to fluconazole.",
        "Consult a doctor if you have a history of liver disease.",
      ],
      commonDosage: "150mg to 200mg daily, depending on the infection.",
    },
    fluimucil: {
      description:
        "Fluimucil is used as a mucolytic agent to treat respiratory disorders like chronic bronchitis and cystic fibrosis by thinning mucus.",
      uses: [
        "treats respiratory conditions",
        "thins mucus",
        "relieves chest congestion",
      ],
      sideEffects: ["nausea", "vomiting", "rash"],
      precautions: [
        "Avoid in individuals with a history of asthma.",
        "Consult with a doctor before use if pregnant.",
      ],
      commonDosage: "600mg once or twice daily, depending on the condition.",
    },
    ferrous_sulfate: {
      description:
        "Ferrous sulfate is an iron supplement used to treat iron deficiency anemia.",
      uses: [
        "treats iron deficiency anemia",
        "restores iron levels",
        "prevents iron deficiency",
      ],
      sideEffects: ["constipation", "stomach upset", "dark stools"],
      precautions: [
        "Take with food to avoid stomach irritation.",
        "Avoid taking with calcium-rich foods or antacids.",
      ],
      commonDosage: "325mg one to three times daily.",
    },
    furosemide: {
      description:
        "Furosemide is a loop diuretic used to treat edema, high blood pressure, and heart failure.",
      uses: [
        "reduces edema",
        "treats high blood pressure",
        "treats heart failure",
      ],
      sideEffects: ["dizziness", "dehydration", "electrolyte imbalances"],
      precautions: [
        "Monitor kidney function and electrolytes during treatment.",
        "Avoid if allergic to sulfonamides.",
      ],
      commonDosage:
        "20mg to 80mg once or twice daily, depending on the condition.",
    },

    // Medications starting with G
    gabapentin: {
      description:
        "Gabapentin is used to treat nerve pain and prevent seizures.",
      uses: ["relieves nerve pain", "prevents seizures"],
      sideEffects: ["dizziness", "drowsiness", "swelling of hands or feet"],
      precautions: [
        "Use with caution in individuals with kidney problems.",
        "May cause suicidal thoughts in some individuals.",
      ],
      commonDosage: "300mg to 600mg, taken 1 to 3 times daily.",
    },
    gemfibrozil: {
      description:
        "Gemfibrozil is a fibric acid derivative used to lower cholesterol and triglyceride levels.",
      uses: ["lowers cholesterol", "reduces triglycerides"],
      sideEffects: ["stomach upset", "muscle pain", "nausea"],
      precautions: [
        "Avoid in individuals with liver disease or gallstones.",
        "Monitor liver function during treatment.",
      ],
      commonDosage: "600mg twice a day, 30 minutes before meals.",
    },
    gentamicin: {
      description:
        "Gentamicin is an antibiotic used to treat a variety of bacterial infections.",
      uses: ["treats bacterial infections", "antibiotic"],
      sideEffects: ["kidney toxicity", "hearing loss", "nausea"],
      precautions: [
        "Use with caution in patients with kidney problems.",
        "Monitor kidney function and hearing regularly during treatment.",
      ],
      commonDosage: "3 to 5mg/kg per day, divided into 2 or 3 doses.",
    },
    glucosamine: {
      description:
        "Glucosamine is a supplement used to treat osteoarthritis by supporting joint health.",
      uses: ["reduces joint pain", "supports joint health"],
      sideEffects: ["stomach upset", "diarrhea", "nausea"],
      precautions: [
        "Consult a doctor before use if you have shellfish allergies.",
        "Monitor for any allergic reactions.",
      ],
      commonDosage: "500mg to 1500mg per day, divided into 2 or 3 doses.",
    },
    guaifenesin: {
      description:
        "Guaifenesin is an expectorant used to help clear mucus from the airways.",
      uses: ["treats cough", "reduces chest congestion"],
      sideEffects: ["nausea", "vomiting", "dizziness"],
      precautions: [
        "Drink plenty of fluids to help loosen mucus.",
        "Consult a doctor if symptoms persist.",
      ],
      commonDosage: "200mg to 400mg every 4 hours as needed.",
    },
    // Medications starting with H
    hydrocodone: {
      description:
        "Hydrocodone is an opioid pain medication used for severe pain management.",
      uses: ["manages severe pain", "cough suppressant"],
      sideEffects: ["drowsiness", "constipation", "nausea"],
      precautions: [
        "May cause addiction, overdose, or death.",
        "Use with caution in individuals with a history of substance abuse.",
      ],
      commonDosage: "10mg to 20mg every 4 to 6 hours, as needed.",
    },
    hydrocortisone: {
      description:
        "Hydrocortisone is a corticosteroid used to reduce inflammation and treat skin conditions.",
      uses: [
        "reduces inflammation",
        "treats allergic reactions",
        "treats skin conditions",
      ],
      sideEffects: ["skin thinning", "weight gain", "increased blood sugar"],
      precautions: [
        "Use with caution in individuals with diabetes.",
        "Avoid prolonged use on large skin areas.",
      ],
      commonDosage: "Apply a thin layer to affected area 1 to 4 times daily.",
    },
    hydrochlorothiazide: {
      description:
        "Hydrochlorothiazide is a thiazide diuretic used to treat high blood pressure and fluid retention.",
      uses: ["treats high blood pressure", "reduces edema"],
      sideEffects: ["dizziness", "low potassium", "dehydration"],
      precautions: [
        "Monitor electrolyte levels and kidney function.",
        "May cause an increase in blood sugar levels.",
      ],
      commonDosage: "12.5mg to 50mg daily.",
    },
    haloperidol: {
      description:
        "Haloperidol is an antipsychotic used to treat schizophrenia and acute psychotic states.",
      uses: [
        "treats schizophrenia",
        "manages acute psychosis",
        "controls severe agitation",
      ],
      sideEffects: ["sedation", "tardive dyskinesia", "weight gain"],
      precautions: [
        "Use with caution in elderly patients.",
        "May increase the risk of tardive dyskinesia with long-term use.",
      ],
      commonDosage: "1 to 5mg daily, depending on the severity of symptoms.",
    },
    hydralazine: {
      description:
        "Hydralazine is a vasodilator used to treat high blood pressure and heart failure.",
      uses: ["lowers blood pressure", "treats heart failure"],
      sideEffects: ["headache", "dizziness", "rapid heartbeat"],
      precautions: [
        "Monitor blood pressure regularly.",
        "Avoid use with other blood pressure-lowering medications without medical advice.",
      ],
      commonDosage: "10mg to 25mg 2 to 4 times a day.",
    },

    ibuprofen: {
      description:
        "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever, pain, and inflammation.",
      uses: ["relieves pain", "reduces inflammation", "reduces fever"],
      sideEffects: ["stomach upset", "headache", "dizziness"],
      precautions: [
        "Avoid if you have stomach ulcers or gastrointestinal problems.",
        "Consult a doctor if you have kidney or liver issues.",
      ],
      commonDosage: "200mg to 400mg every 4-6 hours as needed.",
    },
    insulin: {
      description:
        "Insulin is a hormone used to regulate blood sugar levels in individuals with diabetes.",
      uses: ["lowers blood sugar", "treats diabetes"],
      sideEffects: ["low blood sugar", "weight gain", "swelling"],
      precautions: [
        "Monitor blood sugar levels regularly.",
        "Adjust dosage based on meals and physical activity.",
      ],
      commonDosage:
        "Dosage varies depending on individual needs, typically injected 1 to 3 times a day.",
    },
    isotretinoin: {
      description:
        "Isotretinoin is a powerful medication used to treat severe acne.",
      uses: ["treats severe acne", "reduces sebaceous gland activity"],
      sideEffects: ["dry skin", "chapped lips", "muscle aches"],
      precautions: [
        "Can cause birth defects—avoid during pregnancy.",
        "Requires regular blood tests during treatment.",
      ],
      commonDosage: "Typically 0.5 to 1 mg/kg of body weight per day.",
    },
    iron: {
      description:
        "Iron supplements are used to treat or prevent iron deficiency anemia.",
      uses: ["treats iron deficiency", "prevents anemia"],
      sideEffects: ["constipation", "stomach upset", "dark stools"],
      precautions: [
        "Take with food to minimize stomach upset.",
        "May interfere with the absorption of other medications.",
      ],
      commonDosage: "Typically 65mg to 200mg per day.",
    },
    imipramine: {
      description:
        "Imipramine is a tricyclic antidepressant used to treat depression and anxiety disorders.",
      uses: ["treats depression", "relieves anxiety"],
      sideEffects: ["drowsiness", "dry mouth", "blurred vision"],
      precautions: [
        "May increase suicidal thoughts in young adults.",
        "Avoid alcohol during treatment.",
      ],
      commonDosage: "25mg to 100mg, taken once a day.",
    },

    jalapeno: {
      description:
        "Jalapeno is a pepper known for its capsaicin content, used in some topical pain relief creams and as a food spice.",
      uses: ["relieves pain", "promotes digestion", "anti-inflammatory"],
      sideEffects: [
        "skin irritation",
        "burning sensation",
        "gastric irritation",
      ],
      precautions: [
        "Use cautiously for topical applications to avoid burns.",
        "Consult a doctor if you have gastrointestinal issues.",
      ],
      commonDosage:
        "Typically used in topical creams or small amounts in food.",
    },
    jantoven: {
      description:
        "Jantoven (warfarin) is an anticoagulant used to prevent blood clots.",
      uses: ["prevents blood clots", "reduces risk of stroke"],
      sideEffects: ["bleeding", "bruising", "headache"],
      precautions: [
        "Regular blood tests are required to monitor INR levels.",
        "Avoid alcohol and certain foods high in vitamin K.",
      ],
      commonDosage:
        "Typically 2mg to 10mg per day, adjusted based on INR results.",
    },
    jiaogulan: {
      description:
        "Jiaogulan is an herb used in traditional medicine for its potential cardiovascular and antioxidant properties.",
      uses: ["improves cardiovascular health", "reduces blood sugar"],
      sideEffects: ["stomach upset", "headache", "dizziness"],
      precautions: [
        "Consult a doctor before use, especially if pregnant or breastfeeding.",
        "May lower blood pressure.",
      ],
      commonDosage: "Typically 100mg to 200mg per day in capsule form.",
    },

    ketorolac: {
      description:
        "Ketorolac is a nonsteroidal anti-inflammatory drug (NSAID) used for short-term pain management.",
      uses: ["relieves moderate to severe pain", "reduces inflammation"],
      sideEffects: ["stomach upset", "headache", "drowsiness"],
      precautions: [
        "Use with caution in individuals with kidney problems.",
        "Do not use for more than 5 days due to risk of kidney damage.",
      ],
      commonDosage:
        "10mg every 4-6 hours as needed, not to exceed 40mg per day.",
    },
    potassium: {
      description:
        "Potassium supplements are used to treat or prevent low potassium levels in the body.",
      uses: ["treats potassium deficiency", "supports heart function"],
      sideEffects: [
        "stomach upset",
        "nausea",
        "hyperkalemia (excess potassium)",
      ],
      precautions: [
        "Do not take if you have kidney problems.",
        "Monitor potassium levels during treatment.",
      ],
      commonDosage: "Typically 20mg to 100mg per day, based on medical advice.",
    },
    ketoconazole: {
      description:
        "Ketoconazole is an antifungal medication used to treat fungal infections.",
      uses: ["treats fungal infections", "antifungal"],
      sideEffects: ["skin irritation", "headache", "nausea"],
      precautions: [
        "Avoid in individuals with liver disease.",
        "Consult a doctor if symptoms persist.",
      ],
      commonDosage: "200mg to 400mg per day, depending on the condition.",
    },
    klonopin: {
      description:
        "Klonopin (clonazepam) is a benzodiazepine used to treat anxiety and seizure disorders.",
      uses: ["relieves anxiety", "controls seizures"],
      sideEffects: ["drowsiness", "dizziness", "memory problems"],
      precautions: [
        "May cause dependence or withdrawal symptoms.",
        "Avoid alcohol and other central nervous system depressants.",
      ],
      commonDosage: "0.5mg to 2mg, taken once or twice a day.",
    },
    kava: {
      description:
        "Kava is a plant extract used to promote relaxation and reduce anxiety.",
      uses: ["relieves anxiety", "promotes relaxation"],
      sideEffects: ["drowsiness", "dizziness", "liver damage (rarely)"],
      precautions: [
        "Avoid long-term use to prevent liver damage.",
        "Do not use before driving or operating machinery.",
      ],
      commonDosage: "Typically 200mg to 400mg per day.",
    },

    loratadine: {
      description:
        "Loratadine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itchy eyes.",
      uses: ["relieves allergy symptoms", "reduces hay fever symptoms"],
      sideEffects: ["headache", "dry mouth", "drowsiness (rare)"],
      precautions: [
        "Consult a doctor before use if pregnant or breastfeeding.",
        "Do not use with alcohol.",
      ],
      commonDosage: "10mg once daily.",
    },
    losartan: {
      description:
        "Losartan is an angiotensin II receptor antagonist used to treat high blood pressure and protect the kidneys in diabetes.",
      uses: ["lowers blood pressure", "prevents kidney damage in diabetes"],
      sideEffects: ["dizziness", "fatigue", "high potassium levels"],
      precautions: [
        "Avoid if pregnant.",
        "Monitor potassium levels during treatment.",
      ],
      commonDosage: "50mg to 100mg per day.",
    },
    lidocaine: {
      description:
        "Lidocaine is a local anesthetic used for numbing tissue in a specific area of the body.",
      uses: ["numbs the skin", "relieves pain from minor cuts or burns"],
      sideEffects: ["redness", "swelling", "stinging"],
      precautions: [
        "Do not apply to large areas of broken skin.",
        "Use caution in individuals with heart problems.",
      ],
      commonDosage: "Applied topically as a cream or gel in small amounts.",
    },
    lactulose: {
      description:
        "Lactulose is a synthetic sugar used to treat constipation and help reduce high ammonia levels in the blood (hepatic encephalopathy).",
      uses: [
        "relieves constipation",
        "reduces ammonia levels in liver disease",
      ],
      sideEffects: ["bloating", "gas", "diarrhea"],
      precautions: [
        "Do not use if you have galactosemia.",
        "Increase fluid intake to prevent dehydration.",
      ],
      commonDosage: "15g to 30g once or twice daily.",
    },
    lisinopril: {
      description:
        "Lisinopril is an ACE inhibitor used to treat high blood pressure, heart failure, and kidney problems.",
      uses: ["lowers blood pressure", "treats heart failure"],
      sideEffects: ["dizziness", "dry cough", "high potassium levels"],
      precautions: [
        "Avoid if pregnant.",
        "Monitor kidney function and electrolytes.",
      ],
      commonDosage: "5mg to 40mg per day.",
    },

    metformin: {
      description:
        "Metformin is an oral medication used to control blood sugar levels in people with type 2 diabetes.",
      uses: ["lowers blood sugar", "improves insulin sensitivity"],
      sideEffects: ["nausea", "diarrhea", "metallic taste"],
      precautions: [
        "Avoid if you have kidney or liver problems.",
        "Monitor blood sugar levels regularly.",
      ],
      commonDosage: "500mg to 1000mg once or twice daily.",
    },
    montelukast: {
      description:
        "Montelukast is a leukotriene receptor antagonist used to prevent asthma attacks and relieve allergy symptoms.",
      uses: ["prevents asthma attacks", "relieves hay fever symptoms"],
      sideEffects: ["headache", "stomach pain", "dizziness"],
      precautions: [
        "Do not use to treat acute asthma attacks.",
        "Consult a doctor if you have a history of psychiatric disorders.",
      ],
      commonDosage: "10mg once daily in the evening.",
    },
    morphine: {
      description:
        "Morphine is an opioid pain reliever used to treat moderate to severe pain.",
      uses: ["relieves severe pain", "manages chronic pain"],
      sideEffects: ["drowsiness", "constipation", "nausea"],
      precautions: [
        "May cause dependence or addiction.",
        "Avoid alcohol and other central nervous system depressants.",
      ],
      commonDosage: "10mg to 30mg every 4 hours as needed.",
    },
    metoprolol: {
      description:
        "Metoprolol is a beta-blocker used to treat high blood pressure, chest pain, and heart failure.",
      uses: [
        "lowers blood pressure",
        "treats heart failure",
        "prevents heart attacks",
      ],
      sideEffects: ["dizziness", "fatigue", "bradycardia (slow heart rate)"],
      precautions: [
        "Do not stop suddenly without a doctor's guidance.",
        "Use with caution in individuals with asthma or diabetes.",
      ],
      commonDosage: "50mg to 100mg per day.",
    },
    magnesium: {
      description:
        "Magnesium supplements are used to prevent and treat magnesium deficiency.",
      uses: [
        "prevents muscle cramps",
        "supports nerve function",
        "relieves constipation",
      ],
      sideEffects: ["diarrhea", "abdominal discomfort", "nausea"],
      precautions: [
        "Avoid high doses without medical supervision.",
        "Consult a doctor if you have kidney problems.",
      ],
      commonDosage: "200mg to 400mg per day, depending on individual needs.",
    },

    naproxen: {
      description:
        "Naproxen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain and inflammation.",
      uses: ["relieves pain", "reduces inflammation", "reduces fever"],
      sideEffects: ["stomach upset", "headache", "dizziness"],
      precautions: [
        "Avoid if you have stomach ulcers or gastrointestinal issues.",
        "Consult a doctor if you have kidney or liver problems.",
      ],
      commonDosage: "250mg to 500mg every 12 hours as needed.",
    },
    naloxone: {
      description:
        "Naloxone is a medication used to counteract opioid overdose by reversing the effects of opioid toxicity.",
      uses: [
        "reverses opioid overdose",
        "restores normal breathing in overdose situations",
      ],
      sideEffects: ["nausea", "vomiting", "precipitated withdrawal symptoms"],
      precautions: [
        "Administer in a healthcare setting or with medical guidance.",
        "May require repeated doses in cases of severe opioid overdose.",
      ],
      commonDosage:
        "0.4mg to 2mg injected, may be repeated every 2-3 minutes if necessary.",
    },
    niacin: {
      description:
        "Niacin (Vitamin B3) is used to treat high cholesterol and improve heart health.",
      uses: [
        "lowers cholesterol",
        "improves blood circulation",
        "supports metabolism",
      ],
      sideEffects: ["flushing", "headache", "stomach upset"],
      precautions: [
        "May cause liver toxicity at high doses.",
        "Monitor cholesterol and liver function during treatment.",
      ],
      commonDosage: "500mg to 2000mg per day, depending on condition.",
    },
    nifedipine: {
      description:
        "Nifedipine is a calcium channel blocker used to treat high blood pressure and angina (chest pain).",
      uses: ["lowers blood pressure", "treats angina", "improves blood flow"],
      sideEffects: ["headache", "dizziness", "swelling of the ankles"],
      precautions: [
        "Avoid if you have a history of heart failure.",
        "Use cautiously in patients with liver problems.",
      ],
      commonDosage: "30mg to 90mg per day, depending on the condition.",
    },
    nystatin: {
      description:
        "Nystatin is an antifungal medication used to treat fungal infections in the mouth, skin, and digestive tract.",
      uses: ["treats fungal infections", "antifungal"],
      sideEffects: ["nausea", "diarrhea", "skin irritation"],
      precautions: [
        "Do not swallow oral nystatin unless prescribed.",
        "Avoid use for prolonged periods without medical advice.",
      ],
      commonDosage:
        "100,000 units per ml, 1 ml 4 times a day for oral infections.",
    },

    omeprazole: {
      description:
        "Omeprazole is a proton pump inhibitor (PPI) used to treat acid reflux, heartburn, and stomach ulcers.",
      uses: ["reduces acid production", "treats GERD", "prevents ulcers"],
      sideEffects: ["headache", "stomach pain", "nausea"],
      precautions: [
        "Consult with a doctor if you have liver disease.",
        "Avoid long-term use without a doctor's guidance.",
      ],
      commonDosage: "20mg to 40mg once daily before meals.",
    },
    oxycodone: {
      description:
        "Oxycodone is an opioid pain medication used to treat moderate to severe pain.",
      uses: ["relieves severe pain", "manages post-surgery pain"],
      sideEffects: ["constipation", "drowsiness", "nausea"],
      precautions: [
        "May cause addiction, misuse, and overdose.",
        "Avoid alcohol and central nervous system depressants.",
      ],
      commonDosage: "5mg to 15mg every 4-6 hours as needed.",
    },
    ondansetron: {
      description:
        "Ondansetron is an antiemetic used to prevent nausea and vomiting caused by chemotherapy, radiation therapy, or surgery.",
      uses: ["prevents nausea", "reduces vomiting"],
      sideEffects: ["headache", "constipation", "dizziness"],
      precautions: [
        "Use with caution in patients with heart conditions.",
        "Consult a doctor if you have liver problems.",
      ],
      commonDosage: "4mg to 8mg every 8 hours as needed.",
    },
    oxytocin: {
      description:
        "Oxytocin is a hormone used to induce labor, control postpartum bleeding, and assist with milk ejection during breastfeeding.",
      uses: [
        "induces labor",
        "controls postpartum bleeding",
        "aids milk ejection",
      ],
      sideEffects: ["nausea", "vomiting", "excessive uterine contractions"],
      precautions: [
        "Used under medical supervision only.",
        "Not recommended for patients with a history of uterine rupture.",
      ],
      commonDosage: "Given intravenously or intramuscularly by a doctor.",
    },
    orlistat: {
      description:
        "Orlistat is a weight-loss medication that prevents the absorption of fats from the digestive tract.",
      uses: ["aids in weight loss", "reduces fat absorption"],
      sideEffects: ["stomach cramps", "diarrhea", "oily stools"],
      precautions: [
        "Take with a low-fat diet to avoid gastrointestinal side effects.",
        "Consult a doctor if you have a history of gallbladder problems.",
      ],
      commonDosage: "120mg three times daily with meals containing fat.",
    },

    paracetamol: {
      description:
        "Paracetamol (also known as acetaminophen) is a pain reliever and a fever reducer used for mild to moderate pain relief.",
      uses: ["relieves pain", "reduces fever"],
      sideEffects: ["nausea", "liver damage (in high doses)"],
      precautions: [
        "Do not exceed the recommended dose.",
        "Consult with a doctor if you have liver problems.",
      ],
      commonDosage: "500mg to 1000mg every 4-6 hours as needed.",
    },
    prednisone: {
      description:
        "Prednisone is a corticosteroid used to treat conditions such as allergies, arthritis, and skin conditions by reducing inflammation.",
      uses: [
        "reduces inflammation",
        "treats autoimmune diseases",
        "treats allergies",
      ],
      sideEffects: ["weight gain", "insomnia", "high blood sugar"],
      precautions: [
        "Avoid sudden discontinuation to prevent withdrawal symptoms.",
        "May suppress immune system function.",
      ],
      commonDosage: "5mg to 60mg per day depending on the condition.",
    },
    pregabalin: {
      description:
        "Pregabalin is used to treat nerve pain, fibromyalgia, and seizures.",
      uses: [
        "treats nerve pain",
        "prevents seizures",
        "relieves fibromyalgia pain",
      ],
      sideEffects: ["dizziness", "drowsiness", "swelling in the legs"],
      precautions: [
        "Avoid alcohol while taking pregabalin.",
        "Consult a doctor if you have kidney problems.",
      ],
      commonDosage: "75mg to 150mg per day in divided doses.",
    },
    propofol: {
      description:
        "Propofol is a short-acting sedative used to induce anesthesia and sedation in surgical procedures.",
      uses: ["induces anesthesia", "sedates for surgeries"],
      sideEffects: [
        "low blood pressure",
        "respiratory depression",
        "bradycardia",
      ],
      precautions: [
        "Administered by trained professionals only.",
        "Monitor heart and lung function during administration.",
      ],
      commonDosage: "Dosage is individualized based on patient needs.",
    },
    penicillin: {
      description:
        "Penicillin is an antibiotic used to treat bacterial infections.",
      uses: ["treats bacterial infections", "antibiotic"],
      sideEffects: ["allergic reactions", "nausea", "diarrhea"],
      precautions: [
        "Complete the full course of antibiotics even if symptoms improve.",
        "Avoid if allergic to penicillin or other beta-lactam antibiotics.",
      ],
      commonDosage: "250mg to 500mg every 6 to 8 hours.",
    },

    quinine: {
      description:
        "Quinine is used to treat malaria by killing the parasites that cause the disease.",
      uses: ["treats malaria", "relieves muscle cramps"],
      sideEffects: ["headache", "nausea", "tinnitus"],
      precautions: [
        "Consult a doctor if you have a history of heart problems.",
        "May cause serious side effects like irregular heartbeats.",
      ],
      commonDosage: "200mg to 300mg every 8 hours.",
    },
    quetiapine: {
      description:
        "Quetiapine is an atypical antipsychotic used to treat schizophrenia, bipolar disorder, and major depressive disorder.",
      uses: [
        "treats schizophrenia",
        "treats bipolar disorder",
        "manages depression",
      ],
      sideEffects: ["drowsiness", "weight gain", "dizziness"],
      precautions: [
        "Monitor for signs of weight gain and metabolic changes.",
        "Consult a doctor if you have a history of seizures.",
      ],
      commonDosage: "25mg to 400mg per day depending on the condition.",
    },
    quikclot: {
      description:
        "QuikClot is a hemostatic agent used to stop bleeding in emergency situations by promoting clot formation.",
      uses: ["stops bleeding", "promotes clot formation"],
      sideEffects: ["burning sensation", "skin irritation"],
      precautions: [
        "For external use only.",
        "Do not use on large wounds or deep cuts.",
      ],
      commonDosage: "Applied as needed to the bleeding site.",
    },

    rifampin: {
      description:
        "Rifampin is an antibiotic used to treat tuberculosis and other bacterial infections.",
      uses: ["treats tuberculosis", "treats bacterial infections"],
      sideEffects: ["liver damage", "red-orange urine", "nausea"],
      precautions: [
        "May interact with other medications, including birth control.",
        "Monitor liver function regularly.",
      ],
      commonDosage: "10mg/kg per day, usually for 6 months or more.",
    },
    ranitidine: {
      description:
        "Ranitidine is a histamine-2 blocker used to reduce stomach acid production and treat GERD and ulcers.",
      uses: ["reduces stomach acid", "treats GERD", "treats stomach ulcers"],
      sideEffects: ["headache", "dizziness", "constipation"],
      precautions: [
        "Consult with a doctor if you have kidney or liver problems.",
        "Avoid alcohol while using ranitidine.",
      ],
      commonDosage: "150mg to 300mg per day, depending on the condition.",
    },
    ropinirole: {
      description:
        "Ropinirole is used to treat Parkinson's disease and restless leg syndrome.",
      uses: ["treats Parkinson's disease", "relieves restless leg syndrome"],
      sideEffects: ["nausea", "dizziness", "drowsiness"],
      precautions: [
        "May cause drowsiness; avoid driving until you know how it affects you.",
        "Consult a doctor if you have a history of heart or liver problems.",
      ],
      commonDosage: "0.25mg to 1mg per day, gradually increasing.",
    },
    rivaroxaban: {
      description:
        "Rivaroxaban is an anticoagulant (blood thinner) used to prevent blood clots and stroke.",
      uses: [
        "prevents blood clots",
        "prevents stroke",
        "treats deep vein thrombosis (DVT)",
      ],
      sideEffects: ["bleeding", "anemia", "dizziness"],
      precautions: [
        "Do not take with other blood thinners without consulting a doctor.",
        "Monitor for signs of bleeding or unusual bruising.",
      ],
      commonDosage: "10mg to 20mg per day, depending on the condition.",
    },
    remdesivir: {
      description:
        "Remdesivir is an antiviral medication used to treat COVID-19 by inhibiting viral replication.",
      uses: ["treats COVID-19", "prevents viral replication"],
      sideEffects: ["nausea", "liver enzyme changes", "hypotension"],
      precautions: [
        "Monitor liver function during treatment.",
        "Consult with a doctor if you have kidney or liver disease.",
      ],
      commonDosage: "200mg on day 1, followed by 100mg daily for 5-10 days.",
    },

    sildenafil: {
      description:
        "Sildenafil is used to treat erectile dysfunction and pulmonary arterial hypertension.",
      uses: ["treats erectile dysfunction", "treats pulmonary hypertension"],
      sideEffects: ["headache", "flushing", "dizziness"],
      precautions: [
        "Avoid taking with nitrates or alpha-blockers.",
        "Consult a doctor if you have heart or liver conditions.",
      ],
      commonDosage: "50mg to 100mg about one hour before sexual activity.",
    },
    salbutamol: {
      description:
        "Salbutamol (also known as albuterol) is a bronchodilator used to treat asthma and COPD.",
      uses: ["relieves asthma", "relieves COPD symptoms"],
      sideEffects: ["tremors", "headache", "palpitations"],
      precautions: [
        "Use cautiously in patients with heart disease.",
        "May cause increased heart rate.",
      ],
      commonDosage:
        "Inhaler: 100mcg per puff, 1-2 puffs every 4-6 hours as needed.",
    },
    simvastatin: {
      description:
        "Simvastatin is a statin used to lower cholesterol and reduce the risk of heart disease.",
      uses: ["lowers cholesterol", "reduces heart disease risk"],
      sideEffects: ["muscle pain", "headache", "liver enzyme abnormalities"],
      precautions: [
        "Avoid grapefruit while taking simvastatin.",
        "Monitor liver function during treatment.",
      ],
      commonDosage: "10mg to 40mg once daily in the evening.",
    },
    sertraline: {
      description:
        "Sertraline is an antidepressant used to treat depression, anxiety, and other mood disorders.",
      uses: ["treats depression", "treats anxiety", "treats OCD"],
      sideEffects: ["insomnia", "sexual dysfunction", "dizziness"],
      precautions: [
        "Monitor for suicidal thoughts, especially in young adults.",
        "Consult a doctor if you have a history of seizures.",
      ],
      commonDosage: "50mg to 200mg per day.",
    },
    spironolactone: {
      description:
        "Spironolactone is a potassium-sparing diuretic used to treat high blood pressure, heart failure, and edema.",
      uses: [
        "treats high blood pressure",
        "treats heart failure",
        "reduces swelling",
      ],
      sideEffects: ["hyperkalemia", "dizziness", "gynecomastia (in men)"],
      precautions: [
        "Monitor potassium levels regularly.",
        "Avoid salt substitutes containing potassium.",
      ],
      commonDosage: "25mg to 100mg per day, depending on the condition.",
    },

    tramadol: {
      description:
        "Tramadol is an opioid analgesic used to treat moderate to severe pain.",
      uses: ["relieves moderate to severe pain"],
      sideEffects: ["dizziness", "nausea", "constipation"],
      precautions: [
        "May cause addiction, misuse, and overdose.",
        "Avoid alcohol and central nervous system depressants.",
      ],
      commonDosage: "50mg to 100mg every 4-6 hours as needed.",
    },
    tamsulosin: {
      description:
        "Tamsulosin is an alpha blocker used to treat benign prostatic hyperplasia (BPH) by relaxing the muscles of the prostate and bladder.",
      uses: ["relieves symptoms of BPH", "improves urine flow"],
      sideEffects: ["dizziness", "headache", "low blood pressure"],
      precautions: [
        "Do not stand up quickly to prevent dizziness.",
        "Consult a doctor if you have kidney or liver problems.",
      ],
      commonDosage: "0.4mg to 0.8mg once daily.",
    },
    tretinoin: {
      description:
        "Tretinoin is a topical retinoid used to treat acne and reduce wrinkles.",
      uses: ["treats acne", "reduces wrinkles", "improves skin texture"],
      sideEffects: ["skin irritation", "dryness", "sun sensitivity"],
      precautions: [
        "Use sunscreen to prevent skin irritation from sunlight.",
        "Avoid use during pregnancy.",
      ],
      commonDosage:
        "Apply a thin layer to affected areas once daily before bedtime.",
    },
    timolol: {
      description:
        "Timolol is a beta-blocker used to treat high blood pressure, heart problems, and glaucoma.",
      uses: [
        "lowers blood pressure",
        "treats glaucoma",
        "treats heart conditions",
      ],
      sideEffects: ["fatigue", "dizziness", "bradycardia"],
      precautions: [
        "Monitor heart rate and blood pressure regularly.",
        "Do not abruptly stop taking timolol.",
      ],
      commonDosage:
        "0.25mg to 0.5mg per day for glaucoma, or as prescribed for heart conditions.",
    },
    thiazide: {
      description:
        "Thiazide diuretics are used to treat high blood pressure and edema by helping the body eliminate excess salt and water.",
      uses: [
        "treats high blood pressure",
        "reduces edema",
        "treats kidney stones",
      ],
      sideEffects: ["low potassium", "dehydration", "dizziness"],
      precautions: [
        "Monitor electrolytes during treatment.",
        "Consult a doctor if you have kidney problems.",
      ],
      commonDosage: "12.5mg to 25mg once daily.",
    },

      ursodiol: {
        description: "Ursodiol is used to treat gallstones and liver diseases by reducing the amount of cholesterol produced by the liver.",
        uses: ["treats gallstones", "reduces liver cholesterol"],
        sideEffects: ["diarrhea", "nausea", "stomach cramps"],
        precautions: [
          "Do not use if allergic to ursodiol.",
          "Monitor liver function during treatment."
        ],
        commonDosage: "250mg to 500mg twice daily."
      },
      uloric: {
        description: "Uloric is used to lower uric acid levels in the blood to prevent gout attacks.",
        uses: ["lowers uric acid", "prevents gout attacks"],
        sideEffects: ["nausea", "rash", "liver enzyme abnormalities"],
        precautions: [
          "Monitor liver function regularly.",
          "Use with caution in patients with kidney issues."
        ],
        commonDosage: "40mg to 80mg daily."
      },
  
      valacyclovir: {
        description: "Valacyclovir is an antiviral medication used to treat viral infections such as herpes simplex and varicella zoster.",
        uses: ["treats herpes simplex", "treats varicella zoster", "prevents cold sores"],
        sideEffects: ["headache", "nausea", "dizziness"],
        precautions: [
          "Drink plenty of fluids to prevent kidney issues.",
          "Consult a doctor if you have kidney or immune system problems."
        ],
        commonDosage: "500mg to 1000mg 1-3 times daily."
      },
      valsartan: {
        description: "Valsartan is an angiotensin II receptor blocker used to treat high blood pressure and heart failure.",
        uses: ["lowers blood pressure", "treats heart failure", "prevents stroke"],
        sideEffects: ["dizziness", "headache", "elevated potassium levels"],
        precautions: [
          "Monitor kidney function regularly.",
          "Do not use during pregnancy."
        ],
        commonDosage: "40mg to 160mg once daily."
      },
      vitaminD: {
        description: "Vitamin D is essential for calcium absorption and bone health. It is also used to treat vitamin D deficiency.",
        uses: ["maintains bone health", "prevents osteoporosis", "treats vitamin D deficiency"],
        sideEffects: ["hypercalcemia", "nausea", "weakness"],
        precautions: [
          "Monitor calcium levels to avoid toxicity.",
          "Consult a doctor if you have kidney issues."
        ],
        commonDosage: "600 IU to 1000 IU per day, depending on deficiency levels."
      },
  
      warfarin: {
        description: "Warfarin is an anticoagulant (blood thinner) used to prevent blood clots and strokes.",
        uses: ["prevents blood clots", "prevents stroke", "treats atrial fibrillation"],
        sideEffects: ["bleeding", "easy bruising", "nausea"],
        precautions: [
          "Monitor INR (International Normalized Ratio) regularly.",
          "Avoid foods rich in vitamin K that may interfere with the medication."
        ],
        commonDosage: "2mg to 5mg once daily."
      },
      wenxin: {
        description: "Wenxin is a traditional Chinese medicine used to treat arrhythmias and improve heart function.",
        uses: ["treats arrhythmias", "improves heart function"],
        sideEffects: ["dizziness", "fatigue", "hypotension"],
        precautions: [
          "Consult with a healthcare provider before use.",
          "Monitor heart rate and blood pressure."
        ],
        commonDosage: "Dosage varies depending on the specific condition."
      },
  
      xalatan: {
        description: "Xalatan is used to treat glaucoma and ocular hypertension by reducing intraocular pressure.",
        uses: ["reduces intraocular pressure", "treats glaucoma", "treats ocular hypertension"],
        sideEffects: ["eye irritation", "darkening of the iris", "eyelash growth"],
        precautions: [
          "Do not use if allergic to latanoprost or other prostaglandin analogs.",
          "May cause permanent darkening of the iris in some patients."
        ],
        commonDosage: "One drop in the affected eye(s) once daily in the evening."
      },
  
      yohimbine: {
        description: "Yohimbine is used as a treatment for erectile dysfunction and to enhance fat loss.",
        uses: ["treats erectile dysfunction", "enhances fat loss"],
        sideEffects: ["anxiety", "high blood pressure", "dizziness"],
        precautions: [
          "Avoid use in patients with heart disease or anxiety disorders.",
          "Consult a doctor if you have a history of hypertension."
        ],
        commonDosage: "5mg to 10mg two to three times daily."
      },
  
      zopiclone: {
        description: "Zopiclone is a sedative used to treat insomnia and help with sleep initiation and maintenance.",
        uses: ["treats insomnia", "helps with sleep initiation"],
        sideEffects: ["drowsiness", "headache", "metallic taste"],
        precautions: [
          "Do not operate machinery after taking Zopiclone.",
          "Use for a short duration to avoid dependence."
        ],
        commonDosage: "7.5mg taken just before bedtime."
      },
      zyrtec: {
        description: "Zyrtec is an antihistamine used to treat allergies and hay fever symptoms.",
        uses: ["treats allergy symptoms", "reduces hay fever symptoms"],
        sideEffects: ["drowsiness", "dry mouth", "headache"],
        precautions: [
          "May cause drowsiness; avoid alcohol while using.",
          "Consult with a doctor before use if pregnant."
        ],
        commonDosage: "10mg once daily."
      },
    },
  };
  

// Handle sending the user's input and getting a bot response
document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  // Display the user's message immediately
  displayMessage("You: " + userInput, "user-message");

  // Show typing indicator for the bot's response
  document.getElementById("typing-indicator").style.display = "block";

  // Simulate a delay for the bot response (1.5 seconds)
  setTimeout(() => {
    const response = getMedicationInfo(userInput.toLowerCase());
    displayMessage(response, "bot-message");

    // Hide typing indicator after response
    document.getElementById("typing-indicator").style.display = "none";
  }, 1500);

  // Clear the input field after sending
  document.getElementById("user-input").value = "";
});

// Display the message in the chat window
function displayMessage(message, type) {
  const chatWindow = document.getElementById("chat-window");
  const messageElement = document.createElement("div");
  messageElement.classList.add(type);

  // If it's a bot message, add the avatar at the top-left
  if (type === "bot-message") {
    const avatarElement = document.createElement("img");
    avatarElement.classList.add("avatar");
    avatarElement.src = "med-bot.png"; // Bot's avatar image
    messageElement.appendChild(avatarElement); // Add avatar at the top-left
  }

  const messageTextElement = document.createElement("p");
  if (type === "bot-message") {
    messageTextElement.innerHTML = parseMarkdown(message); // Convert markdown to HTML
  } else {
    messageTextElement.textContent = message;
  }

  // Append message text to the message container
  messageElement.appendChild(messageTextElement);

  // Add the message element to the chat window and scroll to the bottom
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Convert **bold** to <strong> tags and handle newlines <br> explicitly
function parseMarkdown(text) {
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold text
  formattedText = formattedText.replace(/\n/g, "<br>"); // Convert newlines to <br>
  return formattedText;
}

// Function to get medication information based on user query
function getMedicationInfo(query) {
  // Check if the query matches a medication
  if (medicalData.medications[query]) {
    const medication = medicalData.medications[query];
    return `
        <div class="bot-message-content">
          <strong>Description:</strong>
          ${medication.description}
  
          <strong>Uses:</strong>
          ${medication.uses.join(", ")}
  
          <strong>Side Effects:</strong>
          ${medication.sideEffects.join(", ")}
  
          <strong>Precautions:</strong>
          ${medication.precautions.join(", ")}
  
          <strong>Common Dosage:</strong>
          ${medication.commonDosage}
        </div>
      `;
  }

  // If the medication is not found
  else {
    return "Sorry, I don't have information on that medication.";
  }
}
