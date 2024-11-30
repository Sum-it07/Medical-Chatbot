const medicalData = {
  diseases: {
    // Infectious Diseases
    malaria: {
      description:
        "Malaria is a disease caused by a parasite transmitted by the bite of infected mosquitoes.",
      symptoms: ["fever", "chills", "sweats", "headache"],
      precautions: [
        "use mosquito nets",
        "take antimalarial medication",
        "avoid stagnant water",
      ],
      treatment: "Antimalarial drugs like chloroquine or artemisinin.",
      causes: ["mosquito bites (Plasmodium parasite)"],
    },
    flu: {
      description: "Flu is a respiratory illness caused by influenza viruses.",
      symptoms: ["fever", "cough", "sore throat", "body aches"],
      precautions: [
        "get a flu shot",
        "wash hands frequently",
        "stay home when sick",
      ],
      treatment: "Rest, hydration, and antivirals like oseltamivir.",
      causes: ["virus transmission through coughs and sneezes"],
    },
    "covid-19": {
      description:
        "COVID-19 is a highly contagious respiratory illness caused by the SARS-CoV-2 virus.",
      symptoms: [
        "fever",
        "dry cough",
        "tiredness",
        "difficulty breathing",
        "loss of taste or smell",
      ],
      precautions: [
        "wear masks",
        "maintain social distancing",
        "wash hands frequently",
        "avoid crowded places",
      ],
      treatment:
        "Isolation, hydration, fever reducers, and sometimes ventilators in severe cases.",
      causes: [
        "contact with infected individuals",
        "respiratory droplets from coughing or sneezing",
      ],
    },
    chickenpox: {
      description:
        "Chickenpox is a highly contagious viral infection that causes itchy rashes and red spots.",
      symptoms: ["itchy rash", "fever", "tiredness", "loss of appetite"],
      precautions: [
        "avoid scratching",
        "stay home until no new blisters form",
        "avoid contact with pregnant women and infants",
      ],
      treatment:
        "Antiviral medication, calamine lotion for itching, and fever reducers.",
      causes: ["varicella-zoster virus (VZV)"],
    },
    tuberculosis: {
      description:
        "Tuberculosis (TB) is a contagious bacterial infection that primarily affects the lungs.",
      symptoms: [
        "coughing up blood",
        "night sweats",
        "fever",
        "weight loss",
        "fatigue",
      ],
      precautions: [
        "wear masks",
        "avoid close contact with infected individuals",
        "get vaccinated (BCG vaccine)",
      ],
      treatment:
        "Antibiotics for several months, including isoniazid and rifampin.",
      causes: ["Mycobacterium tuberculosis bacteria"],
    },
    hepatitis: {
      description:
        "Hepatitis is inflammation of the liver caused by viral infections, excessive alcohol use, or other factors.",
      symptoms: [
        "jaundice (yellowing of skin and eyes)",
        "fatigue",
        "abdominal pain",
        "loss of appetite",
      ],
      precautions: [
        "vaccination",
        "avoid sharing needles",
        "limit alcohol consumption",
      ],
      treatment:
        "Antiviral medications for viral hepatitis, lifestyle changes, and regular liver monitoring.",
      causes: [
        "Hepatitis A, B, C viruses",
        "alcohol use",
        "autoimmune diseases",
      ],
    },
    pneumonia: {
      description:
        "Pneumonia is an infection of the lungs that causes inflammation in the air sacs (alveoli).",
      symptoms: [
        "cough",
        "fever",
        "chills",
        "difficulty breathing",
        "chest pain",
      ],
      precautions: [
        "vaccination",
        "avoid smoking",
        "hand hygiene",
        "avoid contact with sick individuals",
      ],
      treatment:
        "Antibiotics for bacterial pneumonia, antivirals for viral pneumonia, and rest.",
      causes: ["bacteria, viruses, fungi"],
    },
    dengue: {
      description:
        "Dengue is a viral infection transmitted by mosquitoes, causing flu-like symptoms.",
      symptoms: [
        "high fever",
        "severe headache",
        "pain behind the eyes",
        "joint and muscle pain",
        "rash",
      ],
      precautions: [
        "use mosquito repellents",
        "eliminate mosquito breeding sites",
        "wear protective clothing",
      ],
      treatment:
        "Pain relievers and hydration, no specific antiviral treatment.",
      causes: ["Aedes mosquito bite (Dengue virus)"],
    },

    // Chronic Diseases
    diabetes: {
      description:
        "Diabetes is a chronic condition that affects the body's ability to process sugar (glucose).",
      symptoms: [
        "frequent urination",
        "increased thirst",
        "extreme hunger",
        "unexplained weight loss",
      ],
      precautions: [
        "monitor blood sugar levels",
        "exercise regularly",
        "follow a balanced diet",
      ],
      treatment: "Insulin therapy, oral medications, and lifestyle changes.",
      causes: ["genetics", "poor diet", "lack of exercise"],
    },
    hypertension: {
      description:
        "Hypertension (high blood pressure) is a condition where the force of the blood against the artery walls is too high.",
      symptoms: ["headaches", "shortness of breath", "nosebleeds", "dizziness"],
      precautions: [
        "reduce salt intake",
        "exercise regularly",
        "limit alcohol consumption",
        "manage stress",
      ],
      treatment: "Antihypertensive medications and lifestyle changes.",
      causes: [
        "genetics",
        "obesity",
        "high salt diet",
        "lack of physical activity",
      ],
    },
    asthma: {
      description:
        "Asthma is a condition in which your airways become inflamed, narrow, and produce extra mucus.",
      symptoms: [
        "wheezing",
        "shortness of breath",
        "chest tightness",
        "coughing",
      ],
      precautions: [
        "avoid allergens",
        "use inhalers as prescribed",
        "exercise in a controlled environment",
      ],
      treatment:
        "Inhalers (bronchodilators and corticosteroids), and lifestyle adjustments.",
      causes: ["allergies", "genetics", "pollution", "respiratory infections"],
    },
    arthritis: {
      description:
        "Arthritis refers to a group of conditions that cause inflammation in the joints, leading to pain and stiffness.",
      symptoms: [
        "joint pain",
        "swelling",
        "stiffness",
        "reduced range of motion",
      ],
      precautions: [
        "exercise regularly",
        "maintain a healthy weight",
        "avoid joint stress",
      ],
      treatment:
        "Pain relievers, anti-inflammatory drugs, physical therapy, and in severe cases, surgery.",
      causes: ["genetics", "aging", "autoimmune diseases"],
    },

    // Other Common Diseases
    migraine: {
      description:
        "Migraine is a neurological condition characterized by intense, debilitating headaches.",
      symptoms: [
        "severe headache",
        "nausea",
        "vomiting",
        "sensitivity to light and sound",
      ],
      precautions: [
        "avoid triggers",
        "reduce stress",
        "maintain a regular sleep schedule",
      ],
      treatment: "Pain relievers, triptans, anti-nausea medications.",
      causes: ["genetics", "hormonal changes", "environmental triggers"],
    },
    gastroenteritis: {
      description:
        "Gastroenteritis, often called stomach flu, is an inflammation of the stomach and intestines.",
      symptoms: ["diarrhea", "vomiting", "abdominal cramps", "fever"],
      precautions: [
        "wash hands frequently",
        "avoid contaminated food and water",
      ],
      treatment:
        "Hydration and electrolyte replacement, anti-diarrheal medications in some cases.",
      causes: [
        "viruses (norovirus, rotavirus)",
        "bacteria (Salmonella, E. coli)",
      ],
    },
    indigestion: {
      description:
        "Indigestion, or dyspepsia, is discomfort in the upper abdomen, often associated with overeating or consuming certain foods.",
      symptoms: ["bloating", "nausea", "heartburn", "belching"],
      precautions: [
        "eat smaller meals",
        "avoid fatty or spicy foods",
        "don't lie down immediately after eating",
      ],
      treatment:
        "Antacids, proton pump inhibitors, and avoiding trigger foods.",
      causes: [
        "overeating",
        "stress",
        "gastroesophageal reflux disease (GERD)",
      ],
    },
    allergies: {
      description:
        "Allergies occur when the body's immune system reacts to harmless substances like pollen, dust, or pet dander.",
      symptoms: ["sneezing", "itchy eyes", "runny nose", "skin rash"],
      precautions: [
        "avoid allergens",
        "use antihistamines",
        "keep windows closed during allergy season",
      ],
      treatment:
        "Antihistamines, decongestants, and sometimes immunotherapy (allergy shots).",
      causes: ["pollen", "dust mites", "pet dander", "certain foods"],
    },
    // More Infectious Diseases
    measles: {
      description:
        "Measles is a highly contagious viral infection that causes a characteristic red, blotchy skin rash.",
      symptoms: ["high fever", "cough", "runny nose", "rash", "conjunctivitis"],
      precautions: [
        "vaccination (MMR)",
        "avoid close contact with infected individuals",
        "isolation until rash disappears",
      ],
      treatment:
        "No specific antiviral treatment; supportive care like fever reducers and hydration.",
      causes: ["Measles virus (rubeola)"],
    },
    "whooping-cough": {
      description:
        "Whooping cough is a highly contagious bacterial disease characterized by uncontrollable coughing fits.",
      symptoms: [
        "violent coughing",
        "whooping sound during breathing",
        "runny nose",
        "fever",
      ],
      precautions: [
        "vaccination (DTaP)",
        "avoid contact with infected individuals",
        "cover mouth and nose when coughing",
      ],
      treatment:
        "Antibiotics (like azithromycin), cough suppressants, and supportive care.",
      causes: ["Bordetella pertussis bacteria"],
    },
    "scarlet-fever": {
      description:
        "Scarlet fever is a bacterial illness that causes a red rash, usually following a strep throat infection.",
      symptoms: [
        "fever",
        "red rash",
        "sore throat",
        "strawberry tongue",
        "chills",
      ],
      precautions: [
        "complete prescribed antibiotics",
        "avoid close contact with others during contagious period",
        "good hygiene practices",
      ],
      treatment: "Antibiotics like penicillin or amoxicillin.",
      causes: ["Group A Streptococcus bacteria"],
    },
    rabies: {
      description:
        "Rabies is a viral disease that causes inflammation of the brain, often transmitted through animal bites.",
      symptoms: [
        "fever",
        "headache",
        "confusion",
        "agitation",
        "muscle spasms",
        "paralysis",
      ],
      precautions: [
        "avoid contact with wild animals",
        "vaccinate pets against rabies",
        "seek immediate medical attention after animal bites",
      ],
      treatment: "Post-exposure rabies vaccine and immune globulin treatment.",
      causes: ["Rabies virus"],
    },

    // Chronic Diseases Continuation
    "chronic-kidney-disease": {
      description:
        "Chronic kidney disease (CKD) is the gradual loss of kidney function over time.",
      symptoms: [
        "fatigue",
        "swelling in legs and ankles",
        "shortness of breath",
        "frequent urination",
      ],
      precautions: [
        "control blood pressure",
        "limit salt and potassium intake",
        "avoid smoking",
        "exercise regularly",
      ],
      treatment:
        "Blood pressure medications, diabetes management, and dialysis in advanced stages.",
      causes: ["diabetes", "hypertension", "family history"],
    },
    stroke: {
      description:
        "A stroke occurs when blood flow to an area of the brain is interrupted, leading to brain damage.",
      symptoms: [
        "sudden numbness",
        "confusion",
        "difficulty speaking",
        "severe headache",
        "difficulty walking",
      ],
      precautions: [
        "control blood pressure",
        "limit alcohol intake",
        "maintain a healthy weight",
        "exercise regularly",
      ],
      treatment:
        "Emergency medical intervention, blood thinners, physical therapy, and rehabilitation.",
      causes: ["high blood pressure", "atherosclerosis", "heart disease"],
    },
    "heart-disease": {
      description:
        "Heart disease refers to a variety of conditions affecting the heart, including coronary artery disease and heart failure.",
      symptoms: [
        "chest pain",
        "shortness of breath",
        "dizziness",
        "fatigue",
        "irregular heartbeat",
      ],
      precautions: [
        "eat a healthy diet",
        "exercise regularly",
        "stop smoking",
        "manage stress",
      ],
      treatment:
        "Medications, lifestyle changes, and sometimes surgery or stent placement.",
      causes: [
        "high blood pressure",
        "high cholesterol",
        "diabetes",
        "obesity",
      ],
    },
    cancer: {
      description:
        "Cancer refers to a group of diseases characterized by uncontrolled cell growth.",
      symptoms: [
        "unexplained weight loss",
        "fatigue",
        "pain",
        "lumps or abnormal growths",
        "changes in bowel or bladder habits",
      ],
      precautions: [
        "avoid smoking",
        "limit alcohol intake",
        "eat a balanced diet",
        "get regular screenings",
      ],
      treatment:
        "Surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies.",
      causes: [
        "genetic mutations",
        "environmental factors",
        "lifestyle choices",
      ],
    },

    // Other Common Diseases
    "urinary-tract-infection": {
      description:
        "A urinary tract infection (UTI) is an infection in any part of the urinary system, including the kidneys, bladder, or urethra.",
      symptoms: [
        "painful urination",
        "frequent urge to urinate",
        "lower abdominal pain",
        "cloudy urine",
      ],
      precautions: [
        "drink plenty of fluids",
        "urinate after intercourse",
        "wipe from front to back",
      ],
      treatment: "Antibiotics to treat the infection.",
      causes: ["bacteria entering the urinary tract"],
    },
    gout: {
      description:
        "Gout is a form of arthritis caused by the buildup of uric acid crystals in the joints.",
      symptoms: [
        "sudden severe pain in the big toe",
        "swelling",
        "redness",
        "heat in the affected joint",
      ],
      precautions: [
        "limit alcohol consumption",
        "avoid high-purine foods",
        "stay hydrated",
      ],
      treatment:
        "Nonsteroidal anti-inflammatory drugs (NSAIDs), colchicine, and medications to reduce uric acid levels.",
      causes: ["high levels of uric acid in the blood"],
    },
    epilepsy: {
      description:
        "Epilepsy is a neurological disorder characterized by recurrent seizures.",
      symptoms: [
        "seizures",
        "loss of consciousness",
        "muscle spasms",
        "uncontrolled jerking movements",
      ],
      precautions: [
        "avoid triggers",
        "take prescribed medication regularly",
        "ensure a safe environment",
      ],
      treatment: "Antiepileptic drugs (AEDs), and in some cases, surgery.",
      causes: ["brain injury", "genetic factors", "brain infections"],
    },
    insomnia: {
      description:
        "Insomnia is the inability to fall or stay asleep, resulting in poor sleep quality.",
      symptoms: [
        "difficulty falling asleep",
        "waking up frequently during the night",
        "daytime fatigue",
      ],
      precautions: [
        "establish a regular sleep schedule",
        "avoid caffeine and electronics before bed",
        "create a comfortable sleep environment",
      ],
      treatment:
        "Cognitive behavioral therapy for insomnia (CBT-I), sleep aids, and lifestyle changes.",
      causes: ["stress", "anxiety", "depression", "poor sleep habits"],
    },

    // Miscellaneous Diseases
    hyposensitivity: {
      description:
        "Hyposensitivity is the condition where a person has reduced sensitivity to stimuli, such as touch, temperature, or pain.",
      symptoms: [
        "reduced sensation in certain areas of the body",
        "difficulty feeling temperature changes",
        "increased risk of injury",
      ],
      precautions: [
        "avoid environments with extreme temperatures",
        "protect sensitive areas of the body",
      ],
      treatment:
        "Management depends on the underlying cause, including physical therapy and lifestyle changes.",
      causes: ["nerve damage", "diabetes", "neurological disorders"],
    },
    dementia: {
      description:
        "Dementia is a general term for a decline in cognitive ability severe enough to interfere with daily life.",
      symptoms: [
        "memory loss",
        "difficulty with communication",
        "confusion",
        "difficulty completing familiar tasks",
      ],
      precautions: [
        "mental stimulation",
        "maintain social interaction",
        "healthy lifestyle choices",
      ],
      treatment:
        "Medications for symptom control, cognitive therapy, and support for caregivers.",
      causes: [
        "Alzheimer's disease",
        "vascular dementia",
        "Parkinson's disease",
      ],
    },
    psoriasis: {
      description:
        "Psoriasis is an autoimmune skin disease that results in the rapid growth of skin cells, leading to scaly, itchy patches.",
      symptoms: [
        "red patches of skin",
        "silvery scales",
        "itching or burning",
        "dry or cracked skin",
      ],
      precautions: [
        "avoid skin irritants",
        "use moisturizing creams",
        "manage stress",
      ],
      treatment:
        "Topical treatments like corticosteroids, vitamin D analogs, and phototherapy.",
      causes: ["immune system dysfunction", "genetic predisposition"],
    },

    lupus: {
      description:
        "Lupus is a chronic autoimmune disease where the body's immune system attacks its own tissues and organs.",
      symptoms: ["fatigue", "joint pain", "skin rashes", "fever", "hair loss"],
      precautions: [
        "avoid sunlight exposure",
        "take prescribed medications",
        "monitor for flare-ups",
      ],
      treatment:
        "Immunosuppressive drugs, corticosteroids, and lifestyle management.",
      causes: [
        "genetic factors",
        "environmental triggers",
        "hormonal imbalances",
      ],
    },
    "rheumatoid-arthritis": {
      description:
        "Rheumatoid arthritis (RA) is an autoimmune disorder that causes inflammation in the joints.",
      symptoms: [
        "joint pain",
        "swelling",
        "morning stiffness",
        "fatigue",
        "decreased range of motion",
      ],
      precautions: [
        "manage weight",
        "avoid overusing joints",
        "take medications as prescribed",
      ],
      treatment:
        "Disease-modifying antirheumatic drugs (DMARDs), biologics, pain relievers.",
      causes: ["immune system dysfunction", "genetic predisposition"],
    },
    "multiple-sclerosis": {
      description:
        "Multiple sclerosis is an autoimmune disease where the immune system attacks the protective sheath of nerve fibers.",
      symptoms: [
        "numbness or weakness in limbs",
        "blurred vision",
        "fatigue",
        "difficulty walking",
        "coordination problems",
      ],
      precautions: [
        "take prescribed medications",
        "avoid heat exposure",
        "manage stress levels",
      ],
      treatment:
        "Disease-modifying therapies, steroids for flare-ups, physical therapy.",
      causes: ["immune system attacks myelin sheath", "genetic factors"],
    },
    asthma: {
      description:
        "Asthma is a chronic disease involving the airways in the lungs, causing breathing difficulties.",
      symptoms: [
        "shortness of breath",
        "wheezing",
        "coughing",
        "tightness in the chest",
      ],
      precautions: [
        "avoid allergens",
        "keep inhaler accessible",
        "take medication as prescribed",
      ],
      treatment:
        "Inhalers (bronchodilators), steroids, long-term control medications.",
      causes: ["genetics", "environmental triggers", "airway inflammation"],
    },
    pneumonia: {
      description:
        "Pneumonia is an infection that inflames the air sacs in one or both lungs, which can fill with fluid.",
      symptoms: [
        "cough",
        "fever",
        "chills",
        "difficulty breathing",
        "chest pain",
      ],
      precautions: ["get vaccinated", "avoid smoking", "maintain good hygiene"],
      treatment: "Antibiotics, antiviral medications, fluids, rest.",
      causes: [
        "bacterial, viral, or fungal infection",
        "aspiration of food or liquid into the lungs",
      ],
    },
    tuberculosis: {
      description:
        "Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can affect other parts of the body.",
      symptoms: [
        "persistent cough",
        "weight loss",
        "night sweats",
        "fatigue",
        "coughing up blood",
      ],
      precautions: [
        "complete the TB treatment regimen",
        "wear a mask in crowded places",
        "avoid contact with infected individuals",
      ],
      treatment:
        "Antibiotics (e.g., rifampin, isoniazid), extended treatment course.",
      causes: ["Mycobacterium tuberculosis bacteria", "spread through the air"],
    },
    bronchitis: {
      description:
        "Bronchitis is an inflammation of the bronchial tubes that carry air to the lungs.",
      symptoms: [
        "cough",
        "production of mucus",
        "fatigue",
        "shortness of breath",
      ],
      precautions: [
        "avoid smoking",
        "stay away from polluted environments",
        "use a humidifier",
      ],
      treatment:
        "Bronchodilators, anti-inflammatory drugs, antibiotics (if bacterial).",
      causes: ["viral infections", "cigarette smoke", "air pollutants"],
    },
  },
};
document.getElementById("send-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
  
    // Display the user's message immediately
    displayMessage("You: " + userInput, "user-message");
  
    // Show typing indicator for the bot's response
    document.getElementById("typing-indicator").style.display = "block";
  
    // Simulate a delay for the bot response (1.5 seconds)
    setTimeout(() => {
      const response = getMedicalInfo(userInput.toLowerCase());
      displayMessage(response, "bot-message");
  
      // Hide typing indicator after response
      document.getElementById("typing-indicator").style.display = "none";
    }, 1500);
  
    // Clear the input field after sending
    document.getElementById("user-input").value = "";
  });
  
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
  
  function parseMarkdown(text) {
    // Convert **bold** to <strong> tags and handle newlines <br> explicitly
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold text
    formattedText = formattedText.replace(/\n/g, "<br>"); // Convert newlines to <br>
    return formattedText;
  }
  
  function getMedicalInfo(query) {
    if (medicalData.diseases[query]) {
      const disease = medicalData.diseases[query];
      return `
        <div class="bot-message-content">
          <strong>Description:</strong>
          ${disease.description}
  
          <strong>Symptoms:</strong>
          ${disease.symptoms.join(", ")}
  
          <strong>Precautions:</strong>
          ${disease.precautions.join(", ")}
  
          <strong>Treatment:</strong>
          ${disease.treatment}
  
          <strong>Causes:</strong>
          ${disease.causes.join(", ")}
        </div>
      `;
    } else {
      return "Sorry, I don't have information on that disease.";
    }
  }
  