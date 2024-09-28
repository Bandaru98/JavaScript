
function calculateAge() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const day = parseInt(document.getElementById('day').value);

    const birthDate = new Date(year, month, day);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('age').innerText = `${ageYears} years, ${ageMonths} months, ${ageDays} days`;
}
