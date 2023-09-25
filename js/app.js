const COMMUNITY_CODE_INPUT = document.getElementById("communityCode");

const isCommunityCodeValid = () => {
    const COMMUNITY_CODE = COMMUNITY_CODE_INPUT.value;
    if (COMMUNITY_CODE.length != 5) return;
    getCommunityList(COMMUNITY_CODE);
};
