const COMMUNITY_CODE_INPUT = document.getElementById("communityCode");

const isCommunityCodeValid = () => {
    const COMMUNITY_CODE = COMMUNITY_CODE_INPUT.value;
    if (COMMUNITY_CODE.length != 5) return;
    getCommunityList(COMMUNITY_CODE);
};

const getCommunityList = (communityCode) => {
    try {
        const COMMUNITY_LIST = fetch(
            `https://geo.api.gouv.fr/communes?codePostal=${communityCode}`
        )
            .then((API_COMMUNITY_RESPONSE) => API_COMMUNITY_RESPONSE.json())
            .then((data) =>
                data.map((community) => [community.nom, community.code])
            )
            .then((list) => displayCommunity(list));
        return COMMUNITY_LIST;
    } catch (error) {
        console.error("Erreur lors de la requête API :\n", error);
    }
};

const displayCommunity = () => {};
