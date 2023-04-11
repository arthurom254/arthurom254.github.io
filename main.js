function atom() {
    var article=[
        {
            "source":"#",
            "title":"New Course, Who de this be?",
            "text":"New course at The Cooperative University of Kenya.......",
           
        },
        {
            "source":"#",
            "title":"My Experience using Github.",
            "text":"I joined github a few months ago, it's been an amazing experience and I thought it'll be a great idea to pen down my thoughts as an early adopter of the platform.",
        },
        {
            "source":"#",
            "title":"Setup Sub-Domain on Github",
            "text":"I joimed github and as a result ended up setting up a custom domain for my profile. Here's how i did it.",
           
        },
    ];
    var card=document.getElementById("card");
    for (var i in article) {
        var paper = `
    <div class="myarticle">
                <a href="${article[i].source}" class="link">
                    <div class="content">
                        <h2>${article[i].title}</h2>
                        <p>${article[i].text}</p>
                    </div>
                </a>
            </div>

    `;

        card.innerHTML += paper;
    }
}

atom();