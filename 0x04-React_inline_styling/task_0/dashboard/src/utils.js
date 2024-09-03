
export function getFullYear() {
    const now = new Date();
    const year = now.getFullYear();
    return (year);
}

export function getFooterCopy(isIndex) {
    return isIndex? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
return ("<strong>Urgent requirement</strong> - complete by EOD")
}