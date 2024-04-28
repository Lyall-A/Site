const links = {
    "Self hosted": [
        { name: "Jellyfin", description: "Basically self-hosted Netflix", iconPath: "/assets/jellyfin.png", subdomain: "jellyfin" },
        { name: "Jellyfin Vue", description: "Self-hosted Netflix but with a different UI", iconPath: "/assets/jellyfin-vue.png", subdomain: "jellyfin-vue" },
        { name: "Jellyseerr", description: "Media requests for Jellyfin", iconPath: "/assets/jellyseerr.svg", subdomain: "jellyseerr" }
    ],
    "My things": [
        { name: "GitHub", path: "https://github.com/Lyall-A" },
        { name: "Discord", path: "https://discord.com/users/492729974026141697" },
        { name: "BeatLeader", path: "https://beatleader.xyz/u/76561198987282778" },
        { name: "ScoreSaber", path: "https://scoresaber.com/u/76561198987282778" },
    ],
    "Useful links": [
        { name: "Ninite", description: "Install a bunch of programs at once", path: "https://ninite.com/" },
        { name: "OpenCore Sanity Checker", description: "Check if your hackintosh config is good", path: "https://sc.ocutils.me/" },
    ],
    "LYALL ONLY!!!!!": [
        { name: "Deluge", description: "TORRENTING!!!", iconPath: "/assets/deluge.png", subdomain: "deluge" },
        { name: "Portainer", description: "DOCKER CONTAINERS!!!", iconPath: "/assets/portainer.svg", subdomain: "portainer" },
        { name: "Radarr", description: "MOVIES!!!", iconPath: "/assets/radarr.svg", subdomain: "radarr" },
        { name: "Sonarr", description: "SHOWS!!!", iconPath: "/assets/sonarr.svg", subdomain: "sonarr" },
        { name: "Lidarr", description: "MUSIC!!!", iconPath: "/assets/lidarr.svg", subdomain: "lidarr" }
    ]
};

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