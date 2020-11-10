const setCollapsible = (rootElement, elementToCollapse) => {
    rootElement.addEventListener("click", () => {
        elementToCollapse.style.display === "block" ? 
        elementToCollapse.style.display = "none" : 
        elementToCollapse.style.display = "block";
    });
    elementToCollapse.style.display = "none";
};

const fillList = (subGeners) => {
    const subGenersList = document.querySelector('.subGeners');
    subGeners.forEach(subGener => {
        const row = document.createElement("li");
        const divDescription = document.createElement("div");
        const description = document.createElement("p");
        const anchor = document.createElement("a");
        
        row.textContent = subGener.name;
        description.textContent = subGener.description;
        setCollapsible(row, divDescription)
        anchor.textContent = subGener.name + ` Books`;
        anchor.setAttribute("href", subGener.link);

        divDescription.append(description, anchor);
        subGenersList.appendChild(row);
        subGenersList.appendChild(divDescription);
    });
};

const subGeners = [
        {
            "name": "Alien Invasion", 
            "description": "The alien invasion is a common theme in science fiction stories and film, in which a technologically-superior extraterrestrial society invades Earth with the intent to replace human life, or to enslave it under a colonial system, or in some cases, to use humans as food.",
            "link": "/sub-geners/alien-invasion.html"
        },
        {
            "name": "Artificial Intelligence", 
            "description": "Artificial intelligence (AI) is a branch of computer science that deals with intelligent behavior, learning and adaptation in machines. Research in AI is concerned with producing machines to automate tasks requiring intelligent behavior. Examples include control, planning and scheduling, the ability to answer diagnostic and consumer questions, handwriting, speech, and facial recognition. As such, it has become an engineering discipline, focused on providing solutions to real life problems. AI systems are now in routine use in economics, medicine, engineering and the military, as well as being built into many common home computer software applications, traditional strategy games like computer chess and other video games.",
            "link": "/sub-geners/artificial-inteligence.html"
        },
        {
            "name": "Cyberpunk", 
            "description": "Cyberpunk is a sub-genre of science fiction, noted for its focus on 'high tech and low life' and taking its name from the combination of cybernetics and punk. It featured advanced technology such as computers or information technology coupled with some degree of breakdown in the social order. Classic cyberpunk characters were marginalized, alienated loners who lived on the edge of society in generally dystopic futures where daily life was impacted by rapid technological change, an ubiquitous datasphere of computerized information, and invasive modification of the human body.",
            "link": ""
        },
        {
            "name": "Dystopia", 
            "description": "Dystopian fiction is the opposite of Utopian: creation of a nightmare world, sometimes also described as 'the victory of forces of reason over forces of kindness'.",
            "link": ""
        },
        {
            "name": "Galactic Empire", 
            "description": "Galactic empires are a fairly common theme in science fiction. Many authors have either used a galaxy-spanning empire as background, or written about the growth or decline of such an empire. The capital of a galactic empire is frequently a core world. Some of these empires are clearly based on the Roman Empire; the Galactic Empire of Isaac Asimov's Foundation series (which inspired empires of later writers and film-makers) being an obvious example. The best known to the general public today is probably the empire from Star Wars, which was formed in turn from the Galactic Republic.",
            "link": ""
        },
        {
            "name": "Human Development", 
            "description": "Human development fiction predicts future capabilities evolved by mankind, such as enhanced mental or physical abilities.",
            "link": ""
        }
];

fillList(subGeners);
