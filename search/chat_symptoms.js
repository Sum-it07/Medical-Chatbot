// Medical data with diseases, their descriptions, symptoms, treatment, etc.
const medicalData = {
    tuberculosis: {
      name: "Tuberculosis",
      description: "A bacterial infection that primarily affects the lungs but can affect other parts of the body.",
      symptoms: ["persistent cough", "night sweats", "fatigue", "weight loss", "coughing up blood"],
      treatment: "Antibiotics (e.g., rifampin, isoniazid), extended treatment course.",
      precautions: "Wear a mask in crowded places, avoid contact with infected individuals.",
      causes: ["Mycobacterium tuberculosis bacteria, spread through the air"]
    },
    commonCold: {
      name: "Common Cold",
      description: "A viral infection affecting the upper respiratory tract.",
      symptoms: ["runny nose", "sore throat", "cough", "sneezing"],
      treatment: "Rest, hydration, over-the-counter medications.",
      precautions: "Wash hands regularly, avoid close contact with infected individuals.",
      causes: ["Rhinovirus"]
    },
    flu: {
      name: "Flu (Influenza)",
      description: "A contagious respiratory illness caused by influenza viruses.",
      symptoms: ["fever", "cough", "sore throat", "body aches", "fatigue"],
      treatment: "Antiviral medications, rest, hydration.",
      precautions: "Avoid contact with others, wash hands frequently.",
      causes: ["Influenza virus"]
    },
    diabetes: {
      name: "Diabetes",
      description: "A group of diseases that affect how the body processes blood sugar (glucose).",
      symptoms: ["increased thirst", "frequent urination", "fatigue", "blurred vision"],
      treatment: "Insulin therapy, lifestyle changes, blood sugar monitoring.",
      precautions: "Healthy diet, regular exercise, maintaining a healthy weight.",
      causes: ["Genetic factors, lifestyle, obesity"]
    },
    hypertension: {
      name: "Hypertension (High Blood Pressure)",
      description: "A condition where the force of the blood against the artery walls is too high.",
      symptoms: ["headache", "shortness of breath", "nosebleeds", "fatigue"],
      treatment: "Lifestyle changes, antihypertensive medications.",
      precautions: "Low-sodium diet, regular physical activity, stress management.",
      causes: ["Genetics, high salt intake, obesity, smoking"]
    },
    cancer: {
      name: "Cancer",
      description: "A group of diseases involving abnormal cell growth with the potential to spread to other parts of the body.",
      symptoms: ["unexplained weight loss", "fatigue", "pain", "skin changes"],
      treatment: "Surgery, chemotherapy, radiation therapy, immunotherapy.",
      precautions: "Avoid tobacco, regular screenings, healthy diet.",
      causes: ["Genetic mutations, environmental factors, lifestyle"]
    },
    asthma: {
      name: "Asthma",
      description: "A condition in which your airways narrow and swell, producing extra mucus.",
      symptoms: ["shortness of breath", "wheezing", "coughing", "chest tightness"],
      treatment: "Inhalers, bronchodilators, corticosteroids.",
      precautions: "Avoid allergens, exercise regularly, use air purifiers.",
      causes: ["Genetic factors, allergens, respiratory infections"]
    },
    pneumonia: {
      name: "Pneumonia",
      description: "An infection that inflames the air sacs in one or both lungs.",
      symptoms: ["cough", "fever", "chills", "shortness of breath"],
      treatment: "Antibiotics, antivirals, supportive care.",
      precautions: "Vaccination, avoiding smoking, good hygiene.",
      causes: ["Bacteria, viruses, fungi"]
    },
    malaria: {
      name: "Malaria",
      description: "A mosquito-borne infectious disease caused by Plasmodium parasites.",
      symptoms: ["fever", "chills", "headache", "vomiting"],
      treatment: "Antimalarial drugs, such as chloroquine, artemisinin.",
      precautions: "Use insect repellent, sleep under mosquito nets, take preventive drugs.",
      causes: ["Plasmodium parasites transmitted by Anopheles mosquitoes"]
    },
    HIV: {
      name: "HIV (Human Immunodeficiency Virus)",
      description: "A virus that attacks the body's immune system, specifically the T-helper cells.",
      symptoms: ["fever", "weight loss", "swollen lymph nodes", "diarrhea"],
      treatment: "Antiretroviral therapy (ART), regular medical check-ups.",
      precautions: "Safe sex practices, not sharing needles, regular testing.",
      causes: ["Transmission through bodily fluids (blood, semen, vaginal fluids)"]
    },
    covid19: {
      name: "COVID-19",
      description: "A respiratory illness caused by the SARS-CoV-2 virus, leading to widespread infections globally.",
      symptoms: ["fever", "dry cough", "tiredness", "difficulty breathing", "loss of taste or smell"],
      treatment: "Supportive care, antiviral medications, oxygen therapy, vaccines.",
      precautions: "Wear masks, practice social distancing, get vaccinated, wash hands frequently.",
      causes: ["SARS-CoV-2 virus, transmitted through respiratory droplets"]
    },
    hepatitisB: {
      name: "Hepatitis B",
      description: "A viral infection that attacks the liver, leading to acute or chronic illness.",
      symptoms: ["jaundice", "fatigue", "abdominal pain", "dark urine"],
      treatment: "Antiviral medications, liver transplant in severe cases.",
      precautions: "Vaccination, avoid sharing needles or personal items.",
      causes: ["Hepatitis B virus (HBV) transmitted through bodily fluids"]
    },
    migraine: {
      name: "Migraine",
      description: "A neurological condition characterized by intense, often debilitating headaches.",
      symptoms: ["severe headache", "nausea", "vomiting", "sensitivity to light and sound"],
      treatment: "Pain relievers, triptans, preventive medications.",
      precautions: "Avoid known triggers, maintain regular sleep and eating patterns.",
      causes: ["Genetics, hormonal changes, environmental triggers"]
    },
    schizophrenia: {
      name: "Schizophrenia",
      description: "A severe mental disorder characterized by distortions in thinking, perception, and behavior.",
      symptoms: ["hallucinations", "delusions", "disorganized speech", "lack of motivation"],
      treatment: "Antipsychotic medications, therapy, support groups.",
      precautions: "Medication adherence, therapy, social support.",
      causes: ["Genetics, chemical imbalances in the brain, environmental factors"]
    },
    arthritis: {
      name: "Arthritis",
      description: "Inflammation of one or more joints, causing pain, swelling, and stiffness.",
      symptoms: ["joint pain", "swelling", "stiffness", "reduced range of motion"],
      treatment: "Pain relievers, anti-inflammatory medications, physical therapy.",
      precautions: "Regular exercise, weight management, joint protection.",
      causes: ["Genetics, aging, joint injury"]
    }
  };
  
  
// Function to fetch medical information based on user input
function getMedicalInfo(query) {
  const symptoms = query.split(",").map(symptom => symptom.trim().toLowerCase());
  let matchedDiseases = [];

  // Check each disease for matching symptoms
  for (const disease in medicalData) {
      const diseaseData = medicalData[disease];
      const diseaseSymptoms = diseaseData.symptoms.map(s => s.toLowerCase());

      // Count how many of the user's symptoms match the disease's symptoms
      const matchCount = symptoms.filter(symptom => diseaseSymptoms.includes(symptom)).length;
      const matchPercentage = (matchCount / diseaseSymptoms.length) * 100; // Calculate match percentage

      // Define a flexible threshold for matching (e.g., 50% or more)
      if (matchPercentage >= 50) {
          matchedDiseases.push({ diseaseData, matchCount, matchPercentage });
      }
  }

  // Return matched diseases or a message if none were found
  if (matchedDiseases.length > 0) {
      return matchedDiseases.slice(0, 5).map(({ diseaseData, matchCount, matchPercentage }) => `
          <div class="bot-message-content">
              <strong>Disease: </strong>${diseaseData.name}<br>
              <strong>Description: </strong>${diseaseData.description}<br>
              <strong>Symptoms: </strong>${diseaseData.symptoms.join(", ")}<br>
              <strong>Treatment: </strong>${diseaseData.treatment}<br>
              <strong>Precautions: </strong>${diseaseData.precautions}<br>
              <strong>Causes: </strong>${diseaseData.causes.join(", ")}<br>
              <strong>Matched Symptoms: </strong>${matchCount} / ${diseaseData.symptoms.length} symptoms matched (<strong>${matchPercentage.toFixed(2)}%</strong>)<br>
          </div>
      `).join("<br>") + (matchedDiseases.length > 5 ? "<br> <i>Show more results</i>" : "");
  } else {
      return "Sorry, I couldn't find any diseases that match those symptoms.";
  }
}

// Function to display a message in the chat window
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

  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to parse markdown (convert **bold** to <strong> tags)
function parseMarkdown(text) {
  // Bold text
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // Italic text
  formattedText = formattedText.replace(/\*(.*?)\*/g, "<em>$1</em>");
  // Convert newlines to <br>
  formattedText = formattedText.replace(/\n/g, "<br>");
  return formattedText;
}

// Event listener for the "Send" button
document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  displayMessage("You: " + userInput, "user-message");

  // Show typing indicator
  document.getElementById("typing-indicator").style.display = 'block';

  // Simulate delay for bot response
  setTimeout(() => {
      const response = getMedicalInfo(userInput.toLowerCase());
      displayMessage(response, "bot-message");

      // Hide typing indicator after response
      document.getElementById("typing-indicator").style.display = 'none';
  }, 1500); // 1.5-second delay
});

// Automatically focus on the input field when the page loads
window.onload = function () {
  document.getElementById("user-input").focus();
};
