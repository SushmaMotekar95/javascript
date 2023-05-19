console.log(`------Months of the Year-----\n`);
function monthOfYear(monthNumber)
{
    switch (monthNumber) {
        case 1: console.log(`- Month = ${monthNumber}\n "January"\n`);
            break;
        case 2: console.log(`- Month = ${monthNumber}\n "February"\n`);
            break;
        case 3: console.log(`- Month = ${monthNumber}\n "March"\n`);
            break;
        case 4: console.log(`- Month = ${monthNumber}\n "April"\n`);
            break;
        case 5: console.log(`- Month = ${monthNumber}\n "May"\n`);
            break;
        case 6: console.log(`- Month = ${monthNumber}\n "June"\n`);
            break;
        case 7: console.log(`- Month = ${monthNumber}\n "July"\n`);
            break;
        case 8: console.log(`- Month = ${monthNumber}\n "Agusut"\n`);
            break;
        case 9: console.log(`- Month = ${monthNumber}\n "September"\n`);
            break;
        case 10: console.log(`- Month = ${monthNumber}\n "October"\n`);
            break;
        case 11: console.log(`- Month = ${monthNumber}\n "November"\n`);
            break;
        case 12: console.log(`- Month = ${monthNumber}\n "December"\n`);
            break;
        default:console.log(`- Month = ${monthNumber}\n "Invalid input data"\n`);
            break;
    }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
