const links = [
    { name: "Jellyfin", description: "Basically self-hosted Netflix", iconPath: "/assets/jellyfin.png", subdomain: "jellyfin" },
    { name: "Jellyfin Vue", description: "Self-hosted Netflix but with a different UI", iconPath: "/assets/jellyfin-vue.png", subdomain: "jellyfin-vue" },
    { name: "Jellyseerr", description: "Media requests for Jellyfin", iconPath: "/assets/jellyseerr.svg", subdomain: "jellyseerr" },
];

const otherLinks = [
    { name: "Deluge", description: "TORRENTING!!!", iconPath: "/assets/deluge.png", subdomain: "deluge" },
    { name: "Portainer", description: "DOCKER CONTAINERS!!!", iconPath: "/assets/portainer.svg", subdomain: "portainer" },
    { name: "Radarr", description: "MOVIES!!!", iconPath: "/assets/radarr.svg", subdomain: "radarr" },
    { name: "Sonarr", description: "SHOWS!!!", iconPath: "/assets/sonarr.svg", subdomain: "sonarr" },
    { name: "Lidarr", description: "MUSIC!!!", iconPath: "/assets/lidarr.svg", subdomain: "lidarr" },
];

links.forEach(i => createLink(i.name, i.description, i.iconPath, i.subdomain ? `${location.protocol}//${i.subdomain}.${location.host}` : i.path, document.getElementById("links1")));
otherLinks.forEach(i => createLink(i.name, i.description, i.iconPath, i.subdomain ? `${location.protocol}//${i.subdomain}.${location.host}` : i.path, document.getElementById("links2")));

let bgClicks = 0;
document.body.onclick = () => {
    bgClicks++;
    if (bgClicks >= 5) document.getElementById("other-links").style.display = "block";
    setTimeout(() => bgClicks--, 1000);
}

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