export const getInitials = (name = "") => {
    const nameSplit = name.trim().split(" ");

    const fastNameLetter = nameSplit[0]?.charAt(0) || "";
    const lastNameLetter = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1]?.charAt(0) : "";
    
    return (fastNameLetter + lastNameLetter).toUpperCase() || "U";
};