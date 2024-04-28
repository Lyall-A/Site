const content = document.getElementById("content");
Object.entries(links).forEach(([sectionName, section]) => {
    const linksContainer = document.createElement("div");
    if (sectionName == "LYALL ONLY!!!!!") {
        linksContainer.style.display = "none";
        let bgClicks = 0;
        document.body.onclick = () => {
            bgClicks++;
            if (bgClicks >= 5) linksContainer.style.display = "block";
            setTimeout(() => bgClicks--, 1000);
        }
    }

    const linksHeader = document.createElement("h1");
    linksHeader.innerHTML = sectionName;
    linksContainer.appendChild(linksHeader);

    const linksWrapper = document.createElement("div");
    linksWrapper.classList.add("links");
    linksContainer.appendChild(linksWrapper);

    section.forEach(link => {
        createLink(
            link.name,
            link.description,
            link.iconPath,
            link.subdomain ?
                `${location.protocol}//${link.subdomain}.${location.host}` :
                link.path,
            linksWrapper
        );
    });

    content.appendChild(linksContainer);
});

function createLink(name, description, iconPath, path, parent) {
    const container = document.createElement("a");
    container.classList.add("link");
    container.href = path;
    container.target = "_blank";

    if (iconPath) {
        const iconImg = document.createElement("img");
        iconImg.classList.add("link-icon");
        iconImg.src = iconPath;
        container.appendChild(iconImg);
    }

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("link-name");
    nameSpan.innerHTML = name;
    container.appendChild(nameSpan);

    if (description) {
        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("link-description");
        descriptionSpan.innerHTML = description;
        container.appendChild(descriptionSpan);
    }

    parent.appendChild(container);
}