// SEARCH FUNCTION
document.getElementById("searchInput")?.addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        if(title.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// COMMENTS FUNCTION
function addComment(btn, event){
    if(event) event.stopPropagation(); // ✅ prevent triggering showDetails
    let text = btn.previousElementSibling.value;
    if(text !== ""){
        let li = document.createElement("li");
        li.innerText = text;
        btn.nextElementSibling.appendChild(li);
        btn.previousElementSibling.value = "";
    }
}

// CONTACT FORM
function sendMessage(){
    alert("Message sent successfully!");
}

// CATEGORY FILTER
const categorySelect = document.getElementById("categorySelect");
if(categorySelect){
    categorySelect.addEventListener("change", () => {
        const selected = categorySelect.value;
        const cards = document.querySelectorAll(".movie-card");
        cards.forEach(card => {
            if(selected === "all"){
                card.style.display = "block";
            }
            else if(card.classList.contains(selected)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        });
    });
}

/* -------------------------
   NEW: DETAILS VIEW LOGIC
------------------------- */
function showDetails(movie) {
    let title, meta, desc, imgSrc; // ✅ declare imgSrc

    if (movie === "aot") {
        title = "Attack on Titan";
        meta = "Anime • 2009–2021 • Dark Fantasy";
        desc = "Attack on Titan (AOT) is a Japanese dark fantasy anime and manga series (2009–2021) by Hajime Isayama. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert as they uncover the truth about Titans, their origins, and the political conspiracies shaping their world.";
        imgSrc = "aot.jpg";
    } else if (movie === "demon") {
        title = "Demon Slayer";
        meta = "Anime • 2016–2020 • Adventure";
        desc = "Demon Slayer: Kimetsu no Yaiba is a Japanese dark fantasy manga and anime series (2016–2020 manga, 2019–2024 anime) by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, leaving only his sister Nezuko—transformed into a demon but retaining her humanity.";
        imgSrc = "slayer.png";
    } else if (movie === "wishes") {
        title = "If Wishes Could Kill";
        meta = "Series • 2026 • YA Horror";
        desc = "If Wishes Could Kill is a 2026 South Korean young adult horror series on Netflix about a cursed wish‑granting app called Girigo that predicts and causes the deaths of its users within 24 hours of granting their wishes.";
        imgSrc = "wish.png";
    } else if (movie === "obsession") {
        title = "Obsession (2025)";
        meta = "Film • Horror Romance • 108 min";
        desc = "Obsession (2025) is a horror‑romance film directed by Curry Barker about a young man whose desperate wish for love unleashes terrifying consequences.";
        imgSrc = "obsession.png";
    }

    document.getElementById("detailTitle").textContent = title;
    document.getElementById("detailMeta").textContent = meta;
    document.getElementById("detailDesc").textContent = desc;
    document.getElementById("detailImg").src = imgSrc;

    document.querySelector(".container").style.display = "none";
    document.getElementById("details").style.display = "block";
}

function closeDetails() {
    document.getElementById("details").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}
