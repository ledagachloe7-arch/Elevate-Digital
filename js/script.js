// ==========================
// CURSEUR CUSTOM
// ==========================

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{
    if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

const hoverElements = document.querySelectorAll("a, button, .card");

hoverElements.forEach(el=>{
    el.addEventListener("mouseenter", ()=>{
        if(cursor){
            cursor.style.transform = "translate(-50%,-50%) scale(2)";
            cursor.style.background = "#c9a227";
        }
    });

    el.addEventListener("mouseleave", ()=>{
        if(cursor){
            cursor.style.transform = "translate(-50%,-50%) scale(1)";
            cursor.style.background = "rgba(201,162,39,0.8)";
        }
    });
});


// ==========================
// PACK PERSONNALISÉ
// ==========================

function toggleCustomPack(){
    const budget = document.getElementById("budget").value;
    const field = document.getElementById("customPackField");

    if(budget === "Pack Personnalisé"){
        field.style.display = "block";
    } else {
        field.style.display = "none";
    }
}


// ==========================
// FORMULAIRE WHATSAPP
// ==========================

function sendWhatsApp(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const details = document.getElementById("details").value;

    const customBudgetField = document.getElementById("customBudget");
    const customBudget = customBudgetField ? customBudgetField.value : "";

    const number = "221771234567"; // ⚠️ Mets ton vrai numéro

    let budgetInfo = budget;

    if(budget === "Pack Personnalisé" && customBudget !== ""){
        budgetInfo += `\n🔧 Besoins spécifiques : ${customBudget}`;
    }

    const message =
`Bonjour Elevate Digital 👋

🔹 Nom : ${name}
🔹 Téléphone : ${phone}
🔹 Email : ${email}

📌 Service : ${service}
💰 Pack choisi : ${budgetInfo}

📝 Description du projet :
${details}

Je confirme être prêt(e) à verser l'acompte de 50% pour démarrer le projet.`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}